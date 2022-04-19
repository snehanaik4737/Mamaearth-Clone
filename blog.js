var data=[{
    "image":"https://blog.mamaearth.in/wp-content/uploads/2022/02/shutterstock_1091895371-300x150.jpg",
"title":"New Launch – Mamaearth Lip Serums",
"description":"A tinted lip serum is something that combines the best of hydration, color, and extra nourishment, all in one little tube. Here are some reasons to choose lip serums from Mamaearth.",
},
{
"image":"https://blog.mamaearth.in/wp-content/uploads/2022/02/shutterstock_1296163882-300x150.jpg",
"title":"New Launch – Mamaearth Beard Oils",
"description":"With a great beard comes great responsibility! we at Mamaearth went that extra mile to craft these three superb beard oils for the beard look you want!."
},
{
"image":" https://blog.mamaearth.in/wp-content/uploads/2022/02/shutterstock_1226509942-300x150.jpg",
"title":"How to Choose the Right Fragrance for Yourself?",
"description":"Now, as we all know, choosing the right perfume is easier said than done, and it is a very personal journey for everyone. Let’s get the basics of fragrances and how they work, and that’s what we’ll look at today."
},
{
"image":"	https://blog.mamaearth.in/wp-content/uploads/2020/08/shutterstock_226385926-300x150.jpg ",
"title":"All You Need To Know About Skin Illumination Serum",
"description":"Tapping on the goodness of Vitamin C, Mamaearth combined a few potent ingredients to formulate Skin Illumination Serum. Read along to know more!"
},
{
"image":"https://blog.mamaearth.in/wp-content/uploads/2022/01/shutterstock_1673112535-300x150.jpg",
"title":"Choosing The Right Kajal and Application Tips",
"description":"Choosing the right kajal can feel overwhelming, with so many options available out there. Pencils are great for beginners and help create tight lines along the waterline."
},
{
"image":"https://blog.mamaearth.in/wp-content/uploads/2022/01/shutterstock_113000989-300x150.jpg",
"title":"4 Different Ways to Apply Kajal",
"description":"A simple kohl or Kajal can be used in various ways to make your eyes look sexy, appealing, and very expressive. Read more to find them out!"
},
{
"image":"https://blog.mamaearth.in/wp-content/uploads/2021/11/shutterstock_261520313-300x150.jpg",
"title":"Get Winter Ready with Mamaearth!",
"description":"Make your winters endurable with Mamaearth. It has an array of products for everyone in the family to combat the harsh winters and to keep your skin and hair healthy."
},
{
"image":"https://blog.mamaearth.in/wp-content/uploads/2021/11/shutterstock_1097795729-300x150.jpg",
"title":"Just In: Super Soft Lips with Mamaearth’s Vitamin C 100% Natural Lip Care Kit",
"description":"The natural lip care kit by Mamaearth is packed with the goodness of Vitamin C, Shea butter, fine walnut beads, and more. It is all that you need for healthy and nourished lips."
},
{
"image":"https://blog.mamaearth.in/wp-content/uploads/2022/01/shutterstock_1236550600-300x150.jpg",
"title":"Mamaearth Face Masks – Which one is for you?",
"description":"Face masks do the work of a cleanser, moisturizer and scrub combined in one to provide your skin with the ultimate levels of nutrition and care you didn’t know your skin needed!"
},
{
"image":"https://blog.mamaearth.in/wp-content/uploads/2021/11/shutterstock_261520313-300x150.jpg",
"title":"Mamaearth New Launch – Cold Creams",
"description":"Cold cream doesn’t easily absorb in comparison to a light moisturizer or a lotion, they are now fast becoming an option that people are opting for in skincare; especially in the winter."
},
{
"image":"https://blog.mamaearth.in/wp-content/uploads/2021/11/shutterstock_122952730-300x150.jpg",
"title":"Benefits of Almonds for Hair",
"description":"Improve your hair’s health with the most amazing natural resource – Almonds. Enriched with the best of vitamins, antioxidants, and minerals, know what this wondrous piece of nutrition holds in for your hair!"
},
{
"image":"https://blog.mamaearth.in/wp-content/uploads/2022/01/shutterstock_1236550600-300x150.jpg",
"title":"Mamaearth Face Masks – Which one is for you?",
"description":"Face masks do the work of a cleanser, moisturizer and scrub combined in one to provide your skin with the ultimate levels of nutrition and care you didn’t know your skin needed!"
},
{
"image":"https://blog.mamaearth.in/wp-content/uploads/2020/11/shutterstock_1662635866-300x150.jpg",
"title":"5 Reasons You Should Use A Hand Cream",
"description":"Our hands continue to work non-stop and yet get the least of our attention and care. Hand creams, especially today, have become all the more important in skincare journey. Read on to know more!"
},
{
"image":"https://blog.mamaearth.in/wp-content/uploads/2022/01/shutterstock_1236550600-300x150.jpg",
"title":"Mamaearth Face Masks – Which one is for you?",
"description":"Face masks do the work of a cleanser, moisturizer and scrub combined in one to provide your skin with the ultimate levels of nutrition and care you didn’t know your skin needed!"
},
{
"image":"https://blog.mamaearth.in/wp-content/uploads/2020/08/shutterstock_226385926-300x150.jpg ",
"title":"All You Need To Know About Skin Illumination Serum",
"description":"Tapping on the goodness of Vitamin C, Mamaearth combined a few potent ingredients to formulate Skin Illumination Serum. Read along to know more!"
},
{
"image":"https://blog.mamaearth.in/wp-content/uploads/2021/11/shutterstock_1097795729-300x150.jpg",
"title":"Just In: Super Soft Lips with Mamaearth’s Vitamin C 100% Natural Lip Care Kit",
"description":"The natural lip care kit by Mamaearth is packed with the goodness of Vitamin C, Shea butter, fine walnut beads, and more. It is all that you need for healthy and nourished lips."
},
{
"image":"	https://blog.mamaearth.in/wp-content/uploads/2020/08/shutterstock_226385926-300x150.jpg ",
"title":"All You Need To Know About Skin Illumination Serum",
"description":"Tapping on the goodness of Vitamin C, Mamaearth combined a few potent ingredients to formulate Skin Illumination Serum. Read along to know more!"
},
{
"image":"https://blog.mamaearth.in/wp-content/uploads/2021/10/shutterstock_563352604-300x150.jpg ",
"title":"Newly Launched: Mamaearth Kids Body Lotions",
"description":"Winter is when you need to take extra precautions to keep your little one’s skin hydrated. Dry skin can cause rashes and itchiness that can stretch the skin causing discomfort."
},

]
data.map(function(el){

   var boxmain=document.createElement("div")
    var div2=document.createElement("div")
    var image=document.createElement("img")
    image.src=el.image
    div2.append(image)

    var div3=document.createElement("div")
    var ti=document.createElement("h2")
    ti.innerText=el.title


    var des=document.createElement("h4")
    des.innerText=el.description

    div3.append(ti,des)
    boxmain.append(div2,div3)
    boxmain.id="boxmain"
    document.getElementById("box1").append(boxmain)
    
  

    // document.querySelector("#container").append(box1,box2)





})