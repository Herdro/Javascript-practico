function calcDescuento(precio, descuento) {
    return (precio * (100 - descuento)/100)
}


function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const inputDiscount = document.getElementById("InputDiscount");

    const priceValue = inputPrice.value;
    const DiscountValue = inputDiscount.value;

    const precioConDescuento = calcDescuento(priceValue, DiscountValue);
    const ResultP = document.getElementById("ResultP");
    ResultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}
const cupones = [
    {nombre: "JuanDC_es_Batman",
    descuento: 20},
    {nombre: "pero_no_le_digas_a_nadie",
    descuento: 30},
    {nombre: "es_un_secreto",
    descuento: 50}
];

function onClickButtonPriceDiscountCupon(){
    const inputPrice = document.getElementById("InputPrice");
    const inputCupon = document.getElementById("InputCupon");

    const priceValue = inputPrice.value;
    const CuponValue = inputCupon.value;

    if (cupones.includes.call(nombre, CuponValue)){
    const DiscountValue = cupones.find( descuento => descuento.nombre === CuponValue);
    
    const precioConDescuento = calcDescuento(priceValue, DiscountValue.descuento);
    const ResultP = document.getElementById("ResultP");
    ResultP.innerText = "El precio con descuento son: $" + precioConDescuento;
    } else {
        const ResultP = document.getElementById("ResultP");
        ResultP.innerText = "Cupon " + CuponValue + " no valido";
    }
}