const express = require('express');
const routes = require('./routes').default;
const cors = require('cors');

class App {
    constructor() {
      this.server = express();
      this.middlewares();
      this.routes();
    }

    middlewares() {
      this.server.use(cors());
      this.server.use(express.json());
    }

    routes(){
      this.server.use('/api', routes);
    }
}

export default new App().server;