// const mongoDB = require("../dbConfig");
// const onlineDB = require("../onlineDB");
// const otpFun = require("../Modules/Otp");
// const bcrypt = require('bcrypt');

const rootApi = function(req,res) {
    res.send({ message:'/ root api called by VAN' });
}

const rawdataApi = function(req, res) {
    const rawdata = req.body;
    res.send({ message: rawdata });
}

// const formData = function(req, res) {
//     const rawdata = req.body;
//     res.send({ message: rawdata });
// }

// const registerApi = async function(req, res){
//     const newUser = req.body;
//     const { userName, firstName, lastName, email, password } = newUser;
//     const user = await onlineDB();
//     const bcryptPassword = await bcrypt.hash(password, 12)
//     const otp = otpFun();
//     const active = false;
//     user.insertOne({ 
//         userName,
//         firstName,
//         lastName,
//         email,
//         bcryptPassword,
//         active,
//         otp
//      });
//     res.send({ message:"user registered successfully", status:1, user: userName, otp:otp })
// }

// const verificationApi = async function( req, res ) {
//     const { otp, userName } = req.body;
//     const user = await onlineDB();
//     const userDetails = await user.findOne({ userName });
//     if (userDetails) {
//         if (userDetails.otp === otp) {
//             await user.updateOne(
//                 { userName: userDetails.userName },
//                 { $set: { otp: "", active: true } }
//             );
//             return res.send({ status: 1, message: "User verified" });
//         } else {
//             return res.send({ status: 0, message: "Incorrect otp" });
//         }
//     } else {
//         return res.send({ status: 0, message: "User not found" });
//     }
// }

// const finduserApi = async function(req, res){
//     const email = req.params.email;
//     const user = await mongoDB();
//     const userDetails = await user.findOne({ email });
//     if (userDetails){
//         res.send({ message:"user found successfully", status:1, user: userDetails })
//     } else {
//         res.send({ message:"user not found", status:0 })
//     }
// }

// const loginApi = async function (req, res) {
//     const {userName ,password} = req.body;
//     const user = await onlineDB();
//     const userDetaile = await user.findOne({userName});
//     if (userDetaile) {
//         bcrypt.compare(password, userDetaile.bcryptPassword).then(isPasswordMatch => {
//             if (isPasswordMatch){
//                 res.send({ status:1, message:"User logged in successfully",password:isPasswordMatch })
//              } else {
//                     res.send({ status:0, message:"Invalid password" ,password:isPasswordMatch })
//              }
//         })
//     } else {
//         res.send({ status:0, message:"User not found" })
//     }
// }

// const deleteApi = async function (req, res) {
//     const user = await onlineDB();
//     const { userName, password } = req.body;
//     const userDetails = await user.findOne({userName});
//     if (userDetails) {
//         bcrypt.compare(password, userDetails.bcryptPassword).then((isPasswordMatch) => {
//             if (isPasswordMatch){
//                 user.deleteOne({userName});
//                 res.send({ status:1, message:"User deleted successfully" });
//             } else {
//                 res.send({ status:0, message:"Invalid password" });
//             }
//         })
//     } else {
//         res.send({ status:0, message:"User not found" });
//     }
// }

module.exports = {
    rootApi,
    rawdataApi,
    // formData,
    // registerApi,
    // verificationApi,
    // finduserApi,
    // loginApi,
    // deleteApi
}