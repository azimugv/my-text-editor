document.getElementById("bold").addEventListener("click", function () {
  const textContent = getTextFieldById("text");
  textContent.style.fontWeight = "bold";
});
document.getElementById("italic").addEventListener("click", function () {
  const textContent = getTextFieldById("text");
  textContent.style.fontStyle = "italic";
});
