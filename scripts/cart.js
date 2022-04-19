// import footer_body from "../footer/footer_components/footer_body.js";
// import header from "../header.js"
// document.getElementById("nav").innerHTML = header()

// document.getElementById("footer").innerHTML = footer_body();


let parent =document.getElementById("payment-cont");
parent.innerHTML=upi_show();



document.getElementById("UPI").addEventListener("click",upi);
document.getElementById("credit").addEventListener("click",credit);

document.getElementById("net-banking").addEventListener("click",net_banking);
document.getElementById("wallets").addEventListener("click",wallets);
document.getElementById("cash-on").addEventListener("click",cash_on);


function upi(){
    document.getElementById("payment-cont").innerHTML= upi_show();

}
function credit(){
    document.getElementById("payment-cont").innerHTML= credit_show();

}

function net_banking(){
    document.getElementById("payment-cont").innerHTML= net_banking_show();

}
function wallets(){
    document.getElementById("payment-cont").innerHTML= wallets_show();

}

function cash_on(){
    document.getElementById("payment-cont").innerHTML= cash_on_show();

}

function  upi_show(){
    return `<p>Pay Using UPI ID</p>
    <!-- <div> Applied : Extra 5% Off with Your Order</div>  -->
    <h3>Enter UPI ID  (Google Pay, BHIM, PhonePe & more)</h3>
    <input type="text" id="upi-id" placeholder="Enter your UPI Id">
    <button id="upi-order"> PLACE ORDER</button>
    <div id="check">
        <img src="https://mamaearthp.imgix.net/wysiwyg/noun_trusted_27146262x_6Ekja92.png?auto=format" alt="">
       <h4>100% Payment Protection, Easy Return Policy</h4>
       </div>
       <div id="visa">
       <img src="https://mamaearthp.imgix.net/wysiwyg/visa2x.png?auto=format&fit=scale" alt="">
       <img src="	https://mamaearthp.imgix.net/wysiwyg/master_card2x.png?auto=format&fit=scale" alt="">
       <img src="	https://mamaearthp.imgix.net/wysiwyg/american_express2x.png?auto=format&fit=scale" alt="">
       <img src="https://mamaearthp.imgix.net/wysiwyg/rupay2x.png?auto=format&fit=scale" alt="">
       <img src="	https://mamaearthp.imgix.net/wysiwyg/rupay2x.png?auto=format&fit=scale" alt="">
       <img src="	https://mamaearthp.imgix.net/wysiwyg/net_banking2x.png?auto=format&fit=scale" alt="">
       </div>`
}



 function credit_show(){
     return `<p>Pay Using Credit Or Debit Cards</p>

     <input type="number" id="numbercard"placeholder="Card Number">
     <input type="text" id="MM" placeholder="MM/YY">
     <input type="password" id="CVV" placeholder="CVV">
     <input type="text" id="name" placeholder="Name on the card">
     <button onclick="orderplace()" id="upi_order"> PLACE ORDER</button>
    
     <div id="check">
         <img src="https://mamaearthp.imgix.net/wysiwyg/noun_trusted_27146262x_6Ekja92.png?auto=format" alt="">
        <h4>100% Payment Protection, Easy Return Policy</h4>
        </div>
        <div id="visa">
        <img src="https://mamaearthp.imgix.net/wysiwyg/visa2x.png?auto=format&fit=scale" alt="">
        <img src="	https://mamaearthp.imgix.net/wysiwyg/master_card2x.png?auto=format&fit=scale" alt="">
        <img src="	https://mamaearthp.imgix.net/wysiwyg/american_express2x.png?auto=format&fit=scale" alt="">
        <img src="https://mamaearthp.imgix.net/wysiwyg/rupay2x.png?auto=format&fit=scale" alt="">
        <img src="	https://mamaearthp.imgix.net/wysiwyg/rupay2x.png?auto=format&fit=scale" alt="">
        <img src="	https://mamaearthp.imgix.net/wysiwyg/net_banking2x.png?auto=format&fit=scale" alt="">
        </div> 
   
      `
     
 }


  function net_banking_show(){
      return `<p>Net Banking</p>
      <div id="net-bank-img">
          <div>
          <img src="https://mamaearthp.imgix.net/wysiwyg/hdfc-logo.png?auto=format" alt="">
          <p>HDFC</p>
          </div>
  
          <div>
          <img src="	https://mamaearthp.imgix.net/wysiwyg/sbi-logo.png?auto=format" alt="">
          <p>SBI</p>
           </div>
  
           <div>
          <img src="https://mamaearthp.imgix.net/wysiwyg/icici-logo.png?auto=format" alt="">
          <p>ICICI</p>
          </div>
  
           <div>
           <img src="https://mamaearthp.imgix.net/wysiwyg/axis-logo.png?auto=format" alt="">
           <p>AXIS</p>
            </div>
                  
      </div>
  
  <select name="" id="banks">
    <option value="">Select Bank</option>
    <option value="HDFC">HDFC</option>
    <option value="SBI">SBI</option>
    <option value="ICICI">ICICI</option>
    <option value="AXIS">AXIS</option>
  </select>
  
   <button id="upi-order"> PLACE ORDER</button>
      <div id="check">
          <img src="https://mamaearthp.imgix.net/wysiwyg/noun_trusted_27146262x_6Ekja92.png?auto=format" alt="">
         <h4>100% Payment Protection, Easy Return Policy</h4>
         </div>
         <div id="visa">
         <img src="https://mamaearthp.imgix.net/wysiwyg/visa2x.png?auto=format&fit=scale" alt="">
         <img src="	https://mamaearthp.imgix.net/wysiwyg/master_card2x.png?auto=format&fit=scale" alt="">
         <img src="	https://mamaearthp.imgix.net/wysiwyg/american_express2x.png?auto=format&fit=scale" alt="">
         <img src="https://mamaearthp.imgix.net/wysiwyg/rupay2x.png?auto=format&fit=scale" alt="">
         <img src="	https://mamaearthp.imgix.net/wysiwyg/rupay2x.png?auto=format&fit=scale" alt="">
         <img src="	https://mamaearthp.imgix.net/wysiwyg/net_banking2x.png?auto=format&fit=scale" alt="">
         </div>
   `
  }


   function wallets_show(){
       return `  <p>Pay Using Online Wallets</p>
       <div id="wallets-img">
       <img src="https://mamaearth.in/static/mamaearth/phonepe.png" alt="">
       <img src="	https://mamaearth.in/static/mamaearth/azpay.png    " alt="">
       <img src="https://mamaearth.in/static/mamaearth/freecharge.png" alt="">
       <img src="https://mamaearth.in/static/mamaearth/mobikwik.png" alt="">
      </div>
       <button id="upi-order"> PLACE ORDER</button>
       <div id="check">
           <img src="https://mamaearthp.imgix.net/wysiwyg/noun_trusted_27146262x_6Ekja92.png?auto=format" alt="">
          <h4>100% Payment Protection, Easy Return Policy</h4>
          </div>
          <div id="visa">
          <img src="https://mamaearthp.imgix.net/wysiwyg/visa2x.png?auto=format&fit=scale" alt="">
          <img src="	https://mamaearthp.imgix.net/wysiwyg/master_card2x.png?auto=format&fit=scale" alt="">
          <img src="	https://mamaearthp.imgix.net/wysiwyg/american_express2x.png?auto=format&fit=scale" alt="">
          <img src="https://mamaearthp.imgix.net/wysiwyg/rupay2x.png?auto=format&fit=scale" alt="">
          <img src="	https://mamaearthp.imgix.net/wysiwyg/rupay2x.png?auto=format&fit=scale" alt="">
          <img src="	https://mamaearthp.imgix.net/wysiwyg/net_banking2x.png?auto=format&fit=scale" alt="">
          </div> 
     `
   }


     function cash_on_show(){
          return ` <p> Cash On Delivery</p>
          <div id="cash-text">
              <h5>Do you know you get an Extra 5% Off when you pay online? For everyone’s safety, we advise paying online to limit contact and help stop the spread of the virus.</h5>
          </div>
          <button id="upi-order"> PLACE ORDER</button>
          <div id="check">
              <img src="https://mamaearthp.imgix.net/wysiwyg/noun_trusted_27146262x_6Ekja92.png?auto=format" alt="">
             <h4>100% Payment Protection, Easy Return Policy</h4>
             </div>
             <div id="visa">
             <img src="https://mamaearthp.imgix.net/wysiwyg/visa2x.png?auto=format&fit=scale" alt="">
             <img src="	https://mamaearthp.imgix.net/wysiwyg/master_card2x.png?auto=format&fit=scale" alt="">
             <img src="	https://mamaearthp.imgix.net/wysiwyg/american_express2x.png?auto=format&fit=scale" alt="">
             <img src="https://mamaearthp.imgix.net/wysiwyg/rupay2x.png?auto=format&fit=scale" alt="">
             <img src="	https://mamaearthp.imgix.net/wysiwyg/rupay2x.png?auto=format&fit=scale" alt="">
             <img src="	https://mamaearthp.imgix.net/wysiwyg/net_banking2x.png?auto=format&fit=scale" alt="">
             </div> 
      
         `
     }



     
     var cart_arr=JSON.parse(localStorage.getItem("cartdata"))||[];



 document.getElementById("head-sum").innerHTML=`Order Summary(${cart_arr.length}items)`;

 console.log(cart_arr);
 
 appendcartItems(cart_arr)

 function  appendcartItems(data){
   //  console.log(data);
   document.querySelector("#items").innerHTML=""
   data.map(function (element,i){
    
    var div = document.createElement("div");
    div.setAttribute("id","flex");
    
    var div1 = document.createElement("div");
    div1.setAttribute("id","img_div");
    var image= document.createElement("img");
    image.src=element.img;
    
   
    
    
    let div2 = document.createElement("div");
     div2.setAttribute("id","desc-div");
    
     let description = document.createElement("h4");
    description.innerText=element.desc;
    
    var div3 = document.createElement("div");
    div3.setAttribute("id","delete-flex");

    let pricetag = document.createElement("h4");
    pricetag.style.lineHeight="0px";
    pricetag.innerText=`₹ ${element.price}`;


    var btnd=document.createElement("button");
    btnd.setAttribute("id","btn")
    btnd.innerHTML = '<img src="https://toppng.com//public/uploads/preview/recycling-bin-vector-delete-icon-png-black-11563002079w1isxqyyiv.png" />';

    btnd.addEventListener("click",del);
    function del(){
        document.getElementById("flex").innerHTML="";
        data.splice(i,1);
        localStorage.setItem("cartdata",JSON.stringify(data));
        document.getElementById("head-sum").innerHTML=`Order Summary(${data.length}items)`;
        appendcartItems(data)
    }


    div1.append(image);
    div3.append(pricetag,btnd);

    div2.append(description,div3);
  
    div.append(div1,div2)
    document.getElementById("items").append(div);
        
    });
    
     }

   function deleteItem(index){
      cart_arr.splice(index,1);
    localStorage.setItem("cartdata",JSON.stringify(cart_arr));
    appendcartItems(cart_arr)
    document.querySelector("#head-sum").textContent=`Order Summary(${cart_arr.length}items)`;
   
}
 

