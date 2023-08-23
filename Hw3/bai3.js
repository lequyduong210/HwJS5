
function tinh(){
    var ten = document.querySelector(`#ten`).value;
    var thuNhap = document.querySelector(`#thunhap`).value*1;
    var nguoiPhuThuoc = document.querySelector(`#nguoiphuthuoc`).value*1;
    // thuNhap = thuNhap * 1000000;    
    thuNhapChiuThue = thuNhap - 4 - nguoiPhuThuoc * 1.6;
    if (thuNhapChiuThue <= 60){
        thue = thuNhapChiuThue * 0.05;
    } else if (thuNhapChiuThue <= 120){
        thue = thuNhapChiuThue * 0.1;
    } else if (thuNhapChiuThue <= 210){
        thue = thuNhapChiuThue * 0.15;
    } else if (thuNhapChiuThue <= 384){
        thue = thuNhapChiuThue * 0.2;
    } else if (thuNhapChiuThue <= 624){
        thue = thuNhapChiuThue * 0.25;
    } else if (thuNhapChiuThue <= 960){
        thue = thuNhapChiuThue * 0.3;
    } else{
        thue = thuNhapChiuThue * 0.35;
    }
    thue = thue * 1000000;
    document.querySelector(`#result`).innerHTML = `(Tên: ${ten}; Tiền thuế thu nhập cá nhân: ${thue.toLocaleString()} VND)`
}