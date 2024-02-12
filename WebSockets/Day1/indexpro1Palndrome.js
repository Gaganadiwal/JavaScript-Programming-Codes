
    function isPalindrome(number) {
        
        const numString = number.toString();
        
    
        let start = 0;
        let end = numString.length - 1;
        
        
        while (start < end) {
            
            if (numString[start] !== numString[end]) {
                return "is not Palindrome";
            }
            
            start++;
            end--;
        }
        
        return "is Palindrome";
    }
    
    
    const number1 = 12321;
    const number2 = 12345;
    
    console.log(isPalindrome("Number1 is: "+number1)); 
    console.log(isPalindrome("Number2 is: "+number2)); 
    