const arryUser = [
  {
    user: "cuong",
    pass: 123
  },
  {
    user: "cuong12",
    pass: 123
  },
];
const arryList = [
  {
    img: "img/dong1.jpg",
    cmt: "Fizz"
  },
  {
    img: "img/dong1.jpg",
    cmt: "Fizz"
  },
  {
    img: "img/dong2.jpg",
    cmt: "Fizz"
  },
  {
    img: "img/dong1.jpg",
    cmt: "Fizz"
  },
  {
    img: "img/dong1.jpg",
    cmt: "Fizz"
  },
  {
    img: "img/dong1.jpg",
    cmt: "Fizz"
  }
]
function login() {
  //lấy thông tin từ tk và mk của html
  let user = document.querySelector("#user").value;
  let pass = document.querySelector("#pass").value;
  //chạy dòng for để duyệt hết phần tử từ mảng arryUser 
  //để kiểm tra xem có tk và mk nào giống k
  for (let item of arryUser) {
    if ((item.user == user) && (item.pass == pass)) {
      localStorage.setItem("user", item.user);
      document.querySelector(".link").href = "thuc_hanh.html";

    }
  }
}

function showMain() {
  let check = localStorage.getItem("user");
  let main = document.querySelector(".main-conten");
  console.log(check);
  if (check == null) {
    main.style.display = "none";
  }
  if (main) {
    for (let item of arryList) {
      main.innerHTML += `
          <div class="item-conten">
              <img src="${item.img}" alt="">
              <p>${item.cmt}</p>
          </div>
          `;
    }
  }
}
showMain();