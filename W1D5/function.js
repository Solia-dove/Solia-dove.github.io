
//1
function max(a,b){
if(a>b)
 return a;
 else
 return b;
}
//2
function maxOfThree(a,b,c){
   if(a>b && a>c)
     return a;
     else if(b>a && b>c)
     return b;
     else
      return c;
} 
//3
let isVowel= function (c){
    if(c==="i"|| c==="a" || c==="e"|| c==="u"|| c==="o"){
        return true;
    }
    else
    return false
    
}
//4
function sum(a){
    let sumOfAll=0.0
    for(i=0;i<a.length;++i){
        sumOfAll = sumOfAll+a[i]
    }
    return sumOfAll;
}

function multiply(a){
    let product=1
    for(i=0;i<a.length;++i){
        product = product*a[i]
    }
    return product;
}
//5
function reverse(s){
    let reversed=s.charAt(s.length);
    for(i=s.length-1;i>=0;i--){
  reversed=reversed +s.charAt(i)
    }
    return reversed
}
//6
function findLongestWord(a){
    let longest=a[0];
    for(i=0;i<a.length;++i){
        if(a[i].length>longest.length){
            longest=a[i]
        }
    }
    return longest.length
}

//7
const filterLongWords= function (a,j){
    for(i=0;i<a.length;++i){
        if(a[i].length>a[j].length){
          return a[i]
        }
    }

}
const filterLongWords1= function (a,j){
    let longest=[];
    for(i=0;i<a.length;++i){
        if(a[i].length>j){
            longest.push(a[i])
        }
    }
    return longest;
}

//8a
const a = [1,3,5,3,3]; 
const b = a.map(function(elem, i, array) {
  return elem *10;
})

//8b
const c = a.filter(function(elem, i, array){
  return elem === 3;});

//8c
const d = a.reduce(function(prevValue, elem, i, array){
  return prevValue * elem;
});


function shortest(s1,s2,s3){
    if(s1.length<s2.length && s1.length<s3.length){
    return s1;
    }
    else if(s2.length<s1.length && s2.length<s3.length){
    return s2;
    }
    else
    return s3;
    }
console.log(shortest("ab","cggg","hello"))
