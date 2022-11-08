import Handlebars from 'handlebars'
import AuthPage from './pages/AuthPage';

// static url
const static_url = "http://localhost:3000/";


document.addEventListener("DOMContentLoaded", () => {
    const compiled = Handlebars.compile(AuthPage);    
    const html = compiled({ static_url: static_url });
    const root = document.querySelector("#root");
    root.innerHTML = html;
})

export default static_url;