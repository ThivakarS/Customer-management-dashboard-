async function loadCustomers() {

    const response =
    await fetch(
        'http://localhost:5000/api/customers'
    );

    const customers =
    await response.json();

    const table =
    document.getElementById(
        'customersTable'
    );

    table.innerHTML = '';

    customers.forEach(customer => {

        table.innerHTML += `
        <tr>
            <td>${customer.user_id}</td>
            <td>${customer.user_name}</td>
            <td>${customer.email}</td>
            <td>${customer.city}</td>
        </tr>
        `;

    });

}

loadCustomers();