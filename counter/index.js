const increase_button = document.querySelector('#increase')
const decrease_button = document.querySelector('#decrease')
const inputField = document.querySelector('#field')
const show_number = document.querySelector('#show')
const reset_button = document.querySelector('#reset')

class Count {
    constructor(event) {
        this.event = event;
    }   

    increase() {
        increase_button.addEventListener(this.event, () => {
            let showNumber = show_number.innerHTML;
            let inputNumber = inputField.value;
            show_number.innerHTML = Number(showNumber) + Number(inputNumber);
        })
    }

    decrease() {
        decrease_button.addEventListener(this.event, () => {
            let showNumber = show_number.innerHTML;
            let inputNumber = inputField.value;
            show_number.innerHTML = Number(showNumber) - Number(inputNumber);
        })
    }

    reset() {
        reset_button.addEventListener(this.event, () => {
            show_number.innerHTML = 0;
            inputField.value = "";  
        })
    }
}
const number = new Count('click')
number.reset();
number.increase();
number.decrease();
