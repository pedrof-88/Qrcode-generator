let divQr = document.getElementById('qrcode');

function gerarQRCode(){
  let url = document.getElementById('url').value;
  divQr.innerHTML = "";
  let corFundo = document.getElementById('fundo').value;
  let corContraste = document.getElementById('contraste').value;

  new QRCode(divQr, {text: url, width:400, height:400, colorDark: corContraste, colorLight: corFundo});
  setTimeout(() => {
    baixarQRCode();
  }, 1000);
}
function baixarQRCode (){
  let btn = document.getElementById('download');
  let img = divQr.querySelector('img').src;
  btn.href = img;
}