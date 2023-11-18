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
document.getElementById("center").addEventListener("click", function () {
  const textContent = getTextFieldById("text");
  textContent.style.textAlign = "center";
});
document.getElementById("right").addEventListener("click", function () {
  const textContent = getTextFieldById("text");
  textContent.style.textAlign = "right";
});
document.getElementById("justify").addEventListener("click", function () {
  const textContent = getTextFieldById("text");
  textContent.style.textAlign = "justify";
});

document.getElementById("font-size").addEventListener("keyup", function () {
  const textContent = getTextFieldById("text");
  const fontSizeString = document.getElementById("font-size").value;
  const fontSize = parseInt(fontSizeString);
  textContent.style.fontSize = fontSize + "px";
});
document.getElementById("case").addEventListener("click", function () {
  const textContent = getTextFieldById("text");
  const currentText = textContent.value;

  if (currentText === currentText.toUpperCase()) {
    textContent.value = currentText.toLowerCase();
  } else {
    textContent.value = currentText.toUpperCase();
  }
});

document.getElementById("favcolor").addEventListener("input", function () {
  const textContent = getTextFieldById("text");
  const fontSizeString = document.getElementById("font-size").value;
  const color = document.getElementById("favcolor").value;
  textContent.style.color = color;
});
