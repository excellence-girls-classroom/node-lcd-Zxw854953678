function buildDigits(digit){
    var digitStringArray = digit.toString().split('');
    var digitArray = [];

    digitStringArray.forEach(function(digitString){
        digitArray.push(Number(digitString));
    });

    return digitArray;
}

function loadAllDigits(){

    return {
        0:['._.','|.|','|_|'],
        1:['...','..|','..|'],
        2:['._.','._|','|_.'],
        3:['._.','._|','._|'],
        4:['...','|_|','..|'],
        5:['._.','|_.','._|'],
        6:['._.','|_.','|_|'],
        7:['._.','..|','..|'],
        8:['._.','|_|','|_|'],
        9:['._.','|_|','..|']
    };

}

function buildLcdString(digitsArray,allDigitsString){
    var digitsText = [];

    digitsArray.forEach(function(digit){
        digitsText.push(allDigitsString[digit]);
    });

    return digitsText;
}

function printLcdDigits(lcdStringArray){
    var lcdDigits = '';
    for(var i=0; i<3; i++){
        lcdDigits += lcdDigitReceipt(lcdStringArray,i);
    }

    return lcdDigits;
}

function lcdDigitReceipt(lcdStringArray,index){
    var digitReceipt = '';

    for(var j=0; j<lcdStringArray.length; j++){

        digitReceipt += lcdStringArray[j][index] ;
        if(j === lcdStringArray.length-1)
            digitReceipt += '\n';
        else
            digitReceipt += ' ';
    }

    return digitReceipt;
}

function printDigit(digit){
    console.log("run begin...");

    var digitsArray = buildDigits(digit);
    var allDigitsString = loadAllDigits();
    var lcdStringArray = buildLcdString(digitsArray,allDigitsString);

    var lcdDigits = printLcdDigits(lcdStringArray);
    console.log(lcdDigits);
}

module.exports =
{
    loadAllDigits:loadAllDigits,
    buildDigits:buildDigits,
    buildLcdString:buildLcdString,
    lcdDigitReceipt:lcdDigitReceipt,
    printLcdDigits:printLcdDigits,
    printDigit:printDigit
};

/*
* attention:函数名开头要小写,否则发生错误;
* 这是WebStorn的特性(为了预防某些错误):在WebStorn中,开头字母大写默认是类,小写开头默认是函数,如果函数名大写开头会出现警告
* */
