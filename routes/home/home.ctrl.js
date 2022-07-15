"use strict";

const hello = (req,res)=>{
    res.render("home/index");
};


const login=(req,res)=>{
    res.render("home/login");
}

module.exports={        // 본 소스 파일의 function을 export 
    hello,
    login,
};