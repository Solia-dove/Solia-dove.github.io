describe("sum", function () {

    let arr1 = [1, 4, 5];
    it(`The summation of ${arr1} is 10`, function () {
        assert.equal(sum(arr1), 10);

    });
    let arr2 = [3, 5, 6, 6, 10];
    it(`The Summation of ${arr2} is 30`, () => {
        assert.equal(sum(arr2), 30);
    })
    let arr3 = [7, 10, -9];
    it(`The Summation of ${arr3} is 8`, () => {
        assert.equal(sum(arr3), 8);
    })
});
describe("multiply",function(){
    let arr1 = [2,8,4];
    it(`The product of the elemnets of ${arr1} is 64`, ()=>{
        assert.equal(multiply(arr1),64);
    })
    let arr2 = [0,3,6];
    it(`The product of the elemnets of ${arr2} is 0`, ()=>{
        assert.equal(multiply(arr2),0);
    })
    let arr3 = [2,-5,6];
    it(`The product of the elemnets of ${arr3} is -60`, ()=>{
        assert.equal(multiply(arr3),-60);
    })
});

describe("Reverse", ()=>{
    let str1 = "hello";
    it(`The reverse of the word ${str1} is olleh`,()=>{
        assert.equal(reverse(str1),"olleh");
    })
    let str2 = "";
    it(`The reverse of the word ${str2} is  ""`,()=>{
        assert.equal(reverse(str2),"");
    })
    let str3 = "noon";
    it(`The reverse of the word ${str3} is noon`,()=>{
        assert.equal(reverse(str3),"noon");
    })
})
describe("Fileter Long words",()=>{
    let strArr1=["hello","bell", "Soleyana"];
    let minlength =4 ;
    it(`The strings with length greater than ${minlength} from the list ${strArr1} is hello,Soleyana`, ()=>{
        assert.deepEqual(filterLongWords(strArr1,minlength),["hello","Soleyana"]);
    })


    let strArr2=["Yonas","Adam", "ya","Endalk","bu"];
    let minlength2 = 2;
    it(`The strings with length greater than ${minlength2} from the list ${strArr2} is yonas,Adam,Endalk`, ()=>{
        assert.deepEqual(filterLongWords(strArr2,minlength2),["Yonas","Adam","Endalk"]);
    })
})


