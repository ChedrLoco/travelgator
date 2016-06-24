/* eslint-disable new-cap, no-underscore-dangle */

import express from 'express';
import City from '../models/city';
import Country from '../models/country';
const router = module.exports = express.Router();

router.get('/', (req, res) => {
  res.render('cities/index');
});

router.get('/new', (req, res) => {
  Country.find((err, countries) => res.render('cities/new', { countries }));
});

router.get('/:id', (req, res) => {
  res.render('cities/show');
});

router.post('/', (req, res) => {
  const city = new City(req.body);
  city.photos.push(req.body.photo);
  city.save(() => {
    Country.findOneAndUpdate({ _id: req.body.country }, { $push: { cities: city._id } }, () => {
      res.redirect('/cities');
    });
  });
});
