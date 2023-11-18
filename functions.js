document.getElementById("bold").addEventListener("click", function () {
  const textContent = getTextFieldById("text");
  textContent.style.fontWeight = "bold";
});
document.getElementById("italic").addEventListener("click", function () {
  const textContent = getTextFieldById("text");
  textContent.style.fontStyle = "italic";
});
document.getElementById("underline").addEventListener("click", function () {
  const textContent = getTextFieldById("text");
  textContent.style.textDecoration = "underline";
});
document.getElementById("left").addEventListener("click", function () {
  const textContent = getTextFieldById("text");
  textContent.style.textAlign = "left";
});
