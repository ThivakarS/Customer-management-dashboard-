async function loadDashboard() {

    const response =
    await fetch(
        'http://localhost:5000/api/dashboard'
    );

    const data =
    await response.json();

    document.getElementById(
        'totalProducts'
    ).innerText =
    data.totalProducts;

    document.getElementById(
        'totalCustomers'
    ).innerText =
    data.totalCustomers;

    document.getElementById(
        'totalOrders'
    ).innerText =
    data.totalOrders;

    document.getElementById(
        'totalRevenue'
    ).innerText =
    '₹' + Number(
        data.revenue
    ).toLocaleString();

}

loadDashboard();