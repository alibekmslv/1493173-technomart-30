const modalFeedbackTrigger = document.getElementById("modalFeedbackTrigger");
const modalFeedback = document.getElementById("modalFeedback");
const modalFeedbackClose = document.getElementById("modalFeedbackClose");
const modalMapTrigger = document.getElementById("modalMapTrigger");
const modalMap = document.getElementById("modalMap");
const modalMapClose = document.getElementById("modalMapClose");

modalFeedbackTrigger.addEventListener("click", function () {
  modalFeedback.style.display = "block";
  modalFeedback.focus();
});

modalFeedbackClose.addEventListener("click", function () {
  modalFeedback.style.display = "none";
});

feedbackForm.addEventListener("submit", function (e) {
  e.preventDefault();
  modalFeedback.style.display = "none";
});

modalMapTrigger.addEventListener("click", function (e) {
  e.preventDefault();
  modalMap.style.display = "block";
  modalMap.focus();
});

modalMapClose.addEventListener("click", function () {
  modalMap.style.display = "none";
});
