function sendMessage() {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");

  const userMsg = input.value.trim();
  if (userMsg === "") return;

  // Show user message
  chatBox.innerHTML += <div><strong>You:</strong> ${userMsg}</div>;

  // Bot reply logic
  let botReply = "";

  if (userMsg.toLowerCase().includes("notes")) {
    botReply = "Here’s the link to your subject notes: [Sample Notes PDF]";
  } else if (userMsg.toLowerCase().includes("exam")) {
    botReply = "Your next exam is on 25th July. All the best!";
  } else if (userMsg.toLowerCase().includes("faculty")) {
    botReply = "For academic queries, contact Prof. Manpreet Kaur at manpreet.kaur@lpu.in";
  } else if (userMsg.toLowerCase().includes("reminder")) {
    botReply = "Reminder set for Assignment Submission on 22nd July.";
  } else {
    botReply = "I'm still learning! Please ask academic-related queries like notes, faculty, or exams.";
  }

  // Show bot reply
  chatBox.innerHTML += <div><strong>CoPilot:</strong> ${botReply}</div>;
  chatBox.scrollTop = chatBox.scrollHeight;
  input.value = "";
}