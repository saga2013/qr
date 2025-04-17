const btn = document.getElementById('btn')
const rang = document.getElementById('rang')
const fon = document.getElementById('fon')
const text = document.getElementById('input')
const qrContainer = document.getElementById("qrcode");
function generate(){
  const rangValue = rang.value
  const fonValue = fon.value
  const textValue = text.value
 
    qrContainer.innerHTML = "";

var qrcode = new QRCode(document.getElementById("qrcode"), {
	text: textValue,
	width: 200,
	height: 200,
	colorDark : rangValue,
	colorLight : fonValue,
	correctLevel : QRCode.CorrectLevel.H
});
}
btn.addEventListener('click', generate)
rang.addEventListener('input', generate )
fon.addEventListener('input', generate )








