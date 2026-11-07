//  숙제 1

// 도메인과 DNS란 무엇인가.
// 도메인이란 IP주소가 컴퓨터가 처리하는 영역이라 자연어가 아니고 그것을 외우기 어렵기 때문에 만든
// 문자로 된 주소이다.
// DNS는 그 문자로 된 도메인을 IP주소로 번역해주는 시스템이다.
// 그러므로 DNS서버가 고장나면 도메인 이름으로는 접속이 불가능하다
// 다만 IP주소를 알고있다면 IP주소로 입력해 접속이 가능하다.



//  숙제 2

// PART 1. 변수 선언과 값 변경 (1~10)
// 문제 1. let으로 age 변수를 선언하고 25를 저장한 후 출력하세요.
let age = 25;
console.log(age);

// 문제 2. const로 userName 변수를 선언하고 "홍길동"을 저장한 후 출력하세요.
const userName = '홍길동';
console.log(userName);

// 문제 3. let으로 price를 선언하고 1000을 저장하세요. 이후 2000으로 변경하고 출력하세요.
let price = 1000;
price = 2000;
console.log(price);

// 문제 4. 값을 저장하지 않은 data 변수를 선언하고 출력하세요. 어떤 값이 출력되는지 확인하세요.
let unDif;
console.log(unDif);

// 문제 5. 이름 김철수, 나이 30, 키 178.5, 학생 여부 false를 각각 변수에 저장하고 출력하세요.
let nameQ5 = '김창수';
let ageQ5 = 30;
let heightQ5 = 178.5;
let isStudentQ5 = false;
console.log(nameQ5);
console.log(ageQ5);
console.log(heightQ5);
console.log(isStudentQ5);

// 문제 6.
// let a = 10;
// let b = a;
// a = 30;
// console.log(a); // 30
// console.log(b); // 10
// 출력 결과를 예상하세요. - b가 a의 값인 10으로 저장된 후 a만 바꿨으니 b는 그대로 10이 나올 것이다.

// 문제 7. let score = 80; let score = 90; 코드의 오류 원인을 설명하고 수정하세요.
let score = 80;
// let score = 90; - 변수명이 중복되어 오류가 발생함.
let score01 = 90;

// 문제 8. const maxValue = 100; maxValue = 200; 코드의 오류 원인을 설명하세요.
const maxValue = 100;
// maxValue = 200; - const는 값을 바꿀 수 없는 상수 선언이라 오류가 발생한다.

// 문제 9. 다음 변수명 중 사용할 수 없는 것을 찾고 수정하세요.
// let 1score = 100; - 변수명 맨 앞에 숫자 사용 불가.
let scored1 = 100;
let myName = "홍길동"; // 정상
// let user age = 20; - 변수명에 띄어쓰기 사용 불가.
let userAge = 20;
let $money = 5000;  // 정상
// let user-name = "김철수"; - 변수명에 '-'사용불기
let user_name = "김철수"; // userName은 앞선 문제에 사용중이라 '_' 사용

// 문제 10. 다음 중 중복 선언이 가능한 코드를 찾으세요.
// A: var a = 10; var a = 20; = 중복 선언 가능
// B: let b = 10; let b = 20; - 중복 선언 불가
// C: const c = 10; const c = 20; - 중복 선언 불가


// PART 2. 산술연산자 (11~20)
// 문제 11. a=15, b=4를 선언하고 덧셈, 뺄셈, 곱셈, 나눗셈을 각각 출력하세요.
let a = 15;
let b = 4;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

// 문제 12. 100을 7로 나눈 나머지를 출력하세요.
console.log(100 % 7);

// 문제 13. 2의 5제곱을 ** 연산자로 계산하여 출력하세요.
console.log(2 ** 5);

// 문제 14. a=10, b=3일 때 a / b와 a % b의 결과를 예상하세요.
// a = 10;
// b = 3;
// console.log(a / b); - 10/3 = 3.3333...
// console.log(a % b); - 10/3의 목인 1

// 문제 15. console.log(10 + 5 * 2); 결과를 예상하세요.
// 곱셈을 먼저 계산하므로 10 + 10 = 20이 출력된다.

// 문제 16. console.log((10 + 5) * 2); 결과를 예상하세요.
// 괄호 안을 먼저 계산하므로 15 * 2 = 30이 출력된다.

// 문제 17. console.log(20 - 4 * 3 + 10); 결과를 예상하세요.
// 20 - 12 + 10 = 18

// 문제 18. console.log(2 ** 3 + 10 % 3 * 5); 결과를 예상하세요.
// 2^3 + 1 * 5 = 8 + 5 = 13

