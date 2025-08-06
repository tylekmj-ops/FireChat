/**
 * @TODO get a reference to the Firebase Database object
 */
const database = firebase.database().ref();

/**
 * @TODO get const references to the following elements:
 *      - div with id #all-messages
 *      - input with id #username
 *      - input with id #message
 *      - button with id #send-btn and the updateDB
 *        function as an onclick event handler
 */
const messageDiv = document.querySelector("#all-messages");
const username = document.querySelector("#username");
const message = document.querySelector("#message");
const submitButton = document.querySelector("#send-btn");

submitButton.onclick = updateDB;

/**
 * @TODO create a function called updateDB which takes
 * one parameter, the event, that:
 *      - gets the values of the input elements and stores
 *        the data in a temporary object with the keys USERNAME
 *        and MESSAGE
 *      - console.logs the object above
 *      - writes this object to the database
 *      - resets the value of #message input element
 */

function updateDB(event) {
  // Prevent default refresh
  event.preventDefault();
  // Create data object
  let data = {
    username: username.value,
    message: message.value,
  };

  console.log(data);
  database.push(data);

  message.value = "";
  // console.log the object
  // GET *PUSH* PUT DELETE
  // Write to our database
  // Reset message
}

database.on("child_added", addMessageToBoard);

/**
 * @TODO add the addMessageToBoard function as an event
 * handler for the "child_added" event on the database
 * object
 */

/**
 * @TODO create a function called addMessageToBoard that
 * takes one parameter rowData which:
 *      - console.logs the data within rowData
 *      - creates a new HTML element for a single message
 *        containing the appropriate data
 *      - appends this HTML to the div with id
 *        #all-messages (we should have a reference already!)
 *
 */

function addMessageToBoard(rowData) {
  let data = rowData.val();
  console.log(data);

  let singleMessage = makeSingleMessageHTML(data.username, data.message);


  messageDiv.appendChild(singleMessage)
  // Store the value of rowData inside object named 'data'
  // console.log data
  // Create a variable named singleMessage
  // that stores function call for makeSingleMessageHTML()
  // Append the new message HTML element to allMessages
}

/**
 * @TODO create a function called makeSingleMessageHTML which takes
 * two parameters, usernameTxt and messageTxt, that:
 *      - creates a parent div with the class .single-message
 *
 *      - creates a p tag with the class .single-message-username
 *      - update the innerHTML of this p to be the username
 *        provided in the parameter object
 *      - appends this p tag to the parent div
 *
 *      - creates a p tag
 *      - updates the innerHTML of this p to be the message
 *        text provided in the parameter object
 *      - appends this p tag to the parent div
 *
 *      - returns the parent div
 */

function makeSingleMessageHTML(usernameTxt, messageTxt) {
  let parentDiv = document.createElement("div")
  parentDiv.className = "single-message"
  let usernameP = document.createElement("p")
  usernameP.innerHTML = usernameTxt
  usernameP.className = "single-message-username"
  parentDiv.append(usernameP)


  let messageP = document.createElement("p")
  messageP.innerHTML = messageTxt
  parentDiv.append(messageP)

  return parentDiv
  // Create Parent Div
  // Add Class name .single-message
  // Create Username P Tag
  // Append username
  // Create message P Tag
  // Return Parent Div
}

/**
 * @BONUS add an onkeyup event handler to the form HTML
 * element so the user can also submit the form with the
 * Enter key
 *
 * @BONUS use an arrow function
 */
