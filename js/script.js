const modalFeedbackTrigger = document.getElementById("modalFeedbackTrigger");
const modalFeedback = document.getElementById("modalFeedback");
const modalFeedbackClose = document.getElementById("modalFeedbackClose");
const feedbackForm = document.getElementById("feedbackForm");

modalFeedbackTrigger.addEventListener("click", function () {
  modalFeedback.style.display = "block";
});

modalFeedbackClose.addEventListener("click", function () {
  modalFeedback.style.display = "none";
});

feedbackForm.addEventListener("submit", function (e) {
  e.preventDefault();
  modalFeedback.style.display = "none";
});
