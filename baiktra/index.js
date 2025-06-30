//bai 1
// function soNguyenTo(n) {
//     if (n < 2) return false;
//     for (let i = 2; i < n; i++) {
//         if (n % i === 0) return false;
//     }
//     return true;
// }
//
// let n = +prompt("Nhập số phần tử (n ≤ 50):");
// let a = [];
//
// for (let i = 0; i < n; i++) {
//     a[i] = +prompt("Nhập a[" + i + "]:");
// }
//
// let b = [];
// for (let i = 0; i < n; i++) {
//     if (soNguyenTo(a[i])) {
//         b.push(a[i]);
//     }
// }
//
// console.log("Mảng a:", a);
// console.log("Mảng b (số nguyên tố):", b);

//bai 2
// function soSanhPhanSo(tu1, mau1, tu2, mau2) {
//     return tu1 * mau2 === tu2 * mau1;
// }
//
// // let tu1 = +prompt("Nhập tử số phân số thứ 1:");
// // let mau1 = +prompt("Nhập mẫu số phân số thứ 1:");
//
// // let tu2 = +prompt("Nhập tử số phân số thứ 2:");
//
// // let mau2 = +prompt("Nhập mẫu số phân số thứ 2:");
// // if (soSanhPhanSo(tu1, mau1, tu2, mau2)) {
// //     alert("Hai phân số bằng nhau.");
// // } else {
// //     alert("Hai phân số ko bằng nhau.");
// // }



// bai 3
// class SoTietKiem {
//   constructor(maSo, loai, hoTen, cmnd, ngayMo, soTien) {
//     this.maSo = maSo;
//     this.loai = loai;
//     this.hoTen = hoTen;
//     this.cmnd = cmnd;
//     this.ngayMo = ngayMo;
//     this.soTien = soTien;
//   }
// }
//
// let danhSachSo = [];
//
// function themSo() {
//   let maSo = document.getElementById("maSo").value.trim();
//   let loai = document.getElementById("loai").value.trim();
//   let hoTen = document.getElementById("hoTen").value.trim();
//   let cmnd = document.getElementById("cmnd").value.trim();
//   let ngay = document.getElementById("ngay").value;
//   let soTien = parseFloat(document.getElementById("soTien").value);
//
//   if (!maSo || maSo.length > 5) return alert("Mã sổ không hợp lệ!");
//   if (!loai || loai.length > 10) return alert("Loại tiết kiệm không hợp lệ!");
//   if (!hoTen || hoTen.length > 30) return alert("Tên không hợp lệ!");
//   if (!cmnd || isNaN(cmnd)) return alert("CMND không hợp lệ!");
//   if (!ngay) return alert("Ngày mở không hợp lệ!");
//   if (isNaN(soTien) || soTien <= 0) return alert("Số tiền phải > 0");
//
//   let soMoi = new SoTietKiem(maSo, loai, hoTen, cmnd, ngay, soTien);
//   danhSachSo.push(soMoi);
//   alert("Thêm thành công!");
//   hienThi();
// }
//
// function hienThi() {
//   let html = "";
//   for (let so of danhSachSo) {
//     html += `<li>${so.maSo} - ${so.hoTen} - ${so.soTien}đ</li>`;
//   }
//   document.getElementById("dsSo").innerHTML = html;
// }
//
// function xoaSo() {
//   let maCanXoa = prompt("Nhập mã sổ cần xóa:");
//   let index = danhSachSo.findIndex(s => s.maSo === maCanXoa);
//   if (index === -1) return alert("Không tìm thấy mã sổ!");
//
//   let xacNhan = confirm("Bạn có chắc muốn xóa không?");
//   if (xacNhan) {
//     danhSachSo.splice(index, 1);
//     alert("Đã xóa!");
//     hienThi();
//   }
// }
