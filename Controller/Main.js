const nodemailer = require("nodemailer");

exports.fetchMainPage = (req, res, next) => {
  try {
    res.render("home/index");
  } catch (err) {}
};

exports.sendMail = async (req, res, next) => {
  console.log();
  try {
    const nodeTransporter = await nodemailer.createTransport({
      host: `${process.env.SMTP}`,
      port: 587,
      auth: {
        user: "mecurymecury0@gmail.com",
        pass: `${process.env.PASS}`,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
    let mailOptions = {
      from: "Mecury",
      subject: req.body.subject,
      to: req.body.emails,
      text: req.body.message,
    };
    await nodeTransporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      }
      console.log(info.response);
      res.status(200).send("Thanks");
    });
  } catch (err) {}
};
