const booksContainer = document.querySelector(".books");

const historyBooks = books.filter(book =>
    book.categories.includes ("history")
);

historyBooks.forEach((book, index) => {

    booksContainer.innerHTML += `
        <div class="book">
            <div class="img_container">
                <img src="${book.image}">
            </div>

            <div class="book_text">
                <h3>${book.title}</h3>
                <span>$${book.price}</span>

                <button
                    class="quick_add"
                    data-index="${index}">
                    Quick add
                </button>
            </div>
        </div>
    `;

});

/*---------CART--------*/
const buttons = document.querySelectorAll(".quick_add");

buttons.forEach(button => {
    button.addEventListener("click", () => {
    const bookIndex = button.dataset.index;

    cart.push(historyBooks[bookIndex]);

    localStorage.setItem("cart", JSON.stringify(cart));

    cartCount.textContent = cart.length;

    console.log(cart);
    });
});
