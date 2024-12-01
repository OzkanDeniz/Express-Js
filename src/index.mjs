import express, { request, response } from "express";

const app = express();

const PORT = process.env.PORT || 3000;

const mockUsers = [
  { id: 1, username: "anson", displayName: "Anson" },
  { id: 2, username: "jack", displayName: "Jack" },
  { id: 3, username: "adam", displayName: "Adam" },
  { id: 4, username: "tina", displayName: "Tina" },
  { id: 5, username: "jason", displayName: "Jason" },
  { id: 6, username: "henry", displayName: "Henry" },
  { id: 7, username: "marilyn", displayName: "Merilyn" },
];

//GET REQUEST
// app.get("/", (req, res) => {
//   res.status(201).send({ msg: "Hello!" });
// });

// app.get("/api/users", (req, res) => {
//   res.send(mockUsers);
// });

// app.get("/api/products", (req, res) => {
//   res.send([{ id: 123, username: "chicken breast", price: 12.99 }]);
// });

//ROUTE PARAMETERS (req.params (/api/users/:id))
app.get("/api/users/:id", (req, res) => {
  console.log(req.params);
  const parseID = parseInt(req.params.id);
  if (isNaN(parseID))
    return res.status(400).send({ msg: "Bad Request, Invalid ID," });

  const findUser = mockUsers.find((user) => user.id == parseID);
  if (!findUser) return res.sendStatus(404);
  return res.send(findUser);
});

//QUERY PARAMETERS (localhost300/products?key=value&key2=value2)
app.get("/api/users", (req, res) => {
  console.log(req.query);

  const {
    query: { filter, value },
  } = req;
  //when filter and value undefined
  if (!filter && !value) return res.send(mockUsers);
  res.send(mockUsers);
});

app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});

//localhost300
//localhost300/users
//localhost300/products?key=value&key2=value2
