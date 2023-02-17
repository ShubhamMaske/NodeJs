const ans = async(val)=>{
    return val;
}

ans('a').then( data =>{
    console.log(data);
    return ans('b');
}).then( data =>{
    console.log(data);
    return ans('c');
}).then( data =>{
    console.log(data);
    return ans('d');
}).then( data =>{
    console.log(data);
    return ans('e');
}).then( data =>{
    console.log(data);
})


