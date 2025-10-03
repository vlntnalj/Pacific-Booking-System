document.addEventListener('DOMContentLoaded', () => {
    const bookingForm = document.getElementById('booking-form');

    if (bookingForm) {
        bookingForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Detiene el envío del formulario

            // Recoger los valores del formulario
            const arrivalDate = document.getElementById('llegada').value;
            const departureDate = document.getElementById('salida').value;
            const roomType = document.getElementById('tipo-habitacion').value;
            const guests = document.getElementById('huespedes').value;
            const rooms = document.getElementById('habitaciones').value;

            // Validación básica (se podría expandir)
            if (!arrivalDate || !departureDate || roomType === 'Seleccionar habitación') {
                alert('Por favor, complete todos los campos de la reserva.');
                return;
            }

            // Simulación de la lógica de consulta y redirección
            console.log('--- Consulta de Disponibilidad ---');
            console.log(`Llegada: ${arrivalDate}`);
            console.log(`Salida: ${departureDate}`);
            console.log(`Habitación: ${roomType}`);
            console.log(`Huéspedes: ${guests}`);
            console.log(`Habitaciones: ${rooms}`);

            alert(`Buscando disponibilidad para ${guests} desde ${arrivalDate} hasta ${departureDate}...`);

            // window.location.href = '/disponibilidad';
        });
    }
});