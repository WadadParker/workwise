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
    title: String,
    description: String,
    hourlyRate: Number,
    category: String,
    expertise: String,
    skills: [String],
    status: String
});


const ProjectModel  =mongoose.models.Project || mongoose.model('Project', projectSchema);
const ClientModel =mongoose.models.ClientSchema || mongoose.model('ClientSchema', clientSchema);

export {ProjectModel,ClientModel}