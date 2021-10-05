function sum(array){
    return array.reduce((acc,curr)=>acc+curr,0);
}
function multiply(array){
    return array.reduce((acc,curr)=>acc*curr,1);
}
function reverse(str){
    return str.split('').reduce((acc,curr)=>curr+acc,"");
} 
function filterLongWords(words,i){
    return words.filter(word => word.length>i);
}