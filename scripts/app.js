// set the scrolling function to the banner section to paribahan section
const scrollToParibahan = () => {
  const paribahanSection = getElementById("paribahan-section");
  paribahanSection.scrollIntoView({ behavior: "smooth" });
};

const allSeats = document.getElementsByClassName("seat");
let seatClicked = 0;
let clickedList = [];
for (const seat of allSeats) {
  seat.addEventListener("click", function (event) {
    // seatClicked += 1;
    
    const element = event.target;
    if(!clickedList.includes(element.innerText)){
      clickedList.push(element.innerText)
      seatClicked += 1;
      if (seatClicked <= 4) {
        const selectedSeat = event.target;
        clickedList.push(selectedSeat.innerText)
        console.log(clickedList);
  
        selectedSeat.classList.add("bg-green-primary", "text-white");
        const seatName = selectedSeat.innerText;
  
          //  creating newElement to set on the left side
          // creating new element for ticket seat name
          const p1 = document.createElement('p')
          // set the selected  seat name to the p1;
          p1.innerText  = seatName;
  
          // creating new element for ticket class name
          const p2 = document.createElement('p');
          p2.innerText = 'Economy';
  
          // creating new element for ticket price
          const p3 = document.createElement('p');
          p3.innerText = 550
  
          // create a div for append created element
          const div = document.createElement('div');
          div.classList.add('flex', 'items-center', 'justify-between', 'text-[#030712]/60', 'font-inter', 'mb-3')
          div.appendChild(p1)
          div.appendChild(p2)
          div.appendChild(p3)
  
          // target the container to append div
          const container = getElementById('container');
          container.appendChild(div);
  
          // update the selected seat
          updateSelectedSeat()
  
          // update the total seat
          updateTheTotalSeats()
          
          // update Total Price
          updateThePrice('total-price')
  
          // update the grand total price
          updateThePrice('grand-total')
  
      }
    }
  });
}
console.log(clickedList);
// update selected seat
const updateSelectedSeat =() => {
  const previousSelectedSeat = getElementInnerTextValue('seat-selected')
  const newSelectedSeat = previousSelectedSeat + 1;
  setInnerTextById('seat-selected', newSelectedSeat)
}

// update the total seats count
const updateTheTotalSeats = () => {
  const totalSeats = getElementInnerTextValue('seat-count');
  const newTotalSeats = totalSeats - 1;
  setInnerTextById('seat-count', newTotalSeats);
}

const updateThePrice = (elementId) => {
  const previousTotalPrice = getElementInnerTextValue(elementId);
  const newTotalPrice = previousTotalPrice + 550;
  setInnerTextById(elementId, newTotalPrice)
}



// addEvenListener to the input for using cuppon
document.getElementById('input-field').addEventListener('keyup', function(event){
  const cupponCode = event.target.value;
  const seatSelected =  getElementInnerTextValue('seat-selected');
  console.log(seatSelected)
  const cupponApplyBtn = getElementById('cuppon-apply-btn');
  if(cupponCode === 'NEW15' || cupponCode === 'Couple 20' && seatSelected === 4){
    cupponApplyBtn.removeAttribute('disabled')
  }
  else {
    cupponApplyBtn.setAttribute('disabled', '')
  }
})


const grandTotalCalculate = () => {
  const inputField = getElementById('input-field');
  const cuppon = inputField.value;
  
  // const find the grand total value
  const grandTotal = getElementInnerTextValue('grand-total');
  const discountField = getElementById('discount-element');
  if(cuppon === 'NEW15'){
    const discount = grandTotal * (15 / 100);
    const newGrandTotal = grandTotal - discount;
    setInnerTextById('grand-total', newGrandTotal)
    setInnerTextById('discount-price', discount);


    // hide the cuppon input field
    const cupponField = getElementById('cuppon-apply-field');
    cupponField.classList.add('hidden')
  }
  else if(cuppon === 'Couple 20'){
    const discount = grandTotal * (20 / 100);
    const newGrandTotal = grandTotal - discount;
    setInnerTextById('grand-total', newGrandTotal)
    setInnerTextById('discount-price', discount);

    // hide the cuppon input field
    const cupponField = getElementById('cuppon-apply-field');
    cupponField.classList.add('hidden')
  }
  discountField.classList.remove('hidden')
}

// remove the disabled attribute from the Next btn
const nextBtn = getElementById('next-btn')
const mobileNumberInputField = getElementById('phn-input');
mobileNumberInputField.addEventListener('keyup', function(event){
  const phoneNumber = event.target.value;
  const seatSelected =  getElementInnerTextValue('seat-selected');
  
  if(seatSelected >= 1 && phoneNumber.length >= 11){
    nextBtn.removeAttribute('disabled')
  }
  else {
    nextBtn.setAttribute('disabled', '')
  }
})

// relod the page by clicking continue btn
const continueBtn = getElementById('continue-btn');
continueBtn.addEventListener('click', function(){
  location.reload();
})