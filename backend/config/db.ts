import mongoose from 'mongoose';

const connectDB = async () => {
	try {
		if (process.env.NODE_ENV === 'production' && process.env.MONGO_URI) {
			const conn = await mongoose.connect(process.env.MONGO_URI);
			console.log(`**Production** MongoDB Connected ${conn.connection.host}`);
		} else if (
			process.env.NODE_ENV === 'development' &&
			process.env.MONGO_URI
		) {
			const conn = await mongoose.connect(process.env.MONGO_URI);
			console.log(`**Development** MongoDB Connected ${conn.connection.host}`);
		} else if (process.env.NODE_ENV === 'test' && process.env.MONGO_TEST_URI) {
			const conn = await mongoose.connect(process.env.MONGO_TEST_URI);
			console.log(`**Test** MongoDB Connected ${conn.connection.host}`);
		}
	} catch (error: unknown) {
		if (error instanceof Error) {
			console.log(`Error: ${error.message}`);
		} else {
			console.log(`Unknown error occurred`);
		}
		process.exit(1);
	}
};

export default connectDB;
