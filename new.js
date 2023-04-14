
let popcar =document.getElementById("apper") 
popcar.style.display="none"
/* for first popup */
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
/*get a value in popup and view that in cords */
let data=[];

function card1(){
    
    let head = document.getElementById("head")
    head.style.opacity=1;
    let cards = document.getElementById("card")
    cards.style.opacity=1;
    let newtex = document.getElementById("texts").value;// get value
    /* create value id and convert it to string */
    let item = {
        id: new Date().getTime(),
        title: newtex,
      };
        if (newtex) {
            /* convert the string as array */
        data.push(item);
        /* for new cord */
        addui();
        } else  {
            /* if you don't give the value this is generated */
        alert("Please  enter the Card Title ☺️");
         }
        /* condition for fux display cord */
         let pop1 =document.getElementById("todono")
            
         let rowsdone =document.getElementById(`additem`)    
         add = rowsdone.innerHTML   
         if (add != "+") {
             pop1.style.display="flex"
            
         } else{
             pop1.style.display="none"
             
         }
            /* create cords */
         function addui() {
           
            let popcards =document.getElementById("card") 
            popcards.style.display="flex"
            


            let coadop ="";  
                  
  for ( let index = 0; index < data.length; index ++) {

    if(index <= data.length){
titl =data[index].title;
id1=data[index].id;
let nn = titl
// .replaceAll(" ","mmmmmmm");

coadop =`
<nav class="cards" id="cd${data[index].id}">
<p id="${titl}" onclick="openwindow(${id1},${nn})" value="5" id="n${id1}">${nn}</p><hr>
<p id="addtk${data[index].id}"><p>
<span class="c1 c2" id="del${data[index].id}"  onclick="delcard(${data[index].id})">
d</span>
<span class="c1" id="${data[index].id}" id="addtask${data[index].id}" onclick="addtask(${data[index].id})">+</span></nav>`

    }
   
  }

  popcards.innerHTML +=coadop

}

}
/* open new window click on heading tag  */

function openwindow(id,tit){
    let a=5;
    let head = document.getElementById("head")

    head.innerHTML=` <span class="flexdir"><span  onclick="backcard(${id})">back
    </span><span class="newwin" id="newwind">${tit.id}</span>
    <span class="circle" onclick="adddwin(${id})" id="additem">+</span></span>
     `;

     let popcar =document.getElementById("apper") 
     popcar.style.display="block"
     let cardId = `cd${id}`;
     let card =document.getElementById(cardId);
     card.parentNode.isSameNode(card);
    const mii=card.innerHTML;
    
     popcar.innerHTML =mii;    
     
   
     data = data.filter(item => item.id != id);
    let po =document.getElementById("card") 
    po.style.display="none"
    console.log(a);
}

/* adding new cord and update details from heading page  */
function adddwin(id){

    let head = document.getElementById("head")
     head.innerHTML=`<span class="bold" >TASKS</span> LIST
    <spam class="add">
        <span class="circle" onclick="additem()" id="additem">+</span> Add Item</spam>`
    head.style.opacity=1;
    let cards = document.getElementById(`cd${id}`)
    cards.style.opacity=1;
    let popcar =document.getElementById("apper") ;
    cards.innerHTML=popcar.innerHTML
    popcar.innerHTML="";

    let po =document.getElementById("card") 
    po.style.display="flex"   
    additem();
    
}

/* back and update changes */
function backcard(id){
 
    let head = document.getElementById("head")

    head.innerHTML=`<span class="bold" >TASKS</span> LIST
    <spam class="add">
        <span class="circle" onclick="additem()" id="additem">+</span> Add Item</spam>`
    head.style.opacity=1;
    let cards = document.getElementById(`cd${id}`)
    cards.style.opacity=1;
    let popcar =document.getElementById("apper");
    cards.innerHTML=popcar.innerHTML;
    let po =document.getElementById("card") 
    po.style.display="flex"
    popcar.style.display="none"
}   

/* delete cord  */
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

/* popup2 for update task update task inside cord */
function addtask(taskid){   
    let popcarer =document.getElementById("apper") 
    popcarer.style.display="none"
    let head = document.getElementById("head")  
    
    head.style.opacity=.1;
    let cards = document.getElementById("card")
    cards.style.opacity=.1;
let add = document.getElementById(`${taskid}`)
let pop1 =document.getElementById("todono")  
pop1.style.display="flex"
pop1.innerHTML =`
    <nav  class="addview" id="newtripcd">
    <nav>Add New Task</nav><br>
    <input type="text" class="tex" id="textsfortask" placeholder="Add New Task">
    <nav class="ac">
    <button onclick="cardstask(${taskid})" id="card1" >ADD</button>
    <button onclick="cancel()" >Cancel</button></nav>
</nav>`
}

/* for cancel the popup1 and 2  */
function cancel(){
    
    let head = document.getElementById("head")
    head.style.opacity=1;
    let cards = document.getElementById("card")
    cards.style.opacity=1;
    let pop1 =document.getElementById("todono")  
    pop1.style.display="none"
}

/* for insert task inside card */
const da=[];
function cardstask(taskid){
   
    let newval =document.getElementById("n${id1}") 
    console.log("vvvvvvvvvvvvvvvvvvv"+newval);
    let poc =document.getElementById("newwind")
// console.log("wwwddddddddddd"+poc);
/* condition for view cord */
    if(poc){
        let popcarer =document.getElementById("apper") 
        popcarer.style.display="block"
        let cards = document.getElementById("card")
        cards.style.opacity=1;
       
    }
    else if(poc == null) {
        let popcarer =document.getElementById("apper") 
        popcarer.style.display="none"
        let cards = document.getElementById("card")
        cards.style.opacity=1;
    }

    let head = document.getElementById("head")
    head.style.opacity=1;
    
    
    let add = document.getElementById(`addtk${taskid}`)
    let newtext = document.getElementById("textsfortask").value;
    let pop1 =document.getElementById("todono")  
    pop1.style.display="none"
    /* data convert as string */
    const it ={
        id : new Date().getTime().toString(),
        tit:newtext,     
    }
    

    if (newtext||it.tit) {
      /* string convert as array */
        da.push(it);  
       /* insert task */
    additem(taskid);
      
    } else  {
    alert("Please  enter the Item ☺️");
     }
     /* update task */
     function additem(taskid){
        let coaditem="";
     for ( let i = 0; i < da.length; i++) {
        if(i <= da.length){           
    coaditem =`<p id="${da[i].id}${taskid}">
    <span id="new${da[i].id}${taskid}">
    ${da[i].tit}<span>
    <span class="makerd" id="makeread${da[i].id}${taskid}"
     onclick="makeread(${da[i].id},${taskid})" >Make as read</span>
     </p>`  
  
        }
       
    }
    
    add.innerHTML += coaditem; 
    
     }
   
}
/* after read a  task make as reed  */
function makeread(id,taskid){
    let mr = document.getElementById(`makeread${id}${taskid}`)
    mr.style.display="none"
  let tk = document.getElementById(`new${id}${taskid}`)
  let jk = document.getElementById(`n${taskid}`)
  tk.style.color="red"
  tk.style.textDecoration="line-through"
  data = data.filter(item => item.id != id);
}

