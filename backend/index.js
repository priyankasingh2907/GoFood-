
const express = require('express')
const app = express()
const port = 5000
const mongoDB = require("./db");


mongoDB();
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(express.json());
app.use('/api', require("./Routes/CreateUser"))

app.use((err, req, res, next) => {
  res.setHeader("Access-Control-Allow-Oigin","http://localhost:3000");
  res.header(
    "Access-Control-Allow-Methods",
    "Origin, X-Requested-With, Content-Type, Accept",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
  res.status(500).json({ message: err.message });
});

app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})