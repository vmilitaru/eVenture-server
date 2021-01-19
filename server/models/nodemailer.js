const nodemailer = require('nodemailer')

const emailAddress = process.env.EMAIL_ADDRESS
const emailPassword = process.env.EMAIL_PASSWORD

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: emailAddress,
        pass: emailPassword
    }
})
/* 
var mailOptions = {
    from: emailAddress,
    to: emailAddress,
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
}
 */

function newTicketEmail(attendeeEmail, event) {
    const mailOptions = {
        from: emailAddress,
        to: attendeeEmail,
        subject: `eVenture ticket for ${event.title}`,
        text: `Thank you for signing up for ${event.title}! 
        This event is taking place on ${event.date} at ${event.time}. We look forward to hearing our speakers, ${event.speaker} at the event. 
        The School of Code, eVenture looks forward to seeing you at the community class!
        If you have any questions about the event do get in touch. 
        If you can no longer attend the event log back in to your account where you can cancel your ticket for ${event.title}
        
        Thank you for signing up, do remember you can invite friends to the classes to as these classes are here to help you discover, learn, and grow. 

        The eVenture team`
    }
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error)
        } else {
            console.log('Email sent: ' + info.response)
        }
    })
}

module.exports = { newTicketEmail }
