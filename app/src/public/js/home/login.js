"use strict";

const id = document.querySelector("#id");
const pwd = document.querySelector("#pwd");
const btn = document.querySelector("button");


btn.addEventListener("click",login);

function login(){
    const req = {
        id : id.value,
        pwd : pwd.value,
    }
    
    fetch("/login",{
        method : "POST",
        headers :{
            "Content-Type" : "application/json",
        },
        body : JSON.stringify(req),
    }).then((res)=>res.json()).then((res)=>console.log(res));




}