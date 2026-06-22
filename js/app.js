/* =====================================
   AI GADGET MARKETPLACE V3
   Dashboard & Analytics
===================================== */

// ============================
// PRODUCTS
// ============================

const products = [
{
    id:101,
    name:"AI Smart Speaker",
    category:"Smart Home",
    price:4999,
    stock:20,
    image:"image/speaker.png"
},
{
    id:102,
    name:"Smart Watch Pro",
    category:"Wearables",
    price:8999,
    stock:15,
    image:"image/watch.png"
},
{
    id:103,
    name:"AI Security Camera",
    category:"Security",
    price:6999,
    stock:10,
    image:"image/camera.png"
},
{
    id:104,
    name:"Robot Vacuum Cleaner",
    category:"Robotics",
    price:14999,
    stock:8,
    image:"image/vaccum.png"
},
{
    id:105,
    name:"Smart Door Lock",
    category:"Smart Home",
    price:5999,
    stock:12,
    image:"image/doorlock.png"
}
];

// ============================
// CUSTOMERS
// ============================

const customers = [
{
    id:1,
    name:"Thivakar",
    email:"thiva@gmail.com",
    city:"Chennai"
},
{
    id:2,
    name:"Arun",
    email:"arun@gmail.com",
    city:"Bangalore"
},
{
    id:3,
    name:"Priya",
    email:"priya@gmail.com",
    city:"Mumbai"
},
{
    id:4,
    name:"Kavin",
    email:"kavin@gmail.com",
    city:"Coimbatore"
},
{
    id:5,
    name:"Meena",
    email:"meena@gmail.com",
    city:"Hyderabad"
}
];

// ============================
// ORDERS
// ============================

const orders = [
{
    orderId:1001,
    customer:"kavin",
    date:"2026-01-10",
    amount:4999
},
{
    orderId:1002,
    customer:"Arun",
    date:"2026-01-12",
    amount:8999
},
{
    orderId:1003,
    customer:"Priya",
    date:"2026-01-15",
    amount:6999
},
{
    orderId:1004,
    customer:"Hari",
    date:"2026-01-18",
    amount:14999
},
{
    orderId:1005,
    customer:"Meena",
    date:"2026-01-20",
    amount:5999
}
];

// ============================
// REVIEWS
// ============================

const reviews = [
{
    product:"AI Smart Speaker",
    rating:5
},
{
    product:"Smart Watch Pro",
    rating:4
},
{
    product:"AI Security Camera",
    rating:5
},
{
    product:"Robot Vacuum Cleaner",
    rating:4
},
{
    product:"Smart Door Lock",
    rating:5
}
];

// ============================
// SAVE TO LOCAL STORAGE
// ============================

localStorage.setItem(
    "products",
    JSON.stringify(products)
);

localStorage.setItem(
    "customers",
    JSON.stringify(customers)
);

localStorage.setItem(
    "orders",
    JSON.stringify(orders)
);

localStorage.setItem(
    "reviews",
    JSON.stringify(reviews)
);

// ============================
// DASHBOARD STATS
// ============================

function loadDashboardStats(){

    const totalProducts =
    document.getElementById(
        "totalProducts"
    );

    const totalCustomers =
    document.getElementById(
        "totalCustomers"
    );

    const totalOrders =
    document.getElementById(
        "totalOrders"
    );

    const totalRevenue =
    document.getElementById(
        "totalRevenue"
    );

    if(totalProducts){
        totalProducts.textContent =
        products.length;
    }

    if(totalCustomers){
        totalCustomers.textContent =
        customers.length;
    }

    if(totalOrders){
        totalOrders.textContent =
        orders.length;
    }

    const revenue =
    orders.reduce(
        (sum,order)=>
        sum + order.amount,
        0
    );

    if(totalRevenue){
        totalRevenue.textContent =
        "₹" + revenue.toLocaleString();
    }

}

// ============================
// REVENUE CHART
// ============================

function loadRevenueChart(){

    const canvas =
    document.getElementById(
        "revenueChart"
    );

    if(!canvas) return;

    new Chart(canvas,{

        type:"bar",

        data:{

            labels:[
                "1001",
                "1002",
                "1003",
                "1004",
                "1005"
            ],

            datasets:[{

                label:"Revenue",

                data:[
                    4999,
                    8999,
                    6999,
                    14999,
                    5999
                ],

                backgroundColor:[
                    "#06b6d4",
                    "#3b82f6",
                    "#8b5cf6",
                    "#22c55e",
                    "#f59e0b"
                ],

                borderRadius:10

            }]

        },

        options:{

            responsive:true,

            plugins:{
                legend:{
                    labels:{
                        color:"#ffffff"
                    }
                }
            },

            scales:{

                y:{
                    ticks:{
                        color:"#ffffff"
                    }
                },

                x:{
                    ticks:{
                        color:"#ffffff"
                    }
                }

            }

        }

    });

}

// ============================
// PRODUCT SEARCH
// ============================

function productSearch(){

    const search =
    document.getElementById(
        "searchInput"
    );

    if(!search) return;

    search.addEventListener(
        "keyup",
        function(){

        const value =
        this.value.toLowerCase();

        const cards =
        document.querySelectorAll(
            ".product-card"
        );

        cards.forEach(card=>{

            const name =
            card.querySelector("h3")
            .textContent
            .toLowerCase();

            card.style.display =
            name.includes(value)
            ? "block"
            : "none";

        });

    });

}

// ============================
// LOW STOCK ALERT
// ============================

function lowStockAlert(){

    const lowStock =
    products.filter(
        product =>
        product.stock < 10
    );

    console.log(
        "Low Stock Products",
        lowStock
    );

}

// ============================
// TOP PRODUCT
// ============================

function topProduct(){

    const expensive =
    [...products].sort(
        (a,b)=>
        b.price - a.price
    )[0];

    console.log(
        "Most Expensive Product:",
        expensive.name
    );

}

// ============================
// AVERAGE RATING
// ============================

function averageRating(){

    const total =
    reviews.reduce(
        (sum,item)=>
        sum + item.rating,
        0
    );

    const avg =
    total /
    reviews.length;

    console.log(
        "Average Rating:",
        avg.toFixed(1)
    );

}

// ============================
// INITIALIZE
// ============================

document.addEventListener(
    "DOMContentLoaded",
    ()=>{

    loadDashboardStats();

    loadRevenueChart();

    productSearch();

    lowStockAlert();

    topProduct();

    averageRating();

});