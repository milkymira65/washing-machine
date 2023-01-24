import React from "react";

function Countdown() {
  var seconds = 59;
  function tick() {
    var counter = document.getElementById("counter");
    seconds--;
    counter.innerHTML = "0:" + (seconds < 10 ? "0" : "") + String(seconds);
    if (seconds > 0) {
      setTimeout(tick, 1000);
    } else {
      document.getElementById("verifiBtn").innerHTML = `
          <div class="Btn" id="ResendBtn">
              <button type="submit">Resend</button>
          </div>
      `;
      document.getElementById("counter").innerHTML = "";
    }
  }
  tick();
}
Countdown();
export default Countdown;
