import mongoose from "mongoose";

const {Schema, model} = mongoose;

const user = new Schema({
    userName: String,
    email: String,
    password: String
})

user.set("autoIndex", true);

const UserDb = model("user", user);
UserDb.createIndexes();

export default UserDb;