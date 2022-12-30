# Description
This is a basic To-Do list application demonstrating the following frameworks:

* React
* Redux
* Redux Toolkit
* Redux Sagas
* Next.js

# Prerequisites
* Node.js v18.12.1
* Yarn

# Project Creation
These steps were used to create the project.
```
nvm use lts/hydrogen
npx create-next-app todo-nextjs-redux
cd todo-nextjs-redux/
yarn add react-redux
yarn add @reduxjs/toolkit
yarn add redux-saga
```

# Run the App
## Dev Mode
This command runs the app via the Next.js development server.
```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production Mode
These commands build and start the app in production mode.
```
yarn run build
yarn run start
```

# Docker

## Build
```
docker build . -t todo-nextjs-redux
```

## Run
```
docker run -p 3000:3000 todo-nextjs-redux
```