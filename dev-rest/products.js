var id = 0;
function nextId() {
    id++;
    return 'p' + id;
}

function Product(name, manufacturer, price) {
    this.id = nextId();
    this.name = name;
    this.manufacturer = manufacturer;
    this.price = price;
}

var products = [
    new Product('iPhone 7', 'Apple', 6800),
    new Product('ThinkPad T440', 'Lenovo', 5999),
    new Product('LBP2900', 'Canon', 1099)
];

var fn_get = () => {
    return products;
}

var fn_get_by_id = (id) => {
    var i;
    for (i = 0; i < products.length; i++) {
        if (products[i].id === id) {
            return products[i];
        }
    }
    return null;
}

var fn_create = (name, manufacturer, price) => {
    var p = new Product(name, manufacturer, price);
    products.push(p);
    return p;
}

var fn_delete = (id) => {
    var index = -1;
    var i;
    for (i = 0; i < products.length; i++) {
        if (products[i].id === id) {
            index = i;
            break;
        }
    }

    if (index > 0) {
        return products.splice(index, 1)[0];
    }
    return null;
}

module.exports = {
    getProducts: fn_get,
    getProduct: fn_get_by_id,
    createProduct: fn_create,
    deleteProduct: fn_delete
}