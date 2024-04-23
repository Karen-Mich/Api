$(document).ready(function () {
    obtenerEstudiantes();
    guardarEstudiante();
    mostrarDatosForm();
    editarEstudiante();
    eliminarEstudiante();
    
});

function obtenerEstudiantes() {
    $.ajax({
        url: "../Controllers/apiEstudiantes.php",
        type: "GET",
        dataType: "json",
        success: function (response) {
            var tabla = $("#tablaEstudiantes tbody");
            tabla.empty();
            $.each(response, function (index, item) {
                tabla.append(`<tr data-id="${item.cedula}">
                <td>${item.cedula}</td>
                <td>${item.nombre}</td>
                <td>${item.apellido}</td>
                <td>${item.direccion}</td>
                <td>${item.telefono}</td>
                <td>
                    <button class="btn btn-primary btn-sm" id="boton-editar" data-id="${item.cedula}">Mostrar</button>
                    
                    <button class="btn btn-danger btn-sm" id="boton-eliminar" data-id="${item.cedula}">Eliminar</button>
                </td>
            </tr>`)
            })

        }
    })
}

function guardarEstudiante() {
    $('#guardar').click(function (event) {
        event.preventDefault();
        var cedula = $("#cedula").val();
        var nombre = $("#nombre").val();
        var apellido = $("#apellido").val();
        var direccion = $("#direccion").val();
        var telefono = $("#telefono").val();
        $.ajax({
            url: "../Controllers/apiEstudiantes.php",
            type: "POST",
            data: {
                //cedula:cedula,
                cedula,
                nombre,
                apellido,
                direccion,
                telefono
            },
            success: function (response) {
                console.log(response);
                obtenerEstudiantes();
                $("#cedula").val('');
                $("#nombre").val('');
                $("#apellido").val('');
                $("#direccion").val('');
                $("#telefono").val('');
            }
        })
    });
}

function mostrarDatosForm() {
    $(document).ready(function () {
        $('#tablaEstudiantes tbody').on('click', 'tr #boton-editar', function (event) {
            var fila = $(this).closest('tr'); // Obtener la fila más cercana al botón "Editar"
            var cedula = fila.attr('data-id');
            var nombre = fila.find('td:eq(1)').text(); // Obtener el texto del segundo td (nombre)
            var apellido = fila.find('td:eq(2)').text(); // Obtener el texto del tercer td (apellido)
            var direccion = fila.find('td:eq(3)').text(); // Obtener el texto del cuarto td (dirección)
            var telefono = fila.find('td:eq(4)').text(); // Obtener el texto del quinto td (teléfono)

            // Mostrar los datos en el formulario
            $('input[name="cedula"]').val(cedula);
            $('input[name="nombre"]').val(nombre);
            $('input[name="apellido"]').val(apellido);
            $('input[name="direccion"]').val(direccion);
            $('input[name="telefono"]').val(telefono);
        });
    });
}

function editarEstudiante() {
    $('#editar').click(function (event) {
        event.preventDefault();
        var cedula = $("#cedula").val();
        var nombre = $("#nombre").val();
        var apellido = $("#apellido").val();
        var direccion = $("#direccion").val();
        var telefono = $("#telefono").val();
        $.ajax({
            url: `../Controllers/apiEstudiantes.php?cedula=${cedula}&nombre=${nombre}&apellido=${apellido}&direccion=${direccion}&telefono=${telefono}`,
            type: "PUT",
            success: function (response) {
                console.log(response);
                obtenerEstudiantes();
                $("#cedula").val('');
                $("#nombre").val('');
                $("#apellido").val('');
                $("#direccion").val('');
                $("#telefono").val('');
            }
        })
    });
}


function eliminarEstudiante() {
    $(document).ready(function () {
        // Capturar clic en la fila de la tabla
        $('#tablaEstudiantes tbody').on('click', 'tr #boton-eliminar', function (event) {
            // Obtener los datos de la fila clicada
            var fila = $(this).closest('tr'); // Obtener la fila más cercana al botón "Editar"
            var cedula = fila.attr('data-id');
            $.ajax({
                url: `../Controllers/apiEstudiantes.php?cedula=${cedula}`,
                type: "DELETE",
                success: function (response) {
                    console.log(response);
                    obtenerEstudiantes();
                }
            })
        });
    });
}

