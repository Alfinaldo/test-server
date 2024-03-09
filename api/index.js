const express = require('express');

// Membuat instance dari aplikasi Express
const app = express();

// Menentukan port server
const port = 30;

// Mengatur route untuk merespons permintaan GET ke halaman utama
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Menjalankan server dan mendengarkan port yang ditentukan
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});