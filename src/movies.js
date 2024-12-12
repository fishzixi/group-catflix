var userId = document.querySelector("#user");
var userCla = document.querySelector(".userCla");
var userSign = document.querySelector("#user-sign");

userId.addEventListener("click",function(e){
    // console.log(e.target.tagName);
    e.preventDefault();
    if(e.target.tagName==="A" || e.target.tagName==="svg" || e.target.tagName==="user"){
        // console.log(userSign.style.display)
        if(userSign.style.display ==="block"){
            userSign.style = "display:none";
        }else{
           userSign.style = "display:block";
        }
        
    }
})

var box = document.querySelector(".bomb-box");
var signIn = document.querySelector("#user-sign");
var svgtwo = document.querySelector(".eye svg");
var password = document.querySelector("#password");
var svgone = document.querySelector(".one");

signIn.addEventListener("click",function(e){
    if(e.target.tagName==="LI" ||e.target.tagName==="SPAN"){
        box.style="visibility:visible"
        document.body.style="background-color:rgba(0,0,0,0.5)"
        signIn.style="display:none"
    }
})

svgtwo.addEventListener("click",function(e){
    if(password.type==="text"){
        password.type = "password";
    }else{
        password.type = "text";
    }
    
})

svgone.addEventListener("click",function(e){
    box.style="visibility:hidden"
    document.body.style="";
})


document.addEventListener("click", function(e) {
    // 如果点击的不是表单且也不是触发显示表单的元素，隐藏表单
    if (!box.contains(e.target) && !signIn.contains(e.target)) {
        box.style="visibility:hidden"// 隐藏表单
        document.body.style.backgroundColor = ""; // 恢复body的背景色
    }
});
