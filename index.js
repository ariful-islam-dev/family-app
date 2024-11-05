const express = require("express");
const  OpenApiValidator  = require("express-openapi-validator");
const swaggerUI = require("swagger-ui-express");
const YAML = require("yamljs");

const app = express();


// const swaggerDocument = YAML.load("./swagger.yaml");
app.use(express.json())
// app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

// app.use(
//   OpenApiValidator.middleware({
//     apiSpec: "./swagger.yaml",
//   })
// );

// Routes
app.get("/", (req, res) => {
  res.send("Express JS on Vercel");
});

app.get("/ping", (req, res) => {
  res.send("pong 🏓");
});

app.get("/health", (req, res) => {
  res.status(200).json({
    message: "Health is ok",
    statusCode: 200,
  });
});

const port = process.env.PORT || 8080;

app.listen(port, (err, res) => {
  if (err) {
    console.log(err);
    return res.status(500).send(err.message);
  } else {
    console.log("[INFO] Server Running on port:", port);
  }
});
