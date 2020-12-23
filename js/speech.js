var synth = window.speechSynthesis;

function speak(text, enable = true, end_func = null){
    var ended = F
    
    if (synth.speaking) {
      speechSynthesis.cancel()
        //console.error('speechSynthesis.speaking');
        //return;
    }

    var utterThis = new SpeechSynthesisUtterance(text);

    var onend = function (event) {
        ended = T
        if (enable) {
          console.log(enable);
          $(enable).css('display', "block"); // use the next argument to give the id of the next button
          $(enable).css('pointer-events', 'auto'); // use the next argument to give the id of the next button
          $(enable).prop('disabled', false); // use the next argument to give the id of the next button
        }

        if (end_func){
          end_func() // use the end_func argument to run a function on end
        }
    }
    
    utterThis.onend = onend()
    
    setTimeout(
        function(){
            if(!ended){
                console.error('Speech synthesis failed to end properly, backup procedure called.');
                onend()
            }                
        }, 30000)
    

    utterThis.onerror = function (event) {
        console.error('SpeechSynthesisUtterance.onerror '+event.error);

    }

    utterThis.voice = synth.getVoices().filter(voice => voice.name == "Google UK English Female")[0];
    utterThis.pitch = 1;
    utterThis.rate = 0.9;
    synth.speak(utterThis);

}
