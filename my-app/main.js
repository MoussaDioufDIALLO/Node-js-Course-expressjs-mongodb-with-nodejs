const express= require ("express");
const app = express();
const PORT = 3001; 
const routes = require("./routes/index");
const bodyParser = require ("body-parser");
const connectDB = require("./database/db");

app.set("view engine", "pug"); 

//console.log(routes);
 
app.use(bodyParser.json());
app.use(routes); 

connectDB().then(()=>{
    
app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT} on port ${PORT}`);
});
});