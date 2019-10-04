[Server side remake with typescript.](https://github.com/bartstc/comfy-rooms-ts-server/tree/master)

# Comfy Rooms

Fullstack project written in React and Express. The application is used to search for room offers and to book them after creating an account. The logged in user has access to the management panel of his orders. You can also create a special account to add and manage your own offers.

![ggg](https://user-images.githubusercontent.com/42715741/60240392-14604e80-98b1-11e9-8ea8-1ad8431626b9.png)

## Getting Started

1. Clone this repo.

```
git clone git@github.com:bartstc/comfy-rooms-booking-app.git
```

2. Install node modules.

```
npm i
cd client/
npm i
```

3. Start application and server:

```
npm run dev
```

## Software Used

* [React](https://reactjs.org/) with react hooks
* [Redux](https://redux.js.org/) state management
* [Styled-components](https://www.styled-components.com/) for styles
* [Mapbox Maps API](https://www.mapbox.com/)
* [Stripe](https://stripe.com/) for making payments
* [Cloudinary](https://cloudinary.com/) asset management
* [Express](https://expressjs.com/) for server
* [JSON Web Token](https://jwt.io/) for auth
* [MongoDB](https://www.mongodb.com/) database
* [Heroku](https://www.heroku.com/) deployment

## Project Learning Goals

* [Fractal](https://hackernoon.com/fractal-a-react-app-structure-for-infinite-scale-4dab943092af) - react app folder structure
* Using external libraries and APIs
* Role based authentication (based on JWT)
* React hooks

## Description of Contents

Frontend
```
client

|-- public
|   |-- images
|   |-- index.html
|   |-- manifest.json
|
|-- src
|   |-- components
|   |-- hoc
|   |-- hooks
|   |-- modules
|   |-- pages
|   |-- utils
|   |-- index.css
|   |-- index.js
|   |-- store.js
|   |-- sass
```

Backend
```
server

|-- config
|-- controllers
|-- middlewares
|-- models
|-- routes
|-- config
|-- services
|-- utils
|-- validation
|-- server.js
```

client/public
```
Files: index.html, manifest.json and assets folder. Built by create-react-app.
```
client/src/components
```
All shared components like buttons, inputs, cards and layout files.
```
client/src/hoc
```
All higher order components.
```
client/src/hooks
```
All custom hooks.
```
client/src/modules
```
Handles redux state (actions + reducers using ducks file structure).
```
client/src/pages
```
Often called containers. Contains all root level components and ones directly related to this root components.
```
client/src/utils
```
All helper functions and shared styles.
```
client/src/index.js
```
Registers all routes, render the app and handle tokens.
```
client/src/index.css
```
Global styles.
```
client/src/store.js
```
Root store file. Initializes the redux store.
```

## Preview

[Comfy Rooms App](https://morning-wave-69516.herokuapp.com/)

## License

This project is licensed under the ISC License - see the [LICENSE.md](LICENSE.md) file for details
