function escopoCalculadora() {
    function addToInput(value) {
        const input = document.querySelector('input')
        input.value += value
    }

    function calculateResult() {
        const input = document.querySelector('input')
        try {
            input.value = eval(input.value)
        } catch (e) {
            input.value = 'Erro'
        }
    }

    function clearScreen() {
        const input = document.querySelector('input')
        input.value = ''
    }

    document.querySelectorAll('.button').forEach(button => {
        button.addEventListener('click', function () {
            const value = this.textContent
            if (value === '=') {
                calculateResult()
            }
            else {
                addToInput(value)
            }
        })
    })

    document.addEventListener('keydown', function (event) {
        let buttonId;

        if (event.key >= 0 && event.key <= 9) {
            buttonId = event.key
        }
        else {
            switch (event.key) {
                case '.':
                    buttonId = '.'
                    break

                case '=':
                case 'Enter':
                    calculateResult()
                    return

                case '+':
                    buttonId = '+'
                    break

                case '-':
                    buttonId = '-'
                    break

                case '*':
                    buttonId = '*'
                    break

                case '/':
                    buttonId = '/'
                    break
                case 'Backspace':
                    clearScreen()
                    return

                default:
                    return
            }
        }

        if (buttonId) {
            addToInput(buttonId)
        }
    })
}
escopoCalculadora()