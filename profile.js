import footer_body from "./footer/footer_components/footer_body.js";
import header from "./header.js"
document.getElementById("nav").innerHTML = header()

document.getElementById("footer").innerHTML = footer_body();
let parent = document.getElementById("active_link")
let nam = "Name";
let num = "123456789"
let email_id =  "demo@gmail.com"
let data = JSON.parse(localStorage.getItem("usertoken"))
var btns = document.getElementsByClassName("menu_item");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}



parent.innerHTML = profile();  
// profile(parent)


console.log(data)
if(data !== null)
{
   nam = data[0].username || "Name";
   num = data[0].mobile || "123456789"
   email_id = data[0].email || "demo@gmail.com"
}
console.log(nam,num,email_id)
    function profile(parent){
      // let profile_frame = document.createElement("div");
      // profile_frame.setAttribute("id","card")

      // let pro_img = document.createElement("div")
      // pro_img.setAttribute("class","card_img")
      // let pro_pic = document.createElement("img")
      // pro_pic.src="https://mamaearthp.imgix.net/wysiwyg/male.png?auto=format";
      // pro_img.append(pro_pic);

      // let crd_dtl  = document.createElement("div")
      // crd_dtl.setAttribute("class","card_details")

      // let p_name = document.createElement("h3")
      // p_name.innerText = `${nam}`;

      // let e_div = document.createElement("div")
      // let spn1 = document.createElement("span")
      // spn1.innerText = "Email : "

      // let spn2 = document.createElement("span")
      // spn2.innerText = `${email_id}`

      // let mob = document.createElement("p")
      // mob.innerText = `Mobile : ${num}`

      // e_div.append(spn1,spn2,mob)

      // crd_dtl.append(p_name,e_div)

      // let edit_div = document.createElement("div")

      // let edit_btn = document.createElement("button")
      // edit_btn.setAttribute("id","edit_button")
      // edit_btn.innerText = "Edit"
      // edit_div.append(edit_btn)
      
      // profile_frame.append(pro_img,crd_dtl,edit_div)
      // console.log(parent , profile_frame)
      // document.getElementById("active_link").innerHTML = (profile_frame)
      if(data !== null)
{
   nam = data[0].username || "Name";
   num = data[0].mobile || "123456789"
   email_id = data[0].email || "demo@gmail.com"
}
      
      return `<div id="card">
      <div class="card_img">
          <img src="https://mamaearthp.imgix.net/wysiwyg/male.png?auto=format" alt="">
      </div>
      <div class="card_details">
          <h3>${nam}</h3>
          <div><span>Email : </span>
          <span>${email_id}</span>
          <p>Mobile : ${num}</p>
        </div>
      </div>
      <div>
      <button id="edit_button">EDIT </button>
      </div>
      </div>`
    }
    
    document.getElementsByClassName("menu_item")[0].addEventListener("click",profile_show)
    document.getElementsByClassName("menu_item")[1].addEventListener("click",mama_cash)
    document.getElementsByClassName("menu_item")[2].addEventListener("click",orders)
    document.getElementsByClassName("menu_item")[3].addEventListener("click",address)
    document.getElementsByClassName("menu_item")[4].addEventListener("click",contact)

    function profile_show(){
      parent.innerHTML = profile();
    }

    function orders(){
      parent.innerHTML = orders_fn();
    }
    function orders_fn(){
      return `<div id="frame">
      <div id="order_div">
          <div id="empty_order">
              <img src="https://mamaearth.in/static/mamaearth/empty-box.svg" alt="">
          </div>
          <div>No Orders Placed yet!</div>
      </div>
  </div>`      
    }

    function address(){
      parent.innerHTML = show_address()
    }

    function show_address(){
      return ` <div id="frame">
      <div id="order_div">
          <div id="empty_order">
             <i class="fa-solid fa-location-dot"></i>
          </div>
          <div>No Address Available</div>
          <button>+ Add New Address</button>
      </div>
  </div>`
    }


    function contact()
    {
      window.location.href = "contact_us.html";      
    }

    function mama_cash(){
      parent.innerHTML = cash()
    }

    function cash(){
      return `<div id="frame">
      <div>
          <h3 class="top">Total Available Mama Cash</h3>
          <p id="wallet"><i class="fa-solid fa-wallet"></i> <span>₹ 0.00</span></p>
          <p id="intruction">Cashback will be credited in the Mamapay wallet account within 7 days of all products being delivered for eligible orders.</p>
      </div>
      <button>SHOP NOW</button>
  </div>`     
    }