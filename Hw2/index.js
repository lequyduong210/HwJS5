 
 function tinh(){
     // var tienDien = 0;
     var ten = document.querySelector(`#ten`).value;
     var soKw = document.querySelector(`#sokw`).value*1;
    if (soKw <= 50){
        var tienDien = soKw * 500;
    } else if (soKw <= 100){
        tienDien = 25000 + (soKw - 50) * 650;
    } else if (soKw <= 200){
        tienDien = 57500 + (soKw - 100) * 850;
    } else if (soKw <= 350){
        tienDien = 142500 + (soKw - 200) * 1100;
    } else {
        tienDien = 307500 + (soKw - 350) *1300;
    }
    document.querySelector('#result').innerHTML = `(Họ và tên: ${ten}, Tiền điện: ${tienDien.toLocaleString()} VND)`
 }