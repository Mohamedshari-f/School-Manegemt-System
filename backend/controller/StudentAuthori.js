const customerModel = require("../Models/StudentAuthModel")
const bcyrpt = require("bcryptjs")

const createstudent = async (req, res) => {
    try {
        const { name, phone, email, password } = req.body

        // check if email already exists
        const existEmail = await studentModel.findOne({ email })
        if (existEmail) {
            return res.status(400).send({ error: "the email is already" })
        } 
        
            // hash password
            const hashPassword = await bcyrpt.hash(password, 10)

            const newData = new studentModel({
                name,
                phone,
                email,
                password: hashPassword
            })

            await newData.save()
            res.send(newData)
        

    } catch (error) {
       
       return res.status(500).json({ message: "server error", error: error.message })
    }
}

const studentLogin = async (req,res) => {
    try{
        const {email,password } = req.body

        // email-check

        const existEmail = await studentModel.findOne({ email })
        if (!existEmail) {
            return res.status(400).json({ error: "invalid email" })
        } 

        const checkPassword = await bcyrpt.compare(password,existEmail.password )
        if(!checkPassword){
             return res.status(400).json({ error: "invalid password" })

        }
        
        res.send({
            message: "succes login",
            student: {
                name: existEmail.name,
                phone: existEmail.phone,
                email: existEmail.email
            }
        })

    }catch(error){
        res.status(400).json({error: "server error"})
    }
}

const readstudent = async (req,res) => {
    
        const getstudent = await studentModel.find()
        if(getstudent){
            res.send(getstudent)
        }
}

module.exports = { createstudent, studentLogin,readstudent }
