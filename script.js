// 문제 1
// 1부터 100까지 더하는 for문을 만들고 결과를 출력하시오.

// let sum = 0
// for(let i=1;i<=100;i++){
//  sum+=i
// }
// console.log(sum)


// 문제 2
// 1부터 100까지 홀수만 출력하자.

// for(let i=1; i<=100; i++){
//   if(i%2==1)
//   console.log(i)
// }

// 문제 3
// 1부터 50까지 369결과를 프린트하자.

// 1
// 2
// 짝 
// 4
// 5 
// 짝
// ...생략 

// 28 
// 짝
// 짝 
// 짝
// 짝 
// 짝짝 

// for(let i=1;i<=50;i++){
//   let stringValue = i.toString()
//   let result = ""
//   for(let j=0;j<stringValue.length;j++){
//     if(stringValue[j] == "3" ||stringValue[j] == "6" ||stringValue[j] == "9" ){
//       result+="짝"
//     }
//   }
//   console.log(result.length>0?result:i)
// }

// 문제 4
// 주어진 숫자가 소수이면 true 아니면 false를 출력하는 프로그램을 짜시오.

// let n = 11
// let isPrime = true

// if (n ===1){
//   isPrime = false
// }
// for(let i=2; i<n; i++){
//   if(n % 1 == 0){
//     isPrime = false
//   }
// }
// console.log(isPrime)