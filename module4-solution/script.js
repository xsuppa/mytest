var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for (var name in names) {
    if (names[name].toLowerCase().charAt(0) != 'j'){
        helloSpeaker.speak(names[name]);
    }
    else{
        byeSpeaker.speak(names[name]);
    }
}

