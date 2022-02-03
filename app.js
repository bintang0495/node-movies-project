const express = require('express');
const app = express();
const movies = require('./routers/film');
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(movies);
app.use((req, res, next) => {
  res.status(404);
  res.send({
    status: 'failed',
    message: `Resource ${req.originalUrl} Not Found`,
  });
});

app.listen(port, () => {
  console.log(`Aplikasi ini berjalan pada http://localhost:${port}`);
});
