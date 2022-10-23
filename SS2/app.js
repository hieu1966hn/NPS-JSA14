/////// Kiểu dữ liệu: 6 kiểu dữ liệu cơ bản
/*
  1. Number: số 0->9
  2. String: Chữ cái: '', "", ``
  3. Boolean: true/false
  4. null: Rỗng
  5. unf: Không xác định (khi  các em khai báo biến nhưng không gán giá trị)
  6. Object: Đối tượng.
*/


/*
Toán tử: 
- Toán tử số học: +,-,*,/,%
- Toán tử so sánh: >,<, == (ss tương đối), === (ss tuyệt đối), <=, >=, != (khác tương đối), !== (khác tuyệt đối)
- Toán tử logic: && , ||
- Toán tử 3 ngôi: (điều kiện)?"Câu lệnh 1":"Câu lệnh 2"
*/



///// Khai báo biến
// Cú pháp: let/var, const:
let a = 1;
var b = 2;
const Pi = 3.14;
/// Note: Nên sử dụng "let" thay vì "var"

{
  {
    let vung2 = "Đây là vùng 2";
    {
      console.log(vung2); /// in ra
      var vung3 = "Đây là vùng 3"
    }
  }
  // console.log(vung2); /// Không in ra gì và lỗi
}

console.log(vung3);// In ra gì?

/*

Ưu tiên dùng let vì:
- Var: Thường gây nên lỗi liên quan tới phạm vi khai báo biến
- let: không gặp vấn đề như vậy và nó bảo đảm tính cục bộ của biến
*/

/////// Câu điều kiện: 
/*
if(điều kiện){
/// Câu lệnh bên trong if
}
else{
  /// Câu lệnh bên trong else (khi kết quả điều kiện trả về là false)
}
*/
// if (7 > 10) { // false
//   console.log("Điều kiện này đúng");
// }
// else {
//   console.log("Điều kiện này sai");
// }




/*
Bài toán if else như sau:
Đứng vai trò là người tuyển dụng học sinh tại trường cấp 3 thì trường phân loại tuyển học sinh như sau:
- Điểm học sinh: 8-10 => "Học sinh loại Giỏi"
- Điểm học sinh: 6.5 - 8 => "Học sinh loại Khá"
- Điểm học sinh: 5 - 6.5 => "Học sinh loại Trung Bình"
- Điểm học sinh: 0 -> 5 => "Học sinh loại Kém"


Xây dựng trương trình kiểm tra đầu vào học sinh và in ra kết quả tương tự. Sử dụng if - else if - else


*/

// let diem = Number(prompt("Mời học sinh nhập vào số điểm"));
// console.log("diem: ", diem);

// if (diem >= 8) {
//   alert("Học sinh đạt loại Giỏi")
// }
// else if (diem < 8 && diem >= 6.5) {
//   alert("Học sinh đạt loại Khá")
// }
// else if (diem < 6.5 && diem >= 5) {
//   alert("Học sinh đạt loại Trung Bình")
// }
// else {
//   alert("Học sinh đạt loại Kém")
// }



/*
Vòng lặp: 3 vòng lặp cơ bản (while, do - while, for)

- While: cú pháp
while(điều kiện){
  // Câu lệnh lập trình
}


do{
  Câu lệnh
}
while(điều kiện);



for(box1 ;box2; box3){
  Câu lệnh

}

Giải thích:
- Box1: Câu lệnh chạy đầu tiên và duy nhất 1 lần trong vòng lặp for
- Box2: Điều kiện
- Box3: Câu lệnh thực hiện cuối cùng của mỗi lần lặp.
*/

/// In ra các số từ 1 -> 10;
// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i = i + 1; // Sau mỗi lần lặp thì i tăng lên 1 đơn vị.
// }


/// Với do while
// let i = 1;
// do {
//   console.log(i);
//   i = i + 1;// tăng i lên 1 đơn vị
// }
// while (i <= 10);


/// Với for
// for (let i = 1; i <= 10; i = i + 1) {
//   console.log(i); // 1, 2, .. 10
// }
/// Kết quả sau vòng lặp: i đang là 11


///// Array
/*
Array: mảng được coi là 1 kiểu dữ liệu riêng
- Công dụng: Dùng để lưu trữ dưới dạng 1 danh sách nhiều các phần tử. Trong đó các phần tử có thể là các phần tử khác nhau.
- Khai báo 1 mảng: let arr = [], let arr = new Array();
- kiểm tra kiểu dữ liệu mảng
*/
let arr = []; /// Khai báo thành công 1 mảng rỗng.
/// Kiểm tra xem kiểu dữ liệu mảng là gì? typeof(arr)
// console.log(typeof (arr)); // Object  => Không dùng cách này kiểm tra
// console.log(Array.isArray(arr)); /// Kết quả là true: => arr là 1 kdl mảng (Nên dùng cách này)


//// thêm phần tử vào mảng: push();
arr.push("Phần tử 1", 1234, "Phần tử thứ 3");
console.log("arr: ", arr);
/// Số phần tử trong mảng là bao nhiêu thì sử dụng: arr.length

/// Duyệt mảng như nào: Sử dụng vòng lặp for (vd với bài toán in ra từng phần tử mảng)
for (let i = 0; i < arr.length; i = i + 1) {
  console.log(arr[i]); // in ra phần tử ở vị trí số i trong mảng
}


/// Cập nhật phần tử mảng: update phần tử mảng
arr[1] = "Phần tử thứ 2"; // cú pháp gán lại giá trị cho phần tử mảng
///// Delete phần tử mảng: arr.splice( , , );