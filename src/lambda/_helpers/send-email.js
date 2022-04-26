const nodemailer = require('nodemailer');

module.exports = sendEmail;

function sendEmail({ to, subject, html, from = process.env.REACT_APP_EMAIL_FROM }) {
  const transporter = nodemailer.createTransport({
    "host": process.env.REACT_APP_HOST,
    "port": process.env.REACT_APP_PORT,
    "auth": {
      "user": process.env.REACT_APP_USER,
      "pass": process.env.REACT_APP_PASWD
    }
  });
  transporter.sendMail({ from, to, subject, html });
};