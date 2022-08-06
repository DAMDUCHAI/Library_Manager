const authorize=(req,res,next)=>{
    const {user}= req;
    if(["ADMIN","SUPER_ADMIN"].findIndex(ele=>ele===user.Role ) != -1){
   next();
    }
    else{
        res.status(403).send('Bạn đã đăng nhập, nhưng không có quyền.')
    }
}

module.exports={
    authorize
}