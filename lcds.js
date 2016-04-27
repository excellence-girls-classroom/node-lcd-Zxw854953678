function nodeLcdDigit(){

  this.buildDigits = function (digit){
    var digitStringArray = digit.toString().split('');
    var digitArray = [];

    digitStringArray.forEach(function(digitString){
      digitArray.push(Number(digitString));
    });

    return digitArray;
  };

  this.loadAllDigits = function (){

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

  };

  this.biuldLcdString = function (digitsArray,allDigitsString){
    var digitsText = [];

    digitsArray.forEach(function(digit){
      digitsText.push(allDigitsString[digit]);
    });

    return digitsText;
  };

  this.LcdDigitReceipt = function (lcdStringArray,index){
    var digitReceipt = '';

    for(var j=0; j<lcdStringArray.length; j++){
      digitReceipt += lcdStringArray[j][index] ;
      if(j === lcdStringArray.length-1)
        digitReceipt += '\n';
      else
        digitReceipt += ' ';
    }

    return digitReceipt;
  };

  this.printLcdDigits = function(lcdStringArray){
    var lcdDigits = '';

    for(var i=0; i<3; i++){
      lcdDigits += this.LcdDigitReceipt(lcdStringArray,i);
    }

    return lcdDigits;
  };

  this.printDigit = function (digit){
    console.log("run begin...");
    var digitsArray = this.buildDigits(digit);
    var allDigitsString = this.loadAllDigits();
    var lcdStringArray = this.biuldLcdString(digitsArray,allDigitsString);

    var lcdDigits = this.printLcdDigits(lcdStringArray);
    console.log(lcdDigits);
  };
}
module.exports = nodeLcdDigit;
