// src/services/emailService.js
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password'
  }
});

const sendVerificationEmail = (email, token) => {
  const url = http://localhost:3000/verify-email?token=${token};

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: email,
    subject: 'Email Verification',
    html: <p>Click <a href="${url}">here</a> to verify your email.</p>
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};

export { sendVerificationEmail };
