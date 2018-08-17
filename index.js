/// Javascript code 

let arr = [2,4,6,8];

map = function(arr,fn){
    let newArr = [] ; 
    arr.forEach(element => {
        newArr.push(fn(element));
    });

    return newArr;
}

double =  function(){
    let newArr = map(arr,function(item){
        return item*2;
    });

    document.getElementById('output').innerHTML = newArr.toString();
}

square = function(){
    let newArr = map(arr,function(item){
        return item*item;
    });

    document.getElementById('output').innerHTML = newArr.toString();
}

half = function(){
    let newArr = map(arr,function(item){
        return item/2;
    });

    document.getElementById('output').innerHTML = newArr.toString();
}

