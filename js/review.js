async function loadReviews() {

    const response =
    await fetch(
        'http://localhost:5000/api/reviews'
    );

    const reviews =
    await response.json();

    const container =
    document.getElementById(
        'reviewContainer'
    );

    container.innerHTML = '';

    reviews.forEach(review => {

        container.innerHTML += `

        <div class="review-card">

            <h3>${review.product_name}</h3>

            <p>
                Customer:
                ${review.user_name}
            </p>

            <p>
                Rating:
                ⭐ ${review.rating}/5
            </p>

            <p>
                ${review.comments}
            </p>

        </div>

        `;

    });

}

loadReviews();