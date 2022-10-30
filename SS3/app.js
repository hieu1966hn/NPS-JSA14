/*
Buổi 2: 
- Kiến thức sơ lược về Javascript
*/

////// Giới thiệu thêm về vòng lặp trong đó
/*
for in: duyệt mảng theo thứ tự phần tử

for of: duyệt mảng theo từng phần tử mảng
*/

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
///// In ra từng phần tử mảng

////  C1: dùng for 
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }


// //// C2 :Dùng for in
// for (let key in arr) {
//   console.log(arr[key]);
// }

// //// C3: Dùng for of
// for (let key of arr) {
//   console.log(key);
// }


////// Giới thiệu Switch Case: giống hệt if else khác cách trình bày

/*
Xây dựng chương trình nhập vào tháng => in ra số ngày tương ứng mà tháng đó có:

*/

// let inputMonth = Number(prompt("Mời người dùng nhập vào tháng"));
// let year = Number(prompt("Mời người dùng nhập vào năm"))
let inputMonth = 5;

switch (inputMonth) {
  case 1:
    console.log(`Tháng ${inputMonth} có 31 ngày`);
    break;

  case 4:
    alert(`Tháng ${inputMonth} có 30 ngày`);
    break;

  case 2:
    /// Kiểm tra năm nhuận để xem tháng 2 có bao nhiêu ngày:
    /*
    Điều kiện kiểm tra năm nhuận:
    1. Năm nhuận là năm chia hết cho 4 và 100
    2. Năm nhuận là năm chia hết cho 400
    */
    if (year % 4 == 0 && year % 100 == 0) {
      alert(`Tháng ${inputMonth} có 29 ngày`);
    }
    else if (year % 400 == 0) {
      alert(`Tháng ${inputMonth} có 29 ngày`);
    }
    else {
      alert(`Tháng ${inputMonth} có 28 ngày`);
    }

    break;
}
