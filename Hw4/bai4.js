
function loaiHinh(loai){
    if (loai == "nhadan"){
        var phiHoaDon = 4.5;
        var phiDichVu = 20.5;
        var giaThue = 7.5;
    } else {
        phiHoaDon = 15;
        giaThue = 50;
    }
}
function tinh(){
    var soKenh = document.querySelector('#sokenh').value*1;
    var loai = document.querySelector('#loai').value;
    var soKetNoi = document.querySelector('#soketnoi').value*1;
    // Tính giá tiền
    if (loai == "nhadan"){
        var tienTra = soKenh * 7.5 + 20.5 + 4.5;
    }
    document.querySelector('#result').innerHTML = `Số tiền phải trả: ${tienTra} VND`;

}
