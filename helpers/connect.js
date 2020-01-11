import mongoose from 'mongoose';

const URL = process.env.MONGODB_URL;

mongoose.connect( URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})