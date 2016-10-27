var dimension;
var splitters = [" ", "!", "?", ".", "&", "(", ")",",","1","2","3","4",'5','6','7','8','9','0','-','/','\\'];
var newArray = []
var code = []
var letterCount;
var dimension;

var separate = function(text) {
  newArray=[];
  array =  text.toLowerCase().split('');
  for (var index=0; index<text.length; index ++) {
    if (splitters.indexOf(array[index])=== -1) {
      newArray.push(array[index]);
    }
  };
  letterCount = newArray.length;

  console.log("newArray is "+newArray);
}
console.log(letterCount)

var codify = function(input) {
  code=[];
for (i=1; i<89; i ++) {
  if (letterCount <= i*i) {
    dimension = i;
    console.log("dimension :"+dimension+ "lettercount: "+letterCount);
    break;
    }
  }
  for (index=0; index<dimension; index ++) {
  for (i=index; i < newArray.length; i += dimension) {
    code.push(input[i]);
  }
}
for (i2 = 5; i2 < code.length; i2 += 5) {
  code.splice(i2, 0, " ");
  i2 = i2 + 1;
}
console.log("newArray.length :"+newArray.length+ "code.length : "+code.length);

  return code;
}


$(function() {
  $("form").submit(function(event) {
    // debugger;
    event.preventDefault();
    $(".result").empty();
    var input = $("input").val();
    separate(input);
    $(".result").append(codify(newArray));
  });
});
