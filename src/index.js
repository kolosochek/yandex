import Handlebars from 'handlebars'
import indexPage from './pages/indexPage.js'

document.addEventListener("DOMContentLoaded", () => {
    const template = indexPage;
    const compiled = Handlebars.compile(template);
    // dict
    const conversationsList = [{
        'name': 'Alex', 
        'message': {
            'time': '12.10.2020 18:15',
            'text': 'Hey cholo! Wsup?!'
        }
    }, {
        'name': 'Marina Skvortsova', 
        'message': {
            'time': '11.10.2020 03:22',
            'text': 'Hi! I am still waiting for your reply. We need to send this code to our client right in time, so I ll wait for your response ASAP!'
        }
    }, {
        'name': 'Nomad', 
        'message': {
            'time': '12.10.2020 07:41',
            'text': "yeah ;D"
        }
    }, ]

    const html = compiled({ conversationsList: conversationsList })
    const root = document.querySelector("#root")
    root.innerHTML = html;
})