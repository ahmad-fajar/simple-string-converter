var strBox = document.getElementById('string-box');
var asciiBox = document.getElementById('ascii-box');
var binBox = document.getElementById('bin-box');
var hexBox = document.getElementById('hex-box');
var octBox = document.getElementById('oct-box');


let toAscii = (strBox) => {
  let codeAscii = [];
  for  (var i = 0; i <= strBox.value.length - 1; i++) {
    if (strBox.value.charCodeAt(i) >= 100) {
      codeAscii.push(strBox.value.charCodeAt(i));
    } else {
      codeAscii.push('0' + strBox.value.charCodeAt(i));
    }
  }
  return codeAscii.join(' ');
};

let toBin = (strBox) => {
  let codeBin = [];
  for  (var i = 0; i <= strBox.value.length - 1; i++) {
    codeBin.push(0 + strBox.value.charCodeAt(i).toString(2));
  }
  return codeBin.join(' ');
};

let toHex = (strBox) => {
  let codeHex = [];
  for  (var i = 0; i <= strBox.value.length - 1; i++) {
    codeHex.push(strBox.value.charCodeAt(i).toString(16));
  }
  return codeHex.join(' ');
};

let toOct = (strBox) => {
  let codeOct = [];
  for  (var i = 0; i <= strBox.value.length - 1; i++) {
    codeOct.push(strBox.value.charCodeAt(i).toString(8));
  }
  return codeOct.join(' ');
};


strBox.addEventListener('input', function(event) {
  asciiBox.value = toAscii(strBox);
  binBox.value = toBin(strBox);
  hexBox.value = toHex(strBox);
  octBox.value = toOct(strBox);
  });

