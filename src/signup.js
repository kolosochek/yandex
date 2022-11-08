import Handlebars from 'handlebars'
import SignUpPage from './pages/SignUpPage';

// static url
const static_url = "http://localhost:3000/";


document.addEventListener("DOMContentLoaded", () => {
    const compiled = Handlebars.compile(SignUpPage);    
    const html = compiled({ static_url: static_url });
    const root = document.querySelector("#root");
    root.innerHTML = html;
})

export default static_url;