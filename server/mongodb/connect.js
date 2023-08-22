import mongoose from 'mongoose';
const url = 'mongodb+srv://panwarmanish824:AIImage@cluster0.0wj0uet.mongodb.net/?retryWrites=true&w=majority';

const connectDB = (url) => {
  mongoose.set('strictQuery', true);
  mongoose.connect(url)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));
};

export default connectDB;