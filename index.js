const form = document.querySelector('#form')
const container = document.querySelector('.container')

const htmlInput = document.querySelector('#htmlScore')
const cssInput = document.querySelector('#cssScore')
const jsInput = document.querySelector('#jsScore')
const backendInput = document.querySelector('#backendScore')
let renderAverage = document.createElement('h3')
renderAverage.className = 'renderAverage'

let inputarray = [htmlInput, cssInput, jsInput, backendInput]

form.addEventListener('submit', (e) => {
    e.preventDefault()
    cheeckInputs()
})

const cheeckInputs = () => {
    renderAverage.innerText = ''
   const htmlValue =  htmlInput.value
    const cssValue = cssInput.value
    const jsValue = jsInput.value
    const backendValue = backendInput.value
 
    

    if ( htmlValue === ''){
        //show error
        //add error class
        setErrorFor(htmlInput, 'This field cannot be left blank')
    }else{
        //add success class
       // setSuccessFor(htmlInput,'This field cannot be left blank')
       setSuccessFor(htmlInput)
    }

    if ( cssValue === ''){
        //show error
        //add error class
        setErrorFor(cssInput, 'This field cannot be left blank')
    }else{
        //add success class
       // setSuccessFor(htmlInput,'This field cannot be left blank')
       setSuccessFor(cssInput)
    }
    if ( jsValue === ''){
        //show error
        //add error class
        setErrorFor(jsInput, 'This field cannot be left blank')
    }else{
        //add success class
       // setSuccessFor(htmlInput,'This field cannot be left blank')
       setSuccessFor(jsInput)
    }
    if ( backendValue === ''){
        //show error
        //add error class
        setErrorFor(backendInput, 'This field cannot be left blank')
    }else{
        //add success class
       // setSuccessFor(htmlInput,'This field cannot be left blank')
       setSuccessFor(backendInput)
    }
    if ( htmlValue !== '' && cssValue !== '' && jsValue !== '' && backendValue !== ''){
        
        const valueArray = [htmlValue, cssValue, jsValue, backendValue]
        const valueArrayAfterParse = valueArray.map(any => parseFloat(any))
        let total = 0
        for (let i = 0; i < valueArrayAfterParse.length; i++) {
            total += valueArrayAfterParse[i]
        } 
        let average = total /  valueArrayAfterParse.length
        console.log(total);
        
        
        renderAverage.innerText = `Your average is ${average}`
        container.appendChild(renderAverage);

        htmlInput.value = ''
        cssInput.value = ''
        jsInput.value = ''
        backendInput.value = ''

        inputarray.forEach(any => any.parentElement.className = 'form-control')

        
    }
}

const setErrorFor = (input, message) => {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    //adding error message inside small 
    small.innerText = message;
    //adding error class 
    formControl.className = 'form-control error'
    

}

const setSuccessFor = (input) => {
    const formControl = input.parentElement
    formControl.className = 'form-control success'
    
   
}



