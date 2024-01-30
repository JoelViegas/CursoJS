

document.addEventListener('DOMContentLoaded', function () {
    let inicio = document.getElementById('inicio');

    inicio.addEventListener('click', function () {
        alert('Bienvenido al programa de ejemplo de JavaScript de CoderHouse.');

        function menuPrincipal() {
            let opcion;

            do {
                opcion = prompt("Elige una opción:\n1. Usar calculadora\n2. Reservar mesa en un restaurante\n3. Comprar entradas\n4. Pedidos Online");

                switch (opcion) {
                    case '1':
                        usarCalculadora();
                        break;
                    case '2':
                        reservarMesa();
                        break;
                    case '3':
                        comprarEntradas();
                        break;
                    case '4':
                        hacerPedidoOnline();
                        break;
                    default:
                        alert("Opción no válida. Por favor, elige una opción correcta.");
                }
            } while (opcion !== null);
        }

        function usarCalculadora() {
            let continuar;

            do {
                let operacion = prompt("Ingresa la operación: \n1. SUMA\n2. RESTA\n3. MULTIPLICACION\n4. DIVISION");
                let num1 = parseInt(prompt("Ingresa el primer número:"));
                let num2 = parseInt(prompt("Ingresa el segundo número:"));

                if (isNaN(num1) || isNaN(num2)) {
                    alert("Por favor, ingresa números válidos.");
                } else {
                    let resultado;
                    switch (operacion) {
                        case '1':
                            resultado = num1 + num2;
                            break;
                        case '2':
                            resultado = num1 - num2;
                            break;
                        case '3':
                            resultado = num1 * num2;
                            break;
                        case '4':
                            resultado = num1 / num2;
                            break;
                        default:
                            alert("Operación no válida. Por favor, elige una operación correcta.");
                            return;
                    }
                    alert(`Resultado: ${resultado}`);
                }

                continuar = confirm("¿Quieres realizar otra operación?");
            } while (continuar);
        }

        function reservarMesa() {
            let numPersonas = parseInt(prompt("Número de personas:"));
            let i = 1;

            while (i <= numPersonas) {
                let nombre = prompt(`Nombre de la persona ${i}:`);
                let edad = parseInt(prompt(`Edad de ${nombre}:`));
                let bebida;

                if (edad < 18) {
                    do {
                        bebida = prompt(`Bebida para ${nombre}  Agua,  Gaseosa, Cerveza`);
                        if (bebida.toLowerCase() === 'cerveza') {
                            alert("Lo siento, eres menor de edad. Elige otra bebida.");
                        }
                    } while (bebida.toLowerCase() == 'cerveza');
                } else {
                    bebida = prompt(`Bebida para ${nombre} Agua, Gaseosa, Cerveza`);
                }

                let plato = prompt(`Plato para ${nombre} Pollo, Carne, Vegetariano`);

                alert(`Reserva para ${nombre}:\nEdad: ${edad}\nPlato: ${plato}\nBebida: ${bebida}`);
                i++;
            }
        }

        function comprarEntradas() {
            let opcionShow = prompt("Elige un show:\n1. Metallica\n2. Bandana");

            if (opcionShow === '1') {
                let numPersonas = parseInt(prompt("¿Cuántas personas son?"));
                let i = 1;

                while (i <= numPersonas) {
                    let nombrePersona = prompt(`Nombre de la persona ${i}:`);
                    let opcionEntrada = prompt(`Elige la entrada para ${nombrePersona}:\n1. Regular: $5000\n2. VIP: $6000`);

                    let precioEntrada = (opcionEntrada === '2') ? 6000 : 5000;

                    alert(`${nombrePersona} tiene una entrada de $${precioEntrada} para el show de Metalica.😎`);

                    i++;
                }
            } else if (opcionShow === '2') {
                alert("El show de Bandana no está recomendado, ve a otro!!.👀");
            } else {
                alert("Opción no válida. Por favor, elige una opción correcta.");
            }
        }

        menuPrincipal();
    });


});


