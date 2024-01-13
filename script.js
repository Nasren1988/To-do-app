let list = document.querySelector("#to-do-list");
let addBtn=document.querySelector("#add-form button");
let addInput = document.querySelector("#add-form input");
let searchInput = document.querySelector("#search-form input");

list.addEventListener("click",(e)=>{
    if(e.target.nodeName =="SPAN" && e.target.className=="delete-btn"){
       e.target.parentNode.remove();
       if(list.children.length ==0){
           let listEmptyMsg = document.createElement("div");
           listEmptyMsg.style.color="#333";
           listEmptyMsg.style.textAlign ="center";
           listEmptyMsg.innerText="Your list is empty";
           listEmptyMsg.id = "emptyMsg"
           list.appendChild(listEmptyMsg);

       }
    }
}) 