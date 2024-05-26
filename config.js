import nodemailer from 'nodemailer';

const service = "gmail"
const user = "lightpath20@gmail.com"
const pass = "gxpd dlbz rjoc mqlf"

const transporter = nodemailer.createTransport({
  service: service,
  auth: {
    user: user,
    pass: pass
  }
});

export default transporter;