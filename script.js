const products = [
  {
    id: 1,
    name: "Đèn Lồng Hình Con Cá",
    price: 150000,
    description: "Đèn lồng hình con cá, mang đến sự may mắn.",
    image:
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/431/426/products/z5597577361278-c676d721e7b1fa502be99c0595f3bd2f.jpg?v=1720001286120",
  },
  {
    id: 2,
    name: "Đèn Lồng Hình Chú Lần",
    price: 200000,
    description: "Đèn lồng hình chú lân, biểu trưng cho sự bình an.",
    image:
      "https://laz-img-sg.alicdn.com/p/ae766ce8bbea38ddefb29276e6ce6566.jpg",
  },
  {
    id: 3,
    name: "Đèn Lồng Hình Hoa Sen",
    price: 180000,
    description: "Đèn lồng hình hoa sen, tượng trưng cho sự thanh cao.",
    image:
      "https://down-vn.img.susercontent.com/file/sg-11134201-22120-ys21zyom2jlvc3",
  },
  {
    id: 4,
    name: "Đèn Lồng Ông Sao",
    price: 150000,
    description:
      "Đèn lồng ông sao,tượng trưng cho ánh sáng, hy vọng, và sự đoàn kết.",
    image:
      "https://imgs.vietnamnet.vn/Images/2017/09/22/13/20170922134514-lam-den-ong-sao.jpg",
  },
  {
    id: 5,
    name: "Đèn Lồng Kéo Quân ",
    price: 120000,
    description:
      "Đèn lồng kéo quân, tượng trưng cho sự sáng tạo lưu giữ truyền thống.",
    image:
      "https://cdn.tgdd.vn/Files/2019/07/30/1182575/tu-tay-lam-long-den-keo-quan-bang-giay-cho-trung-thu-202208101431170560.jpeg",
  },
  {
    id: 6,
    name: "Đèn Lồng Giấy Xếp",
    price: 130000,
    description:
      "Đèn lồng giấy xếp, biểu trưng cho sự giản dị, sáng tạo và ấm áp. ",
    image:
      "https://denlongthanhtra.com/wp-content/uploads/2021/05/slider_1529149615838_o_1cg46mqsf4h37alt3m1t4rll6c-1024x683-1.jpg",
  },
  {
    id: 7,
    name: "Đèn Lồng Giấy Kiếng ",
    price: 170000,
    description:
      "Đèn lồng giấy kiếng, tượng trưng cho sự rực rỡ, hồn nhiên và gắn bó.",
    image:
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/435/471/products/0-574b00e8-3dd2-4dc8-aaf0-0d47c958a778.jpg?v=1690540156290",
  },
  {
    id: 8,
    name: "Đèn Lồng Con Thỏ",
    price: 140000,
    description:
      "Đèn lồng con thỏ, tượng trưng cho sự hồn nhiên, may mắn và niềm vui của trẻ thơ.",
    image:
      "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llrfvj5rmbbze9",
  },
  {
    id: 9,
    name: "Đèn Lồng Điện Tử",
    price: 180000,
    description:
      "Đèn lồng điện tử, mang ý nghĩa hiện đại hóa Tết Trung Thu, kết hợp truyền thống với công nghệ.",
    image:
      "https://media-cdn-v2.laodong.vn/storage/newsportal/2023/8/26/1233893/Z4638714470882_Fc0f1.jpg",
  },
  {
    id: 12,
    name: "Đèn Lồng thủy tinh",
    price: 200000,
    description:
      "Đèn lồng thủy tinh tượng trưng cho sự sang trọng, tinh tế, ánh sáng trí tuệ, trường tồn và mang ý nghĩa phong thủy về may mắn, thịnh vượng.",
    image: "https://media.cooky.vn/article/s640/cooky-article-cover-b276.jpg",
  },
  {
    id: 10,
    name: "Đèn Lồng Bằng Gỗ",
    price: 290000,
    description:
      "Đèn lồng bằng gỗ, tượng trưng cho sự mộc mạc, bền vững và tinh tế.",
    image:
      "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lx5fd09ojizd55",
  },
  {
    id: 11,
    name: "Đèn Lồng Hoa Đăng",
    price: 150000,
    description:
      "Đèn lồng hoa đăng tượng trưng cho ước nguyện, hy vọng, lòng thành kính với tổ tiên.",
    image:
      "https://ktmt.vnmediacdn.com/images/2022/08/11/30-1660231002-tha-hoa-dang.jpg",
  },

  // Thêm sản phẩm khác
];

const cart = [];

// Hàm hiển thị sản phẩm
function renderProducts(filteredProducts) {
  const productList = document.getElementById("product-list");
  productList.innerHTML = ""; // Xóa hết sản phẩm hiện tại
  filteredProducts.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
                          <img src="${product.image}" alt="${product.name}">
                          <h3>${product.name}</h3>
                          <p>${product.description}</p>
                          <p><strong>Giá: ${product.price.toLocaleString()}đ</strong></p>
                          <button onclick="addToCart(${
                            product.id
                          })">Thêm vào giỏ</button>
                      `;
    productList.appendChild(productDiv);
  });
}
// Hàm thêm sản phẩm vào giỏ
function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  cart.push(product);
  updateCart();
}
// Hàm cập nhật giỏ hàng
function updateCart() {
  const cartItemsList = document.getElementById("cartItems");
  cartItemsList.innerHTML = "";
  cart.forEach((item, index) => {
    const cartItem = document.createElement("li");
    cartItem.innerHTML = `${item.name} - ${item.price.toLocaleString()}đ
                                            <button onclick="removeFromCart(${index})">Xóa</button>`;
    cartItemsList.appendChild(cartItem);
  });
}
// Hàm xóa sản phẩm khỏi giỏ
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}
// Hàm thanh toán
function checkout() {
  alert("Thanh toán thành công!");
  cart.length = 0; // Xóa giỏ hàng sau khi thanh toán
  updateCart();
}
// Hàm toggle giỏ hàng popup
function toggleCartPopup() {
  const popup = document.getElementById("cartPopup");
  popup.style.display = popup.style.display === "block" ? "none" : "block";
}
// Hàm lọc sản phẩm theo giá
function filterProducts() {
  const filterValue = document.getElementById("filter").value;
  let filteredProducts = [...products];

  if (filterValue === "low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (filterValue === "high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }
  renderProducts(filteredProducts);
}
// Hàm tìm kiếm sản phẩm
function searchProducts() {
  const searchQuery = document.getElementById("search").value.toLowerCase();
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery)
  );
  renderProducts(filteredProducts);
}

// Lắng nghe sự kiện lọc và tìm kiếm
document.getElementById("filter").addEventListener("change", filterProducts);
document.getElementById("search").addEventListener("input", searchProducts);

// Hiển thị tất cả sản phẩm khi tải trang
renderProducts(products);
