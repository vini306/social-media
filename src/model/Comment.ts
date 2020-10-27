import {
  Schema, Document, model, Model,
} from 'mongoose';

const Comment = new Schema({
  message: String,
  username: String,

}, {
  timestamps: true,
});
