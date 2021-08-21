// Add event handler for memory buttons
document.getElementById('8gb-memory-btn').addEventListener('click', function(){

    const getValue = document.getElementById('8gb-memory-btn');
    const value = 1;

    const memoryInput = document.getElementById('memory-cost');
    memoryInput.innerText = value * 0;
    
    
    
})
document.getElementById('256gb-memory-btn').addEventListener('click', function(){
    const getValue = document.getElementById('8gb-memory-btn');
    const value = 1;

    const memoryInput = document.getElementById('memory-cost');
    memoryInput.innerText = value * 180;
})