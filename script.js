function sendMessage() {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");
  const userMessage = input.value.toLowerCase();
  let botResponse = "";

  if (userMessage.includes("notes")) {
    botResponse = "Here are your notes for the subject!";
  } else if (userMessage.includes("exam")) {
    botResponse = "The upcoming exam is scheduled for next Monday.";
  } else if (userMessage.includes("faculty")) {
    botResponse = "Prof. Manpreet Kaur can be contacted at manpreet.kaur@lpu.in";
  } else if (userMessage.includes("assignment")) {
    botResponse = "You have 2 assignments due this week.";
  } else {
    botResponse = "I'm sorry, I didn't understand that.";
  }

  chatBox.innerHTML += <div><strong>You:</strong> ${userMessage}</div>;
  chatBox.innerHTML += <div><strong>Bot:</strong> ${botResponse}</div>;
  input.value = "";
}
