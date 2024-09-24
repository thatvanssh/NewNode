const express = require("express");
const app = express();
const PORT = 1001;
const bodyParser = require('body-parser');
const router = require("./Routes/routes");
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

app.use("/",router);
app.use("/rawdata",router);
// app.use("/userdetails",router);
// app.use("/formdata",router);
// app.use("/register",router);
// app.use("/verify",router);
// app.use("/login",router);
// app.use("/delete",router);

http://localhost:${PORT}
app.listen(PORT,()=>{
    console.log(`Server running`);
})