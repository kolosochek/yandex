import Handlebars from 'handlebars'
import IndexPage from './pages/IndexPage.js'
import AuthPage from './pages/AuthPage.js';
import SignUpPage from './pages/SignUpPage.js';
import ProfilePage from './pages/ProfileView.js';
import Error404Page from './pages/Error404Page.js';
import Error500Page from './pages/Error500Page.js';
// import default dataset. TODO fetch me from API
import data from '../data.js';

// static url
const static_url = "http://localhost:3000/";
// do we have an active conversation?
const active_chat_id = localStorage.getItem('active_chat_id') ? localStorage.getItem('active_chat_id') : '';

// get chat by id
// @return Conversation object
const getActiveChat = (data, active_chat_id) => {
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
    const context = { static_url: static_url, conversationsList: data, activeChat: getActiveChat(data, active_chat_id), active_chat_id: active_chat_id };
    return renderTemplate(template, context);
}

// auth page view
const AuthView = () => {
    const template = AuthPage;
    const context = { static_url: static_url }
    return renderTemplate(template, context);
}

// auth page view
const SignupView = () => {
    const template = SignUpPage;
    const context = { static_url: static_url }
    return renderTemplate(template, context);
}

// auth page view
const ProfileView = () => {
    const template = ProfilePage;
    const context = { static_url: static_url }
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

const routes = [
    { path: '/', view: IndexView, },
    { path: '/auth', view: AuthView, },
    { path: '/signup', view: SignupView, },
    { path: '/profile', view: ProfileView, },
    { path: '/error404', view: Error404View, },
    { path: '/error500', view: Error500View, },
];

const parseLocation = () => {
    const path = location.pathname.slice(1).toLowerCase();
    if(path){
        return '/'+path;
    } else {
        return '/';
    }
}
const findViewByPath = (path, routes) => {
    return routes.find(route => route.path.match(new RegExp(`^\\${path}$`, 'gm'))) || undefined;
}

const router = () => {
    const path = parseLocation();
    const page = findViewByPath(path, routes) || { view: Error404View };
    // inject compiled HTML to DOM
    document.getElementById('root').innerHTML = page.view();
};

// router event listeners
window.addEventListener('load', router);
window.addEventListener('hashchange', router);