import mongoose, { Mongoose, Schema } from "mongoose"


const clientSchema = new Schema({

    name:{
        type:String,
        reqiured:true,

    },
    conpanyName:{
        type:String,
        reqiured:true,

    },

    email:{
        type:String,
        unique:true,
        reqiured:[true , "Email is required"]
    },

    password:{
        type:String,
        required:[true, "Password Required"]
    },

    projects:{
        type: [{
            type: mongoose.Types.ObjectId,
            ref: 'Project'
        }],
        default: []
    }
   

    
})



const projectSchema = new Schema({
    title: {
        type:String,
        required:[true, "Project Title is required"]
    },

    description: {
        type:String,
        required:[true, "Project Description is required"]
    },


    hourlyRate: {
        type:Number,
        required:[true, "Enter Hourly Rate"]
    },


    category: {
        type:String,
        enum:{
            values:["Developer", "Desiginer", "Content Writer", "Digital Marketting"],
            message: `{VALUE} is not Valid`,
        },
        required:[true,"Select from given Category"]
    },

    expertise: {
        type:[String],
        required:[true,"Enter expertise"]
    },

    skills: {
        type:[String],
        required:[true,"Enter expertise"]
    },

    status: {
        type:Boolean,
        default:false
    },

    // client:{type:Schema.Types.ObjectId,ref:"ClientSchema"}
});


const ProjectModel  =mongoose.models.Project || mongoose.model('Project', projectSchema);
const ClientModel =mongoose.models.ClientSchema || mongoose.model('ClientSchema', clientSchema);

export {ProjectModel,ClientModel}