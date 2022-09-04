    const msg = document.querySelector('.message');
    const scoreDisplay = document.querySelector('#score');
    const scoreMsg = document.querySelector('.score');
    const startBtn = document.querySelector('.start');
    const grid = document.querySelector('.grid');
    const [up, right, play, pause, pBtn, down, left, controller, controllerToggle] = [
        document.querySelector('.triangle-up'),
        document.querySelector('.triangle-right'),
        document.querySelector('.play-btn'),
        document.querySelector('.pause-btn'),
        document.querySelector('.p-btn'),
        document.querySelector('.triangle-down'),
        document.querySelector('.triangle-left'),
        document.querySelector('.mobile-controller'),
        document.querySelector('.mobile-controller-visibility-toggle')
    ]
    
    let isAlive;
    let isPlaying = false;
    let currentSnake = [2,1,0];
    let tail = currentSnake.pop();
    let squares = [];
    let direction = 1;
    const width = 10;
    let timerId;
    let appleIndex;
    let score = 0;
    let intervalTime;
    let speedIncrease = 0.975;
    let activateTimer = false;
    scoreMsg.style.color = 'rgba(0,0,0,0)';
    function playGame(){
            timerId = setTimeout(() => {
                const movePromise = new Promise(resolve => resolve(move()));
                movePromise.then(() => playGame());
            }, intervalTime)
        }

    function createGrid() {
        for (let i = 0; i < 100; i++){
            const square = document.createElement('div');
            square.classList.add('square');
            grid.appendChild(square);
            squares.push(square);
        }
    }
    createGrid()

    function hitWall(){
        isPlaying = false;
        isAlive = false;
        clearTimeout(timerId);
        msg.innerHTML = "Snake hit a wall.<br> Wanna play again?";
        msg.classList.add('message-pound');
    }

    function hitSelf(){
        isPlaying = false;
        isAlive = false;
        clearTimeout(timerId);
        msg.innerHTML = "Snake hit itself. <br> Wanna play again?";
        msg.classList.add('message-pound');
    }

    function startGame(){
        msg.classList.remove('message-pound');
        scoreMsg.style.color = '';
        squares.forEach(el => {
            if(el.classList.contains('apple'))el.classList.remove('apple');
        });
        msg.innerHTML = ''
        clearTimeout(timerId);
        currentSnake.forEach(el => {
            squares[el].classList.remove('snake');
        });
        currentSnake = [2,1,0];
        currentSnake.forEach(el => {
            squares[el].classList.add('snake');
        });
        isAlive = true;
        isPlaying = true;
        direction = 1;
        score = 0;
        scoreDisplay.textContent = score;
        generateApple();
        intervalTime = 1000;
    playGame()
    }

    function move(){
        if(
        (currentSnake[0] % width === 0 && direction === -1) ||
        (currentSnake[0] % width === 9 && direction === 1) ||
        (currentSnake[0] - width < 0 && direction === -width) ||
        (currentSnake[0] + width >= 100 && direction === +width)){
            hitWall();
        } else if(squares[currentSnake[0] + direction].classList.contains('snake')){
            hitSelf();
        }
        if(isAlive){
            activateTimer = true;
            isPlaying = true;
            currentSnake.forEach(index => {
                squares[index].classList.remove('snake');
            })
            currentSnake.pop();
            currentSnake.unshift(currentSnake[0] + direction);  
            currentSnake.forEach(index => {
                squares[index].classList.add('snake');
            })
            if(squares[currentSnake[0]].classList.contains('apple')){
                squares[currentSnake[0]].classList.remove('apple');
                currentSnake.push(tail);
                squares[currentSnake[tail]].classList.add('snake');
                score++;
                scoreDisplay.textContent = score;
                intervalTime *= speedIncrease;
                scorePound()
                generateApple();
        }
    }
    }
    function scorePound(){
        scoreMsg.classList.add('score-pound');
                setTimeout(()=>{
                    scoreMsg.classList.remove('score-pound')
                },1001);
    }
    function generateApple(){
        /* appleIndex cannot equal elem from currentSnake

        appleIndex can equal any other index of squares*/
        function generateAppleIndex(){
            appleIndex = Math.floor(Math.random() * squares.length);
            if(currentSnake.indexOf(appleIndex) !== -1){
                return generateAppleIndex();
            } else if (currentSnake.indexOf(appleIndex) === -1){
                return appleIndex;
            }
        }
            squares[generateAppleIndex()].classList.add("apple");
    }

    // 39 is right arrow
    // 38 is for the up arrow
    // 37 is for the left arrow
    // 40 is for the down arrow
    // 32 is for the spacebar

    function control(e){
        e.preventDefault()
        if(e.keyCode === 32 && controllerToggle.style.display !== 'none' && play.style.display !== 'none' && !isPlaying){
        play.style.display = 'none';
        pause.style.display = 'inline';
        }
        if(e.keyCode === 32 && controllerToggle.style.display !== 'none' && play.style.display === 'none' && isPlaying){
        play.style.display = 'inline';
        pause.style.display = 'none';
        }
        if (e.keyCode === 32 && activateTimer){
                clearTimeout(timerId);
                activateTimer = false;
                isPlaying = false;
        } else if(e.keyCode === 32 && !activateTimer){
                activateTimer = true;
                playGame();
                isPlaying = true;
        } else if (e.keyCode === 39){
            direction = 1;
        } else if (e.keyCode === 38){
            direction = -width;
        } else if (e.keyCode === 37){
            direction = -1;
        } else if (e.keyCode === 40){
            direction = +width;
        }
    }
    // if game is playing and spacebar is pressed make pause btn invisible and play btn visible

    // update mobile controller play/pause btn to match isPlaying boolean 

    /* Keyboard events need to change visible play/pause btn
        When toggleController is clicked configure play/pause btn visibility.

        Problem: keyboard presses don't update play/pause btn state
        Solution?: make keyboard presses update play/pause btn state
        Question: Is play/pause btn state dependant on display property?
    */
    function mobileControl(evt){
            if(evt.target === play && !isPlaying){
                playGame();
                play.style.display = 'none';
                pause.style.display = 'inline';
                isPlaying = true;
                activateTimer = true;
            }
            if(evt.target === pause  && isPlaying){
                clearTimeout(timerId);
                pause.style.display = 'none';
                play.style.display = 'inline';
                isPlaying = false;
                activateTimer = false;
            }
        if(evt.target === up) direction = -width;
        if(evt.target === right) direction = 1;
        if(evt.target === down) direction = +width;
        if(evt.target === left) direction = -1;
        if(evt.target === controllerToggle && !controller.classList.contains("mobile-controller-on")) {
            controller.classList.add("mobile-controller-on");
            controllerToggle.textContent = "turn off mobile controller";
        } else if(evt.target === controllerToggle && controller.classList.contains("mobile-controller-on")){
            controller.classList.remove("mobile-controller-on");
            controllerToggle.textContent = "turn on mobile controller";
        }
    }
    document.addEventListener('click', mobileControl, {passive: true});
    document.addEventListener('keydown', control);
    startBtn.addEventListener('click', startGame, {passive: true});
