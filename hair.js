var url = 'http://localhost:5000/hair'
let container=document.getElementById("container")


let getData = async()=>{
    try {
        let res = await fetch(url)
        let data = await res.json()
        appendData(data)
        console.log('data',data);


    } catch (error) {
        console.log(error);
    }
}
getData()

var cart = JSON.parse(localStorage.getItem('cartdata')) || []

const appendData = (element)=>{
 element.forEach((arr)=>{
     let div=document.createElement("div")

     let category1=document.createElement("p")
     category1.innerHTML=arr.category

     let desc1=document.createElement("p")
     desc1.innerHTML=arr.desc;

     let img1=document.createElement("img")
     img1.setAttribute('class','img1')
     img1.src=arr.img

     let price1=document.createElement("p")
     price1.innerHTML=arr.price;

     let rate=document.createElement("p")
     rate.setAttribute('class','rating')
     rate.innerHTML=arr.rating

     let R_div=document.createElement('div')
     R_div.setAttribute('class','R-div')
     R_div.append(price1,rate)


     let p=document.createElement('p')
     p.setAttribute('class',"best-s")
     p.textContent="BEST SELLER";

     let btn = document.createElement('button')
     btn.setAttribute('class','btn')
     btn.textContent='Add To Cart';
     btn.addEventListener('click', function(){
          addCart(arr)
      })

     let divContent = document.createElement('div')
     divContent.setAttribute('class','divContent')

     divContent.append(desc1,R_div)
     div.append(p,img1,divContent,btn)
     container.append(div)
 })

 function addCart(elem){
    console.log(elem)
    cart.push(elem)
    localStorage.setItem('cartdata',JSON.stringify(cart))
    alert('item added to cart')
}

}

