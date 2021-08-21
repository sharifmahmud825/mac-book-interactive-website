
function costOfMemory (type, price){

    const getButtonValue = document.getElementById(`${type}-btn`);
    const buttonValue = 1;
// memory balance update
    const memoryInput = document.getElementById('memory-cost');
    memoryInput.innerText = buttonValue * price;
}



// Add event handler for memory buttons
document.getElementById('8gb-memory-btn').addEventListener('click', function(){
 
    costOfMemory ('8gb-memory', 0); 
})
document.getElementById('256gb-memory-btn').addEventListener('click', function(){
    
    costOfMemory ('8gb-memory', 180);
})