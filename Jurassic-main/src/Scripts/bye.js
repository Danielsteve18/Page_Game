let logout = document.querySelector('#logout')
logout.addEventListener('click' , () => {
    Swal.fire({
        icon: 'info',
        title: 'Cerrar Sesión',
        text: '¿Estás seguro de que quieres cerrar sesión?',
        showCancelButton: true,
        confirmButtonText: 'Si, cerrar sesión',
        cancelButtonText: 'Cancelar'
        // Se cierra la sesión activa del usuario
    }).then((result) => {
        if(result.isConfirmed){
            localStorage.removeItem('login_success');
            Swal.fire({
                icon: 'success',
                title: 'Sesión Cerrada',
                text: 'Tu sesión ha sido cerrada correctamente.',
                confirmButtonText: 'Ok'
                // Cuando cierre sesión lo redirige al login.
            }).then(() => {
                window.location.href = '../../Index.html';
            });
        }
    });
});