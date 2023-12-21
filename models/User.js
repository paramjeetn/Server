import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(

    {   username:{
            type: String,
            required: true,
        }, 
       
        name: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        coverPic:{
             type: String,
        },
        city:{
             type: String,
        },

    }


);

const User = mongoose.model("User", UserSchema);
export default User;
