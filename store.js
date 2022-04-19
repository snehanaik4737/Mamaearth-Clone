 
    document.getElementsByClassName("one")[0].addEventListener("click",gaurgaon)
    document.getElementsByClassName("one")[1].addEventListener("click",newdelhi1)
    document.getElementsByClassName("one")[2].addEventListener("click",noida1)
    document.getElementsByClassName("one")[3].addEventListener("click",chandigarh1)
   



    let parent=document.getElementById("badlav")
   gaurgaon()
    
    function gaurgaon(){
      parent.innerHTML=gaurgaon1();}
function newdelhi1(){
      parent.innerHTML=newdelhi();}
function noida1(){
      parent.innerHTML=noida();}

    function chandigarh1(){
      parent.innerHTML=chandigarh();}

      function gaurgaon1(){
          return `
          <div>
                    

            <img src="https://mamaearth.in/static/MapIcons/location.svg" alt="">
                    <h3>Shop Number B-8, Ground Floor, Ardee Mall Sec-52, Gurgaon, Haryana, 122011</h3>
                    <img src=" https://mamaearth.in/static/MapIcons/timeWatch.svg" alt="">
                    <h3>11:00 AM - 11:00 PM</h3>
                    <img src="  https://mamaearth.in/static/MapIcons/call.svg" alt="">
                    <h3>0124-448-8102</h3>
                    <img src="https://mamaearth.in/static/MapIcons/email.svg" alt="">
                    <h3>ggn.ardee@mamaearth.in</h3>
                </div>
        
          `
      }

      function newdelhi(){
return`  
                <div>
                    
                    <img src="https://mamaearth.in/static/MapIcons/location.svg" alt="">
<h3>Shop No -3, 15, U.B Bunglow Road, Jawahar Nagar, New Delhi, Delhi, 110007</h3>
<img src="  https://mamaearth.in/static/MapIcons/call.svg" alt="">
<h3>011-4106-3565</h3>
<img src="https://mamaearth.in/static/MapIcons/email.svg" alt="">
<h3>del.kamlanagar1@mamaearth.in</h3>

                </div>`
      }
function noida(){
  return  `
                <div>
                    <img src="https://mamaearth.in/static/MapIcons/location.svg" alt="">
<h3>Unit No - 3K7A, Second Floor, Noida, Uttar Pradesh, 201304</h3>

<h3>11:00 AM - 12:00 AM</h3>
<img src="https://mamaearth.in/static/MapIcons/email.svg" alt="">
<h3>noida.moi@mamaearth.in</h3>
                </div> `
}

function chandigarh(){
   return `  <div>
    
<img src="https://mamaearth.in/static/MapIcons/location.svg" alt="">
<h3>Unit No -KS2A, Second Floor, Plot No.178-178A, Industrial & Business Park, Phase-I, Chandigarh, Punjab, 160002</h3>
<img src="https://mamaearth.in/static/MapIcons/email.svg" alt="">
<h3>chd.elante@mamaearth.in</h3>
                    
                </div>`
}



// let key="5697d8eb3f7d877be3e26fc91dfe841f";
     let iframe=document.getElementById("gmap_canvas")
// async function (){
//     try{
//     let info=document.getElementById("one").value
//     let res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${info}&appid=${key}`);
//     let data=await res.json()
// //    console.log(data)
// //    console.log("data:",data)
//     }
//     catch(err){
// console.log("err:",err)
//     }
// }



// let key="5697d8eb3f7d877be3e26fc91dfe841f";
//      let iframe=document.getElementById("gmap_canvas")
// async function getweather(){
//     try{
//     let city=document.getElementById("one").value
//     let res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`);
//     let data=await res.json()
//     merge(data)
// //    console.log("data:",data)
//     }
//     catch(err){
// console.log("err:",err)
//     }
// }
// function merge(data){
// console.log("data:",data)
// // cont.innerHTML=null

// let name=document.createElement("p")

// name.innerText=data.name

let d=document.querySelectorAll("one")
for(var i=0;i<d.length;i++){

        
}

iframe.src=`https://maps.google.com/maps?q=${d[i]}}&t=&z=13&ie=UTF8&iwloc=&output=embed`



