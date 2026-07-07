// Amvil tombol dari HTML 
const toggleBtn = document.getElementById("theme-toggle")

// Dengarkan kalau tombol diklik
toggleBtn. addEventListener("click", function() {

    // Tambah atau hapus class "light-mode" di body
    document.body.classList.toggle("light-mode")

    // ganti icon tombolnya
    if (document.body.classList.contains("light-mode")) {
        toggleBtn.textContent = "☀️"
    }else {
        toggleBtn.textContent = "🌙"
    }
})