const submit = document.querySelector(".submit");

const container = document.querySelector(".container");

const thankyou = document.querySelector(".thankyou-container");

const button = document.querySelectorAll(".button");

const selectedHTML = document.querySelector(".selected");

submit.addEventListener("click",()=>{
    container.classList.add("active");
    thankyou.classList.add("active");

    button.forEach((number)=> {
       
        var buttonValue = number.value;
        
        // Now, you can use the buttonValue as needed
        selectedHTML.innerHTML = `You selected ${buttonValue} out of 5`;
    });
})