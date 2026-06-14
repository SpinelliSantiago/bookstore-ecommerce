const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
console.log(savedCart);
const cartBooks = document.querySelector(".cart_books");

savedCart.forEach((book, index) => {

    cartBooks.innerHTML += `

        <div class="book_info">
            <div class="book_img">
                <img src="${book.image}">
            </div>

            <div class="book_description">
                <h3>${book.title}</h3>
                <div class="book_right">
                    <span>$${book.price}</span>
                    <p class="remove_btn" data-index="${index}">
                        Remove
                    </p>
                </div>
            </div>
        </div>
    `;
});

const removeButtons = document.querySelectorAll(".remove_btn");

removeButtons.forEach(removeButton => {
    removeButton.addEventListener("click", () => {

        const index = removeButton.dataset.index;

        savedCart.splice(index, 1);

        localStorage.setItem("cart", JSON.stringify(savedCart));

        location.reload();
    });
});

const cartTotal = document.querySelector(".cart_total");
let total = 0;

savedCart.forEach(book => { 
    total += Number(book.price);
});
cartTotal.textContent = `$${total}`;