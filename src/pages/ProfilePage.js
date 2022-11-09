import Handlebars from "handlebars";
import ImageComponent from "../components/ImageComponent";

Handlebars.registerPartial('ImageComponent', ImageComponent);
Handlebars.registerHelper('log', (value) => console.log(value));


const ProfilePage = `
{{log this}}
<main id="viewport" class="b-page-wrapper">
    <div class="b-page">
        {{#with profile}}
        <section class="b-profile-page-wrapper">
            <div class="b-profile-page">
                <div class="b-profile-goback-wrapper">
                    <a href="/" class="b-profile-goback b-link">Go back</a>
                </div>
                <div class="b-profile-wrapper">
                    <div class="b-profile">
                        <figure class="b-profile-avatar-wrapper">
                            {{> ImageComponent image_url=this.avatar_url width='130' height='130' class='b-profile-avatar'}}
                        </figure>
                        <div class="b-profile-name-wrapper">
                            <h2 class="b-profile-name">{{this.first_name}}</h2>
                        </div>
                        <div class="b-profile-field-wrapper">
                            <div class="b-profile-field">
                                <span class="b-profile-field-label">Email</span>
                                <p class="b-profile-field-value">asd@sdg.ru</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> 
        {{/with}}
    </div>
</main>
`

export default ProfilePage;