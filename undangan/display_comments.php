<?php
if (file_exists("comments.txt")) {
    $comments = file_get_contents("comments.txt");
    echo nl2br($comments); // Menampilkan komentar dengan mempertahankan baris baru
}
