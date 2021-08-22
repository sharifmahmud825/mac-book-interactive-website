// cost update
const memoryInput = document.getElementById('memory-cost');
const storageInput = document.getElementById('storage-cost');
const deliveryInput = document.getElementById('delivery-cost');

// balance update 
const totalPrice = document.getElementById('total-price');
const bestPriceInput = document.getElementById('best-price');
const grandTotalPrice = document.getElementById('grand-total');



// Memory Cost and balance
function costOfMemory (type, price){

    const getButtonValue = document.getElementById(`${type}-btn`);
    const buttonValue = 1;
// memory balance update
    const memoryInput = document.getElementById('memory-cost');
    memoryInput.innerText = buttonValue * price;

};

// Storage cost and balance
function costOfStorage (type, price){
    const getButtonValue = document.getElementById(`${type}-btn`);
    const buttonValue = 1;
// memory balance update
    
    storageInput.innerText = buttonValue * price;
    
}
// delivery cost and balance
function costOfdelivery (type, price){
    const getButtonValue = document.getElementById(`${type}-btn`);
    const buttonValue = 1;
// memory balance update
    
    deliveryInput.innerText = buttonValue * price;
    
}
// promo code function

// update total
function updateTotal(){
    
   
    const bestPrice = Number(bestPriceInput.innerText);
    const memorycost = Number(memoryInput.innerText);
    const storageCost = Number(storageInput.innerText);
    const deliveryCost = Number(deliveryInput.innerText);
    

    let total= memorycost + storageCost + deliveryCost + bestPrice;

    totalPrice.innerText = total;
    // promo code
    const promoInput = document.getElementById('promo-input');
    const promoCode = promoInput.value;

    if(promoCode == 'stevekaku'){
        totalPrice.innerText = total-(total*20/100);
    }
    promoInput.value = '';
}



// Add event handler for memory buttons
document.getElementById('8gb-memory-btn').addEventListener('click', function(){
 
    costOfMemory ('8gb-memory', 0)
    updateTotal();
});
document.getElementById('256gb-memory-btn').addEventListener('click', function(){
    
    costOfMemory ('256gb-memory', 180)
    updateTotal();
});

// Add event handler for storage buttons
document.getElementById('256gb-storage-btn').addEventListener('click', function(){
    costOfStorage ('256gb-storage', 0)
    updateTotal();
});
document.getElementById('512gb-storage-btn').addEventListener('click', function(){
    costOfStorage ('512gb-storage', 100)
    updateTotal();
});
document.getElementById('1tb-storage-btn').addEventListener('click', function(){
    costOfStorage ('1tb-storage', 180)
    updateTotal();
});

//  add event handler for delivery button
document.getElementById('free-delivery-btn').addEventListener('click', function(){
    costOfdelivery ('free-delivery', 0);
    updateTotal();
})
document.getElementById('delivery-charge-btn').addEventListener('click', function(){
    costOfdelivery ('delivery-charge', 20)
    updateTotal();
})
// promo btn
document.getElementById('promo-btn').addEventListener('click', function(){
    
    updateTotal();
})