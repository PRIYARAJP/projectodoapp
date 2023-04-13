
function additem(){
    let popcar =document.getElementById("apper") 
    popcar.style.display="none"
    let head = document.getElementById("head")
    let rowsdone =document.getElementById(`additem`)
    let pop1 =document.getElementById("todono")  
    pop1.style.display="flex"
    let cards = document.getElementById("card")
    cards.style.opacity=.1;
    // pop1.style.textAlign="center"
    
    // let backgr =document.getElementById("opacitych")  
    
    head.style.opacity=.1;
    head.innerHTML=`<span class="bold" >TASKS</span> LIST
    <spam class="add">
        <span class="circle" onclick="additem()" id="additem">+</span> Add Item</spam>          `;
    pop1.innerHTML=`
    <nav  class="addview"  >
    <nav>Add New List</nav><br>
    <input type="text" class="tex" id="texts" placeholder="Add New List">
    <nav class="ac">
    <button onclick="card1()"  id="card1" >ADD</button>
    <button onclick="cancel()" >Cancel</button></nav>
</nav>`
    // document.body.style.backgroundColor="red"
    let child=`+`;
    // oldpg.innerHTML=newtrip;
    rowsdone.innerHTML=child;
    
}

let data=[];

function card1(){
    
    let head = document.getElementById("head")
    head.style.opacity=1;
    let cards = document.getElementById("card")
    cards.style.opacity=1;
    let newtex = document.getElementById("texts").value;
    let item = {
        id: new Date().getTime(),
        title: newtex,
      };
        if (newtex) {
        data.push(item);
        addui();
        // addwinback();
        } else  {
        alert("Please  enter the Card Title ☺️");
         }

         let pop1 =document.getElementById("todono")
            
         let rowsdone =document.getElementById(`additem`)    
         add = rowsdone.innerHTML   
         if (add != "+") {
             pop1.style.display="flex"
            
         } else{
             pop1.style.display="none"
             
         }
         function addui() {
           
            let popcards =document.getElementById("card") 
            popcards.style.display="flex"
            let coadop ="";  
                  
  for ( let index = 0; index < data.length; index ++) {

    if(index <= data.length){
console.log(data[index].title);
// console.log("l "+data.length);
// console.log(index);
titl =data[index].title;
id1=data[index].id;


coadop =`
<nav class="cards" id="cd${data[index].id}">
<p id="${titl}" onclick="openwindow(${id1},${titl})"> ${data[index].title}</p><hr>
<p id="addtk${data[index].id}"><p>
<span class="c1 c2" id="del${data[index].id}"  onclick="delcard(${data[index].id})">
d</span>
<span class="c1" id="${data[index].id}" id="addtask${data[index].id}" onclick="addtask(${data[index].id})">+</span></nav>`

    }
   
  }

  popcards.innerHTML +=coadop

}

}





function openwindow(id,tit){
    console.log(id,tit.id);
    let head = document.getElementById("head")
    // head.style.display="none";
    // let backbutton =document.getElementById("back") 
    // head.innerHTML="hii"
    head.innerHTML=` <span class="flexdir"><span  onclick="backcard(${id})">back</span><span class="newwin">${tit.id}</span><span class="circle" onclick="additem()"  id="additem">+</span></span>
     `;

     
     let popcar =document.getElementById("apper") 
     popcar.style.display="flex"
     let cardId = `cd${id}`;
     let card =document.getElementById(cardId);
     card.parentNode.isEqualNode(card);
     data = data.filter(item => item.id != id);
     popcar.innerHTML=`<samp class="cards" id=cdss${id}>${card.innerHTML}</samp>`;    
    
    
    
     //  card.innerHTML=popcar.innerHTML
    //  coadop =`
    // <nav class="cards" id="cd${id}"><p id="${tit}" onclick="openwindow(${id},${tit})"> ${tit.id}</p><hr>
    // <p id="addtk${id}"><p>
    // <span class="c1 c2" id="del${id}"  onclick="delcard(${id})">
    // d</span>
    // <span class="c1" id="${id}" id="addtask${id}" onclick="addtask(${id})">+</span></nav>`   
    
    // popcar.innerHTML = coadop

    // let po =document.getElementById("card") 
    // po.style.display="none"
}

function backcard(id){
    
    let head = document.getElementById("head")
    head.style.opacity=1;
    let cards = document.getElementById(`cd${id}`)
    cards.style.opacity=1;
    let popcar =document.getElementById("apper") ;
    cards.innerHTML=`<nav >${popcar.innerHTML}</nav>`

    console.log(popcar);
    // popcar.style.display="flex"
    let po =document.getElementById("card") 
    po.style.display="flex"
//     const cardId = `cd${id}`;
// const card =document.getElementById(cardId);
// card.parentNode.removeChild(card);
// data = data.filter(item => item.id != id);

// card.parentNode.appendChild(popcar);
}   




