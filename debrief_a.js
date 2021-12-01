var debrief = {
  type: "survey-text",
  preamble: "<h1 style='color: #ee7d33'>Debrief </h1>"+
    "<div id='debrief' style='text-align: left; color: white;'>"+
    "Thank you for taking the time to complete the questionnaires, and for taking part in the computer games today. We hope that you enjoyed the experience. "+
    "<br><br>"+
    "Here is a bit more information about what you did today and why we are interested in these things. Please let us know if you have any questions, either by emailing z.j.ryan@pgr.reading.ac.uk or by leaving a question in the free text box at the end of this debrief. "+
    "<br><ul>"+
    "<li>You played a game where you could choose to press buttons. The buttons had pictures on them relating to the sound they played when pressed, or a “?”.  Some of the buttons played the sound of rain, a jet plane or nighttime noises, while others played a dentist drill, a rollercoaster, a jackhammer or a buzzer and some were uncertain (could be any of these). This tells us whether people seek out information or avoid it by not pressing any “?” buttons. </li>"+
    "<li>Through the webcam recording, we will observe your emotional response to the buttons at the beginning of the game. We will aim to see whether you are feeling positively or negatively about the game ahead. This tells us how people feel about uncertainty.   </li>"+
    "<li>We have also asked you to rate how you felt about each of the screens you saw (on a scale from positive to negative). This allows you to report whether you are feeling positively or negatively about the uncertainty. </li>"+
    "<li>We have conducted this study with children, and in running it with adults, we hope to see if there is a difference in behaviour and emotional responses to uncertainty in children and adults. </li>"+
    "</ul>"+
    "It is important to keep in mind that we are interested in scores on these games for everyone taking part in this project as a group; we don’t look at scores or behaviours for specific individuals so we aren’t able to give you feedback about your scores.   "+
    "<br><br>"+
    "If you have any concerns about your fears and worries, you can contact your GP or  "+
    "<a href = 'https://www.nhs.uk/mental-health/talking-therapies-medicine-treatments/talking-therapies-and-counselling/nhs-talking-therapies/'>https://www.nhs.uk/mental-health/talking-therapies-medicine-treatments/talking-therapies-and-counselling/nhs-talking-therapies/</a>"+
    "<br><br>"+
    "Thank you again for your time today. Do let us know if you have any questions, comments or feedback. "+
    "You can download a copy of this page by clicking <a href='debrief_a.pdf' download='uncertain world debrief'>here</a>."+
    "<br><br>"+
    "<h1 style='color: #ee7d33'>Debrief Questions</h1>"+
    "Please answer the two debrief questions below. <b>These must be answered</b> in order to gain your SONA credits: "+
    "</div>",
    questions: [
    {prompt: "<p style='color:white;'>1. Will we be looking at individual or group scores for the game?</p>",
                  rows: 10,
                  columns: 60},
    {prompt: "<p style='color:white;'>2. Are we investigating intolerance of uncertainty, curiosity or both?</p>",
                  rows: 10,
                  columns: 60},
    {prompt: "<p style='color:white;'>Please enter any questions, comments, or feedback here</p>",
                  rows: 10,
                  columns: 60}],
    on_start: function(){
      document.body.style.overflow = "scroll"
      document.getElementById("jspsych-content").style.paddingBottom = "5vh"
    },
    on_finish: function(data){
      var query = JSON.parse(data.responses)["Q2"]
      $.ajax({
        type: 'post',
        cache: false,
        url: 'email_query.php', // this is the path to the above PHP script (needs to be in the same folder as the script)
        data: {
          filedata: query,
          filename: "debrief_"+id+".txt"
        }
      });
    },
    button_label: "Submit"
}