function hacerPedidoOnline() {
    let pedidoOnline = new PedidoOnline();
    pedidoOnline.hacerPedido();
    pedidoOnline.mostrarDetalle();
}

class PedidoOnline {
    constructor() {
        this.menu = [
            { nombre: 'Carne asada con Puré de papas', precio: 6400 },
            { nombre: 'Ravioles de Ricota con Salsa Bolognesa', precio: 3200 },
            { nombre: 'Empanadas', opciones: ['Empanada de Carne', 'Empanada de Pollo', 'Empanada de Verdura'], precio: 600 },
            { nombre: 'Pollo al Verdeo con papas', precio: 5100 },
            { nombre: 'Coca cola 1.5 lts.', precio: 2300 },
            { nombre: 'Cerveza 1 lts.', precio: 4300 },
            { nombre: 'Agua saborizada', precio: 1500 }
        ];
        this.pedido = [];
    }

    mostrarMenu() {
        let mensajeMenu = 'Bienvenido a nuestro servicio de Pedidos Online:\nPara finalizar tu pedido escribe 0.\n';
        mensajeMenu += 'MENU:\n';
        this.menu.forEach((item, index) => {
            if (item.opciones) {
                let opcionesString = '';
                item.opciones.forEach((opcion, idx) => {
                    opcionesString += `${String.fromCharCode(97 + idx)}. ${opcion}\n`; // Convertir a 'a', 'b', 'c', ...
                });
                mensajeMenu += `${index + 1}. ${item.nombre}:\n${opcionesString}\n`;
            } else {
                mensajeMenu += `${index + 1}. ${item.nombre}: $${item.precio}\n`;
            }
        });
    
        let opcion = parseInt(prompt(mensajeMenu + '\nSeleccione un plato o bebida (0 para terminar):'));
        return opcion;
    }
    
    
    hacerPedido() {
        let opcion;
        do {
            opcion = this.mostrarMenu();
            if (opcion >= 1 && opcion <= this.menu.length) {
                if (opcion === 3) {
                    let opcionEmpanada = prompt('Seleccione una opción para las empanadas:\n a. Carne\n b. Pollo\n c. Verdura');
                    opcionEmpanada = opcionEmpanada.toLowerCase(); 
                    if (opcionEmpanada === 'a' || opcionEmpanada === 'b' || opcionEmpanada === 'c') {
                        let empanadaSeleccionada = this.menu[opcion - 1].opciones[opcionEmpanada.charCodeAt(0) - 97]; 
                        let precioEmpanada = this.menu[opcion - 1].precio;
                        this.pedido.push({ nombre: empanadaSeleccionada, precio: precioEmpanada });
                    } else {
                        alert('Opción no válida.');
                    }
                } else {
                    this.pedido.push(this.menu[opcion - 1]);
                }
            } else if (opcion !== 0) {
                alert('Opción no válida.');
            }
        } while (opcion !== 0);
    }
    
    


    calcularTotal() {
        let total = 0;
        this.pedido.forEach(item => {
            if (item.precio) {
                total += item.precio;
            }
        });
        return total;
    }

    aplicarDescuento(total) {
        const DESCUENTO = 0.1;
        return total - (total * DESCUENTO);
    }

    mostrarDetalle() {
        let detalle = 'Detalle del Pedido:\n';
        this.pedido.forEach(item => {
            if (item.opciones) {
                detalle += `- ${item.nombre}: ${item.opciones.join(', ')} - $${item.precio}\n`;
            } else {
                detalle += `- ${item.nombre}: $${item.precio}\n`;
            }
        });
        const total = this.calcularTotal();
        const totalConDescuento = this.aplicarDescuento(total);
        detalle += `\nTotal a pagar: $${total}\n Total con descuento (10%): $${totalConDescuento}`;

        alert(detalle);
    }

}

let titulo = document.getElementById(`titulo`);
titulo.innerText = `jamon`
titulo.style.color = `red`




   
