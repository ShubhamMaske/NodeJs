const arr = ['apple','orange',' ','mango',' ','lemon'];

const newArr = arr.map(value =>{
    if(value === ' '){
        return 'empty string';
    }
    else{
        return value;
    }
})

console.log(arr);
console.log(newArr);


