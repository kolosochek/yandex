import Handlebars from "handlebars";
import AvatarComponent from "./AvatarComponent";
import ImageComponent from "./ImageComponent";

Handlebars.registerPartial('AvatarComponent', AvatarComponent);
Handlebars.registerPartial('ImageComponent', ImageComponent);
Handlebars.registerHelper('if_eq', function(a, b, opts) {
    if (a == b) {
        return opts.fn(this);
    } else {
        return opts.inverse(this);
    }
});


const ChatWindow = `
<section class="b-chat-window-wrapper">
        {{#if this.active_chat_id}}
            {{#with this.activeChat}}
            <div class="b-chat-window">
                <div class="b-chat-info-wrapper">
                    <div class="b-chat-info">
                        {{> AvatarComponent image_url=this.avatar_url}}
                        <span class="b-profile-title b-link">{{this.name}}</span>
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
                    <form class="b-chat-reply">
                        <figure class="b-attach-file">
                            {{> ImageComponent image_url='attach_file_icon.png' width='20' height='20'}}
                        </figure>
                    <input type="text" name="message" class="b-input" />
                    <button type="submit" class="b-submit">></button>
                    </form>
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