const http = require("http"); // Correction : Supprimer "node:"
const fs = require("fs");

 

const path = require("path"); // Ajout : Importer le module path
const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    const filePath = path.join(__dirname, "../page/home.html"); // Correction : Utiliser path.join pour construire le chemin du fichier
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) throw err;
      res.write(data);
      res.end();
    });
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    const filePath = path.join(__dirname, "../temp/test.html"); // Correction : Utiliser path.join pour construire le chemin du fichier
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) throw err;
      res.write(data);
      res.end();
    });
  } 
  else if (req.url === "/create-file"){
    res.writeHead(200, {"Content-Type": "text/html"});
    const data = "<h1>This is test file it was updated</h1>";
    for(let i=0; i < 10; i++){
      fs.appendFile("../temp/test.html", data, (err)=> {
        if(err) throw err; 
     
      });
    }
    res.write("file is created");
    res.end();  
  }
   else {
    res.writeHead(404, { "Content-Type": "text/html" });
    const filePath = path.join(__dirname, "../page/404.html"); // Correction : Utiliser path.join pour construire le chemin du fichier
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) throw err;
      res.write(data);
      res.end();
    }); 
  }
});

console.log(`Server is running at http://127.0.0.1:${PORT}`); // Correction : Utiliser "http" au lieu de "https"
server.listen(PORT);
