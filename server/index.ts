import cors from "cors";
import dotenv from "dotenv";
import type { Express, Request, Response } from "express";
import express from "express";

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(cors());

app.get("/", (_request: Request, response: Response) => {
  response.send("Typescript Server 2!");
});

const DEFAULT_PORT = 8000;

const port = process.env.PORT ?? DEFAULT_PORT;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

interface FormInputs {
  email: string;
  password: string;
}

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

const users: User[] = [
  {
    id: 1,
    name: "Tamara",
    email: "toma.solodun@gmail.com",
    password: "123456",
  },
  {
    id: 2,
    name: "Tamara 2",
    email: "toma2.solodun@gmail.com",
    password: "123456",
  },
];

app.post("/login", (request, response) => {
  const { email, password }: FormInputs = request.body;

  const user = users.find((foundUser) => {
    return foundUser.email === email && foundUser.password === password;
  });

  if (!user) {
    return response.status(404).send("User Not Found!");
  }

  return response.status(200).json(user);
});

app.get("/api/users", (request, response) => {
  response.json(users);
});

app.post("/api/users", (request, res) => {
  const addedUser: User = request.body;
  addedUser.id = users.length + 1;
  users.push(addedUser);
  res.json(addedUser);
});
