/// Local Storage là gì?
/*
- LS: Là nơi lưu trữ dữ liệu cục bộ tại trình duyệt
- Công dụng: Lưu dữ liệu, thay đổi dữ liệu, lấy ra dữ liệu, xóa dữ liệu (C,R,U,D)
- Kiểu dữ liệu: String
- Giải pháp cho các KDL khác: Ép kiểu với JSON.Stringify(...)

*/

/////// Khởi tạo Khóa và giá trị cho LS: 
let arr = [1, 2, 3];
localStorage.setItem("key", JSON.stringify(arr));

///// lấy dữ liệu từ LS về: 
console.log(
  JSON.parse(localStorage.getItem("key"))


);

console.log(arr);


///// Update dữ liệu: 
localStorage.setItem("key", "Hello World");

//// Xóa khóa Key đi;
// localStorage.removeItem("key")