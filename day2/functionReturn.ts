// function func1(obj) {
//   console.log("Hi");
//   console.log(obj);
// }

function runMore(distance: number): number {
  return distance + 10;
}

// javascript
// 입력은 name, age 를 받고 출력은 "내 이름은 누구고 나이는 30살이야"
function printPersonal(name, age) {
  return "내 이름은 " + name + "고, 나이는 " + age + "이야";
}

// typescript
function printPersonal2(name: string, age: number): string {
  return "내 이름은 " + name + "고, 나이는 " + age + "이야";
}

console.log(runMore(20));
