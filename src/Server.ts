import express from 'express';
import * as bodyParser from 'body-parser';

class Server {
  server: express.Express;

  constructor() {
    this.server = express();
    this.getMidleware();
  }

  getMidleware() {
    this.server.use(bodyParser.json());
    this.server.use(bodyParser.urlencoded({ extended: true }));
  }
}

export default Server;
