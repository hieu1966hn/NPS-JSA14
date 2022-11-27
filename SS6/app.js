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



/*
Đề bài:
Bài toán nhà hàng: Một nhà hàng đang xây dựng ứng dụng order menu, yêu cầu ứng dụng sẽ như sau:
1. Khi vào trang web => hiển thị thông báo cho người dùng nhập vào "C,R,U,D": "Mời người dùng nhập vào C,R,U,D với món ăn"
2. C: Create => Hiển thị yêu cầu "Mời người dùng nhập món ăn mới" => Lưu trữ mới nhất các món ăn trên LS
3. R: Read => Hiển thị các món ăn có trên menu
4. U: Update => Hiển thị yêu cầu "Mời người dùng nhập vào món ăn muốn update" => hiển thị yêu cầu "Mời người dùng nhập tên món ăn mới" => Lưu trữ mới nhất các món ăn trên LS
5. D: Delete => Hiển thị yêu cầu "Mời người dùng nhập vào món ăn muốn Delete" => Lưu trữ mới nhất các món ăn trên LS
*/