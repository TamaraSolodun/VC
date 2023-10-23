import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import cors from "cors";

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(cors());

app.get("/", (_req: Request, res: Response) => {
  res.send("Typescript Server 2!");
});

const port = process.env.PORT || 8000;

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

let users: User[] = [
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

app.post("/login", (req, res) => {
  const { email, password }: FormInputs = req.body;

  const user = users.find((user) => {
    return user.email === email && user.password === password;
  });

  if (!user) {
    return res.status(404).send("User Not Found!");
  }

  return res.status(200).json(user);
});

app.get("/api/users", (req, res) => {
  res.json(users);
});

app.post("/api/users", (req, res) => {
  const newUser: User = req.body;
  newUser.id = users.length + 1
  users.push(newUser);
  res.json(newUser);
});