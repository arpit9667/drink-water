import mongooose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcrypt';
const userSchema = new mongooose.Schema({
    name : {
        type: String,
        require: true,
        trim :true
    },
    email : {
        type: String,
        required: true,
        trim:true,
        lowercase:true,
        validate(email){
            if( !validator.isEmail(email))
                throw new Error("email is invalid");
        }
    },
    password : {
        type : String,
        required: true,
        minlength: 7, 
        trim: true
    },
    subscription : {
        type : Boolean,
        default : true
    }
})

userSchema.statics.findByCredentials = async (email,password) =>{
    const user = await Profile.findOne({email});
    if(!user)
        throw new Error('Unable to Login!!!')
    const isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch)
        throw new Error("Unable to Login!!!");
    
    return user;
} 

userSchema.pre('save' , async function(next){
    const user = this;
    // console.log('Saving...')
    
    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()
})


const Profile = mongooose.model('Profile', userSchema);
export default Profile;