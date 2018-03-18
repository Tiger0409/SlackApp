# SlackApp
this is Slack App using MERN Stack.
## 1).Slack App login

- Reference: https://vladimirponomarev.com/blog/authentication-in-react-apps-creating-components
- npm init
- npm i --save express body-parser react react-dom react-router material-ui react-tap-event-plugin validator
- npm i --save-dev webpack babel-core babel-loader babel-preset-es2015 babel-preset-react nodemon
- npm install webpack
- npm install nodemon
- npm install bcrypt
#### display "helo Hello from React"

   - npm run bundle
   - npm start  (other terminal)

#### display front end

    - npm install react-tap-event-plugin
    - npm install react-router
    - npm install material-ui
    - Please insert code on components/SignUpForm.jsx
     
      <SignUpForm
        onSubmit={(e) => console.log('submitted')}
        onChange={(e) => console.log('changed')}
        errors={{ email: 'Invalid' }}
        user={{ email: 'jane@doe.com', name: 'Jane Doe' }}
      />
    