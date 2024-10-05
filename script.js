<script>
   (function(){
      emailjs.init({
        publicKey: "cYu70KLbi_E6VMsi2",
      });
   })();

   // Menangani form submit
   document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah form dari pengiriman default

        // Mengambil nilai input form
        const templateParams = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        // Menampilkan animasi loading sebelum pengiriman
        Swal.fire({
            title: 'Mengirim pesan...',
            text: 'Mohon tunggu beberapa saat.',
            allowOutsideClick: false, // Mencegah klik di luar SweetAlert saat loading
            didOpen: () => {
                Swal.showLoading(); // Memunculkan animasi loading
            }
        });

        // Mengirim email
        emailjs.send('service_g2dh5sr', 'template_wyfnsj7', templateParams)
            .then(function() {
                // Jika pengiriman berhasil, menampilkan pesan sukses
                Swal.fire({
                    icon: 'success',
                    title: 'Pesan Anda telah dikirim!',
                    text: 'Kami akan segera menghubungi Anda.',
                    confirmButtonText: 'OK'
                });
                document.getElementById('contact-form').reset(); // Reset form setelah pengiriman
            }, function(error) {
                // Jika pengiriman gagal, menampilkan pesan error
                Swal.fire({
                    icon: 'error',
                    title: 'Terjadi kesalahan!',
                    text: 'Coba lagi nanti.',
                    confirmButtonText: 'OK'
                });
            });
   });
</script>
