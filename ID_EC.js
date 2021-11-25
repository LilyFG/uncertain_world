var likert_scale = [
  "Almost Never",
  "Sometimes",
  "Often",
  "Almost Always"
];

var trial = {
  type: jsPsychSurveyLikert,
  questions: [
    {prompt: "Enjoy exploring new ideas", labels: likert_scale},
    {prompt: "Hours on a problem because I can’t rest without answer", labels: likert_scale},
    {prompt: "Find it fascinating to learn new information", labels: likert_scale},
    {prompt: "Brood for a long time to solve problem", labels: likert_scale},
    {prompt: "Enjoy learning about subjects that are unfamiliar to me", labels: likert_scale},
    {prompt: "Conceptual problems keep me awake thinking", labels: likert_scale},
    {prompt: "Enjoy discussing abstract concepts", labels: likert_scale},
    {prompt: "Frustrated if I can’t figure out problem, so I work harder", labels: likert_scale},
    {prompt: "Learn something new, like to find out more about it", labels: likert_scale},
    {prompt: "Work like a fiend at problems that I feel must be solved", labels: likert_scale},
  ],
  randomize_question_order: false
};
