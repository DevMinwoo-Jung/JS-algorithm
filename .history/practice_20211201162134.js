{
  'use strict';

  const arr1 = [0, 1, 2, [3, 4]];

  console.log(arr1.flat());
  // expected output: [0, 1, 2, 3, 4]
  let arr3 = arr1.flat();
  console.log(arr1);
  console.log(arr3);
  
  const arr2 = [0, 1, 2, [[[3, 4]]]];
  
  console.log(arr2.flat(2));
  // expected output: [0, 1, 2, [3, 4]]
  console.log(arr2);
  
  

}