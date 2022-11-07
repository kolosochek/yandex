import Handlebars from 'handlebars'
import IndexPage from './pages/IndexPage.js'
import data from '../data.js';

// static url
const static_url = "http://localhost:3000/";
// do we have an active conversation?
const active_chat_id = localStorage.getItem('active_chat_id') ? localStorage.getItem('active_chat_id') : '';

const getActiveChat = (data, active_chat_id) => {
    for(const conversation of data){
        if(conversation.chat_id == active_chat_id)  {
            return conversation;
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const compiled = Handlebars.compile(IndexPage);    
    const html = compiled({ static_url: static_url, conversationsList: data, activeChat: getActiveChat(data, active_chat_id), active_chat_id: active_chat_id });
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