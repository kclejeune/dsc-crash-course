# Vue.js: A Basic Todo List

## Prerequisites

You'll need Node.js installed. You can get it ![here](https://nodejs.org/en/), or with your favorite package manager. Alternatively, if you're on macOS or Linux, we recommend ![Node Version Manager](https://github.com/nvm-sh/nvm). Follow the instructions in their repository and run ```nvm install --lts```.

## Running the Project

### Backend

The project consists of a Node.js/Express.js/Sqlite3 backend, found in `/server`. To start the backend, run:

```bash
cd server
npm install
node index
```

This will most likely start the server on ![localhost:3000](localhost:3000).

### Frontend

The Vue UI can be found in `/frontend`. To start the development server, run:

```bash
cd frontend
npm install
npm run serve
```

This will most likely start the server on ![localhost:8080](localhost:8080). Navigate to this in your browser and the app will load.
