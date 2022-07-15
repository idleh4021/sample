"use strict";


const users ={
    id:["idleh","user","admin"],
    pwd :["1234","444","567"],
};

const output={

    hello : (req,res)=>{
        res.render("home/index");
    },
    
    
    login :(req,res)=>{
        res.render("home/login");
    },
};

const process ={

    login : (req,res)=>{
       const id = req.body.id,
       pwd = req.body.pwd;

       if(users.id.includes(id)){
        const idx = users.id.indexOf(id);
        if(users.pwd[idx]===pwd){
            return res.json({
                success : true,
            })
        }

        return res.json({
            success : false,
            msg : "로그인에 실패 했습니다.",
        });

       }
    },
};



module.exports={        // 본 소스 파일의 function을 export 
    output,
    process,
};