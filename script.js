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

addBtn.addEventListener("click", (e)=>{
    e.preventDefault();
  
    if(!addInput.value){
        return
    }
   if(document.querySelector("#emptyMsg")){
    document.querySelector("#emptyMsg").remove();
   }
   
   list.append(createListItem(addInput.value))
   addInput.value ="";
})

searchInput.addEventListener("input", (e)=>{
    Array.from(list.children).forEach(element => {
        if(document.querySelector("#emptyMsg")){
            return
        }
        if(!element.querySelector(".title").innerText.toLowerCase().includes(e.target.value.toLowerCase())){
            element.style.display = "none"
        }else
            element.style.display = "flex"
    });
})
function createListItem(itemvalue){
    let item = document.createElement("li");
    let title = document.createElement("span");
    let btn = document.createElement("span");
    item.className = "to-do-item";
    title.className = "title";
    title.innerText = itemvalue;
    btn.className = "delete-btn";
    btn.innerText = "delete";
    item.appendChild(title);
    item.appendChild(btn);
    return item;
 }
