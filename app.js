let inter = document.getElementById('interval-div');

let buttonStart = document.getElementById('interval-start');
let buttonStop = document.getElementById('interval-stop');

let max = 0;
let timeoutRecurve = function () {

    let iDoId = setTimeout(function () {
        if(max <= 600){
            inter.innerHTML = max.toString() + " ";
            max += 60;
            timeoutRecurve();
        }
    }, 1000);

    buttonStop.addEventListener('click', function () {
        clearTimeout(iDoId);
    })
};

buttonStart.addEventListener('click', function () {
    timeoutRecurve();
});

