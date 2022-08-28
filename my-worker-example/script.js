    const [countBtn, count, numInput] = 
    [document.querySelector('.count-btn'),
    document.querySelector('.current-count'),
    document.querySelector('.num')];

    if(window.Worker){
        const worker = new Worker('worker.js');
        function countHigh(){
                const numVal = numInput.value
                worker.postMessage({
                    command: 'count',
                    numVal
                })
        }
        countBtn.addEventListener("click", () => countHigh())
        worker.addEventListener('message', (message) => {
            count.textContent = `${message.data} counted.`
        })
    } else {
        count.textContent = "Your browser doesn't support web workers."
    }