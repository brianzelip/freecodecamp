function rot13(str) { // LBH QVQ VG!
  var newStr = '';
  for (i=0; i<str.length; i++) {
    if (str.charCodeAt(i) > 64 && str.charCodeAt(i) < 78) {
      newStr = newStr + String.fromCharCode(str.charCodeAt(i) + 13);
    } else if (str.charCodeAt(i) >= 78 && str.charCodeAt(i) < 91) {
      newStr = newStr + String.fromCharCode(str.charCodeAt(i) - 13);
    } else {
      newStr = newStr + str[i];
    }
  }
  return newStr;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");

BRIAN ZELIP

rot13("BRIAN ZELIP");

/*
var middleman = str.charCodeAt(0) - 13;
//return middleman;
//return str.charCodeAt(0);
return String.fromCharCode(70);


*/
