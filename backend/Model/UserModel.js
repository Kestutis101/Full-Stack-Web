import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 3,
    maxLength: 200,
    required: true,
  },
  surname: {
    type: String,
    minLength: 3,
    maxLength: 200,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  registeredDate: {
    type: Date,
    required: true,
  },
});

const User = mongoose.model("User", UserSchema);

export default User;
