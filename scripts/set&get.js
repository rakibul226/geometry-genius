function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    // inputField.value = "";
    return inputFieldValue;

}

function setInputValue(elementId,totalValue){
    const elementValue = document.getElementById(elementId);
    elementValue.innerText = totalValue;
}

// function validateInput(firstInput,secondInput){

//     if(isNaN(firstInput) || isNaN(secondInput)){
//         alert('Please insert a Number');
//         return;
//     }

// }