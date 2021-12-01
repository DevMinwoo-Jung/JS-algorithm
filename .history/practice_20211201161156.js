{
  'use strict';

  const months = ['Jan', 'March', 'April', 'June'];
  months.splice(1, 0, 'Feb');
  // inserts at index 1
  console.log(months);
  // expected output: Array ["Jan", "Feb", "March", "April", "June"]
  let monthsArr = months.splice(0);
  console.log(monthsArr);
  //  ['Jan', 'Feb', 'March', 'April', 'June']
  
  months.splice(0, 1, 'May', 'sibal');
  console.log(months);
  // expected output: Array ["May"]
  

}