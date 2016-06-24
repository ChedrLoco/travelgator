/* eslint-disable func-names */

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const citySchema = new Schema({
  name: { type: String, required: true },
  photos: [{ type: String }],
  balance: { type: Number, default: 0 },
  amount: { type: Number, required: true },
  country: { type: mongoose.Schema.ObjectId, ref: 'Country' },
  people: [{ type: mongoose.Schema.ObjectId, ref: 'Person' }],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('City', citySchema);
