# 🚀 Portofolio Web & CI/CD Pipeline

Web profil mahasiswa berbasis **Next.js** yang dikembangkan menggunakan sistem otomatisasi **Docker** dan **GitHub Actions**.

## 👤 Profil Mahasiswa
* **Nama**: Afifah Khoirunnisa
* **NIM**: 2341720250


---

## 🛠️ Sistem Otomatisasi (CI/CD)
* **CI (Continuous Integration)**: Otomatis menjalankan *linting*, *build check*, dan pengujian setiap kali ada *Pull Request*.
* **CD (Continuous Delivery)**: Membangun Docker image secara otomatis dan mengirimkannya ke Docker Hub setelah kode digabungkan ke branch `main`.

---

## 📦 Panduan Penggunaan

### Menggunakan Docker
Jika Anda ingin menjalankan aplikasi secara langsung:
1. **Tarik Image**: `docker pull afifahnisaa/profile-web:latest`
2. **Jalankan Container**: `docker run -p 3000:3000 afifahnisaa/profile-web:latest`
3. **Akses**: Buka browser di `http://localhost:3000`.

### Pengembangan Lokal
Ikuti langkah-langkah berikut untuk menjalankan proyek di lingkungan pengembangan:

1. **Clone Repositori**

   ```bash
   git clone [https://github.com/afifahnisa17/profile.git](https://github.com/afifahnisa17/profile.git)
   ```
2. **Masuk ke Directory Proyek**

    ```bash
    cd afifah
    ```
3. **Install Dependen**
    ```bash
    npm install
    ```

4. **Jalankan Aplikasi**

    ```bash
    npm run dev
    ```

---
