const spanValorTotal = document.querySelector(".valor-total");

const spanPrecioInicial = document.querySelector(".precio-inicial");
const precioInicial = spanPrecioInicial.innerHTML;
const precio = Number(precioInicial);

const botonIncrementar = document.getElementById("btnincrementar");
const botonDecrementar = document.getElementById("btndecrementar");
const spanCantidad = document.getElementById("cantidad");

let cantidad = spanCantidad.innerHTML;

const formatMXN = new Intl.NumberFormat("es-MX", {
  style: "currency",
  currency: "MXN",
});

botonIncrementar.onclick = function () {
  cantidad++;
  spanCantidad.innerHTML = cantidad;
  let total = cantidad * precio;
  let formatTotal = formatMXN.format(total);
  spanValorTotal.innerHTML = formatTotal;
};

botonDecrementar.onclick = function () {
  if (cantidad > 0) {
    cantidad--;
    spanCantidad.innerHTML = cantidad;
    let total = cantidad * precio;
    let formatTotal = formatMXN.format(total);
    spanValorTotal.innerHTML = formatTotal;
  }
};
