let array = [];
const listado = document.getElementById("contenedor");
const item = document.getElementById("item");

document.addEventListener("DOMContentLoaded",()=>{
    let items = JSON.parse(localStorage.getItem("items"));
    for (let i = 0; i < items.length; i++) {
        listado.innerHTML+=`<li>${items[i]}</li>`;
        
    }
});

document.getElementById("agregar").addEventListener("click",()=>{
    array.push(item.value);
    localStorage.setItem("items", JSON.stringify(array));
    listado.innerHTML+=`
    <li>${item.value}</li>`;
    item.value="";
}
);

document.getElementById("limpiar").addEventListener("click",()=>{
    listado.innerHTML="";
    localStorage.clear();
});