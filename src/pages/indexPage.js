import Handlebars from "handlebars";
import AsideProfile from "../components/AsideProfile";
import AsideSearch from "../components/AsideSearch";
import ChatWindow from "../components/ChatWindow";
import ConversationsList from "../components/ConversationsList";
// data, TODO fetch me from API
import data from "../../data";

// let's register components that we'll use on that page
Handlebars.registerPartial('ConversationsList', ConversationsList)
Handlebars.registerPartial('AsideProfile', AsideProfile)
Handlebars.registerPartial('AsideSearch', AsideSearch)
Handlebars.registerPartial('ChatWindow', ChatWindow)
// do we have an active conversation?
const active_chat_id = localStorage.getItem('active_chat_id') ? localStorage.getItem('active_chat_id') : '';

const indexPage = `
{{debug}}
<secton id="viewport" class="b-page-wrapper">
    <div class="b-page">
        <!-- if (user.isAuthorized) -->
        <section class="b-chat-viewport-wrapper">
            <div class="b-chat-viewport">
                <aside class="b-conversations-wrapper">
                    <div class="b-conversations">
                        <!-- aside profile -->
                        {{> AsideProfile}}
                        <!-- aside search -->
                        {{> AsideSearch}}
                        <!-- conversations list -->
                        {{> ConversationsList conversationsList='${JSON.stringify(data)}'}}
                    </div>
                </aside>
                <!-- ChatWindow -->
                {{> ChatWindow activeChat='${JSON.stringify(data[active_chat_id])}' active_chat_id="${active_chat_id}"}} 
            </div>
        </section>
        <!-- else -->
        
        <!-- -->
    </div>
</secton>
`

export default indexPage;