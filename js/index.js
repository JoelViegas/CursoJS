
// averigue el codigo para inicializar por medio de un ID
document.addEventListener('DOMContentLoaded', function () {
    let inicio = document.getElementById('inicio');

    inicio.addEventListener('click', function () {  //Aca empeiza el programa
        alert('Bienvenido al programa de jemplo de JavaScript de CoderHouse.');

        function menuPrincipal() {  //menu principal
            let opcion;

            do {
                opcion = prompt("Elige una opción:\n1. Usar calculadora\n2. Reservar mesa en un restaurante\n3. Comprar entradas");

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
                        case 'R2':
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
                    // Si es menor de edad, no puede elegir cervecita
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
