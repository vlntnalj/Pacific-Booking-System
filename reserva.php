<?php
$conn = new mysqli("localhost", "root", "", "hotel_db");

$cliente = $_POST['cliente'];
$habitacion = $_POST['habitacion'];
$fechaInicio = $_POST['fecha_inicio'];
$fechaFin = $_POST['fecha_fin'];

$sql = "INSERT INTO reserva (cliente_id, habitacion_id, fecha_inicio, fecha_fin, estado) 
        VALUES ('$cliente', '$habitacion', '$fechaInicio', '$fechaFin', 'Pendiente')";

if ($conn->query($sql) === TRUE) {
    echo "Reserva creada exitosamente.";
} else {
    echo "Error: " . $conn->error;
}
?>
