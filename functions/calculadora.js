



const calculate =( number1, number2, operation ) =>





{
    let result
    
    
    
    
    switch (operation) {
    
    case"+":
    result = number1 + number2
        
        break; 

   
       




        case"-":
        result = number1 - number2
        
        break;


        
        case"*":
        result = number1 * number2
        
        break;

        
      
        case"/":
        result = number1 / number2
        
        break;

        







default: result = number1 + number2



}

return result

 

}



console.log(calculate (2022,35,'-'))