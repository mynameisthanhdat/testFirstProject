document.addEventListener("DOMContentLoaded", function() {
    console.log('Loaded page')
    window.addEventListener('scroll', function() {
        // trả về vị trí chuột hiện tại
        console.log(window.pageYOffset); 
        if(window.pageYOffset > 300)
        console.log('Đang ở vị trí lớn hơn 300');
    })
})

document.addEventListener("DOMContentLoaded", function() {
    var trangthai = 'duoi300';
    var menunho = document.querySelector('.menu');

    window.addEventListener('scroll', function() {
        if(window.pageYOffset > 300) {
            if(trangthai == 'duoi300') {
                // trangthai = 'tren300';
                menunho.classList.add('menunho');
            }
        }
        else {
            menunho.classList.remove('menunho');
        }
    })
})