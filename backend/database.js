import mongoose from "mongoose"

async function connectDB() {
    try {
        await mongoose.connect(process.env.connectStr)
        console.log(process.env.connectStr)
        console.log(`MongoDB Connection Success!`)
    } catch (error) {
        console.log(`Something went wrong: ${error}`)
    }
}

export default connectDB //this will be imported to the index.js file