import express from "express";
import config from "./config";
import { initDB } from "./db";

const app = express();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const main = () => {
  initDB();

  app.listen(config.port, () => {
  console.log(`Example app listening on port ${config.port}`)
})
}

main();