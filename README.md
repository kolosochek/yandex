# ModemWebchat app
## https://modemwebchat.netlify.app/
#### So slow. So nasty.
![I mean theeese times, you know.](/github/slow_file_copy.gif)

### Hold on, we're starting
This is a MVP of simple webchat web application.

Key features:
- Vanilla JS. No JS or CSS frameworks has been used. Some transitions also included. I can do some HTML5+JS+CSS3 karate, bruh :vulcan_salute:. 
- Custom routing system, simple but powerful. Works like a charm.
- Simple user authorisation check, one list of views for authorised users, another one for unathorised users.
- Own MVC(Model-View-Controller) realisation.
- All views are composed from components. All valuable entities are insdie the components.  
- Parcel bundler. Handlebars template processor. Aint like dat but used to.

All possible routes:
```
https://modemwebchat.netlify.app/
https://modemwebchat.netlify.app/#/auth
https://modemwebchat.netlify.app/#/logout
https://modemwebchat.netlify.app/#/signup
https://modemwebchat.netlify.app/#/profile
https://modemwebchat.netlify.app/#/profile-edit
https://modemwebchat.netlify.app/#/profile-change-password
https://modemwebchat.netlify.app/#/error404
https://modemwebchat.netlify.app/#/error500
```

You will also recieve a 404 error page if you'll try to reach something outside theese routes. 
```
https://modemwebchat.netlify.app/#/funny-cat-videos
```

Make love, not war and have fun. See you, space cowboy :metal:!