<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $comment = $_POST["comment"];
    
    // Simpan komentar ke dalam file atau database (disesuaikan dengan kebutuhan)
    $file = fopen("comments.txt", "a");
    fwrite($file, "Nama: " . $name . "\nKomentar: " . $comment . "\n\n");
    fclose($file);
    
    // Redirect kembali ke halaman utama
    header("Location: index.html");
}
