const coupons = [
  {
    name: '7AUGCOL',
    id: 'coupon-1',
    value: 15,
  },
  {
    name: 'REPX2',
    id: 'coupon-2',
    value: 25,
  },
  {
    name: 'FREQCLI',
    id: 'coupon-3',
    value: 32,
  },
];
//Inputs
const priceInput = document.getElementById('dis-price');
const discountInput = document.getElementById('dis-discount');
const couponsRadioBtns = document.querySelectorAll('input[type=radio]');

//Show/hide coupons
const couponContainer = document.querySelector('.coupon-container');

//Buttons
const addCouponBtn = document.getElementById('add-coupon');
const calculateBtn = document.getElementById('calculate');

//Outputs
const beforeSpans = document.querySelectorAll('.before-container span');
const beforeValue = document.querySelector('.before-value');
const afterValue = document.querySelector('.after-value');

//Modal
// const modal = document.querySelector('.modal-overlay');
// const closeBtn = document.querySelector('.close-btn');
// const modalTitle = document.querySelector('.modal-title');
// const modalMsg = document.querySelector('.modal-msg');

//Show/hide coupons and reset values
addCouponBtn.addEventListener('click', function () {
  if (!couponContainer.classList.contains('view-coupons')) {
    couponContainer.classList.add('view-coupons');
    addCouponBtn.innerText = `I don't have a coupon`;
    discountInput.value = '';
  } else {
    addCouponBtn.innerText = `Add a coupon`;
    couponContainer.classList.remove('view-coupons');
    couponsRadioBtns.forEach(function (coupon) {
      coupon.checked = false;
    });
  }
});

//Show current price dinamically
priceInput.addEventListener('input', function () {
  beforeValue.innerHTML = `${priceInput.value} USD`;
});

//Execute the calculation depending if the user type a discount or use a valid coupon
calculateBtn.addEventListener('click', function () {
  let price = parseInt(priceInput.value);
  let discount = parseInt(discountInput.value);
  if (!discountInput.value) {
    for (const coupon of couponsRadioBtns) {
      if (coupon.checked) {
        discount = coupons.find((c) => {
          return coupon.value === c.id;
        }).value;
      }
    }
  }
  if (price > 0 && discount > 0 && discount < 100) {
    beforeSpans.forEach(function (span) {
      span.classList.add('before');
    });
    afterValue.innerHTML = `${newPrice(price, discount)} USD`;
  } else {
    //Open modal window and show error msg
    modalMsg.innerHTML = 'Please introduce valid inputs';
    modalTitle.innerHTML = 'Error';
    modal.classList.add('open-modal');
  }
});

//Close modal window
// closeBtn.addEventListener('click', function () {
//   modal.classList.remove('open-modal');
// });

//Calculating new price (with 2 decimals)
function newPrice(price, discount) {
  const newPrice = price - (price * discount) / 100;
  return newPrice.toFixed(2);
}
