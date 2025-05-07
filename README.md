# Frontend-Technical Test
Untuk frontend ini dibuat menggunakan framework nuxt dengan libary nuxt ui dan juga tailwind css.
## Fitur Autentikasi
Salah satu fitur yang telah dibuat dalam front end dan sudah terintegrasi dengan backend ini adalah dalama Autentikasi. Sebagai guest yang tidak memiliki akun Autentikasi ini berhasil untuk menggunakan web fingerprint sebagai identitas unik dan juga login admin untuk mengakses akses admin. Berikut untuk halaman login yang ada
![image](https://github.com/user-attachments/assets/8bdc6fbe-dabb-438e-ae3d-431326b34948)

token ini akan disimpan dalam local storage dikarenakan cookie yang terdapat backend ini sedikit bermasalah jadi bisa diimprove kedepannya menggunakan cookie sebagai penyimpanan token
## Daftar Pegawai
Lalu setelah masuk kedalam aplikasi akan diberikan tampilan tabel untuk menampilkan semua data pegawai yang ada
![image](https://github.com/user-attachments/assets/cab0f3d0-674d-4117-b740-1953c6af0293)
Terdapat juga untuk paginasi pegawai mekipun berhasil dibuat dalam backend fitur ini tidak berhasil untuk diaplikasikan dalam front end.
## Cetak Data pegawai
Untuk mencetak data pegawai ini dilakukan pembuatan file `.blade` yang kemudian dijadikan view untuk table dengan melakukan query dan didapatkan seperti berikut
![image](https://github.com/user-attachments/assets/aee91c66-3220-4ec8-8410-d9656c5d61a0)

Jika menekan tombol download maka akan terdownload secara langsung file berbentuk pdf
![image](https://github.com/user-attachments/assets/84df572b-0190-4fd0-8a46-8828c12c4ed6)

## Fitur Lain
Terdapat juga untuk fitur mendaftarkan pegawai yang dimana terdapat kendala dalam mengerjakan. dikarenakan dalam library nuxt ui ini memiliki select menu yang tidak bisa terintegrasi dengan data dari backend. Alhasil dikarenakan banyak dari fitur ini menggunakan komponen  UI tersebut. banyak juga yang tidak bisa diintegrasikan.
![image](https://github.com/user-attachments/assets/2d0f2baf-2f2e-49c3-81c7-e8812c415bc2)
