const cryptoJs = require('crypto-js')
const os = require('os');

const GenerateBtn = document.getElementById('GenerateBtn')
GenerateBtn.addEventListener('click', () => {
    const text = document.getElementById('inputCode')
    const textArea = document.getElementById('md5-code')
    var hashCode =cryptoJs.HmacSHA512(text.value, 'nono-live')
    console.log(md5.toString().length);
    textArea.value = hashCode
})
