import express, { response } from "express";

const app = express();

const PORT = process.env.PORT || 3000;

const mockUsers = [
  { id: 1, username: "anson", displayName: "Anson" },
  { id: 2, username: "jack", displayName: "Jack" },
  { id: 3, username: "john", displayName: "John" },
];

app.get("/", (req, res) => {
  res.status(201).send({ msg: "Hello!" });
});

app.get("/api/users", (req, res) => {
  res.send(mockUsers);
});

app.get("/api/products", (req, res) => {
  res.send([{ id: 123, username: "chicken breast", price: 12.99 }]);
});

app.get("/api/users/:id", (req, res) => {
  console.log(req.params);
  const parseID = parseInt(req.params.id);
  if (isNaN(parseID))
    return res.status(400).send({ msg: "Bad Request, Invalid ID," });

  const findUser = mockUsers.find((user) => user.id == parseID);
  if (!findUser) return res.sendStatus(404);
  return res.send(findUser);
});

app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});

//localhost300
//localhost300/users
//localhost300/products
