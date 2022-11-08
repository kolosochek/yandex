import Handlebars from 'handlebars';
import IndexPage from './pages/IndexPage.js'
import AuthPage from './pages/AuthPage.js';
import SignUpPage from './pages/SignUpPage.js';
import ProfilePage from './pages/ProfileView.js';
import Error404Page from './pages/Error404Page.js';
import Error500Page from './pages/Error500Page.js';
// import default dataset. TODO fetch me from API
import data from '../data.js';


// get chat by id
// @return Conversation object
const getActiveChat = (data, active_chat_id=window.localStorage.getItem('active_chat_id')) => {
    for (const conversation of data) {
        if (conversation.chat_id == active_chat_id) {
            return conversation;
        }
    }
}

// render given template by context using Handlebars compiler
// @return escaped HTML
const renderTemplate = (template, context = {}) => {
    const compiled = Handlebars.compile(template);
    const html = compiled(context);
    return html;
}

// index page view
const IndexView = () => {
    const template = IndexPage;
    const context = { conversationsList: data, activeChat: getActiveChat(data), active_chat_id: window.localStorage.getItem('active_chat_id') };
    return renderTemplate(template, context);
}

// auth page view
const AuthView = () => {
    const template = AuthPage;
    const context = {}
    return renderTemplate(template, context);
}

// auth page view
const SignupView = () => {
    const template = SignUpPage;
    const context = {}
    return renderTemplate(template, context);
}

// auth page view
const ProfileView = () => {
    const template = ProfilePage;
    const context = {}
    return renderTemplate(template, context);
}

// error page view
const Error404View = () => {
    const template = Error404Page;
    const context = {}
    return renderTemplate(template, context);
}

// error page view
const Error500View = () => {
    const template = Error500Page;
    const context = {}
    return renderTemplate(template, context);
}

// all possible routes
const routes = [
    { path: '/', view: IndexView, },
    { path: '/auth', view: AuthView, },
    { path: '/signup', view: SignupView, },
    { path: '/profile', view: ProfileView, },
    { path: '/error404', view: Error404View, },
    { path: '/error500', view: Error500View, },
];

// routes user can get without authorization
const unauthorizedRoutes = [
    { path: '/', view: AuthView, },
    { path: '/auth', view: AuthView, },
    { path: '/signup', view: SignupView, },

]
const parseLocation = () => {
    return location.hash.slice(1).toLowerCase() || '/';
}
const findViewByPath = (path, routes) => {
    return routes.find(route => route.path.match(new RegExp(`^\\${path}$`, 'gm'))) || undefined;
}

const router = () => {
    const isAuthorized = window.localStorage.getItem('isAuthorized');   
    const path = parseLocation();
    const page = isAuthorized ? findViewByPath(path, routes) || { view: Error404View } : findViewByPath(path, unauthorizedRoutes) || { view: Error404View };
    // inject compiled HTML to DOM
    document.getElementById('root').innerHTML = page.view();

    // let's handle custom eventListners
    // conversation-list-item click
    [...document.querySelectorAll('.b-conversation')].forEach((conversation) => {
        conversation.addEventListener('click', (e) => {
            // set an active chat
            window.localStorage.setItem('active_chat_id', conversation.getAttribute('chat_id'));
            window.dispatchEvent(new HashChangeEvent("hashchange"));

        });
    });

    // set isAuthorised = true; after form submit
    const authForm = document.querySelector('.b-auth-page form');
    if (authForm) {
        authForm.addEventListener('submit', (e) => {
            e.preventDefault();
            window.localStorage.setItem('isAuthorized', 'true');
            window.location.hash = '/';
            window.dispatchEvent(new HashChangeEvent("hashchange"));
        });
    }

    // logout 
    const logout = document.querySelector('.b-profile-navigation .b-logout');
    if (logout) {
        logout.addEventListener('click', (e) => {
            e.preventDefault();
            window.localStorage.removeItem('isAuthorized');
            window.dispatchEvent(new HashChangeEvent("hashchange"));
        });
    }
};

// router event listeners
window.addEventListener('load', router);
window.addEventListener('hashchange', router);