async function loadOrders() {

    const response =
    await fetch(
        'http://localhost:5000/api/orders'
    );

    const data =
    await response.json();

    const table =
    document.getElementById(
        'ordersTable'
    );

    table.innerHTML = '';

    data.forEach(order => {

        table.innerHTML += `
        <tr>
            <td>${order.order_id}</td>
            <td>${order.user_name}</td>
            <td>${new Date(order.order_date).toLocaleDateString()}</td>
            <td>₹${order.total_amount}</td>
            <td>
                <span class="status delivered">
                    Delivered
                </span>
            </td>
        </tr>
        `;

    });

}

loadOrders();