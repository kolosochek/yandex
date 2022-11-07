import Handlebars from "handlebars";
import AvatarComponent from "./Avatar";

Handlebars.registerHelper('json', (value) => JSON.parse(value));
Handlebars.registerPartial('AvatarComponent', AvatarComponent);


const ConversationsList = `
<section class="b-conversations-list-wrapper">
    <div class="b-conversations-list">
        {{#with (json conversationsList)}}
            {{#each this}}
            <div class="b-conversation-wrapper">
                <div class="b-conversation" chat_id="{{this.chat_id}}"]>
                    {{> AvatarComponent image_url="this.avatar_url"}}
                    <div class="b-message-wrapper">
                        <div class="b-message">
                            <p class="b-profile-title">{{this.name}}</p>
                            <p class="b-conversation-last-message">
                            {{#each this.messages}}
                                {{#if @last}}
                                    {{this.message.text}}
                                {{/if}}
                            {{/each}}
                            </p>
                        </div>
                    </div>
                    <div class="b-message-info">
                        {{#each this.messages}}
                            {{#if @last}}
                                <p class="b-time">{{this.message.time}}</p>
                            {{/if}}
                        {{/each}}
                        {{#if this.unreadMessages}}
                            <p class="b-link b-unread-messages">{{this.unreadMessages}}</p>
                        {{/if}}
                    </div>
                </div>
            </div>
            {{/each}}
        {{/with}}
    </div>
</section>
<script type="module">
</script>
`

export default ConversationsList;