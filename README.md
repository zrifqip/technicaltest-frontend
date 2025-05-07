# Frontend-Technical Test
Untuk frontend ini dibuat menggunakan framework nuxt dengan libary nuxt ui dan juga tailwind css.
## Fitur Autentikasi
Salah satu fitur yang telah dibuat dalam front end dan sudah terintegrasi dengan backend ini adalah dalama Autentikasi. Sebagai guest yang tidak memiliki akun Autentikasi ini berhasil untuk menggunakan web fingerprint sebagai identitas unik dan juga login admin untuk mengakses akses admin. Berikut untuk halaman login yang ada
![image](https://github.com/user-attachments/assets/7f34f5a3-fe90-4531-bd80-a77a11664601)
token ini akan disimpan dalam local storage dikarenakan cookie yang terdapat backend ini sedikit bermasalah jadi bisa diimprove kedepannya menggunakan cookie sebagai penyimpanan token
## Daftar Pegawai
Lalu setelah masuk kedalam aplikasi akan diberikan tampilan tabel untuk menampilkan semua data pegawai yang ada
Terdapat juga untuk paginasi pegawai mekipun berhasil dibuat dalam backend fitur ini tidak berhasil untuk diaplikasikan dalam front end.
## Cetak Data pegawai
Untuk mencetak data pegawai ini dilakukan pembuatan file `.blade` yang kemudian dijadikan view untuk table dengan melakukan query dan didapatkan seperti berikut
![image](https://github.com/user-attachments/assets/0721a33d-0a8b-4206-a60e-3475dbb213d6)

Jika menekan tombol download maka akan terdownload secara langsung file berbentuk pdf
![image](https://github.com/user-attachments/assets/bb76040f-339c-4575-88bb-cd03e973fa36)

## Fitur Lain
Terdapat juga untuk fitur mendaftarkan pegawai yang dimana terdapat kendala dalam mengerjakan. dikarenakan dalam library nuxt ui ini memiliki select menu yang tidak bisa terintegrasi dengan data dari backend. Alhasil dikarenakan banyak dari fitur ini menggunakan komponen  UI tersebut. banyak juga yang tidak bisa diintegrasikan.
![image](https://github.com/user-attachments/assets/a6a74caa-78de-4eb9-94fb-3bb647137033)