var tp;
tp=cart_arr.reduce(function(ac,cv){
    return ac + Number(cv.price);
},0)
localStorage.setItem("total_price",tp);

console.log(tp);
 
 



var count=0;
var cd=0;
    function Apply(){
        //console.log("cli");
        var C=document.querySelector(".coup_vam_4").value;
        if(C=="Masai30"&&count==0){
            count++;
            alert("Coupon Code Applied")
            cd=Math.ceil(0.3*tp);
            console.log(cd);
            tp=tp-cd;
            localStorage.setItem("total_price",tp);
            console.log(tp);
            document.querySelector(".cd_vam_4").textContent="-₹"+cd;
            document.querySelector(".tp_vam_4").textContent="₹"+tp;
        }
    
         else if(C=="masai30"&&count>=1){
            count++;
            alert("Coupon Code can only be applied once")
           
            } 
        
        else{
            alert("Coupon Code Invalid");
        }
        
    }
    document.querySelector(".tm_vam_4").textContent="₹"+tp;
 
    document.querySelector(".tp_vam_4").textContent="₹"+tp;
    document.querySelector(".cd_vam_4").textContent="-₹"+cd;



 function orderplace(){
     console.log("a");
    var a= document.getElementById("fname").value;
    var b=document.getElementById("lname").value;
    var c=document.getElementById("email").value;
    var d=document.getElementById("number").value
    var e=document.getElementById("pin").value;
    var f=document.getElementById("city").value;
    var f=document.getElementById("state").value;
    var g=document.getElementById("address").value;
    
    var num =document.getElementById("numbercard").value;
    var month= document.getElementById("MM").value;
    var pass= document.getElementById("CVV").value;
    var user= document.getElementById("name").value;

   if( a=="" || b=="" || c=="" || d=="" || e=="" || f=="" || g==""){

    alert("All the address fields are mandatory")
   }

    else if(num==""||month==""||pass==""||user==""){
        alert("All payment fields are mandatory")
    }
  
    else if(num=="123456789"&&pass=="123"){
     window.location.href="otp.html";
 
    }
    else{
      alert("Wrong Details");
    }
}





