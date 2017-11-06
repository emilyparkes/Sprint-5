Looping a Triangle

var character = "";

for (var i = 0; i < 7; i++) {
    character = character + "#";
    console.log(character);
}


FizzBuzz

for (i=1; i<=100; i++) {
 if (i%3 && i&5) {
   console.log('FizzBuzz');
 } else if (i%5) {
   console.log('Buzz');
 } else if (i%3){
   console.log('Fizz')
 }else {
   console.log(i)
 }
}


Chess Board

var chessBoard = "";
var size = 8;
var character = '#';
var space = ' ';

   for (var lineCount = 0; lineCount < size; lineCount++) {
       for (var spaceCount = 0; spaceCount < size; spaceCount++) {
           if (lineCount%2) {
               var black = character,
                   white = space;
           } else {
               var black = space;
                   white = character;
           }
           if (spaceCount%2) {
               chessBoard += white;
           } else {
               chessBoard += black;
           }
       }
       chessBoard += "\n";
   }
   console.log(chessBoard);
