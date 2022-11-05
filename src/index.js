import Handlebars from 'handlebars'
import indexPage from './pages/indexPage.js'

document.addEventListener("DOMContentLoaded", () => {
    const template = indexPage;
    const compiled = Handlebars.compile(template);
    // dict
    const conversationsList = [{
        'name': 'Alex', 
        'avatar_url': 'https://scontent.fpwq4-1.fna.fbcdn.net/v/t39.30808-1/285997448_10226522394544218_2789973693510191095_n.jpg?stp=dst-jpg_p240x240&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_ohc=wgusGA5LWT8AX9cdomF&_nc_ht=scontent.fpwq4-1.fna&oh=00_AfD1AcqcXh2nLYiSU24l0mOYnqOEBPwgEpvRaULAsWHA1g&oe=636B7920',
        'message': {
            'time': '18:15',
            'date': '12.10.2020',
            'text': 'Hey cholo! Wsup?!',
            'unreadMessages': 1,
        }
    }, {
        'name': 'Marina Skvortsova', 
        'avatar_url': 'https://scontent.fpwq4-1.fna.fbcdn.net/v/t1.6435-1/89028497_10207162704383142_965393895204585472_n.jpg?stp=dst-jpg_s240x240&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_ohc=8ORG0x5PpVQAX-vbS6N&_nc_ht=scontent.fpwq4-1.fna&oh=00_AfBdWbMFM5-W0P2dtXK7lifyKrBT5gIzqYhiwANQd9FC1g&oe=638DC0C4',
        'message': {
            'time': '03:22',
            'date': '11.10.2020',
            'text': 'Hi! I am still waiting for your reply. We need to send this code to our client right in time, so I ll wait for your response ASAP!',
            'unreadMessages': 0,
        }
    }, {
        'name': 'Nomad', 
        'avatar_url': '',
        'message': {
            'time': '07:41',
            'date': '12.10.2020',
            'text': "yeah ;D",
            'unreadMessages': 5,
        }
    }, ]

    const html = compiled({ conversationsList: conversationsList })
    const root = document.querySelector("#root")
    root.innerHTML = html;
})