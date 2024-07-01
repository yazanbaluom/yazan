console.log('test');

let array = [
  {
    name: 'Hamburger',
    price: 45,
    qty:1
  },
  {
    name: 'Hamburger',
    price: 45,
    qty:1
  },
  {
    name: 'Hamburger',
    price: 45,
    qty:4
  },
  {
    name: 'Fries',
    price: '10',
  },
  {
    name: 'Hamburger',
    price: 45,
    qty:3
  },
];

// const x = array.find((v)=>v.name=="Hamburger")
// x.qty = 10
// console.log(x);
// console.log(array);


const newArray = [] 
array.forEach((item)=>{
    const exist = newArray.find((v)=>v.name==item.name)
    if(exist){
        exist.qty+=item.qty
    }else{
        newArray.push(item)
    }

})

console.log(newArray);