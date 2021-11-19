# Description
This is a basic To-Do list application demonstrating the following frameworks:

* React
* Redux
* Redux Toolkit
* Redux Sagas
* Next.js

# Prerequisites
* Node.js v12.22.7
* Yarn

# Project Creation
These steps were used to create the project.
```
nvm use lts/erbium
npx create-next-app todo-nextjs-redux
cd todo-nextjs-redux/
yarn add react-redux
yarn add @reduxjs/toolkit
yarn add redux-saga
```

# Run the App
This command runs the app via the Next.js development server.
```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

# Docker

## Build
```
docker build . -t todo-nextjs-redux
```

## Run
```
docker run -p 3000:3000 todo-nextjs-redux
```