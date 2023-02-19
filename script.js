const calculate = () => {
    // event.preventDefault();
    let number = document.getElementById('number').value;
    console.log(number);

    let temp = document.getElementById('changeDegree').value;
    console.log(temp);
    // let temp_1 = temp.options[temp.selectedIndex].value;
    // console.log(temp_1);

    let result;
    if(temp == 'celsius'){
        result = (number * 9/5) + 32;
        console.log(result);
        document.getElementById('result').innerHTML = `${number} Celsious = ${result} Fahrenheit`;
    }else if(temp == 'fahrenheit'){
        result = (number - 32) * 5/9 ;
        console.log(result);
        document.getElementById('result').innerHTML = `${number} Fahrenheit = ${result} Celcious`;
    }
    else{
        document.getElementById('result').innerHTML = `Please Select Correct Option !`;
    }
}