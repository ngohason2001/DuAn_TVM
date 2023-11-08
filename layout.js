// Tạo một phần tử header
const header = document.createElement("header");
// Sử dụng Fetch API để tải nội dung từ tệp HTML
fetch("../views/header.html")
  .then(response => response.text()) // Chuyển đổi dữ liệu nhận được thành văn bản
  .then(data => {
    // Gán nội dung tải được vào phần tử header
    header.innerHTML = data;

    // Đưa phần tử header vào vị trí cần thiết trên trang web
    document.getElementById("header-container").appendChild(header);
  })
  .catch(error => {
    console.error("Lỗi khi tải header:", error);
  });

// Tương tự cho phần tử footer
const footer = document.createElement("footer");

fetch("../views/footer.html")
  .then(response => response.text())
  .then(data => {
    footer.innerHTML = data;
    document.getElementById("footer-container").appendChild(footer);
  })
  .catch(error => {
    console.error("Lỗi khi tải footer:", error);
  });