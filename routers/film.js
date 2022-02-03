const express = require('express');
const router = express.Router();

let movies = [
  {
    id: 'film1',
    judul: 'Spiderman',
    tahun: '2007',
  },
  {
    id: 'film2',
    judul: 'Harry Potter',
    tahun: '2008',
  },
  {
    id: 'film3',
    judul: 'Superman',
    tahun: '2010',
  },
];

let detailMovies = [
  {
    id: 'film1',
    judul: 'Superman',
    tahun: '2007',
    released: '08 Nov 2007',
    genre: 'Action,Comedy',
    director: 'You-Know-Who',
  },
  {
    id: 'film2',
    judul: 'Harry Potter',
    tahun: '2008',
    released: '08 Sep 2008',
    genre: 'Action,Romance',
    director: 'You-Know-Who',
  },
  {
    id: 'film3',
    judul: 'Superman',
    tahun: '2010',
    released: '10 May   2010',
    genre: 'Action',
    director: 'You-Know-Who',
  },
];

router.get('/', (req, res) => {
  res.json(movies);
});

router.get('/detail=:id', (req, res) => {
  let mvdtl = {};
  const id = req.params.id;
  detailMovies.filter((movie) => {
    if (id == movie.id) {
      mvdtl = movie;
    }
  });
  if (Object.keys(mvdtl).length === 0) {
    mvdtl = {
      message: 'Film tidak ditemukan',
    };
  }
  res.json(mvdtl);
});

module.exports = router;
