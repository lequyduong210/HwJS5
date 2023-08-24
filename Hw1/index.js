function khuVuc(loai){
    var diem;
    if (loai == "loaiA"){
        diem = 2;
    } else if (loai == "loaiB" ){
        diem = 1;
    } else {
        diem = 0.5;
    }
    return diem;  // Thêm câu lệnh return
}
function doiTuong(loai){
    var diemCong;
    if (loai == "loai1" ){
        diemCong = 2.5;
    } else if (loai == "loai2"){
        diemCong = 1.5;
    } else {
        diemCong = 1;
    }
    return diemCong;  // Thêm câu lệnh return
}
function tinh(){
    var diemChuan = parseFloat(document.querySelector('#diemchuan').value);
    var diemMon1 = parseFloat(document.querySelector('#diemthunhat').value);
    var diemMon2 = parseFloat(document.querySelector('#diemthuhai').value);
    var diemMon3 = parseFloat(document.querySelector('#diemthuba').value);

    var diem = document.querySelector('select[name="khuvuc"]').value;
    var diemCong = document.querySelector('select[name="doituong"]').value;

    var diemCongKhuVuc = khuVuc(diem);
    var diemCongDoiTuong = doiTuong(diemCong);
    var diemTong = diemMon1 + diemMon2 + diemMon3 + diemCongKhuVuc + diemCongDoiTuong;

    var resultElement = document.querySelector('#result');

    if (diemTong >= diemChuan){
        resultElement.innerHTML = `Bạn đã đậu. Điểm tổng là: ${diemTong}`;
    } else {
        resultElement.innerHTML = `Bạn đã rớt. Điểm tổng là: ${diemTong}`;
    }
}

