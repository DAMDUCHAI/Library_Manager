const jwt = require("jsonwebtoken"); //token

const authenticate=(req,res,next)=>{
const token= req.header('token');
console.log('token :',token);
try{
    const decode=jwt.verify(token,"team3_swp391");
    console.log('decode :',decode);
    if(decode){
        req.user =decode;
        return next();
    }else{
        res.status(401).send("Ban chua dang nhap")

    }
}catch(err){
    res.status(401).send("Ban chua dang nhap")
}

};

module.exports={
    authenticate,
}