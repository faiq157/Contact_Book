function addContact(){
    let cName=document.querySelector("#name").value.toUpperCase();
    let cNumber=document.querySelector("#number").value;
    let displayNotification=document.querySelector("#displaynoti");
    if(cName==""|| cNumber==""){
        displayNotification.innerHTML="🤢please enter Details !";
        displayNotification.style.color="red";
    }else{
        localStorage.setItem(cName,cNumber);
        displayNotification.innerHTML="😉 successfully Added New Contact";
        displayNotification.style.color="green";
    }
    setInterval(()=>{
        displayNotification.innerHTML=" ";
    },2000)
}  

function getContact(){
    let displayDetails=document.querySelector("#displayContact");
    let displayOutput=document.getElementById("displayContact");
    displayOutput.classList.add("displayConatactStyle");
    let getContactName=document.querySelector("#getContactName").value.toUpperCase();
    // get Item
    let output=localStorage.getItem(getContactName);
    displayDetails.innerHTML=`${getContactName}:${output==null?"(😒 This Conatct details is not added)":`+92 ${output}`}`;
    getContactName="";
   
}
function reset(){
    location.reload();
}
