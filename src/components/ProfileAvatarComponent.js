import Handlebars from "handlebars";
import ImageComponent from "../components/ImageComponent";
Handlebars.registerPartial('ImageComponent', ImageComponent);

const ProfileAvatarComponent = `
<figure class="b-profile-avatar-wrapper">
    {{> ImageComponent image_url=this.avatar_url width='130' height='130' class='b-profile-avatar'}}
    <div class="b-profile-avatar-change-wrapper">
        <a class="b-link" onclick="showModal()">Change picture</a>
    </div>
</figure>
`

export default ProfileAvatarComponent;