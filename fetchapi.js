document.getElementById("btn").addEventListener("click",makerequest);
function makerequest(e){
    try{
        let list_item=document.getElementById("myul")
        e.preventDefault();
        fetch('https://fakestoreapi.com/products').then((respose)=>{
            console.log(respose);
            return respose.json()
        }).then((data)=>{
            console.log(data)
            data.forEach(element => {
                list_item.innerHTML +=`<div><h2>ID: ${element.id}</h2> 
                <img src="${element.image}" alt="${element.title}" class="product-image">
                <p class="mytitle">Title: ${element.title}</p>
                
                <p class="myprice">Price:$ ${element.price}/-</p>
                
                <p>Description: ${element.description}</p>
                <p class="mycategory">Category: ${element.category}</p>
                </div>`
            });
        })
    }catch(err){
        console.log(err)
    }
}