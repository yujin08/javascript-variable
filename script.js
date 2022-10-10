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



function makeBurger(type, size, num) {
  console.log("빵두기")
  console.log("상추두기")
  if (num < 1) {
    return "버거 개수가 0개 입니다."
  }
  if (type == "불고기") {
    console.log("고기패티두기")
  } else if (type == "새우") {
    console.log("새우패티두기")
  }
  console.log("뚜껑덮기")
  console.log(type, "버거", size, "사이즈", num, "개 준비완료")

  return "완료되었습니다."
}

function serveCoke() {
  console.log("콜라통 선택")
  console.log("얼음담기")
  console.log("콜라담기")
}

function servefrenchFries() {
  console.log("감튀박스선택")
  console.log("감튀 담기")
}

let result = makeBurger("불고기", "L", 0)
console.log("버거 프로세스 결과", result)

function makeSet() {
  makeBurger("불고기", "L", 1)
  servefrenchFries()
  serveCoke()
}

makeSet()