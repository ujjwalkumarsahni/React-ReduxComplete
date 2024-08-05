const firstBasket = document.querySelector(".basket-1 span");
const secondBasket = document.querySelector(".basket-2 span");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const totalApples = 10;
let secondBasketCount = 0;
let firstBasketCount = totalApples - secondBasketCount;

firstBasket.innerText = firstBasketCount;
secondBasket.innerText = secondBasketCount;

rightArrow.addEventListener('click', () => {
    if (firstBasketCount > 0) {
        firstBasketCount--
        firstBasket.innerText = firstBasketCount;
        secondBasketCount++
        secondBasket.innerText = secondBasketCount;
    }
})
leftArrow.addEventListener('click', () => {
    if (secondBasketCount > 0) {
        firstBasketCount++
        firstBasket.innerText = firstBasketCount;
        secondBasketCount--
        secondBasket.innerText = secondBasketCount;
    }
})