"use strict";

const output={

    hello : (req,res)=>{
        res.render("home/index");
    },
    
    
    login :(req,res)=>{
        res.render("home/login");
    },
}

const process ={

    login : (req,res)=>{
        console.log("ctrl");
        console.log(req.body);
    },
};



module.exports={        // 본 소스 파일의 function을 export 
    output,
    process,
};