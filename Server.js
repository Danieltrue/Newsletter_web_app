const express = require("express");
const colors = require("colors");
const exhbs = require("express-handlebars");
const dotenv = require("dotenv").config({ path: "./config/cf.env" 




});
const helmet = require("helmet");
const app = express();
//init express body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const router = require("./router");

//Visble Port
const port = 5000 || process.env.PORT;

//Middleware
app.use(helmet());
app.use(express.static("Public"));

//Express Handle Bars configuration
app.engine(
  "hbs",
  exhbs.engine({
    defaultLayout: "home",
    extname: "hbs",
    runtimeOptions: {
      allowProtoPropertiesByDefault: true,
      allowProtoMethodsByDefault: true,
    },
  })
);

app.use("/", router);
app.set("view engine", "hbs");

//
app.listen(port, () =>
  console.log(`Server Running on port http://127.0.0.0:${port}`.bgCyan)
);
