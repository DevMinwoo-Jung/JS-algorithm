{
  'use strict';

  const array1 = [1, 30, 4, 21, 100000];
  array1.sort();
  console.log(array1);
  // expected output: Array [1, 100000, 21, 30, 4]
  array1.sort((a,b) => a -b);
  console.log(array1);
  

}