// 나는 대학교 교수다. 레포트 점수에따라 등급을 매기는 프로그램을 만드시오


// 90~100 : A
// 80~89 : B
// 70~79 : C
// 60~69 : D
// less than 59 : F


let score =  90
let grade =''
if(90<=score && score<=100){
  grade = "A"
}else if(80<=score && score<=89){
  grade = "B"
}else if(70<=score && score<=79){
  grade ="C"
}else if(60<=score && score<=69){
  grade="D"
}else if(0<=score && score<=59){
  grade="F"
}else {
  console.log("잘못된 범위의 점수입니다")
}
console.log(grade)
