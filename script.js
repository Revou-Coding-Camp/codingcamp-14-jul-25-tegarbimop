const form = document.getElementById("messageForm");
const previewName = document.getElementById("previewName");
const previewDob = document.getElementById("previewDob");
const previewGender = document.getElementById("previewGender");
const previewMessage = document.getElementById("previewMessage");
const currentTime = document.getElementById("currentTime");

function updateTime() {
  const now = new Date();
  currentTime.textContent = now.toString();
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  previewName.textContent = document.getElementById("name").value;
  previewDob.textContent = document.getElementById("dob").value;
  previewGender.textContent = document.getElementById("gender").value;
  previewMessage.textContent = document.getElementById("message").value;
  updateTime();
});

updateTime();
