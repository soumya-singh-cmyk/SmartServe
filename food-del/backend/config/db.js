import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://ssinghsoumya2003:soumya123@cluster0.0kekc.mongodb.net/food-del').then(()=>console.log("DB Connected"));
   
}