// 문제 19. 사과 한 개 1200원, 5개 구매 시 총금액을 변수와 연산자로 계산하세요.
let applePrice = 1200;
console.log(applePrice * 5);

// 문제 20. 125분을 시간과 분으로 나누어 출력하세요. /, %, Math.floor()를 사용하세요.
console.log(Math.floor(125 / 60) + '시간');
console.log(125 % 60 + '분');


// PART 4. 증감연산자 (31~45)
// 문제 31. let a=10; a++; console.log(a); 결과를 예상하세요.
// 10 + 1 = 11이 출력된다.

// 문제 32. let a=10; a--; a--; console.log(a); 결과를 예상하세요.
// 10 - 1 - 1 = 8이 출력된다.

// 문제 33. let a=5; console.log(a++); console.log(a); 결과를 예상하세요.
// a++면 연산 이후 a에 +1을 하므로 console.log(a++);은 5가 출력되고 console.log(a);에선 6이 출력됨.

// 문제 34. let a=5; console.log(++a); console.log(a); 결과를 예상하세요.
// ++a면 연산 이전에 +1을 하기 때문에 둘 다 6을 출력한다.

// 문제 35. let a=10; console.log(a--); console.log(a); 결과를 예상하세요.
// a--면 연산 이후에 a에 -1을 하므로 10, 9순으로 출력된다.

// 문제 36. let a=10; console.log(--a); console.log(a); 결과를 예상하세요.
// --a면 연산 이전에 a에 -1을 하므로 둘 다 9를 출력한다.

// 문제 37. let a=10; let b=a++; console.log(a,b); 결과를 예상하세요.
// let b에서 a++를 했으니 a = 11이 되고 b는 +1이 되기 전의 a값을 가지므로 11 10이 출력된다.

// 문제 38. let a=10; let b=++a; console.log(a,b); 결과를 예상하세요.
// 문제 37과 a값은 동일하나 b = ++a를 하였으므로 +1이 된 a값을 가지므로 11 11이 출력된다.

// 문제 39. let a=5, b=10; let c=a++ + b; console.log(a,b,c); 결과를 예상하세요.
// c로 인해 +1된 a값, 그리고 c값은 a++이므로 +1이 되지 않은 a값으로 계산하여 6 10 15이 출력된다.

// 문제 40. let a=5, b=10; let c=++a + b--; console.log(a,b,c); 결과를 예상하세요.
// 6 9 16

// 문제 41. let a=10, b=3; let c=a-- - ++b; console.log(a,b,c); 결과를 예상하세요.
// 9 4 6

// 문제 42. let x=5, y=10; x=++y - x++; console.log(x,y); 결과를 예상하세요.
// x=1+10-5의 값이 x++를 하고 난 다음의 최종 x값이므로 6 11이 출력된다.

// 문제 43. let a=10, b=20; a=a++ + ++b; console.log(a,b); 결과를 예상하세요.
// 31 21

// 문제 44. let a=5, b=10;
// b=a++ + --b; - a=6 b=5+9=14
// a=++a + b--; - a=7+14=21 b=13
// console.log(a,b); - 21 13
// 결과를 예상하세요.

// 문제 45. let x=10, y=5, z=3;
// x=++y + z--; - x=6+3=9 y=6 z=2
// y=x-- - ++z; - x=8 y=9-3=6 z=3
// z=x++ + y--; - x=9 y=5 z=8+6=14
// console.log(x,y,z); - 9 5 14
// 결과를 예상하세요.


// PART 5. 복합대입연산자 (46~55)
// 문제 46. let a=10; a+=5; console.log(a); 결과를 예상하세요.
// a+=5는 a = a + 5이므로 출력값은 15

// 문제 47. let a=20; a-=7; console.log(a); 결과를 예상하세요.
// a-=7은 a = a - 7이므로 출력값은 13

// 문제 48. let a=5; a*=4; console.log(a); 결과를 예상하세요.
// a*=4는 a = a * 4이므로 출력값은 20

// 문제 49. let a=100; a/=4; console.log(a); 결과를 예상하세요.
// a/=4는 a = a / 4이므로 출력값은 25

// 문제 50. let a=17; a%=5; console.log(a); 결과를 예상하세요.
// a%=5는 a = a % 5이므로 출력값은 2

// 문제 51. let a=10; a+=5; a*=2; a-=8; console.log(a); 결과를 예상하세요.
// a=10 -> a=10+5 -> a=15*2 -> a=22 출력값은 22

