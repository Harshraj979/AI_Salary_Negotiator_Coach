document.addEventListener("DOMContentLoaded", () => {
    const outputEl = document.getElementById("resultOutput");
    const reply = sessionStorage.getItem("aiReply");
    const err = sessionStorage.getItem("aiError");
    
    function parseMarkdown(text) {
        let html = text
            .replace(/^### (.*$)/gim, '<h3 style="color:#38bdf8; margin-top:20px; margin-bottom:10px;">$1</h3>')
            .replace(/^## (.*$)/gim, '<h2 style="color:#38bdf8; margin-top:20px; margin-bottom:10px;">$1</h2>')
            .replace(/\*\*(.*?)\*\*/gim, '<strong style="color:#38bdf8;">$1</strong>')
            .replace(/^\* (.*$)/gim, '<li style="margin-left:25px; margin-bottom:8px;">$1</li>')
            .replace(/^- (.*$)/gim, '<li style="margin-left:25px; margin-bottom:8px;">$1</li>')
            .replace(/\n\n/gim, '<br><br>')
            .replace(/([^\>])\n([^\<])/gim, '$1<br>$2');
        return html;
    }

    if (reply) {
      outputEl.innerHTML = parseMarkdown(reply);
    } else if (err) {
      outputEl.innerText = err;
    } else {
      outputEl.innerText = "No advice found. Please go back and submit your details to generate a plan.";
    }
});
