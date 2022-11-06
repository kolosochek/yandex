import Handlebars from "handlebars";
import AsideProfile from "../components/AsideProfile";
import AsideSearch from "../components/AsideSearch";
import ConversationsList from "../components/ConversationsList";

// let's register components that we'll use on that page
Handlebars.registerPartial('ConversationsList', ConversationsList)
Handlebars.registerPartial('AsideProfile', AsideProfile)
Handlebars.registerPartial('AsideSearch', AsideSearch)

const indexPage = `
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
                        {{> ConversationsList}}
                    </div>
                </aside>
                <section class="b-chat-window-wrapper">
                    <div class="b-chat-window">
                        <p class="b-chat-window-empty"><= Choose a conversation to send a message.</p>
                    </div>
                </section>
            </div>
        </section>
        <!-- else -->

        <!-- -->
    </div>
</secton>
`

export default indexPage;