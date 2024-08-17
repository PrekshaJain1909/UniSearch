let button = document.querySelector("button");
let orderedlist = document.querySelector("ol");
button.addEventListener('click',async()=>{
    try{ 
        orderedlist.innerHTML = "";
        let listname= await getlist();
        for(let i=0;i<listname.length;i++){
        let list= document.createElement("li");
        orderedlist.appendChild(list);
        list.innerText=listname[i].name;
        list.classList.add("backg");
        }

    }
    catch(e){
        console.log("Error", e);
    }
});
document.addEventListener('keypress',async()=>{
    try{ 
        orderedlist.innerHTML = "";
        let listname= await getlist();
        for(let i=0;i<listname.length;i++){
        let list= document.createElement("li");
        orderedlist.appendChild(list);
        list.innerText=listname[i].name;
        list.classList.add("backg");
        }

    }
    catch(e){
        console.log("Error", e);
    }
});
let url="http://universities.hipolabs.com/search?country=";
async function getlist(){
    try{
        let inputbut = document.querySelector("input");
        let inputval=inputbut.value;
        let clgname=await axios.get(url+inputval);
        return clgname.data;
       }
    catch(e){
        console.log("Error ", e);
        return "Not Found Any College";
    }

}