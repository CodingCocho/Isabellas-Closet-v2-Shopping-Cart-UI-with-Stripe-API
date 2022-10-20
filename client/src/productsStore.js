const productsArray = [
    {
        id: "price_1LuoHHHKUuRrh1PV6Mn8OlTT",
        image: "https://m.media-amazon.com/images/I/51hk8RWlc2L.jpg",
        title: "Blush",
        price: 8.99
    },
    {
        id: "price_1LuoJIHKUuRrh1PVy41kujIP",
        image: "https://i5.walmartimages.com/asr/c35260bd-cbea-4358-9852-0ed28fe87278.552858d2b3f9d657c53944d060d3c80b.jpeg",
        title: "Lipstick",
        price: 14.99
    },
    {
        id: "price_1LuoK5HKUuRrh1PVdJ8aImon",
        image: "https://www.kissusa.com/media/catalog/product/cache/baff2f04ff8ae6d26da83a37cac7c76a/k/l/klcl02-02-package.png",
        title: "Lashes",
        price: 25.99
    }
]

/*
    Find a product in the data
    @param id the id of the product we are searching
    @return object a product 
    */
function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData === undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}

export {productsArray, getProductData};