// 문제 52. let a=100; a/=2; a+=10; a%=7; console.log(a); 결과를 예상하세요.
// a=100 -> a=100/2 -> a=50+10 -> a=60%7 출력값은 4

// 문제 53. 다음 코드를 복합대입연산자로 바꾸세요.
// let a=10;
// a=a+20; a=a*3; a=a-15; a=a/5; -> a+=20; a*=3; a-=15; a/=5;

// 문제 54. 계좌 잔액 100000원에서 30000원 입금, 25000원 출금 후 잔액을 복합대입연산자로 출력하세요.
let accountMoney = 100000;
accountMoney += 30000;
accountMoney -= 25000;
console.log("잔액 : " + accountMoney + '원');

// 문제 55. 캐릭터 체력 100에서 30 감소, 20 회복, 15 감소 후 최종 체력을 복합대입연산자로 출력하세요.
let characterHp = 100;
characterHp -= 30
characterHp += 20
characterHp -= 15
console.log("최종 체력 : " + characterHp);


// PART 6. 비교연산자 (56~65)
// 문제 56. 10 == 10과 10 != 10의 결과를 예상하세요.
// 10과 10은 같은 값이므로 true, !=는 서로 다르냐는 의미이므로 false

// 문제 57. 10 > 5, 10 < 5, 10 >= 10, 10 <= 9의 결과를 예상하세요.
// true, false, true, false

// 문제 58. 10 == "10"과 10 === "10"의 결과를 예상하세요.
// ==는 형태가 달라도 값이 같으면 true, ===는 형태도 같아야하므로 false

// 문제 59. 20 != "20"과 20 !== "20"의 결과를 예상하세요.
// 1=는 형태가 달라도 값이 같으면 false, !==는 형태라도 다르면 true

// 문제 60. a=15, b=20일 때 a>b, a<b, a==b의 결과를 예상하세요.
// false, true, false

// 문제 61. age 변수를 선언하고 20세 이상인지 비교한 결과를 출력하세요.
let ageQ61 = 25;
console.log(ageQ61 >= 20);

// 문제 62. score 변수를 선언하고 60점 이상인지 비교한 결과를 출력하세요.
let scoreQ62 = 55;
console.log(scoreQ62 >= 60);

// 문제 63. a=10, b="10", c=20일 때 다음 결과를 예상하세요.
// a==b; a===b; a+10==c; a+b=="1010";
// true, false, a+10=20 == c=20이므로 true, 숫자형+문자형=연결된 문자형 이므로 true

// 문제 64. let a=5, b=10;
// console.log(a++ == 5); -> true
// console.log(a); -> 6
// console.log(++b == 11); ->true
// console.log(b); -> 11
// 결과를 예상하세요.

// 문제 65. a=100, b="100"의 값과 자료형이 모두 같은지 비교하는 코드를 작성하세요.
a = 100;
b = "100";
console.log(a === b);


// PART 7. 논리연산자 (66~75)
// 문제 66. 다음 && 결과를 예상하세요: true&&true, true&&false, false&&true, false&&false.
// &&는 양쪽 다 true여야하므로 true, false, false, false

// 문제 67. 다음 || 결과를 예상하세요: true||true, true||false, false||true, false||false.
// ||는 양쪽중에 하나라도 true면 true이므로 true, true, true, false

// 문제 68. !true, !false, !!true의 결과를 예상하세요.
// !는 true를 false로 false를 true로 만들므로 false, true, true

// 문제 69. a=10, b=20일 때 a>5 && b>10의 결과를 예상하세요.
// 양쪽 다 참이므로 true

// 문제 70. a=10, b=20일 때 a>15 || b>15의 결과를 예상하세요.
// a>15는 false지만 b>15가 true고 ||눈 한쪽만 true여도 true

// 문제 71. a=10, b=20일 때 !(a>5 && b>10)의 결과를 예상하세요.
// !(true)이므로 false

// 문제 72. a=10, b=20일 때 다음 결과를 예상하세요.
// a==10 && b=="20" - 양측 다 참이므로 true 
// a==10 || b==="20" - a==10이 참이므로 true

// 문제 73. age=25일 때 나이가 20세 이상이면서 30세 이하인지 확인하는 논리식을 작성하세요.
let ageQ73 = 25;
console.log(ageQ73 >= 20 && ageQ73 <= 30);

// 문제 74. score=75, attendance=90일 때 점수 60 이상이면서 출석률 80 이상인지 확인하세요.
let scoreQ74 = 75;
let attendanceQ74 = 90;
console.log(scoreQ74 >= 60 && attendanceQ74 >= 80);

