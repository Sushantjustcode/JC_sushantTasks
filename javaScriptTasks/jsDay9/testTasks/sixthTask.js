console.log("SIXTH TASK-----------------------" + "\n");

const cart = [
    {
        id: 1,
        name: "Laptop",
        category: "Electronics",
        price: 50000,
        quantity: 1,
    },
    {
        id: 2,
        name: "Mouse",
        category: "Electronics",
        price: 1500,
        quantity: 2,
    },
    {
        id: 3,
        name: "Keyboard",
        category: "Electronics",
        price: 3000,
        quantity: 1,
    },
    {
        id: 4,
        name: "Chair",
        category: "Furniture",
        price: 7000,
        quantity: 2,
    },
    {
        id: 5,
        name: "Table",
        category: "Furniture",
        price: 8000,
        quantity: 8,
    },
];

function shoppingCart(cart) {
    let totalProduct = 1;
    let totalQuantity = 0;
    let totalCartValue = 0;
    let mostExpensive = -Infinity;

    for (totalProduct in cart) {
        totalProduct++;
    };

    for (let i = 0; i < cart.length; i++) {
        totalQuantity += cart[i].quantity;
        totalCartValue += cart[i].price * cart[i].quantity;
        if (cart[i].price > mostExpensive) {
            mostExpensive = cart[i];
        }
    }

    // console.log(typeof totalProduct,typeof totalQuantity,typeof totalCartValue,typeof mostExpensive);

    let heroProducts = cart.filter(pro => {
        return pro.price * pro.quantity > 5000;
    });

    const groupedByCategory = cart.reduce((acc, product) => {
        if (!acc[product.category]) {
            acc[product.category] = [];
        }

        acc[product.category].push(product);

        return acc;
    }, {});

    let resultObject = {
        totalProduct: totalProduct,
        totalQuantity: totalQuantity,
        totalCartValue: totalCartValue,
        mostExpensive: mostExpensive,
        groupedByCategory: groupedByCategory,
        heroProducts: heroProducts,
        originalCart: cart
    };

    return resultObject;
}
let shoppingCartResult = shoppingCart(cart);
console.log(shoppingCartResult);

