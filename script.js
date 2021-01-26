let slider = document.getElementById("pageviews");
let pageview = document.getElementById("pageview");
let pageviewPrice = document.getElementById("pageviewPrice");
let checkbox = document.getElementById("billing");
let isChecked = false;
let count = 2;
let prices = ["$8.00", "$12.00", "$16.00", "$24.00", "$36.00"];

slider.oninput = function () {
    let val = this.value;
    let color = "linear-gradient(90deg, hsl(174, 77%, 80%) " + val + "%, hsl(224, 65%, 95%) " + val + "%)";
    slider.style.background = color;

    let pageview_ = "";
    let pageviewPrice_ = "";
    if (val < 25) {
        count = 0;
        pageview_ = "10K";
        pageviewPrice_ = isChecked ? getDiscount(prices[count]) : prices[count];
    } else if (val >= 25 && val < 50) {
        count = 1;
        pageview_ = "50K";
        pageviewPrice_ = isChecked ? getDiscount(prices[count]) : prices[count];
    } else if (val >= 50 && val < 75) {
        count = 2;
        pageview_ = "100K";
        pageviewPrice_ = isChecked ? getDiscount(prices[count]) : prices[count];
    } else if (val >= 75 && val < 100) {
        count = 3;
        pageview_ = "500K";
        pageviewPrice_ = isChecked ? getDiscount(prices[count]) : prices[count];
    } else {
        count = 4;
        pageview_ = "1M";
        pageviewPrice_ = isChecked ? getDiscount(prices[count]) : prices[count];
    }
    pageview.innerHTML = pageview_;
    pageviewPrice.innerHTML = pageviewPrice_;
}

checkbox.onchange = function () {
    let price = pageviewPrice.innerHTML;
    let newPrice = "";
    if (this.checked) {
        isChecked = true;
        newPrice = getDiscount(price);
    } else {
        isChecked = false;
        newPrice = prices[count];
    }

    pageviewPrice.innerHTML = newPrice;
};

function getPrice(price) {
    return parseFloat(price.match(/\d+(\.\d+)?/g));
}

function getDiscount(price) {
    let price_ = getPrice(price);
    let discount = 25 / 100;
    let totalValue = price_ - (price_ * discount);
    return "$" + totalValue.toFixed(2);
}

// slider.addEventListener("mousemove", function () {
//     let val = slider.value;
//     let color = "linear-gradient(90deg, hsl(174, 77%, 80%) " + val + "%, hsl(224, 65%, 95%) " + val + "%)";
//     slider.style.background = color;
// });