// 문제 75. a=10, b=20, c=30일 때 결과를 예상하세요.
// a<b && b<c - true
// a>b || c>b - true
// !(a==10) - false
// (a>5 && b<10) || c==30 - true
// !(a>5) && b>10 - false


// PART 8. 삼항연산자 (76~85)
// 문제 76. age=20일 때 age>=19 ? "성인" : "미성년자"의 결과를 예상하세요.
// age>=19가 참이므로 성인

// 문제 77. score=55일 때 score>=60 ? "합격" : "불합격"의 결과를 예상하세요.
// score>=60이 거짓이므로 불합격

// 문제 78. 숫자 10이 양수인지 아닌지 삼항연산자로 판단하여 출력하세요.
console.log(10 > 0 ? '양수' : '양수가 아님');

// 문제 79. a=10, b=20 중 더 큰 값을 삼항연산자로 출력하세요.
aQ79 = 10; //중복을 피하기 위해 이름 변경
bQ79 = 20; //중복을 피하기 위해 이름 변경
console.log(aQ79 > bQ79 ? aQ79 : bQ79);

// 문제 80. let a=10; let result=a==10 ? 100 : 200; console.log(result); 결과를 예상하세요.
// a==10이 참이므로 result의 값은 100이된다. 100이 출력된다.

// 문제 81. let a=10, b=20; let result=a+(b>10 ? 5 : 15); 결과를 예상하세요.
// (b>10 ? 5 : 15)가 괄호로 감싸있으니 먼저 연산한다. b>10이 참이므로 result=10+5=15가 된다.

// 문제 82. num=17이 짝수인지 홀수인지 삼항연산자로 출력하세요.
let num = 17;
console.log(num % 2 == 0 ? '짝수' : "홀수");

// 문제 83. price=25000일 때 30000원 이상이면 "무료배송", 아니면 "배송비 발생"을 출력하세요.
let priceQ83 = 25000; //중복을 피하기 위해 이름 변경
console.log(priceQ83 >= 30000 ? '무료배송' : "배송비 발생");

// 문제 84. score=85일 때 다음 결과를 예상하세요.
// score>=90 ? "A" : score>=80 ? "B" : "C" -> score가 90이하이므로 score>=80 ? "B" : "C"로 넘어가고 80이상이므로 B가 된다.

// 문제 85. a=10, b=20일 때 다음 결과를 예상하세요.
// a>b ? a+5 : b+5 ->a가 b보다 작으므로 b+5=25가 된다.


// PART 9. 자료형 변환 (86~95)
// 문제 86. Number("100")의 결과를 예상하세요.
// 문자열 100을 숫자형 100으로 바꾼다.

// 문제 87. String(100)의 결과를 예상하세요.
// 숫자열 100을 문자열 100으로 바꾼다.

// 문제 88. 10 + "20"의 결과를 예상하세요.
// 숫자열 + 문자열이므로 문자열 1020이 된다.

// 문제 89. 10 + Number("20")의 결과를 예상하세요.
// Number로 문자열 20을 숫자형으로 바꿨기때문에 30이 된다.

// 문제 90. String(10) + 20의 결과를 예상하세요.
// String으로 숫자열 10을 문자열 10으로 바꿨기때문에 1020이 된다.

// 문제 91. a="100", b="200"일 때 a+b와 Number(a)+Number(b)의 결과를 예상하세요.
// a+b는 문자열 100200, Number(a)+Number(b)는 숫자열 300이 된다.

// 문제 92. a=10, b="20", c=30일 때 a+b+c와 a+Number(b)+c의 결과를 예상하세요.
// a+b+c는 중간에 문자열 b로 인해 문자열 102030, a+Number(b)+c는 숫자열 60이 된다.

// 문제 93. Number("3.14") + 2와 String(100) + String(200)의 결과를 예상하세요.
// Number("3.14") + 2는 숫자열 3.14+2이므로 숫자열 5.14, String(100) + String(200)는 문자열 100200이 된다.

// 문제 94. a="50", b=20일 때 a+b, Number(a)-b, Number(a)*b, Number(a)/b의 결과를 예상하세요.
// a+b는 문자열 5020, Number(a)-b는 숫자열 30, Number(a)*b는 숫자열 1000, Number(a)/b는 숫자열 2.5가 된다.

// 문제 95. a="10", b=20, c="30"일 때 결과를 예상하세요.
// a+b+c -> 문자열 102030
// Number(a)+b+Number(c) ->숫자열 40
// String(b)+a -> 문자열 2010
// Number(a+b) -> 숫자열 1020


