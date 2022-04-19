// import res = require("express/lib/response")
//  const tokens=require("./src/index")
 let action=document.querySelector("#signup")
 action.addEventListener("click",function(){
   Reg()
 })
  async function Reg(){

    try {
        
      let register_data = {

         
          phone:document.getElementById("phone").value,
          name:document.getElementById("user").value,
         email:document.getElementById("email").value,
         password:document.getElementById("pass").value,
         
         
     
     }

      register_data = JSON.stringify(register_data);

        let res = await fetch("http://localhost:5000/register", {

            method:'POST',
            body: register_data,

            headers : {
                "Content-Type": "application/json",
            },
        });
        let data = await res.json();
        console.log(data)
         if(!data.message){
           window.location.href="login.html"
         }
        else {
          alert("Details already present")
          // console.log(data)
        }
        
    } catch (error) {
        console.log("error:", error);
        
    }
}

let action2=document.querySelector("#signupgoogle")
 action2.addEventListener("click",function(){
   Register()
 })

 async function Register(){
  try {
    let res = await fetch("http://localhost:5000/auth/google")
     let output =  res.url
     window.location.assign(output)
    //  console.log(output)
    // if(user){
    //   window.location.href="index.html"
    // }
    // else{
    //   console.log("Invalid user")
    // }
    // const tokening=(token)=>{
    //   if(token){
    //     window.location.href="index.html"
    //   }
    // }
    
  } catch (error) {
    console.log({message:error.message})
  }
 }
