import mongoose from 'mongoose';

const URL = process.env.MONGODB_URL || "mongodb+srv://water:17ucs035@water-1rscl.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect( URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})