// Bài tập 1
document.getElementById("tinhDiem").onclick = function () {
  // Đầu vào
  var diemChuan = document.getElementById("diemChuan").value * 1;
  var diem1 = document.getElementById("diem1").value * 1;
  var diem2 = document.getElementById("diem2").value * 1;
  var diem3 = document.getElementById("diem3").value * 1;
  var khuVuc = document.getElementById("khuVuc").value;
  var doiTuong = document.getElementById("doiTuong").value;
  // xử lý
  var chonKhuVuc = khuVuc;
  var chonDoiTuong = doiTuong;

  switch (chonKhuVuc) {
    case "A":
      chonKhuVuc = 2;
      break;
    case "B":
      chonKhuVuc = 1;
      break;
    case "C":
      chonKhuVuc = 0.5;
      break;
    default:
      chonKhuVuc = 0;
  }

  switch (chonDoiTuong) {
    case "1":
      chonDoiTuong = 2.5;
      break;
    case "2":
      chonDoiTuong = 1.5;
      break;
    case "3":
      chonDoiTuong = 1;
      break;
    default:
      chonDoiTuong = 0;
  }
  var tongDiem = diem1 + diem2 + diem3 + chonKhuVuc + chonDoiTuong;

  var ketQuaDiem;
  if (tongDiem >= diemChuan) {
    ketQuaDiem = "Bạn đã đậu" + "," + "Tổng điểm: " + tongDiem;
  } else {
    ketQuaDiem = "Bạn đã rới" + "," + "Tổng điểm: " + tongDiem;
  }
  // Đầu ra
  document.getElementById("thongBaoDiem").innerHTML = ketQuaDiem;
};

// Bài tập 2
document.getElementById("tinhTien").onclick = function () {
  // Đàu vào
  var soKW = document.getElementById("soKW").value * 1;
  var hoTen = document.getElementById("hoTen").value;
  // Xử lý
  var tinhTienKW;
  if (soKW <= 50) {
    tinhTienKW = soKW * 500;
  } else if (soKW > 50 && soKW <= 100) {
    tinhTienKW = 50 * 500 + (soKW - 50) * 650;
  } else if (soKW > 100 && soKW <= 200) {
    tinhTienKW = 50 * 500 + 50 * 650 + (soKW - 100) * 850;
  } else if (soKW > 200 && soKW <= 350) {
    tinhTienKW = 50 * 500 + 50 * 650 + 100 * 850 + (soKW - 200) * 1100;
  } else if (soKW > 350) {
    tinhTienKW =
      50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKW - 350) * 1300;
  } else {
    confirm("Vui lòng nhập kw > 0");
  }

  // format vnđ
  var format = new Intl.NumberFormat("vn-VN");
  var tinhTienKwVND = format.format(tinhTienKW) + " vnd";

  var hoTenTinhTien = "Họ tên: " + hoTen + "; " + "Tiền điện: " + tinhTienKwVND;
  // Đầu ra
  document.getElementById("thongBao2").innerHTML = hoTenTinhTien;
};
