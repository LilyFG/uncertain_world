var synth = window.speechSynthesis;

function speak(text, enable = true, end_func = null){

    //timeout = false
    // function to run after the speech has finished (or after 20 seconds)
    function after_speech(){
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
    
    // backup timeout that runs the after speech function after 20 seconds
    backup_timeout = setTimeout(after_speech, 20000);
        
        
    if (synth.speaking) {
      speechSynthesis.cancel()
        //console.error('speechSynthesis.speaking');
        //return;
    }

    var utterThis = new SpeechSynthesisUtterance(text);

    utterThis.onend = function(){
        clearTimeout(backup_timeout)
        after_speech()
    }

    utterThis.onerror = function (event) {
        console.error('SpeechSynthesisUtterance.onerror '+event.error);
    }

    utterThis.voice = synth.getVoices().filter(voice => voice.name == "Google UK English Female")[0];
    utterThis.pitch = 1;
    utterThis.rate = 0.9;
    setTimeout(function(){synth.speak(utterThis)}, 100);

}
