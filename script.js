const buttons=document.querySelectorAll(".btns");
const display=document.querySelector("#screen");
const show=document.querySelector('[data-value="="]');
const c=document.querySelector('[data-value="c"]');

let screen="";

buttons.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        if(btn.dataset.value!=="=" && btn.dataset.value!="c"){
            screen+=btn.dataset.value;
            console.log(screen);
            display.innerText=screen;
        }
    });
});

show.addEventListener("click",()=>{
    try{
        let val=eval(screen);
        if(!isFinite(val)) throw new Error();
        
        display.innerText=val;
        screen=val;
    }
    catch{
        display.innerText="Error.";
        screen="";
    }
});
c.addEventListener("click",()=>{
    screen="";
    display.innerText="";
});