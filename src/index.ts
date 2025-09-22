import bodyParser from "body-parser";
import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import PostRequest from "./dtos/post.resquest";
import PostHandler from "./utils/post.handler";
import GetRequest from "./dtos/get.request";
import GetHandler from "./utils/get.handler";

dotenv.config();

const app: Express = express();
app.use(bodyParser.json());
const port = process.env.PORT || 5000;

app.post("/", (req: Request, res: Response) => {
  const body: PostRequest = req.body;
  const response = PostHandler.buildResponse(body);

  res.json(response);
});

app.get("/", (req: Request, res: Response) => {
  const data: GetRequest = req.query;
  const response = GetHandler.buildResponse(data);
  res.json(response);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
