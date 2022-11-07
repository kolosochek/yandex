import Handlebars from 'handlebars'
import indexPage from './pages/indexPage.js'

// static
const static_url = "http://localhost:3000/";


document.addEventListener("DOMContentLoaded", () => {
    const template = indexPage;
    const compiled = Handlebars.compile(template);
    const html = compiled({ static_url: static_url });
    const root = document.querySelector("#root");
    root.innerHTML = html;

    // let's handle custom eventListners
    [...document.querySelectorAll('.b-conversation')].forEach((conversation) => {
        conversation.addEventListener('click', () => {
            localStorage.setItem('active_chat_id', conversation.getAttribute('chat_id'));
            // force browser to reload page to apply changes
            // coz there is no way to make DOM changes without page reload
            // since Handlebars partials are only being rendered ONCE. 
            // and we can't render them again. Sad, but deal with it.
            location.reload();
        });
    });
})

export default static_url;