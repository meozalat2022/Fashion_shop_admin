import mongoose from "mongoose";
import { BaseOptions } from "vm";

let isConnected: boolean = false;

export const connectToDB = async(): Promise<void>=>{
    mongoose.set("strictQuery", true)
    if(isConnected){
        console.log("MongoDB is already connected");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URL || "",{
            dbName: "FashionShopAdmin"
        })
        isConnected = true
    } catch (error) {
        console.log(error)
    }
}