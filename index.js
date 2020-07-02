
var root = document.querySelector('.root')

const html = document.createElement('input')
const css = document.createElement('input')
const javascript = document.createElement('input')
const react = document.createElement('input')
const backend = document.createElement('input')
var button = document.createElement('button')
var message = document.createElement('h3')
button.innerText = 'button'


html.type = 'text'
html.placeholder = 'name'





const getVAlue = () =>{
let htmlValue = parseFloat(html.value);
let cssValue = parseFloat(css.value);
let javaScriptValue = parseFloat(javascript.value);
let reactValue = parseFloat(react.value);
let backendValue = parseFloat(backend.value);

let average = (htmlValue + cssValue + javaScriptValue + reactValue + backendValue) / 5;
if (average > 0){root.appendChild(message)}

console.log(average);



if (average > 9){
    message.innerText = 'congratulations ! excellent A grade'
    
}








 

}




button.addEventListener('click', getVAlue)


root.appendChild(html);
root.appendChild(css);
root.appendChild(javascript);
root.appendChild(react);
root.appendChild(backend);
root.appendChild(button);




