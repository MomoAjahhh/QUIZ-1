// Menjalankan kode setelah halaman dimuat
window.onload = function() {
    // Mengambil elemen canvas
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    
    // Properti bola
    var posisiX = -20;
    var posisiY = canvas.height / 2;
    var ukuranBola = 20;
    var warnaBola = "white"; 
    var kecepatan = 3;
    var waktuTunggu = 50;
    var frameCount = 0; 
    
    // Status gerakan bola
    var bergerakKanan = true;
    var bergerakBawah = false; 
    var bergerakKiri = false;
    
    function jalankanAnimasi() {
   
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        ctx.beginPath();
        ctx.arc(posisiX, posisiY, ukuranBola, 0, Math.PI * 2);
        ctx.fillStyle = warnaBola;
        ctx.fill();
        
        if (bergerakKanan) {
 
            posisiX = posisiX + kecepatan;
            
            if (posisiX + ukuranBola >= canvas.width) {
                bergerakKanan = false;
                bergerakBawah = true;
            }
        }
        
        if (bergerakBawah) {

            posisiY = posisiY + kecepatan;
            
            if (posisiY + ukuranBola >= canvas.height) {
                bergerakBawah = false;
                bergerakKiri = true;
            }
        }
        
        if (bergerakKiri) {
 
            posisiX = posisiX - kecepatan;
            
            
        }

        requestAnimationFrame(jalankanAnimasi);
    }

    jalankanAnimasi();
};