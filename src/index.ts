import * as dotenv from 'dotenv';

import express from 'express';
import morgan from 'morgan';

dotenv.config();
const app = express();
app.use(morgan('dev')); //middleware logger

app.get('/', async (req, res) => {
  const ip = req.ip;
  //   debugger;
  res.status(200).send(`
<!DOCTYPE html>
<html>
   <head>
      <title>Node Server: Welcome</title>
   </head>
<body>
<style>  *{margin:0; padding:0; box-sizing:border-box; } </style>
<h1 style="text-align:center;>WELCOME TO THE GULAG</h1>
<p style="text-align:center;">Server Started at ${ip}:${PORT}</p>
   </body>
</html>`);
});

const PORT = Number(process.env.PORT || 300);

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server started at ${PORT}`);
});
