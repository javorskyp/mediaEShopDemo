const currentProducts = products;
const productSection = document.querySelector(".products")

const renderProducts = (items) => {
    for (let i = 0; i < items.length; i++) {

const newProducts = document.createElement('div');
        newProducts.className = `product-item ${items[i].sale ? 'on-sale' : ""}`
    }
}




document.onload(renderProducts) = currentProducts;