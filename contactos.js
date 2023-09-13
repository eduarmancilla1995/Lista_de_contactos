let listadecontactos = [];

let contacto1 = { nombrecompleto: "eduar mancilla" };
let contacto2 = { nombrecompleto: "miguel ojara" };
let contacto3 = { nombrecompleto: "hugo williams" };
let contacto4 = { nombrecompleto: "juli valeria" };

listadecontactos.push(contacto1);
listadecontactos.push(contacto2);
listadecontactos.push(contacto3);
listadecontactos.push(contacto4);

console.log(listadecontactos[0].nombrecompleto);
console.log(listadecontactos[1].nombrecompleto);
console.log(listadecontactos[2].nombrecompleto);
console.log(listadecontactos[3].nombrecompleto);

function agregarcontacto(nombre_nuevo) {
  const contacto = { nombrecompleto: nombre_nuevo };
  listadecontactos.push(contacto);
}

agregarcontacto("enrrique gomez");

function eliminarcontactospornombre(nombrecompleto) {
  for (let i = 0; i < listadecontactos.length; i++) {
    if (listadecontactos[i].nombrecompleto === nombrecompleto) {
      listadecontactos.splice(i, 1);
      return;
    }
  }
}

function imprimircontactos() {
  console.log("Lista de Contactos:");
  listadecontactos.forEach(contacto => {
    console.log(contacto.nombrecompleto);
    console.log("--------------");
  });
}

// Llama a las funciones
imprimircontactos();
eliminarcontactospornombre("miguel ojara");
imprimircontactos();