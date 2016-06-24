/* eslint-disable new-cap */

import express from 'express';
import City from '../models/city';
const router = module.exports = express.Router();

router.get('/', (req, res) => {
  res.render('cities/index');
});

router.get('/new', (req, res) => {
  res.render('cities/new');
});

router.get('/:id', (req, res) => {
  res.render('cities/show');
});

router.post('/', (req, res) => {
  const c = new City(req.body);
  c.photos.push(req.body.photo);
  c.save(() => {
    res.redirect('/cities');
  });
});
