import Handlebars from "handlebars";
import AvatarComponent from "./Avatar";
// do we have an active conversation?
const active_chat_id = localStorage.getItem('active_chat_id') ? localStorage.getItem('active_chat_id') : '';

Handlebars.registerPartial('AvatarComponent', AvatarComponent);
Handlebars.registerHelper('json', (value) => JSON.parse(value));
Handlebars.registerHelper("log", (value) => console.log(value));
Handlebars.registerHelper('if_eq', function(a, b, opts) {
    if (a == b) {
        return opts.fn(this);
    } else {
        return opts.inverse(this);
    }
});


const ChatWindow = `
<section class="b-chat-window-wrapper">
        {{#if active_chat_id}}
            {{#with (json this.activeChat)}}
            <div class="b-chat-window">
                <div class="b-chat-info-wrapper">
                    <div class="b-chat-info">
                        {{> AvatarComponent image_url=this.avatar_url}}
                        <a class="b-profile-title b-link">{{this.name}}</a>
                        <div class="b-chat-settings">
                            <a href="#" class="b-link">Settings</a>
                        </div>
                    </div>
                </div>
                <section class="b-chat">
                    {{#each this.messages}}
                    <div class="b-chat-message-wrapper{{#if_eq this.message.author 'Me'}} state__mine{{/if_eq}}">
                        <p class="b-chat-message">
                        <span class="b-message-time">{{this.message.time}}</span><span class="b-message-author">{{this.message.author}}: </span>
                            <span class="b-message-text">{{this.message.text}}</span>
                            
                        </p>
                    </div>                        
                    {{/each}}
                </section>
                <section class="b-chat-reply-wrapper">
                    <div class="b-chat-reply"></div>
                </section>
            </div>
            {{/with}}
        {{else}}
        <div class="b-chat-window-empty-wrapper">
            <p class="b-chat-window-empty"><= Choose a conversation to send a message.</p>
        </div>
        {{/if}}
</section>
`

export default ChatWindow;