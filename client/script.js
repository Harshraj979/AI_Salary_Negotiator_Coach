async function sendData() {
  const data = {
    role: document.getElementById("role").value,
    experience: document.getElementById("experience").value,
    currentSalary: document.getElementById("currentSalary").value,
    offeredSalary: document.getElementById("offeredSalary").value,
    location: document.getElementById("location").value,
    question: document.getElementById("userQuestion").value,
  };
  
  const btn = document.querySelector('button[type="submit"]');
  btn.innerText = "Generating Strategy...";
  btn.disabled = true;

  try {
    const res = await fetch("/api/negotiate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    
    if (result.reply) {
      sessionStorage.setItem("aiReply", result.reply);
      sessionStorage.removeItem("aiError");
    } else {
      sessionStorage.setItem("aiError", result.error || "No response generated. Please try again.");
      sessionStorage.removeItem("aiReply");
    }
    
    window.location.href = "result.html";
  } catch (error) {
    console.error("Networking error:", error);
    sessionStorage.setItem("aiError", "Failed to connect to the server. Make sure it's running.");
    sessionStorage.removeItem("aiReply");
    window.location.href = "result.html";
  } finally {
    btn.innerText = "Submit";
    btn.disabled = false;
  }
}
