/*
# Diff 2 arrays
Take two arrays as input, and return a third array that is made up of elements that were only found in one of the two input arrays, but not values that were found in both arrays.
ie: return the third array that contains the difference between the two input arrays.
*/


function diffArray(arr1, arr2) {

  var uniques = [];

  for (i=0; i<arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) == -1) {
      uniques.push(arr1[i]);
    }
  }

  for (x=0; x<arr2.length; x++) {
    if (arr1.indexOf(arr2[x]) == -1) {
      uniques.push(arr2[x]);
    }
  }

  console.log(uniques);
  return uniques;
}

diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
