// const a: string = "5"; // 안좋은 예
// // const a = "5"; // 좋은 예
// // why? 추론을 알아서 하는데 굳이 string으로 범위를 넓혀서 정의해버리면 문제가 된다.
// const b: number = 5;
// const c: boolean = true;
// const d: undefined = undefined;
// const e: null = null;

// // function add(x: number, y: number): number { return x + y }
// // type Add = (x: number, y: number) => number
// // const add: Add = (x, y) => x + y;

// // interface Add {
// //   (x: number, y: number): number;
// // }
// // const add: Add = (x, y) => x + y;

// const f: true = true;

// const arr: string[] = ["123", "456"];
// const arr2: number[] = [123, 456];
// const arr3: [number, number, string] = [123, 456, "hello"];

// const obj: { lat: number; lon: number } = { lat: 37.5, lon: 127.5 };

// try {
//   const array: string[] = []; // noImplicitAny가 false일 때
//   array.push("hello");
// } catch (error) {
//   error;
// }

// 최대한 ! 대신 if를 쓸 것
// const head = document.querySelector('#head')!;
// console.log(head);

// const head = document.querySelector('#head');
// if (head) {
//   console.log(head);
// }

// string과 String은 다름. 소문자로 하는 것 기억하기.
// const a: string = 'hello';
// const b: String = 'hell';
// // 템플릿 리터럴 타입이 존재(유니언 등 사용 가능)
// type World = "world" | "hell";

// // type Greeting = "hello world"
// type Greeting = `hello ${World}`;

// // - 배열, 튜플

// let arr: string[] = [];
// let arr2: Array<string> = [];
// function rest(...args: string[]) {
//     console.log(a, args); // 1, [2.3]
// }

// const tuple: [string, number] = ['1', 1];

// tuple[2] = 'hello'; // ㅇㅣ건 막지만

// tuple.push('hello'); // 이건 못막징~

// enum, keyof, typeof

// const enum EDirection {
//   Up,
//   Down,
//   Left,
//   Right,
// }

// const ODirection = {
//   Up: 0,
//   Down: 1,
//   Left: 2,
//   Right: 3,
// } as const; // 좀 더 정확학 타이핑해줌

//   EDirection.Up;

//   (enum member) EDirection.Up = 0

// const obj = { a: "123", b: "hello", c: "world" } as const;
// // type Key = typeof obj[keyof typeof obj];// value만 가져오고싶을때 .
// // type Key = keyof typeof obj;// key들만 가져오고싶을때 .

// ODirection.Up;

// //   (property) Up: 0

// // Using the enum as a parameter
// function walk(dir: EDirection) {}

// // It requires an extra line to pull out the keys
// type Direction = typeof ODirection[keyof typeof ODirection]; //value만 가져오기
// // type Direction = keyof typeof ODirection; //key만 가져오기

// function run(dir: Direction) {}

// walk(EDirection.Left);
// run(ODirection.Right);

// // 간단하면
// type A = { a: string };
// const a: A = { a: 'hello' };

// // 객체지향하거나 하면
// interface B { a: string }
// const b: B = { a: 'hello' };

//union, intersection

// 아래는 잘못된 예.
// 타입은 꼭 잘 설정해야한다.

// // function add(x: string | number, y: string | number): string | number { return x + y }
// add(1, 2)
// add('1', '2')
// add(1, '2')

// type A = {
//   a: string;
// };
// type B = {
//   b: string;
// };

// | 와 & 둘 다 없는 걸 넣으면 안됨.

// | 는 개중에 하나만 있으면 됨.
// const aa: A | B = { a: "hello", b: "hi" };

// & 는 다 있어야함.
// const bb: A & B = { a: "hello", b: "world" };

// type A = { hello: "world" } & { zero: "cho" };

// const a: A = { hello: "world", zero: "cho", ㅁㄴㅇㄹ: "ㅁㅇㄹㅁㅇ" }; // err

// const a: A = { hello: "world", zero: "cho" };
