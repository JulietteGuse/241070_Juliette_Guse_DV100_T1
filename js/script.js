let body = document.querySelector('body');
let listProductHTML = document.querySelector('.listProduct');

let listProducts = [];

const = () => {
    fetch('flights.json')
    .then(response => response.json())
    .then(data => {
        productsList = data;
        addDataToHTML();
    })
}
