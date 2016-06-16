
function myReplace(str, before, after) {
  var newString = str.replace(before, after);
  console.log(newString);
}

myReplace("A quick brown fox jumped over the lazy dog", "dog", "cat");