function back(id){
    let head = document.getElementById("head")
    head.innerHTML=`<span class="bold" >TASKS</span> LIST<span  onclick="backcard(${id})">back</span>
    <spam class="add">
        <span class="circle" onclick="additem()" id="additem">+</span> Add Item</spam> `;
        let popcar =document.getElementById("apper") 

    //  popcar.style.display="none"
     const cardId = `cd${id}`;
     const card =document.getElementById(cardId);
     card.parentNode.replaceChild(card);
     data = data.filter(item => item.id != id);
     card.pop(popcar)
}

function addwinback() {
        
    let popcards =document.getElementById("card") 
    let coadop ="";  
          
for ( let index = 0; index < data.length; index ++) {

if(index <= data.length){
console.log(data[index].title);
// console.log("l "+data.length);
// console.log(index);
titl =data[index].title;
id1=data[index].id;
coadop =`
<nav class="cards" id="cd${data[index].id}"><p id="${titl}" onclick="openwindow(${id1},${titl})"> ${data[index].title}</p><hr>
<p id="addtk${data[index].id}"><p>
<span class="c1 c2" id="del${data[index].id}"  onclick="delcard(${data[index].id})">
d</span>
<span class="c1" id="${data[index].id}" id="addtask${data[index].id}" onclick="addtask(${data[index].id})">+</span></nav>`
}

}

popcards.innerHTML =`<a>${coadop}</a>`

}


function addnewein(taskid){
    let coaditem="";
 for ( let i = 0; i < da.length; i++) {
console.log("fffffffffffffff"+taskid);
    if(i <= da.length){           
coaditem +=`<p id="${da[i].id}${taskid}">
<span id="new${da[i].id}${taskid}">
${da[i].tit}<span>
<span class="makerd" id="makeread${da[i].id}${taskid}"
 onclick="makeread(${da[i].id},${taskid})">Make as read</span>
 </p>`  

    }
   
}
add.innerHTML = coaditem; 

 }




function delcard(id){
    let head = document.getElementById("head")
    head.style.opacity=1;
    let cards = document.getElementById("card")
    cards.style.opacity=1;
    const cardId = `cd${id}`;
const card =document.getElementById(cardId);
card.parentNode.removeChild(card);
data = data.filter(item => item.id != id);

}

function addtask(taskid){   
    let head = document.getElementById("head")  
    head.innerHTML=`<span class="bold" >TASKS</span> LIST
    <spam class="add">
        <span class="circle" onclick="additem()" id="additem">+</span> Add Item</spam> `;
    head.style.opacity=.1;
    let cards = document.getElementById("card")
    cards.style.opacity=.1;
let add = document.getElementById(`${taskid}`)
let pop1 =document.getElementById("todono")  
pop1.style.display="flex"
    console.log(taskid);
pop1.innerHTML =`
    <nav  class="addview" id="newtripcd">
    <nav>Add New Task</nav><br>
    <input type="text" class="tex" id="textsfortask" placeholder="Add New Task">
    <nav class="ac">
    <button onclick="cardstask(${taskid})" id="card1" >ADD</button>
    <button onclick="cancel()" >Cancel</button></nav>
</nav>`
}




function cancel(){
    
    let head = document.getElementById("head")
    head.style.opacity=1;
    let cards = document.getElementById("card")
    cards.style.opacity=1;
    let pop1 =document.getElementById("todono")  
    pop1.style.display="none"
}

const da=[];
function cardstask(taskid){
    let head = document.getElementById("head")
    head.style.opacity=1;
    let cards = document.getElementById("card")
    cards.style.opacity=1;
    let add = document.getElementById(`addtk${taskid}`)
    let newtext = document.getElementById("textsfortask").value;
    let pop1 =document.getElementById("todono")  
    pop1.style.display="none"
    const it ={
        id : new Date().getTime().toString(),
        tit:newtext,     
    }
    

    if (newtext||it.tit) {
      
        da.push(it);  
       
    additem(taskid);
      
    } else  {
    alert("Please  enter the Item ☺️");
     }
     
     function additem(taskid){
        let coaditem="";
     for ( let i = 0; i < da.length; i++) {
        // let head = document.getElementById("head")
        // head.style.opacity=1;
        // let cards = document.getElementById(`cd${taskid}`)
        // cards.style.opacity=1;
        // let popcar =document.getElementById("apper") ;
        // cards.innerHTML=`<nav >${popcar.innerHTML}</nav>`
        if(i <= da.length){           
    coaditem =`<p id="${da[i].id}${taskid}">
    <span id="new${da[i].id}${taskid}">
    ${da[i].tit}<span>
    <span class="makerd" id="makeread${da[i].id}${taskid}"
     onclick="makeread(${da[i].id},${taskid})" >Make as read</span>
     </p>`  
   
        }
       
    }
    add.innerHTML +=coaditem; 
    
     }
    
}
    
function makeread(id,taskid){
    let mr = document.getElementById(`makeread${id}${taskid}`)
    mr.style.display="none"
  let tk = document.getElementById(`new${id}${taskid}`)

  tk.style.color="red"
  tk.style.textDecoration="line-through"

  
  let popcar =document.getElementById("apper") ;
  tk.innerHTML=`<nav >${tk.innerHTML}</nav>`


  data = data.filter(item => item.id != id);
//   da = da.filter(it => it.id != id);
}