// PART 10. 종합 응용 문제 (96~100)
// 문제 96. 쇼핑몰 결제: 상품 가격 15000원, 수량 3개, 배송비 3000원.
// 1) 상품 총금액 계산 2) 배송비 포함 최종 결제금액 출력
// 3) 50000원 이상인지 비교 4) 삼항연산자로 "고액 주문"/"일반 주문" 출력
let productPrice = 15000;
let totalPrice = productPrice * 3; // 1)
let payment = totalPrice + 3000;
console.log(payment); // 2)
console.log(payment > 50000 ? "고액 주문" : "일반 주문"); // 3), 4)

// 문제 97. 시험 점수: 국어 85, 영어 90, 수학 75.
// 1) 총점 계산 2) 평균 계산 3) 평균 80 이상인지 비교
// 4) 삼항연산자로 "우수"/"보통" 출력
let korScore = 85;
let engScore = 90;
let matScore = 75;
let totalScore = korScore + engScore + matScore; // 1)
let averScore = totalScore / 3; // 2)
console.log(averScore >= 80 ? '우수' : "보통"); // 3), 4)

// 문제 98. 은행 계좌: 초기 잔액 100000원.
// 1) 50000원 입금 2) 30000원 출금 3) 20000원 추가 출금
// 4) 복합대입연산자 사용 5) 최종 잔액 출력
// 6) 잔액 100000원 이상인지 비교 7) "잔액 충분"/"잔액 부족" 출력
let myAccount = 100000;
myAccount += 50000; // 1), 4)
myAccount -= 30000; // 2), 4)
myAccount -= 20000; // 3), 4)
console.log(myAccount); // 5)
console.log(myAccount >= 100000 ? "잔액 충분" : "잔액 부족"); // 6), 7)

// 문제 99. 놀이공원: age=15, height=155, withParent=true.
// 입장 조건: 나이 14세 이상이고 키 150cm 이상이거나, 14세 미만이라도 보호자 동반이고 키 150cm 이상이면 입장 가능.
// 1) 논리식으로 입장 여부 계산 2) 결과를 변수에 저장
// 3) 삼항연산자로 "입장 가능"/"입장 불가" 출력
// 4) 나이를 12로 변경해 재확인 5) 보호자 동반을 false로 변경해 재확인
let ageQ99 = 15;
let heightQ99 = 155;
let withParent = true;
let canAdmiss = (ageQ99 >= 14 && heightQ99 >= 150) || (ageQ99 < 14 && withParent && heightQ99 >= 150); // 1), 2)
let result = canAdmiss ? "입장 가능" : "입장 불가" // 3)
console.log(result);
ageQ99 = 12;
canAdmiss = (ageQ99 >= 14 && heightQ99 >= 150) || (ageQ99 < 14 && withParent && heightQ99 >= 150);
result = canAdmiss ? "입장 가능" : "입장 불가"
console.log(result); // 4)
withParent = false;
canAdmiss = (ageQ99 >= 14 && heightQ99 >= 150) || (ageQ99 < 14 && withParent && heightQ99 >= 150);
result = canAdmiss ? "입장 가능" : "입장 불가"
console.log(result); // 5)

// 문제 100. 다음 코드의 모든 출력 결과를 예상하고 이유를 설명하세요.
// let a = 10;
// let b = 20;
// let c = "30";
// a += 5;      -> a=15
// b--;     ->b=19
// a = ++b + a--;       -> a는 1+19+15계산 이후 -1이었다가 계산값인 a=35로 덮어 저장된다.
// console.log(a);      -> 35
// console.log(b);      -> 19에서 ++로 20이 됨
// console.log(c);      -> 문자열 30
// console.log(a + b + c);      -> 숫자열 a+b의 값에 문자열을 이어붙여 5530
// console.log(a + Number(c) + b); -> c가 숫자열이 되며 35+30+20=85
// console.log(a > b);      -> 35>20이므로 true
// console.log(a == "35");      -> 숫자열과 문자열 차이는 있지만 값이 같으므로 true
// console.log(a === "35");     -> 숫자열과 문자열 차이가 있으므로 false
// let result1 = a > b && Number(c) > 20;
// let result2 = a < b || c == 30;
// console.log(result1);        -> 양쪽 모두 참이므로 true
// console.log(result2);        -> a < b가 거짓이지만 c == 30은 참이므로 true
// let result3 = result1 ? a + b : a - b;
// console.log(result3);        -> result1이 참이므로 a + b = 35 + 20 = 55
// 요구사항: 1) 출력 순서 2) 변수 변화 3) 전위/후위 증감 순서
// 4) 문자열 결합과 숫자 덧셈 구분 5) 비교·논리 결과 6) 삼항 선택 이유