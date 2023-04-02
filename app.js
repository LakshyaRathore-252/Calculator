let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

// Making the Arrays of buttons
let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        console.log(e.target.innerHTML)
        if (e.target.innerHTML == '=') {
            console.log(string);
            string = eval(string);
            input.value = string;
        }

        else if (e.target.innerHTML == 'C') {
            string = "";
            input.value = string;
        }
        else if (e.target.innerHTML == 'D') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }
        else {
            string += e.target.innerHTML;
            input.value = string;
        }

    })
})
