async function loadProducts() {

    const response =
    await fetch(
        'http://localhost:5000/api/products'
    );

    const products =
    await response.json();

    const container =
    document.getElementById(
        'productContainer'
    );

    container.innerHTML = '';

    products.forEach(product => {

        let image = "image/speaker.png";

        if(product.product_name.includes("Watch"))
            image = "image/watch.png";

        if(product.product_name.includes("Camera"))
            image = "image/camera.png";

        if(product.product_name.includes("Vacuum"))
            image = "image/vaccum.png";

        if(product.product_name.includes("Door"))
            image = "image/doorlock.png";

        container.innerHTML += `

        <div class="product-card">

            <img src="${image}" alt="${product.product_name}">

            <h3>${product.product_name}</h3>

            <p>
                <strong>Category:</strong>
                ${product.category_name}
            </p>

            <p>
                <strong>Price:</strong>
                ₹${product.price}
            </p>

            <p>
                <strong>Stock:</strong>
                ${product.stock}
            </p>

            <button class="btn">
                View Details
            </button>

        </div>

        `;

    });

}

loadProducts();