/* eslint-disable func-names */

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const personSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  photo: { type: String, required: true },
  money: { type: Number, required: true },
  cities: [{ type: mongoose.Schema.ObjectId, ref: 'City' }],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Person', personSchema);
