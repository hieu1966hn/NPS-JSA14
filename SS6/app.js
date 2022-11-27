/// Local Storage là gì?
/*
- LS: Là nơi lưu trữ dữ liệu cục bộ tại trình duyệt
- Công dụng: Lưu dữ liệu, thay đổi dữ liệu, lấy ra dữ liệu, xóa dữ liệu (C,R,U,D)
- Kiểu dữ liệu: String
- Giải pháp cho các KDL khác: Ép kiểu với JSON.Stringify(...)

*/

/////// Khởi tạo Khóa và giá trị cho LS: 
// let arr = [1, 2, 3];
// localStorage.setItem("key", JSON.stringify(arr));

// ///// lấy dữ liệu từ LS về: 
// console.log(
//   JSON.parse(localStorage.getItem("key"))


// );

// console.log(arr);


// ///// Update dữ liệu: 
// localStorage.setItem("key", "Hello World");

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


///// Bài chữa
let input;
let menu = [];
///// Chống reset localStorage
if (localStorage.menu) {
  menu = JSON.parse(localStorage.getItem("menu"))
} else {
  localStorage.setItem("menu", JSON.stringify(menu))
}

do {
  input = prompt("Mời người dùng nhập vào C,R,U,D").trim().toLowerCase();
  if (input == "c") {
    c();
  }
  else if (input == "r") {
    alert(menu)
  }
  else if (input == "u") {
    u()
  }
  else if (input == "d") {
    d();
  }
  else if (input == "q") {
    break; // thoát khỏi vòng lặp ngay lập tức
  }
  else {
    alert("Mời người dùng nhập lại!!");
  }
}
while (input != "c" && input != "r" && input != "u" && input != "d");


/// Hàm create
function c() {
  let newFood = prompt("Mời người dùng nhập vào tên món ăn mới").trim();
  menu.push(newFood);

  /// Đẩy món ăn mới lên localStorage
  localStorage.setItem("menu", JSON.stringify(menu))
  console.log("chạy code");
}


function u() {
  let findFood = prompt("Mời người dùng nhập vào tên món ăn muốn update").trim();

  /// Tìm vị trí phần tử trong mảng
  let numberOfFood = menu.indexOf(findFood);
  console.log("numberOfFood: ", numberOfFood);
  menu[numberOfFood] = prompt("Mời người dùng nhập món ăn mới được update");
  console.log(menu);
  localStorage.setItem("menu", JSON.stringify(menu));
}

function d() {
  let foodDelete = prompt("Mời người dùng nhập vào tên món ăn muốn delete").trim();
  let numberFoodDelete = menu.indexOf(foodDelete);
  menu.splice(numberFoodDelete, 1);
  localStorage.setItem("menu", JSON.stringify(menu));
}