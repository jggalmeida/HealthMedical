import express from 'express';
import routes from './routes';
var cors = require('cors');

import './database';

class App {
  constructor() {
    this.server = express();
    
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors({
      origin: 'http://localhost:3000',
    }));
  }

  routes() {
    this.server.use(routes);
  }

}

export default new App().server;
