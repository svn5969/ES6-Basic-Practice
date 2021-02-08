const ages = [22,23,25,26,28,27]
const ages2 = [12,15,16,18]
const ages3 = [33,22,11,44,55]
const allAges = ages.concat(ages2).concat(ages3)
const allAges2 =[...ages,...ages2,...ages3]
console.log(allAges2);

const business = 650
const minister = 450
const sochib = 250
const takaPoisa = [650,450,250]
const maximum = Math.max(...takaPoisa)
console.log(maximum);