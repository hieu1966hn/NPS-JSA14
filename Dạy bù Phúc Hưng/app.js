/*
Ôn tập sơ lược về Javascript
kdl,
biến,
câu điều kiện,
loop,
mảng,
object


Có mấy kiểu dữ liệu cơ bản trong JS: 6 kiểu
1. Number:
2. String:
3. Boolean: true/false
4. Object:
5. null: Rỗng
6. undefined: Không xác định (khai báo biến nhưng ko gán giá trị)

*/

//// Khai báo biến: var/let/const
/*
let: Khai báo biến cục bộ
var: Khai báo biến toàn cục
const: Khai báo hằng số
*/

// {
//   { 
//     let bien1 = "Đây là biến 1"
//     {
//       console.log(bien1); // 

//     }
//   }
// }

// console.log(bien2);//

/*
Toán tử:
- Toán tử số học: +,-,*,/,% (chia lấy dư)
- Toán tử so sánh: >,<, >=, <=, == (ss tương đối), === (ss tuyệt đối)
- Toán tử gán: =
- Toán tử so sánh: &&, ||
- Toán tử 3 ngôi: (điều kiện)?"Câu lệnh 1":"Câu lệnh 2"


*/

// console.log(
//   3 % 2
// ); // 1

// console.log(
//   2 == "2"
// );// true: So sánh tương đối: Chỉ so sánh về giá trị
// console.log(
//   2 === "2"
// );// false: Só sánh tuyệt đối: So sánh về kiểu dữ liệu và giá trị

// console.log(
//   2 < 3 && 1 > 0 && 1 != 1
// ); // Giải thích: && là toán tử tìm kiếm điều kiện trả về sai => Nếu toàn bộ điều kiện là true thì kq => true

// console.log(
//   1 + 1 != 1 || 3 > 4 || 0 === "0"
// );// Giải thích: || là toán tử tìm kiếm điều kiện trả về đúng => Nếu toàn bộ điều kiện là false thì kq => false


/*
Loop: Có 3 vòng lặp cơ bản
1. while: ktdk -> lặp
2. do - while: cho lặp lần đầu -> ktdk
3. for: vòng lặp biết trước số lần lặp
*/

// In ra  các số từ 1 -> 10
// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++; // i = i + 1
// }

// do {
//   console.log(i);
//   i++; // i = i + 1
// }
// while (i <= 10);

/*
for(box1;box2; box3){
// lệnh
}

- box1: câu lệnh chạy duy nhất trong lần lặp đầu tiên trong for
- box2: điều kiện lặp
- box3: câu lệnh thực hiện cuối cùng sau mỗi lần lặp
*/

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }


/////// Array:
//// khai báo mảng: 
// C1:
// let arr = [];
//C2:
// let arr2 = new Array();

/// Kiểm tra kiểu dữ liệu mảng?
// console.log(Array.isArray(arr));

// let arr = [1, 2, 3, 4, 10, 100];
/// Thêm phần tử vào mảng: push();
// arr.push("hello", "hi");

//// duyệt mảng: vòng lặp
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }


//// update phần tử mảng: 100 => 1000
// arr[5] = 1000

//// Xóa phần tử mảng: splice(box1,box2, box3)
/*
box1: vị trí phần tử trong mảng
box2: số phần tử được xóa từ vị trí phần tử chọn
box3: Thêm phần tử vào mảng tại vị trí được chọn
*/
// arr.splice(5, 1);



////// ĐỐi tượng: Object
//// khai báo đối tượng: dog
// let Dog = {
//   name: "Tun",
//   age: 10,
//   kind: "Béc giê",
//   color: "Vàng",
//   legs: 4,
//   address: "Cổ Nhuế"
// };
// // console.log(Dog.address);

// /// Thêm thuộc tính? hoặc update thuộc tính
// Dog.colorEyes = "vàng";
// console.log(Dog);

// /// Xóa thuộc tính?
// delete Dog.address;

