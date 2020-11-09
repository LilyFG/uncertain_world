var debrief = {
  type: "survey-text",
  preamble: "<h1 style='color: #ee7d33'>Parent debrief </h1>"+
    "<div id='debrief' style='text-align: left; color: white;'>"+
    "Thank you for taking the time to complete the questionnaires, and for your child taking part in the computer games today. We hope that you both enjoyed the experience. "+
    "<br><br>"+
    "Here is a bit more information about what your child did today and why we are interested in these things. Please let us know if you have any questions, either by emailing <a href = 'mailto:z.j.ryan@pgr.reading.ac.uk'>z.j.ryan@pgr.reading.ac.uk</a> or by leaving a question in the free text box at the end of this debrief."+
    "<br><ul>"+
    "<li>Your child played a game where they could choose to press buttons.  The buttons had pictures on them relating to the sound they played when pressed, or a “?”.  Some of the buttons played the sound of rain, a jet plane or nightime noises, while others played a dentist drill, a rollercoaster, a jackhammer or a buzzer and some were uncertain (could be any of these). This tells us whether children seek out information or avoid it by not pressing any “?” buttons.</li>"+
    "<li>Through the webcam recording, we will observe your child’s emotional response to the buttons at the beginning of the game. We will aim to see whether your child is feeling positively or negatively about the game ahead. This tells us how children feel about uncertainty. </li>"+
    "<li>We have also asked your child to rate how they felt about each of the screens they saw (on a scale from positive to negative). This allows your child to report whether they are feeling positively or negatively about the uncertainty.</li>"+
    "</ul>"+
    "It is important to keep in mind that we are interested in scores on these games for all of the children taking part in this project as a group; we don’t look at scores or behaviours for specific individuals so we aren’t able to give you feedback about your child’s scores. "+
    "<br><br>"+
    "If you have any concerns about your child, resources for parents can be found on our website: "+
    "<a href = 'https://research.reading.ac.uk/andy/resources/resources-parents/'>https://research.reading.ac.uk/andy/resources/resources-parents/</a>"+
    "<br><br>"+
    "Thank you again for your time today. Do let us know if you have any questions, comments or feedback. "+
    "You can download a copy of this page by clicking <a href='debrief.pdf' download='uncertain world debrief'>here</a>. We will also send you a copy by email with a"+
    " giftcard as a contribution to your reasonable expenses incurred in taking part in the research and your child's certificate."+
    "<br><br>"+
    "</div>",
    questions: [{prompt: "",
                  // value: "Please enter any questions, comments, or feedback here", // used placeholder instead so it overwrites
                  rows: 10,
                  columns: 60}],
    on_start: function(){
      document.body.style.overflow = "scroll"
      document.getElementById("jspsych-content").style.paddingBottom = "5vh"
    },
    on_load: function(){
      document.getElementsByName("#jspsych-survey-text-response-0")[0].placeholder = "Please enter any questions, comments, or feedback here"
    },
    on_finish: function(data){
      var query = JSON.parse(data.responses)["Q0"]
      $.ajax({
        type: 'post',
        cache: false,
        url: 'email_query.php', // this is the path to the above PHP script (needs to be in the same foler as the script)
        data: {
          filedata: query,
          filename: "debrief_"+id+".txt"
        }
      });
    },
    button_label: "Submit"
}
