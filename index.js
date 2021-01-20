const sendButton = document.querySelector(".send-button");
const inputText = document.querySelector(".text-content");
const lastMessage = document.querySelector(".sent-message");

sendButton.addEventListener("click",showMessage);

function showMessage(){
    let message = inputText.value;
    
    lastMessage.innerHTML = message;
    if (message === ""){
        alert("No message typed.");
    }
    inputText.value = "";
}
