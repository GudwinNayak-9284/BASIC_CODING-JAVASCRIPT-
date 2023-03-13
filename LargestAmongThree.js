// Write a program to print the largest of the three numbers.
// Input:-
// a=3, b=5, c=1
// Output:-
// 5
 function largestInThree(a,b,c){
    if(a>b && a>c){
        console.log(a)
    }else if(b>a && b>c){
        console.log(b)
    }else{
        console.log(c)
    }
 }
 largestInThree(2,4,5)