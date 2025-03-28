import { DB_NAME } from "../constants";

const connectDB = async() => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI/$(DB_NAME)}`)
        console.log(`MongoDB connected: ${connectionInstance.connection.host}`);
    }
    catch(error) {
        console.error(`MONGODB Connection Error: ${error.message}`);
        process.exit(1);
    }
}

export default connectDB;