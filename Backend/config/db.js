import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://Food_Delivery:Food_Delivery@cluster0.wgwu4.mongodb.net/Food Delivery Website').then(()=>console.log("DB Connected"));
}