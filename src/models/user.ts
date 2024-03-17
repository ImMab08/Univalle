import { Schema, model, models } from "mongoose";

const userScheme = new Schema({
  email: {
    type: String,
    unique: true,
    require: [true, 'Email is required'],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please fill a valid email address',
    ],
  },
  password: {
    type: String,
    require: [true, 'Password is required'],
    select: false,
  },
  code: {
    type: Number,
    require: [true, 'Code is required'],
  },
});

const User = models.User || model('User', userScheme);
export default User;