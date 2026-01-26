const sendBtn = document.getElementById("sendBtn");
const textArea = document.getElementById("floatingTextarea5"); 

sendBtn.addEventListener("click", (e) => {
    e.preventDefault(); 

    const message = textArea.value;
    
    if (message.trim() === "") {
        alert("Bhai kuch likho toh sahi!");
        return;
    }

    // यहाँ ध्यान देना: URL में /save लगा दिया है
    fetch("http://127.0.0.1:5000", { 
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
            name: "DIENSH", 
            comment: message,
            time: new Date().toLocaleString()
        })
    })
    .then(response => {
        if (response.ok) {
            alert("Mubarak ho! Data save ho gaya.");
            textArea.value = ""; // Textbox khali karein
        } else {
            alert("Server ne data nahi liya!");
        }
    })
    .catch(err => {
        console.log("Error:", err);
        alert("Pehle Python file run karo bhai!");
    });
});
