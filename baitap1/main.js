var luongNgay = 100000;

document.getElementById("btnclick").onclick=function (params) {
    var luongNgay = 100000;
   var ngayTinhLuong = document.getElementById("ngayCong").value;

   var ketQua = luongNgay * ngayTinhLuong;
   document.getElementById("footerngaycong").innerHTML= "Lương Nhân Viên: " + ketQua;

};

// bài tập 2

document.getElementById("btn_giatri").onclick = function (params) {
  var gT1 = document.getElementById("giaTri1").value*1;
  var gT2 = document.getElementById("giaTri2").value*1;
  var gT3 = document.getElementById("giaTri3").value*1;
  var gT4 = document.getElementById("giaTri4").value*1;
  var gT5 = document.getElementById("giaTri5").value*1;

  var tb = 5;

  var Tong = (gT1 + gT2+ gT3 + gT4 + gT5);
  var trungBinh = Tong / tb;

  document.getElementById("footertrungbinh").innerHTML ="Giá trị trung bình: " + trungBinh;
};


// bài tập 3

document.getElementById("btnusd").onclick= function (params) {
    
    var tienUsd = document.getElementById("usd").value*1;
    var tienViet = 23500;
    var tien = new Intl.NumberFormat("vn-VN");

    var chuyenTien = tienUsd * tienViet;

    document.getElementById("footerusd").innerHTML= tien.format(chuyenTien) + "vnđ";

};

// bài tập 4

document.getElementById("btnHcn").onclick=function (params) {
    var rong = document.getElementById("chieuRong").value*1;

    var dai = document.getElementById("chieuDai").value*1;
// Tính chu vi diện tích 
var tongDaiRong= dai +rong;
var chuVi = tongDaiRong *2;
var dienTich = dai * rong ;
    var result ="";
    result += "<p>Chu vi là: " + chuVi + "</p>";
    result += "<p>Diện Tích là: " + dienTich + "</p>";

    document.getElementById("footerhcn").innerHTML= result;

}

// bài tập 5
document.getElementById("btnsoN").onclick=function (params) {
    var soNguyen = document.getElementById("soN").value*1;
    var hangChuc = Math.floor((soNguyen % 100)/10);
var donVi = soNguyen % 10;

var tongsoN =hangChuc + donVi;

document.getElementById("footersoN").innerHTML="Tổng là: "+tongsoN;


};




