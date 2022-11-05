import Handlebars from "handlebars";
import ConversationsList from "../components/ConversationsList";

// let's register component's that we'll use on that page
Handlebars.registerPartial('ConversationsList', ConversationsList)

const indexPage = `<secton id="viewport" class="b-page-wrapper">
            <div class="b-page">
                <!-- if (user.isAuthorized) -->
                <section class="b-chat-viewport-wrapper">
                    <div class="b-chat-viewport">
                        <aside class="b-conversations-wrapper">
                            <div class="b-conversations">
                                <!-- aside profile -->
                                <section class="b-profile-navigation-wrapper">
                                    <div class="b-profile-navigation">
                                        <a class="b-link" href="#">My Profile >>></a>
                                    </div>
                                </section>
                                <!-- aside search -->
                                <section class="b-conversations-search-wrapper">
                                    <form id="conversations-search" class="b-conversations-search">
                                        <input type="text" class="b-input" />
                                        <button type="submit">Go</button>
                                    </form>
                                </section>
                                <!-- conversations list -->
                                <section class="b-conversations-list-wrapper">
                                    {{> ConversationsList}}
                                </section>
                            </div>
                        </aside>
                    </div>
                </section>
                <!-- else -->

                <!-- -->
            </div>
</secton>`

export default indexPage;