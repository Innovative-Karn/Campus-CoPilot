function sendMessage() {
  const userInput = document.getElementById("user-input").value.toLowerCase();
  const chatBox = document.getElementById("chat-box");

  let response = "";

  if (userInput.includes("notes")) {
    response = "Here are your notes for the subject!";
  } else if (userInput.includes("exam")) {
    response = "The upcoming exam is scheduled for next Monday.";
  } else if (userInput.includes("faculty")) {
    response = "Prof. Manpreet Kaur can be contacted at manpreet.kaur@lpu.in";
  } else if (userInput.includes("assignment")) {
    response = "You have 2 assignments due this week.";
  } else {
    response = "I'm sorry, I didn't understand that.";
  }

  chatBox.innerHTML += <div class='user-msg'>You: ${userInput}</div>;
  chatBox.innerHTML += <div class='bot-msg'>Bot: ${response}</div>;
  document.getElementById("user-input").value = "";
}
