import 'dotenv/config';
import mongoose from 'mongoose';

const connectDB = async () => {

    if (!process.env.MONGO_URI) {
        console.error('MONGO_URI environment variable is not defined.');
        process.exit(1);
    }
    

    try {
        
        await mongoose.connect(process.env.MONGO_URI);

        console.log('MongoDB is connected.');

    } catch (error) {
        console.error('MongoDB connection failed.', error);
        process.exit(1);
    }
}

export default connectDB;