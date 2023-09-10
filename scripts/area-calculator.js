function calculateTriangleArea(){
    const triangleBase = getInputValue('triangle-base')
    const triangleHeight = getInputValue('triangle-height');

    // validateInput(triangleBase,triangleHeight);
    if(isNaN(triangleBase) || isNaN(triangleHeight)){
                alert('Please insert a Number');
                return;
            }
    const totalArea = 0.5 * triangleBase * triangleHeight;
    setInputValue('triangle-area',totalArea)
}


function calculateRectangleArea(){
    const rectangleWidth = getInputValue('rectangle-width');
    const rectangleLength = getInputValue('rectangle-length');


    // validateInput(rectangleLength,rectangleWidth);
    if(isNaN(rectangleLength) || isNaN(rectangleWidth)){
                alert('Please insert a Number');
                return;
            }
    const totalArea = rectangleWidth * rectangleLength;
    setInputValue('rectangle-area',totalArea);
}

