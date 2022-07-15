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

    console.log(req);
}