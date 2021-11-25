var likert_scale = [
  "Strongly Disagree",
  "Disagree",
  "Neutral",
  "Agree",
  "Strongly Agree"
];

var trial = {
  type: jsPsychSurveyLikert,
  questions: [
    {prompt: "I like vegetables.", name: 'Vegetables', labels: likert_scale},
    {prompt: "I like fruit.", name: 'Fruit', labels: likert_scale},
    {prompt: "I like meat.", name: 'Meat', labels: likert_scale},
  ],
  randomize_question_order: true
};
