//Set database object here
const db = firebase.database().ref();


/**
 * Updates the database with the username and message.
 */
function updateDB(event){
    event.preventDefault();
    const username        = usernameElement.value;
    const message         = messageElement.value;

    usernameElement.value = "";
    messageElement.value  = "";

    console.log(username + " : " + message);

    //Update database here
    const value = {
        NAME: username,
        MESSAGE: message
    }
    db.push(value);

}

const usernameElement = document.getElementById("username");
const messageElement = document.getElementById("message");
const button = document.getElementById("submitButton");
button.addEventListener("click",updateDB);

// Set database "child_added" event listener here

db.on("child_added", addMessagesToBoard);

let divMessages = document.querySelector(".allMessages");

function addMessagesToBoard(rowData){
    const row = rowData.val();
    const name = row.NAME;
    const message = row.MESSAGE;

    const pElement = document.createElement("p");
    pElement.innerText = `${name} : ${message}`;
    divMessages.appendChild(pElement);
}











