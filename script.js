console.log('hello hitanshu ');
(function () {
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let final = document.querySelector('.btn-final');

    buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            let value = e.target.dataset.num;
            screen.value += value;
        })
    });

    final.addEventListener('click', function (e) {
        if (screen.value === '') {
            screen.value = `Don't Fool`;
        } else {
            screen.value = eval(screen.value);
        }
    });

    clear.addEventListener('click', function (e) {
        screen.value = '';
    });
    
})();