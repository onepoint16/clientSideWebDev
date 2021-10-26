
 function expand(divname)
 {
    let mydiv=document.getElementById(divname);
    let currentdisplay = mydiv.style.display;
    mydiv.style.display = "block";    
 }
 
 function collapse(divname)
 {
    let mydiv=document.getElementById(divname);
    let currentdisplay = mydiv.style.display;
    mydiv.style.display = "none";        
 }
