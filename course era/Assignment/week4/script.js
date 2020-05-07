(function (){
  var name=["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  
  for(i=0;i<name.length;i++) {
    var firstLetter = name[i].charAt(0).toLowerCase();
    if (firstLetter == 'j') {
       byeSpeaker.speak(name[i]);
    } else {
       helloSpeaker.speak(name[i]);
    }
  }
})();
