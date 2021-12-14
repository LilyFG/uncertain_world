var demo = {
  type: "survey-html-form",
  preamble: '<h1>Demographics</h1><br>',
  html:
'      <div style="width: 40%; margin: auto; text-align: left;">'+
'      <div class="form-group">'+
'        <label class="col-form-label" for="name" id="name-label">What is your name?</label><br>'+
'        <input class="form-control" id="name" name="name" required type="text" /><br>'+
'      </div><br>'+
'      <div class="form-group">'+
'        <label class="col-form-label" for="number" id="number-label">What is your age?</label><br>'+
'        <input class="form-control" id="number" name="age" max="100" min="18" type="number" />'+
'      </div><br>'+
'      <div class="form-group">'+
'        <label class="col-form-label" for="gender" id="gender-label">What is your gender?</label><br>'+
'        <div>'+
'          <input class="form-radio" id="female-gender" name="gender" type="radio" value="female" required/>'+
'          <label for="female-gender" id="female-gender-label">Female</label>'+
'        </div>'+
'        <div>'+
'          <input class="form-radio" id="male-gender" name="gender" type="radio" value="male" />'+
'          <label for="male-gender" id="male-gender-label">Male</label>'+
'        </div>'+
'        <div>'+
'          <input class="form-radio" id="other-gender" name="gender" type="radio" value="other" />'+
'          <label for="other-gender" id="other-gender-label">I describe my gender differently</label>'+
'        </div>'+
'        <div>'+
'          <input class="form-radio" id="withheld-gender" name="gender" type="radio" value="withheld" />'+
'          <label for="withheld-gender" id="withheld-gender-label">Prefer not to say</label>'+
'        </div>'+
'      </div><br>'+
'      <div class="form-group">'+
'        <label class="col-form-label" for="ethnicity" id="ethnicity-label">Which of the following best characterises your ethnic group?</label>'+
'        <select class="form-control" id="ethnicity" name="ethnicity" required>'+
'          <option disabled selected value>Select one of the following:</option>'+
'          <option value="White British">White British</option>'+
'          <option value="White Irish">White Irish</option>'+
'          <option value="White European">White European</option>'+
'          <option value="White Other">White Other</option>'+
'          <option value="Asian or Asian British (Indian origin)">Asian or Asian British (Indian origin)</option>'+
'          <option value="Asian or Asian British (Pakistani origin)">Asian or Asian British (Pakistani origin)</option>'+
'          <option value="Asian or Asian British Bangladeshi origin)">Asian or Asian British Bangladeshi origin)</option>'+
'          <option value="Asian or Asian British (Chinese origin)">Asian or Asian British (Chinese origin)</option>'+
'          <option value="Asian or Asian British (Other Asian origin)">Asian or Asian British (Other Asian origin)</option>'+
'          <option value="Black or Black British">Black or Black British</option>'+
'          <option value="Mixed Race">Mixed Race</option>'+
'          <option value="Other">Other (please specify below)</option>'+
'          <option value="Prefer not to say">Prefer not to say</option>'+
'        </select><br>'+
'        If other, please specify:<br>'+
'        <input type="text" id="other-ethnicity" name="other-ethnicity"><br>'+
'      </div><br>'+
'<div style="background-color: #ededed"; width: 110%; margin: auto;>'+
'<b>Your answers to the following questions will not affect your participation but are useful for our records: </b>'+
'      <div class="form-group">'+
'        <label class="col-form-label" for="colourblind" id="colourblind-label">Are you colourblind or do you suspect you might be?</label><br>'+
'        <div>'+
'          <input class="form-radio" id="yes-colourblind" name="colourblind" type="radio" value="yes" />'+
'          <label for="yes-colourblind" id="yes-colourblind-label">Yes</label>'+
'        </div>'+
'        <div>'+
'          <input class="form-radio" id="no-colourblind" name="colourblind" type="radio" value="no" />'+
'          <label for="no-colourblind" id="no-colourblind-label">No</label>'+
'        </div>'+
'      </div><br>'+
'      <div class="form-group">'+
'        <label class="col-form-label" for="hearing-vision" id="hearing-vision-label">Do you have problems with your hearing or vision that make it difficult to see or hear during computer-based tasks?</label><br>'+
'        <div>'+
'          <input class="form-radio" id="yes-hearing-vision" name="hearing-vision" type="radio" value="yes" />'+
'          <label for="yes-hearing-vision" id="yes-hearing-vision-label">Yes</label>'+
'        </div>'+
'        <div>'+
'          <input class="form-radio" id="no-hearing-vision" name="hearing-vision" type="radio" value="no" />'+
'          <label for="no-hearing-vision" id="no-hearing-vision-label">No</label>'+
'        </div>'+
'      </div><br>'+
'      <div class="form-group">'+
'        <label class="col-form-label" for="neurodivergent" id="neurodivergent-label">Do you have any diagnosed learning difficulty, mental health problem or are you neurodivergent? </label><br>'+
'        <div>'+
'          <input class="form-radio" id="yes-neurodivergent" name="neurodivergent" type="radio" value="yes" />'+
'          <label for="yes-neurodivergent" id="yes-neurodivergent-label">Yes</label>'+
'        </div>'+
'        <div>'+
'          <input class="form-radio" id="no-neurodivergent" name="neurodivergent" type="radio" value="no" />'+
'          <label for="no-neurodivergent" id="no-neurodivergent-label">No</label>'+
'        </div>'+
'      </div>'+
'      If yes, please give brief details (your answer does not affect your participation but it is helpful for our records):<br>'+
'        <input type="text" id="neurodivergent-description" name="neurodivergent-description"><br><br>'+
'   </div>'+
'      <div class="form-group">'+
'        <label class="col-form-label" for="technology" id="technology-label">Are you on a computer that can play sounds and has a webcam?</label><br>'+
'        <div>'+
'          <input class="form-radio" id="yes-technology" name="technology" type="radio" value="yes" />'+
'          <label for="yes-technology" id="yes-technology-label">Yes</label>'+
'        </div>'+
'        <div>'+
'          <input class="form-radio" id="no-technology" name="technology" type="radio" value="no" />'+
'          <label for="no-technology" id="no-technology-label">No</label>'+
'        </div>'+
'      </div><br>'+
'</div>',
on_finish: function(data){if(JSON.parse(data.responses).technology != "yes"){alert("Please try again on a computer that can play sounds and has a webcam. If you said no by mistake then please press refresh to start again."); jsPsych.pauseExperiment();}}
}
