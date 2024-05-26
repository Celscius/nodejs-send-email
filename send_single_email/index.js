//var nodemailer = require('nodemailer');
import nodemailer from 'nodemailer';
import transporter from '../config.js'

send();

async function send() {
    const result = await transporter.sendMail({
        from: 'abc@gmail.com',
        to: 'lightpath20@gmail.com',
        subject: 'Hello World',
        text: 'Hello World'
    });

    console.log(JSON.stringify(result, null, 4));
}