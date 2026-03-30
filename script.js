const buttons=document.querySelectorAll(".btns");
const display=document.querySelector("#screen");
const show=document.querySelector('[data-value="="]');

let screen="";

buttons.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        if(btn.dataset.value!=="="){
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
        display.innerText="Enter Valid Input .";
        screen="";
    }
});