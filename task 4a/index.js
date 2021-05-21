//  creating a function that convert farh to celsius....
 function convertFahrToCelsius(f){
    // declearing the basic variable....
    let type = typeof f;
    let myJSON = JSON.stringify(f)

    // checking if the input will be converted to a number.....
    if (f === Number(f)){
        return c = (f - 32) * 5/9;
    }

    // checking if it's an Array...
    else if(Array.isArray(f)){
      let output = `${myJSON} is not a valid number but a/an Array.`;
        console.log(output);
    }
    
    // checking for other types of data....
    else if ( isNaN(f)) {
        let output = `${myJSON} is not a valid number but a/an ${ type }.`;
        console.log(output);
    }

    return c = (f - 32) * 5/9;
}
 
convertFahrToCelsius(800).toFixed(4)