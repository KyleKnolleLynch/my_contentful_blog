import nodemailer from 'nodemailer'

export default async (req, res) => {
  const { name, email, phone, message } = req.body

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.FORWARDING_EMAIL,
      pass: process.env.FORWARDING_PASS,
    },
  })

  try {
    const emailRes = await transporter.sendMail({
      from: {
        name: name,
        address: process.env.FORWARDING_EMAIL,
      },
      to: process.env.EMAIL_ADDRESS,
      replyTo: email,
      subject: `Contact form submission from ${name}`,
      html: `<p>You have a new contact form submission</p><hr>
      <p><strong>Name: </strong> ${name} </p><br>
      <p><strong>Phone: </strong> ${phone} </p><br>
      <p><strong>Message: </strong> ${message} </p><br>
      `,
    })

    console.log('Message Sent', emailRes.messageId)
  } catch (error) {
    console.log(error)
  }

  res.status(200).json(req.body)
}
