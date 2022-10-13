import express, { Request, Response, NextFunction } from "express";

const app = express();

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("welcome!");
});

app.listen("4000", () => {
  console.log(`
  ################################################
  🛡️  Server listening on port: 4000🛡️
  ################################################
`);
});
