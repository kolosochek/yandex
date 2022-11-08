import Handlebars from "handlebars";

// let's register components that we'll use on that page
//Handlebars.registerPartial('ConversationsList', ConversationsList);


const AuthPage = `
<main id="viewport" class="b-page-wrapper">
    <div class="b-page">
        <!-- if (user.isAuthorized) -->
        <section class="b-auth-page-wrapper">
            <div class="b-auth-page">
                <form class="b-form" action="">
                    <div class="b-input-wrapper">
                        <label class="b-label" for="{{input.name}}">{{input.title}}</label>
                        <input class="b-input" name="{{input.name}}" type="{{input.type}}"  />
                    </div>
                    <div class="b-submit-wrapper">
                        <button type="submit">Authorize</button>
                    </div>
                    <div class="b-sign-in-wrapper">
                        <a class="b-link" href="">Sign Up</a>
                    </div>
                </form>
            </div>
        </section>
        <!-- else -->
        
        <!-- -->
    </div>
</main>
`

export default AuthPage;