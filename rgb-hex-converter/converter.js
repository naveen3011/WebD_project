let RgbInput = document.getElementById("rgb");
let HexInput = document.getElementById("hex");

window.onload=()=>{
    HexInput.value = "";
    RgbInput.value = "";
}

function valid(element){
    element.style.color = "#202040";
}
function invalid(element,otherElement){
    element.style.color = "#000000";
    otherElement.value = null;
}

function toRgb(){
    let HexCode = HexInput.value;
    let rgbArr = [];
    if(/^#?[A-Fa-f0-9]{6}$/.test(HexCode)){
        valid(HexInput);
        HexCode = HexCode.split("#")[1] || HexCode;
        for(let i=0; i<HexCode.length;i+=2){
            rgbArr.push(parseInt(HexCode[i] + HexCode[i+1], 16));
            console.log(rgbArr);
        }
        RgbInput.value = "rgb(" + rgbArr + ")";
        document.body.style.backgroundColor = "rgb(" + rgbArr + ")";
    }
    else{
        invalid(HexInput,RgbInput);
    }
}

function toHex(){
    let rgbCode = RgbInput.value;
    let rgbRegex1 = /^rgb\([0-9]{1,3},[0-9]{1,3},[0-9]{1,3}\)$/;
    let rgbRegex2 = /^[0-9]{1,3},[0-9]{1,3},[0-9]{1,3}$/
    let hex = "#";
    if(rgbRegex1.test(rgbCode) || rgbRegex2.test(rgbCode)){
        rgbCode = rgbCode.replace(/[rgb()]+/g,"") || rgbCode;
        rgbCode = rgbCode.split(",");
        let condition = rgbCode.every((value) => {
            return parseInt(value) <= 255;
        });
        if(condition){
            valid(RgbInput);
            rgbCode.forEach(value => {
                value = parseInt(value).toString(16);
                hex += value.length == 1? "0"+value : value;
            });
            HexInput.value = hex;
            document.body.style.backgroundColor = hex;
        }
        else{
            invalid(RgbInput,HexInput);
        }
    }
    else{
        invalid(RgbInput,HexInput);
    }
}