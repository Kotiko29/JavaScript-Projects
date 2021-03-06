const select = document.querySelector('select')
const textarea = document.querySelector('textarea')
const button = document.querySelector('button')

const message = new SpeechSynthesisUtterance()

let voices = []

textarea.value = 'Мы — источник веселья и скорби рудник. Мы — вместилище скверны и чистый родник. Человек, словно в зеркале мир, — многолик. Он ничтожен — и он же безмерно велик!'

function getVoices() {
    voices = speechSynthesis.getVoices()

    voices.forEach(voice => {
        const option = document.createElement('option')

        option.value = voice.name
        option.textContent = `${voice.name}`

        select.appendChild(option)
    })
}

speechSynthesis.addEventListener('voiceschanged', getVoices)

select.addEventListener('change', e => {
    message.voice = voices.find(voice => voice.name === e.target.value)
})

button.addEventListener('click', () => {
    message.text = textarea.value.trim()
    if (message.text !== '') {

        speechSynthesis.speak(message)
    }
})

getVoices()
