import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;



app.get('/',(req,res)=>{
    res.status(201).send({msg:"Hello!"})
})

app.get('/api/users', (req,res)=>{
    res.send([
        {id:1, username:"anson", displayName:"Anson"},
        {id:2, username:"jack", displayName:"Jack"},
        {id:3, username:"john", displayName:"John"}
    ])
})

app.get('/api/products', (req,res)=>{
    res.send([
        {id:123, username:'chicken breast', price:12.99}
    ])
})


app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});

//localhost300
//localhost300/users
//localhost300/products