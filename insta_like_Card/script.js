 let btn =document.querySelector("button");
 let h1 = document.querySelector("h1"); 
let check = 0;

 btn.addEventListener("click", function() {
    if(check === 0){
    h1.textContent = "Friends";
    btn.textContent = "Remove Friend";
    h1.style.color = "green";
    check = 1;}
    else{
        h1.textContent = "Strangers";
        btn.textContent = "Add Friend";
        h1.style.color = "red";
        check = 0;
    }

});


