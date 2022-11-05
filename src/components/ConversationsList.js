const ConversationsList = `
<div class="b-conversations-list">
    {{#each conversationsList}}
    <div class="b-conversation-wrapper">
        <div class="b-conversation">
            <figure class="b-image-wrapper">
                {{#if this.avatar_url}}
                <image src="{{this.avatar_url}}" width="47" height="47" alt="avatar" class="b-image" src="" />
                {{else}}
                <image src="static/img/chessboard.png" width="47" height="47" alt="avatar" class="b-image" src="" />
                {{/if}}
            </figure>
            <div class="b-message-wrapper">
                <div class="b-message">
                    <p class="b-conversation-name">{{this.name}}</p>
                    <p class="b-conversation-last-message">{{this.message.text}}</p>
                </div>
            </div>
            <div class="b-message-info">
                <p class="b-time">{{this.message.time}}</p>
                {{#if this.message.unreadMessages}}
                <p class="b-link b-unread-messages">{{this.message.unreadMessages}}</p>
                {{/if}}
            </div>
        </div>
    </div>
    {{/each}}
</div>
`

export default ConversationsList;