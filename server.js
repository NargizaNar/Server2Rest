//express in server.js Datei importieren
import express from "express"; 

import animationsRouter from "./routes/animationsRouter.js";

// MIDDLEWARE

//import { showTimeMiddleware } from "./middlewares/animationsMiddlewares.js";
// express in ein app variabeln speichern
const app = express();

// port Nummer in ein variabeln speichern
const port = 5010;
// app.use(showTimeMiddleware);

app.get("/", (req, res) => {
  res.status(200).json({
    greeting: "Hellooo von Server Home!!!!",
  });
});

app.use("/animations", animationsRouter);
//rufen ein `listen Method` auf unser App auf mit Portnummer und Callback Funktion als Argumente
// app.listen(PortNummer, Callback-Funktion)

app.listen(port, () => {
  console.log(`Port läuft auf Port: ${port}`);
});