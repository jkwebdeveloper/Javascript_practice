const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const deleteAllBtn = document.querySelector(".footer button");



inputBox.onkeyup = ()=>{
  let userEnteredValue = inputBox.value; 
  if(userEnteredValue.trim() != 0){ 
    addBtn.classList.add("active"); 
  }else{
    addBtn.classList.remove("active"); 
  }
}

showTasks();

addBtn.onclick = ()=>{ 
  let userEnteredValue = inputBox.value;
  console.log("userEnteredValue",userEnteredValue)
  let getLocalStorageData = localStorage.getItem("New Todo");
  if(getLocalStorageData == null){ 
    listArray = []; 
  }else{
    listArray = JSON.parse(getLocalStorageData); 
  }
  listArray.push(userEnteredValue);
  localStorage.setItem("New Todo", JSON.stringify(listArray))
  showTasks(); 
  addBtn.classList.remove("active"); 
}

function handleStatus(e) {
  const checkbox = document.querySelectorAll("input") //getting checkbox
  checkbox.checked = checkbox.checked ? false : true;
  console.log(checkbox.checked);
  e.classList.toggle("pending");


  console.log("e",e)
  // allTasks();
  
  }
function showTasks(){
  let getLocalStorageData = localStorage.getItem("New Todo");
  if(getLocalStorageData == null){
    listArray = [];
  }else{
    listArray = JSON.parse(getLocalStorageData); 
  }
  const pendingItemNumb = document.querySelector(".pendingItem");
  pendingItemNumb.textContent = listArray.length; 
  if(listArray.length > 0){ 
    deleteAllBtn.classList.add("active"); 
  }else{
    deleteAllBtn.classList.remove("active"); 
  }

  let newLiTag = "";
  listArray.forEach((element, index) => {
    newLiTag += `<li>${element}<span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span>
    <input type="checkbox" /></li>`;
  });
  todoList.innerHTML = newLiTag; 
  inputBox.value = ""; 

}
// const dtn = document.getElementById("dtn")
// console.log(dtn)
function hello () {
  console.log("hello")
}

// dtn.onclick = () => {
//   console.log(dtn);
// }
// dtn.addEventListener('click', (e) => {
//   console.log(click);
// })

function deleteTask(index){
  let getLocalStorageData = localStorage.getItem("New Todo");
  listArray = JSON.parse(getLocalStorageData);
  listArray.splice(index, 1);
  localStorage.setItem("New Todo", JSON.stringify(listArray));
  showTasks();
}

deleteAllBtn.onclick = ()=>{
  listArray = [];
  localStorage.setItem("New Todo", JSON.stringify(listArray));
  showTasks();
}
