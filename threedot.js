const ages = [12, 14 , 14 ,11 ] ;
const ages2 = [15, 34, 46 , 45 ] ;
const ages3 = [25, 32 , 33, 33 ];
const allAges = ages.concat(ages2).concat([2323]).concat(ages3) ;
const allAges2 = [...ages, ...ages2, ...ages3];
console.log(allAges2);

const sobarTaka = [2323, 2323, 93939, 3323] ;
console.log(Math.max(...sobarTaka));