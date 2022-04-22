const {Router} = require("express");
// importar nodemailer
const nodemailer= require("nodemailer");
// Enrutador
const router = Router();

// Esta es la ruta que se expresa en html (AL LADO DEL METODO POST)
router.post("/send_email" , async(req, res) =>{
    // Esto para acceder de formas mas rapida a las variables del objeto req.body
    const { name , email , phone, message} = req.body;
    
    content_HTML = `
        <h1> User Information </h1>
            <ul> 
                <li> Username: ${name}</li>
                <li> User Email: ${email}</li>
                <li> User Phone: ${phone}</li>
            </ul>

            <p> Message : ${message} </p>
        `;

    const transporter = nodemailer.createTransport({
        host: "smtp.zoho.com", 
        port : 465 , 
        secure: true, 
        auth: {
            user : "bryan@pruebasaa.com" ,
            pass : "Garengaren33!"
        },
        tls : {
            rejectUnauthorized: false
        }

    });

    const info = await transporter.sendMail({
        from: " 'Prueba Saa' <bryan@pruebasaa.com>" ,
        to : ["gustavo.leal@dobetter.cl" , "bryan.saa@dobetter.cl" ] ,   
        subject: "Prueba envio de correo desde servidor", 
        html : content_HTML

    });

    console.log(`Message received ${info.messageId}`);



    res.send("./success.html");
})

module.exports = router;