function header(){

  return `
   <div>

  <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
    rel="stylesheet">  
    <style>
    .navbar {
      overflow: hidden;
      background-color: white; 
      border-bottom: 0.5px solid rgba(0, 0, 0, 0.13);
      border-top: 0.5px solid rgba(0, 0, 0, 0.13);
      font-weight: 600;
      font-family: 'Roboto', sans-serif;;
    }
    .navbar a {
      float: left;
      font-size: 13px;
      color: rgba(0, 0, 0, 0.747);
      text-align: center;
      padding: 12px 15px;
      text-decoration:none;
      border-top: 1px;
    }
    .dropdown {
      float:left;
      overflow: hidden;
    }
    
    .dropdown .dropbtn {
      font-size: 13px;  
      border: none;
      outline: none;
      color:rgba(0, 0, 0, 0.747);
      padding: 12px 15px;
      background-color: inherit;
      font-family: 'Roboto', sans-serif;
      margin: 0;
      font-weight: 600;
    }
    
    
    .navbar a:hover, .dropdown:hover .dropbtn {
      background-color: white;
      color: rgba(40, 180, 245, 0.918);
    }
    

    

    .dropdown-content {
      display: none;
      position: absolute;
      background-color: white;
      min-width: 200px;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.61);
      z-index: 1;
    }
    
      .dropdown-content a {
        font-size: 10px;
        float: none;
        color: rgba(0, 0, 0, 0.568);
        padding: 4px 1px;
        text-decoration: none;
        display: block;
        text-align: left;
      }
    
      .dropdown-content a:hover {
        color: black;
       
      }
    
      .dropdown:hover .dropdown-content {
       display: block;
       border-top:2px solid #2196F3;
      }
      * {
        box-sizing: border-box;
      }
      
      form input{
        padding: 4px;
        font-size: 17px;
        border: 1px solid rgba(0, 0, 0, 0.075);
        float: left;
        width: 80%;
        background: #ffffff;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
      }
      
      form button {
        float: left;
        width: 20%;
        padding: 4px;
        background: #2196F3;
        color: white;
        font-size: 17px;
        border: 1px solid #208ce4;
        cursor: pointer;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
      }
    img{
          float: left;
          margin: 10px 10px 10px 10px;
      }
      .row {
        display: flex;
      }
      
      .column {
        flex: 33.33%;
        padding: 5px 30px;
      }  
      #abc{
        position:relative;
        bottom:11px;
      }
  </style>




<div class="row" style="background-color: rgb(204, 54, 54);">
    <div class="column cls1" style="flex: 3;">
        <a href="#" style="font-size: 14px;color: white;">Asia's 1st brand with MADE SAFE Certified Products</a>
    </div>  
    <div class="column cls2" style="flex: 6;">
       <a href="#" style="font-size: 14px;color:white;">Free Shipping Above 399 | COD Available | Extra 5% OFF on Prepaid Orders | Shop Now</a>
    </div>  
    <div class="column cls1" style="flex: 1;">
        <a href="#" class="fas fa-user" style="font-family: 'FontAwesome';font-size: 14px;color: white;text-decoration:none;"></a>
    </div>
</div>
<div class="row">
    <div class="column" style="flex: 8%;margin-left: 1cm; ">
        <img src="https://mamaearthp.imgix.net/wysiwyg/mamaearth-logo.png?auto=format&fit=scale" alt="logo" style="height: 1.5cm;width: 5cm;">
    </div>
     <div class="column"  style="flex: 6;margin-top: 23px;">
        <form class="example"  style="max-width: 510px;">
            <input type="text" id="blank" placeholder=" Search " name="search">
            
            
            <button id="close" type="submit"><span class="material-icons-outlined">
            search
            </span></button>
        
            </form>
     </div>   


    <div class="column" style="flex: 2;margin-top: 25px;">
       
        
    <div class="dropdown">
    <a href="cart.html" class="fas fa-shopping-cart" style="font-family: 'FontAwesome';color: #2196F3;font-size: 20px;text-decoration:none;"><a href="cart.html"class="dropbtn">cart</a></a>
    
    
  </div>
  <div class="dropdown">
  <a href="login.html" class="fas fa-user" style="font-family: 'FontAwesome';color: #2196F3;font-size: 20px;text-decoration:none;"><a href="login.html" class="dropbtn">Sign up</a></a>
  
  <div class="dropdown-content" style="margin-left:-3%;">
    <div class="row" >
      <div class="column" style="border-right:1px solid grey;padding:0%;">
        <a href="profile.html" style="font-size:100%;margin:5%;"><spam class="material-icons"> account_circle </spam>Your profile</a>
        <hr>
         
         
        <a href="#" style="font-size:100%;margin:5%;margin-top:5%;" ><span class="material-icons">
          account_balance_wallet
          </span>Mama Cash</a>
          <hr>
        <a href="cart.html" style="font-size:100%;margin:5%;"><span class="material-icons">
          shopping_cart
          </span>Your Orders</a>
          <hr>
        <a href="#" style="font-size:100%;margin:5%;"><span class="material-icons">
          pin_drop
          </span>Manage Address</a>
          <hr>
        <a href="contact_us.html" style="font-size:100%;margin:5%;"><span class="material-icons">
          call
          </span>Contact Us</a>
          <hr>
        <a href="login.html" style="font-size:100%;margin:5%;">
          <span class="material-icons">
            logout
            </span>logout</a>
      </div>
      
    </div>
  
  </div>
</div>

        
</div>
</div>
    
<div class="navbar">
    <a href="index.html">HOME</a>
    <div class="dropdown">
      <button  class="dropbtn"><a id="abc" href="baby.html">BABY</a></button>
      <div class="dropdown-content">
        <div class="row">
          <div class="column" style="border-right:1px solid grey;margin:2%;">
            Explore
            <a href="baby.html">New Launches</a>
            <a href="baby.html">Best Sellers</a>
            <a href="baby.html">Combos</a>
            <a href="baby.html">Gift Packs</a>
          </div>
          <div class="column" style="margin:2%;">
            <a href="baby.html" style="color: rgba(0, 0, 0, 0.815);font-size: 15px;padding: 0 0;">Baby</a>
            <a href="baby.html">Baby Shampoo</a>
            <a href="baby.html">Baby Oralcare</a>
            <a href="baby.html">Baby Oil</a>
            <a href="baby.html">Baby Skin</a>
            <a href="baby.html">Baby Bath</a>
            <a href="baby.html">Baby Diaper</a></div>
          <div class="column">
            <a href="#" class="button" style="background-color:white;color:  #3997e4ea;border: none;font-size: 14px;">See All</a></h2>
          </div>
        </div>
      
      </div>
    </div>
    
    <div class="dropdown">
      <button class="dropbtn">BEAUTY</button>
      <div class="dropdown-content">
      
        <div class="row">
          <div class="column" style="border-right:1px solid grey;margin:2%;">
            Explore
            <a href="">New Launches</a>
            <a href="">Best Sellers</a>
            <a href="">Combos</a>
            <a href="">Gift Packs</a>
          </div>
          <div class="column" style="margin:2%;">
            <a href="" style="color: rgba(0, 0, 0, 0.815);font-size: 15px;padding: 0 0;">Beauty</a>
            <a href="">Face</a>
            <a href="">Hair</a>
            <a href="">Body</a>
          </div>
          <div class="column">
            <a href="#" class="button" style="background-color:white;color:  #3997e4ea;border: none;font-size: 14px;">See All</a></h2>
          </div>
        </div>
      </div>
    </div>

    <div class="dropdown">
      <button class="dropbtn"><a id="abc" href="hair.html">HAIR</a></button>
      <div class="dropdown-content">
        <div class="row">
          <div class="column" style="border-right:1px solid grey;margin:2%;">
            Explore
            <a href="hair.html">New Launches</a>
            <a href="hair.html">Best Sellers</a>
            <a href="hair.html">Combos</a>
            <a href="hair.html">Gift Packs</a>
          </div>
          <div class="column" style="margin:2%;">
            <a href="hair.html" style="color: rgba(0, 0, 0, 0.815);font-size: 15px;padding: 0 0;">Hair</a>
            <a href="hair.html">Shampoo</a>
            <a href="hair.html">Conditioner</a>
            <a href="hair.html">Hair Oil</a>
            <a href="hair.html">Hair Serum</a>
            <a href="hair.html">Hair Mask</a>
          </div>
          <div class="column">
            <a href="#" class="button" style="background-color:white;color:  #3997e4ea;border: none;font-size: 14px;">See All</a></h2>
          </div>
        </div>
      </div>
    </div>
    <div class="dropdown">
        <button class="dropbtn">FACE</button>
        <div class="dropdown-content">
       
          <div class="row">
            <div class="column" style="border-right:1px solid grey;margin:2%;">
              Explore
              <a href="">New Launches</a>
              <a href="">Best Sellers</a>
              <a href="">Combos</a>
              <a href="">Gift Packs</a>
            </div>
            <div class="column" style="margin:2%;">
              <a href="" style="color: rgba(0, 0, 0, 0.815);font-size: 15px;padding: 0 0;">Face</a>
              <a href="">Face Wash</a>
              <a href="">Face Mask</a>
              <a href="">Face Cream</a>
              <a href="">Face Serum</a>
              <a href="">Face Scrub</a>
              <a href="">Face Toner</a>
              <a href="">Face Gel</a>
              <a href="">Face Sheet Mask</a>
            </div>
            <div class="column" >
              <a href="#" class="button" style="background-color:white;color:  #3997e4ea;border: none;font-size: 14px;">See All</a></h2>
            </div>
          </div>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn">BODY</button>
        <div class="dropdown-content">
        
          <div class="row">
            <div class="column" style="border-right:1px solid grey;margin:2%;">
              Explore
              <a href="">New Launches</a>
              <a href="">Best Sellers</a>
              <a href="">Combos</a>
              <a href="">Gift Packs</a>
            </div>
            <div class="column" style="margin:2%;">
              <a href="" style="color: rgba(0, 0, 0, 0.815);font-size: 15px;padding: 0 0;">Body</a>
              <a href="">Body Butter</a>
              <a href="">Body Wash</a>
              <a href="">Body Lotion</a>
              <a href="">Body Scrub</a>
              <a href="">Hand Cream</a>
            </div>
            <div class="column">
              <a href="#" class="button" style="background-color:white;color:  #3997e4ea;border: none;font-size: 14px;">See All</a></h2>
            </div>
          </div>
        </div>
      </div>

    <a href="">GIFT-PACKS</a>
    <a href="">ALL PRODUCTS</a>
    <a href="blog.html">BLOG</a>
    <a href="plant_goodness.html">PLANT GOODNESS</a>
    <a href="store.html">STORE LOCATOR</a>
    </div>
  

  </div>
  <div id="slideshow">
  <img src="https://images.ctfassets.net/66mrrren2unf/5p5pVTewrOIcFmKeO0vbEP/906047d607f9e314f88109359e2866fb/WOW_WEBSITE-_1920x512_.jpg?q=40" width="100%" height="400px">

</div>
  `
  

  
}

export default header;
