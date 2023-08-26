const submit = document.querySelector(".submit");

const container = document.querySelector(".container");

const thankyou = document.querySelector(".thankyou-container");

const button = document.querySelectorAll(".button");

const selectedHTML = document.querySelector(".selected");

let rating = '';

button.forEach((buttons)=>{
    buttons.addEventListener("click",()=>{
        rating = buttons.getAttribute("data-value");
    });
})

submit.addEventListener("click",()=>{
    container.classList.add("active");
    thankyou.classList.add("active");
    selectedHTML.innerHTML = `You have selected ${rating} out of 5`;
    
});
