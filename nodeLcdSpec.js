var testNodeLcdDigits = require('./main/lcdDigits.js');

describe('unit test',function() {

    describe('buildDigits', function () {

        it('split digit', function () {
            var digitArray = testNodeLcdDigits.buildDigits(910);
            var expectText = ['9', '1', '0'];

            expect(digitArray).toEqual(expectText);
        });
    });

    describe('digitString', function() {
        var digits;
        var allDigitsString;

        beforeEach(function () {
            digits = 910;
            allDigitsString = testNodeLcdDigits.loadAllDigits();
        });

        it('show a digitString', function () {
            var digitString = allDigitsString[0];
            var expectText = ['._.', '|.|', '|_|'];

            expect(digitString).toEqual(expectText);
        });

        it('show lcdDigitsString',function(){
            var lcdDigitText = testNodeLcdDigits.buildLcdString([9,1,0],allDigitsString);
            var expectText = [['._.','|_|','..|'],['...','..|','..|'],['._.','|.|','|_|']];

            expect(lcdDigitText).toEqual(expectText);
        });
    });

    describe('lcdDigits',function(){

        it('printLcdDigits',function(){
            var lcdDigits = testNodeLcdDigits.printLcdDigits([['._.','|_|','..|'],['...','..|','..|'],['._.','|.|','|_|']]);
            var expectText =
                '._.' + ' ' + '...' + ' ' + '._.' + '\n' +
                '|_|' + ' ' + '..|' + ' ' + '|.|' + '\n' +
                '..|' + ' ' + '..|' + ' ' + '|_|' + '\n';

            expect(lcdDigits).toEqual(expectText);
        });
    });

});

describe('Integration testing',function(){

    describe('lcd-digits', function() {
        var digits;
        var allDigitsString;

        beforeEach(function() {
            digits = 910;
            allDigitsString = testNodeLcdDigits.loadAllDigits();
        });

        it('should print correct lcd-digits', function() {

            spyOn(console, 'log');
            testNodeLcdDigits.printDigit(digits);

            var expectText =
                '._. ... ._.'+'\n'+
                '|_| ..| |.|'+'\n'+
                '..| ..| |_|'+ '\n';

            expect(console.log).toHaveBeenCalledWith(expectText);
        });
    });

});


