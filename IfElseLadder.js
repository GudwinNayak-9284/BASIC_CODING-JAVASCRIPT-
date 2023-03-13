// Given a variable D (distance) write a program to print the cost associated with it as shown in the image:-
// Input:-
// D = 700
// Output:-
// 10


function printCost(n){
    if(n>=0 && n<=100){
        console.log('cost'+"="+5.0+'₹')
    }
    else if(n>=100 && n<=500){
        console.log('cost'+"="+8.0+'₹')
    }
    else if(n>=500 && n<=1000){
        console.log('cost'+"="+10.0+'₹')
    }
   else if(n>=1000){
        console.log('cost'+"="+12.0+'₹')
    }
}
printCost(1289)