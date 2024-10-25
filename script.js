let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=2
    window.speechSynthesis.speak(text_speak)
}
function wishme(){
    let day=new Date()
    let hours=day.getHours()
    if (hours>=0 && hours<12){
        speak(" good morning boss")
    }
    else if(hours>=12 && hours<16){
        speak("good afternoon boss")
    }
    else{
        speak("good evening boss")
    }
}
// window.addEventListener('load', ()=>{
//     wishme()
// })
let SpeechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition
let recognition=new SpeechRecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText = transcript
    takeCommand(transcript.toLowerCase())
}
btn.addEventListener("click", ()=>{
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
})
function takeCommand(message){
    btn.style.display="flex"
    voice.style.display="none"

    if(message.includes("hey")||message.includes("hello")){
        speak('yes boss')
    }
    else if(message.includes("who are you")||message.includes("introduce yourself")){
        speak(' myself jarvis I am very smart virtual assistant, created by shresth sir, If you have any query just ask')
    }
    else if(message.includes("open youtube")){
        speak("opening youtube")
        window.open("https://www.youtube.com/")
    }
    else if(message.includes("open google")){
        speak("opening google")
        window.open("https://www.google.com/")
    }
    else{
        speak(`this is what i found on internet regarding${message}`)
        window.open(`https://www.google.com/search?q=${message}` )
    }
}