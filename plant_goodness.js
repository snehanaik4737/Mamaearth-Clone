
    var data=[{
        "image":"	https://mamaearthp.imgix.net/wysiwyg/Ritu_Image.png",
        "h2":"A much needed initiative in the present times,just by taking a small step this can bring about a big change",
    },
{
        "image":"https://mamaearthp.imgix.net/wysiwyg/2nd_Quote_1.jpg",
        "h2":"Thanku for initiating much needed programme which contributes back to our environment",

    }]
    var i=0
    var divv=document.createElement("div")
    divv.id="main1"

var img=document.createElement("img")
img.src=data[i].image

var hea=document.createElement("h2")
hea.innerText=data[i].h2
divv.append(img,hea)

document.getElementById("btn").addEventListener("click",myfun)
function myfun(){
    i++
   document.getElementById( "middle").innerHTML=""
    if(i==data.length){

        i=0
    }

    // data.forEach(ele => {
       

       
        img.src=data[i].image

      
        hea.innerText=data[i].h2
        divv.append(img,hea)

document.getElementById("middle").append(divv)
//         for (var i=0;i<data.length;i++){
//         document.getElementById("seventh").append.data[i]
// if(data[i]==data.length){
//     data[i]==0
// }else{

// i++
// }
    
    
// }
        
//     });
  
  
}