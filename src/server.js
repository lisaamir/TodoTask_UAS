const express = require('express');
const mysql = ('mysql');
const app = express();
const port = 8080;

//registrasi
//login


//menampilkan semua tugas
app.get('/tugas', (req, res)=>{
     res.send('Welcome')
})

//menampilkan tugas berdasarkan id
app.get('/tugas/<id>', (req, res)=>{
     res.send('Welcome')
})

//menambahkan tugas
app.post('/', (req, res)=>{
     res.send('Welcome')
})

//mengubah tugas
app.put('/', (req, res)=>{
     res.send('Welcome')
})

//menghapus tugas
app.delete('/', (req, res)=>{
     res.send('Welcome')
})


app.listen(port, () => {
     console.log(`Example app listening on port ${port}`)
     })