let container1 = document.getElementById('container-1')
    var arr1 = [
        {
            img: "https://honasa-mamaearth-production.imgix.net/_/m/_milky-soft-body-lotion__1.jpg?auto=compress&fit=scale&w=400&h=400",
            price: 399.00,
           
            offer: "(5% off)",
            desc: "Milky Soft Body Lotion for Babies with Oats, Milk and Calendula - 400ml"
        },


        {
            img: "https://honasa-mamaearth-production.imgix.net/n/o/nourishing-bathing-bars_2_anb6wlrvagej2noa.jpg?auto=compress&fit=scale&w=400&h=400",

            price: 499.00,
            
            offer: "(10% off)",
            desc: "Nourishing Bathing Bar Soap For Kids - ( Pack of 5, 75g Each)"
        },


        {
            img: "https://honasa-mamaearth-production.imgix.net/b/a/baby_hair_oil_200_ml_1200x1200__yh1i6qtlgyc253s5.jpg?auto=compress&fit=scale&w=400&h=400",
            price: 199.00,
          
            offer: "(8% off)",
            desc: "Nourishing Hair Oil for Babies with Almond and Avocado Oil - 200 ml"
        },

        {
            img: "https://honasa-mamaearth-production.imgix.net/f/d/fds_9573-props_qwhqvlzshodrynok.jpg?auto=compress&fit=scale&w=400&h=400",
            price: 242.00,
            
            offer: "(12% off)",
            desc: "Moisturizing Bathing Bar Soap For Babies, pack of 2*75g"


        }

    ]

    var cart = JSON.parse(localStorage.getItem('cartdata')) || []
 
        arr1.map((element) => {
            let div = document.createElement('div')
            div.setAttribute("class","div")
            let img = document.createElement('img')
            img.setAttribute('class', 'div-img')
            img.src = element.img;
    
            let price = document.createElement('p')
            price.innerText ="Price "+element.price;
    
            let offer = document.createElement('p')
            offer.innerText = element.offer;
            let desc = document.createElement('p')
            desc.innerText = element.desc;
            
            let p=document.createElement('p')
            p.setAttribute('class','best-s')
            p.textContent = 'BEST SELLER'
    
            let content_div = document.createElement('div')
    
            let btn = document.createElement('button')
            btn.setAttribute('class','btn')
            btn.textContent='Add To Cart';
            btn.addEventListener('click', function(){
              addCart(element)
            })
    
            content_div.setAttribute('class', 'content_div')
            content_div.append(price, offer, desc)
            
           
            div.append(p,img, content_div,btn)
            container1.append(div)
           
           
            
        })
    
    
   

    // function addCart(elem){
    //     console.log(elem)
    //     cart.push(elem)
    //     localStorage.setItem('cartdata',JSON.stringify(cart))
    // }
 

    // ------------------------

    let container2 = document.getElementById('container-2')
    var arr2 = [
      

        {
            img: "https://honasa-mamaearth-production.imgix.net/o/r/orange-body-lotions.jpg?auto=compress&fit=scale&w=400&h=400",
            price: 239.00,
            desc: "Original Orange Body Lotion For Kids With Orange & Shea Butter - 400 ml"
        },


        {
            img: "https://honasa-mamaearth-production.imgix.net/m/a/mango-body-lotions.jpg?auto=format&fit=crop&w=768&auto=compress",
            price: 489.00,
            desc: "Major Mango Body Lotion For Kids with Mango Butter & Milk Protein - 400 ml"
        },

        {
            img: "https://honasa-mamaearth-production.imgix.net/b/r/brave-blueberry-body-lotion.jpg?auto=compress&fit=scale&w=400&h=400",
            price: 79.00,
            desc: "Brave Blueberry Body Lotion For Kids with Blueberry and Kokum Butter– 400 ml"
        },


        {
            img: "https://honasa-mamaearth-production.imgix.net/a/g/agent_apple-body-lotion.jpg?auto=compress&fit=scale&w=400&h=400",
            price: 49.00,
            desc: "Agent Apple Body Lotion for Kids with Apple & Oat Milk– 400 ml"
        },

        {
            img: "https://honasa-mamaearth-production.imgix.net/a/g/agent_apple-body-lotion.jpg?auto=format&fit=crop&w=768&auto=compress",
            price: 399.00,
            desc: "Agent Apple Body Lotion for Kids with Apple & Oat Milk– 400 ml"
        },

        {
            img: "https://honasa-mamaearth-production.imgix.net/m/i/milky-soft-lip-balm-1.jpg?auto=format&fit=crop&w=768&auto=compress",
            price: 199.00,
            desc: "Milky Soft Natural Lip Balm for Babies with Oats, Milk & Calendula – 4g"
        },

        {
            img: "https://honasa-mamaearth-production.imgix.net/m/i/milky-soft-diaper-rash-cream-1.jpg?auto=compress&fit=scale&w=400&h=400",
            price: 299.00,
            desc: "Milky Soft Diaper Rash Cream for Babies - 50g"
        },

        {
            img: "https://honasa-mamaearth-production.imgix.net/_/m/_milky-soft-body-lotion__1.jpg?auto=compress&fit=scale&w=400&h=400",
            price: 270.00,
            desc: "Milky Soft Body Lotion for Babies with Oats, Milk and Calendula - 400ml"
        },

        {
            img: "https://honasa-mamaearth-production.imgix.net/o/r/orange-body-lotions.jpg?auto=compress&fit=scale&w=400&h=400",
            price: 360.00,
            desc: "Original Orange Body Lotion For Kids With Orange & Shea Butter - 400 ml"
        },


        {
            img: "https://honasa-mamaearth-production.imgix.net/m/a/mango-body-lotions.jpg?auto=format&fit=crop&w=768&auto=compress",
            price: 190.00,
            desc: "Major Mango Body Lotion For Kids with Mango Butter & Milk Protein - 400 ml"
        },

        {
            img: "https://honasa-mamaearth-production.imgix.net/b/r/brave-blueberry-body-lotion.jpg?auto=compress&fit=scale&w=400&h=400",
            price: 399.00,
            desc: "Brave Blueberry Body Lotion For Kids with Blueberry and Kokum Butter– 400 ml"
        },


        {
            img: "https://honasa-mamaearth-production.imgix.net/a/g/agent_apple-body-lotion.jpg?auto=compress&fit=scale&w=400&h=400",
            price: 159.00,
            desc: "Agent Apple Body Lotion for Kids with Apple & Oat Milk– 400 ml"
        },

        {
            img: "https://honasa-mamaearth-production.imgix.net/a/g/agent_apple-body-lotion.jpg?auto=format&fit=crop&w=768&auto=compress",
            price: 299.00,
            desc: "Agent Apple Body Lotion for Kids with Apple & Oat Milk– 400 ml"
        },

        {
            img: "https://honasa-mamaearth-production.imgix.net/m/i/milky-soft-lip-balm-1.jpg?auto=format&fit=crop&w=768&auto=compress",
            price: 199.00,
            desc: "Milky Soft Natural Lip Balm for Babies with Oats, Milk & Calendula – 4g"
        },

        {
            img: "https://honasa-mamaearth-production.imgix.net/m/i/milky-soft-diaper-rash-cream-1.jpg?auto=compress&fit=scale&w=400&h=400",
            price: 299.00,
            desc: "Milky Soft Diaper Rash Cream for Babies - 50g"
        },

        {
            img: "https://honasa-mamaearth-production.imgix.net/_/m/_milky-soft-body-lotion__1.jpg?auto=compress&fit=scale&w=400&h=400",
            price: 50.00,
            desc: "Milky Soft Body Lotion for Babies with Oats, Milk and Calendula - 400ml"
        },

    ]

    var cart = JSON.parse(localStorage.getItem('cartdata')) || []
   
    function displayItem(arr2){
        document.getElementById('container-2').innerHTML="";
        
        arr2.map((element)=>{
            let div1 = document.createElement('div')
            div1.setAttribute('class','div1')
            let img = document.createElement('img')
            img.setAttribute('class', 'div-img')
            img.src = element.img;
    
            let price = document.createElement('p')
            price.innerText ="Price "+ element.price;
    
            let desc = document.createElement('p')
            desc.innerText = element.desc;
    
            let btn = document.createElement('button')
            btn.setAttribute('class','btn')
            btn.textContent='Add To Cart';
            btn.addEventListener('click', function(){
              addCart(element)
            })
    
            let content_div = document.createElement('div')
            content_div.setAttribute('class', 'content_div1')
            content_div.append(price, desc)
            
            div1.append(img, content_div,btn)
            container2.append(div1)
           
            
        })

    }
    displayItem(arr2)
   
    function addCart(elem){
        console.log(elem)
        cart.push(elem)
        localStorage.setItem('cartdata',JSON.stringify(cart))
        alert('item added to cart.')
    }



    function sortProducts() {
        var sortedPrice = document.querySelector("#sortButton").value;
        if (sortedPrice == "high") {
          arr2.sort(function (a, b) {
            return b.price - a.price;
          });
         
        }
        if (sortedPrice == "low") {
          arr2.sort(function (a, b) {
            return a.price - b.price;
          });
         
        }
      
       
        displayItem(arr2);
      
    }
    
   