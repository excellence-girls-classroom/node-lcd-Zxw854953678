function buildDigits(digit){//分割数字,将一个数字分割成数字数组
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

function buildLcdString(digitsArray,allDigitsString){//将数字数组的每一个元素匹配一个LCD数字
    var digitsText = [];

    digitsArray.forEach(function(digit){
        digitsText.push(allDigitsString[digit]);
    });

    return digitsText;
}

function printLcdDigits(lcdStringArray){//连接LCD数字,返回一个字符串
    var lcdDigits = '';
    for(var i=0; i<3; i++){
        lcdDigits += lcdDigitReceipt(lcdStringArray,i);
    }

    return lcdDigits;
}

function lcdDigitReceipt(lcdStringArray,index){//返回每行的字符串
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

function printDigit(digit){//打印字符串,字符串是LCD数字

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
