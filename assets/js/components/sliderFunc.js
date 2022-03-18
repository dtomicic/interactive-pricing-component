const SLIDER = document.getElementById('slider');
const VIEWS = document.getElementById('pageViews');
const COST = document.getElementsByClassName('main__cardTopHeaderMoneyNumber');
const CHECKBOX = document.getElementById('checkbox');
const NUMBERS = [8.00, 12.00, 16.00, 24.00, 36.00];
const VIEWCOUNT = [10, 50, 100, 500, 1];
let CURRENT = 16.00;
let CURRENTDISCOUNT = 16.00;


SLIDER.addEventListener('input', () => {
    sliderValue();
    checkDiscount();
})

CHECKBOX.addEventListener('click', () => {
    checkDiscount();
})


// Functions


const sliderValue = () => {
    if (SLIDER.value <= 20) {
        setCostViews(0, 0);
    }
    else if (SLIDER.value > 20 && SLIDER.value < 40){
        setCostViews(1, 1);
    }
    else if (SLIDER.value > 40 && SLIDER.value < 60){
        setCostViews(2, 2);
    }
    else if (SLIDER.value > 60 && SLIDER.value < 80){
        setCostViews(3, 3);
    }
    else if (SLIDER.value > 80){
        setCostViews(4, 4);
    }
}

const checkDiscount = () => {
    if (CHECKBOX.checked) {
        CURRENTDISCOUNT = (CURRENT * 0.25).toFixed(2);
        document.querySelectorAll('.main__cardTopHeaderMoneyNumber')
        .forEach(element => {
            element.innerHTML = "$" + `${CURRENTDISCOUNT}`;
        })
    }
    else {
    document.querySelectorAll('.main__cardTopHeaderMoneyNumber')
    .forEach(element => {
        element.innerHTML = "$" + `${CURRENT}`;
    })
    }
}

const setCostViews = (i, n) => {
    VIEWS.innerHTML = `${VIEWCOUNT[n]}` + "K PAGEVIEWS";
    document.querySelectorAll('.main__cardTopHeaderMoneyNumber')
        .forEach(element => {
            CURRENT = NUMBERS[i].toFixed(2);
            if (CHECKBOX.checked){
                element.innerHTML = "$" + `${CURRENTDISCOUNT}`;
            }
            else {
                element.innerHTML = "$" + `${CURRENT}`;

            }
        })
}