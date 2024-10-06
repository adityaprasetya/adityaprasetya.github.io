async function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        // Fetch data dari user.json
        const response = await fetch('user.json');
        const users = await response.json();

        // Validasi username dan password
        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            // Login sukses, tampilkan SweetAlert
            Swal.fire({
                icon: 'success',
                title: 'Login Berhasil',
                text: 'Selamat datang, ' + username + '!',
                showConfirmButton: false,
                timer: 1500
            }).then(() => {
                localStorage.setItem('isLoggedIn', true);
                window.location.href = 'admin.html'; // Arahkan ke halaman admin
            });
        } else {
            // Jika login gagal, tampilkan SweetAlert error
            Swal.fire({
                icon: 'error',
                title: 'Login Gagal',
                text: 'Username atau password salah!',
            });
        }
    } catch (error) {
        // Jika terjadi kesalahan pada fetch, tampilkan pesan error
        console.error('Error fetching user data:', error);
        Swal.fire({
            icon: 'error',
            title: 'Terjadi Kesalahan',
            text: 'Gagal memproses login. Coba lagi nanti.',
        });
    }
}
