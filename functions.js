let result = document.querySelector('#soma');

function Somar() {
    let a = parseInt(document.getElementById('a').value);
    let b = parseInt(document.getElementById('b').value);
    
    return result.textContent = a + b;
}