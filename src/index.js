function check(str, bracketsConfig) {

 
    let myBrackets = {
        openElements: [],
        closeElements: []
    };

    bracketsConfig.forEach(function (oneConfig) {
        myBrackets.openElements.push(oneConfig[0]);
        myBrackets.closeElements.push(oneConfig[1]);
    });

  
    let stackSymbols = [];
    let strLength = str.length;

 
    if (strLength % 2 !== 0) {
        return false;
    }

    
    for (let iSymbol = 0; iSymbol < strLength; iSymbol++) {

        
        if ((myBrackets.openElements.indexOf(str[iSymbol]) !== -1)) {

         
            if (myBrackets.closeElements.indexOf(str[iSymbol]) !== -1) {

              
                if (stackSymbols.indexOf(str[iSymbol]) === -1) {
                    stackSymbols.push(str[iSymbol]);
                    continue;
                }

              
            } else {
                stackSymbols.push(str[iSymbol]);
                continue;
            }

        }


        if (myBrackets.closeElements.indexOf(str[iSymbol]) !== -1) {

          
            let topStackSymbol = stackSymbols[stackSymbols.length - 1];

           
            let iOpenTopStackSymbol =
                myBrackets.openElements.indexOf(topStackSymbol);
            let closePairTopStackSymbol =
                myBrackets.closeElements[iOpenTopStackSymbol];

          
            if (str[iSymbol] !== closePairTopStackSymbol) {
                return false;
            } else {
                stackSymbols.pop();
            }
        }
    }

  
    return stackSymbols.length === 0;

}

module.exports = check;
