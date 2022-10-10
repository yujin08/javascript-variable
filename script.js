// function greet(name) {
//   console.log("안녕 내 이름은", name, "야")
//   return name
// }

// const name = greet("지영")
// console.log("안녕 내 이름은", name, "이야")

// function meetAt(year, month, date) {

//   if (date) {
//     return `${year}/${month}/${date}`;
//   }
//   if (month) {
//     return `${year}년 ${month}월`;
//   }
//   if (year) {
//     return `${year}년`;
//   }
// }

// console.log(meetAt(2022, 1,7))


// function findSmallestElement(arr) {
//   // arr가 비어있다
//   if (arr.length == 0) {
//     return 0
//   }
//   let result = arr[0]
//   for (let i = 1; i < arr.length; i++)
//     if (result > arr[i]) {
//       result = arr[i]
//     }

//   return result

// }

// console.log(findSmallestElement([100, 200, 3, 0, 2, 1]))

let unit = [50000, 10000, 5000, 1000, 500, 100]

function giveMeChange(money){
  for(let i=0; i<unit.length;i++){
    let num = Math.floor(money / unit[i])
    console.log(`${unit[i]}X${num}`)
    money = money - (unit[i] * num)
  }
}

giveMeChange(12300)
