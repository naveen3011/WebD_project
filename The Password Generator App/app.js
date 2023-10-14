const rangeSlider = document.getElementById("range-char");
const numberSlider = document.getElementById("number-char");
const formElement = document.querySelector("#password-form");
const numberEl = document.getElementById("numbers");
const symbolEl = document.getElementById("symbols");
const upperCaseEl = document.getElementById("uppercase");
const passDisplay = document.getElementById("password-display");


const lowerCaseCharCodes = arrayLowToHigh(97,122);
const numberCharCodes = arrayLowToHigh(48,57);
const symbolCharCodes = arrayLowToHigh(33,47).concat(58,64).concat(91,96).concat(123,126);
const upperCaseCharCodes = arrayLowToHigh(65,90);

function generatePassword(charAmount , includeUpperCase , includeSymbols , includeNumbers)
{
    let charcodes = lowerCaseCharCodes;
    if(includeNumbers)
    {
        charcodes =charcodes.concat(numberCharCodes); 
    }
    if(includeUpperCase)
    {
        charcodes =charcodes.concat(upperCaseCharCodes); 
    }
    if(includeSymbols)
    {
        charcodes =charcodes.concat(symbolCharCodes); 
    }

    const passwordChar = [];
    for(let h = 0 ; h < charAmount ; h++)
    {
        let characterCode = charcodes[Math.floor(Math.random()*charcodes.length)];
        passwordChar.push(String.fromCharCode(characterCode));
    } 
    //console.log(passwordChar);
    return passwordChar.join("");
}

function syncCharamount(e)
{
    const valueAmount = e.target.value;
    numberSlider.value = valueAmount;
    rangeSlider.value = valueAmount;

}

rangeSlider.addEventListener("input",syncCharamount);
numberSlider.addEventListener("input",syncCharamount);

formElement.addEventListener("submit" , function(e){
    e.preventDefault();

    const charAmount = numberSlider.value;
    const includeUpperCase = upperCaseEl.checked;
    const includeSymbols = symbolEl.checked;
    const includeNumbers = numberEl.checked;

    const passwords = generatePassword(charAmount , includeUpperCase , includeSymbols , includeNumbers );
    passDisplay.innerText = passwords;
})

function arrayLowToHigh(low,high)
{
    let array = [];
    for(let i =low ; i<=high ; i++)
    {
        array.push(i);
    }
    return array ;
}