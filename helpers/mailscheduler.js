import Profile from '../models/user';
import nodemailer from 'nodemailer';

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "arpitagrawal312@gmail.com",
      pass: "17ucs035"
    }
  });

const sendMail =  (name, email) => {
    let mailOptions = {
        from: "arpitagrawal312@gmail.com",
        to: email,
        subject: `Water Drinking App!!`,
        text: `Hi ${name}, Time to Drink Water!! Be healthy!!`
    };
      transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
          throw error;
        } else {
          console.log("Email successfully sent!");
      }
  });
  
};

export default async () => {
    const users =  await Profile.find({subscription: true});
    users.forEach( user => sendMail(user.name, user.email));
};
