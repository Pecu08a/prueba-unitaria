const historial = [];

export function guardarOperacion(registro) {
    historial.push(registro);
    return historial;
}

export function obtenerHistorial() {
    return [...historial];
}

// export function limpiarHistorial() {
//     historial.length = 0;
// }