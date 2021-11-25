var likert_scale = [
  "Almost Never",
  "Sometimes",
  "Often",
  "Almost Always"
];

var trial = {
  type: "survey-likert",
  preamble: "<h1>ID-EC</h1><div>Please report how you generally feel regarding each statement below on the following 4-point frequency scale</div>",
  questions: [
    {prompt: "Enjoy exploring new ideas", labels: likert_scale, required: true},
    {prompt: "Hours on a problem because I can’t rest without answer", labels: likert_scale, required: true},
    {prompt: "Find it fascinating to learn new information", labels: likert_scale, required: true},
    {prompt: "Brood for a long time to solve problem", labels: likert_scale, required: true},
    {prompt: "Enjoy learning about subjects that are unfamiliar to me", labels: likert_scale, required: true},
    {prompt: "Conceptual problems keep me awake thinking", labels: likert_scale, required: true},
    {prompt: "Enjoy discussing abstract concepts", labels: likert_scale, required: true},
    {prompt: "Frustrated if I can’t figure out problem, so I work harder", labels: likert_scale, required: true},
    {prompt: "Learn something new, like to find out more about it", labels: likert_scale, required: true},
    {prompt: "Work like a fiend at problems that I feel must be solved", labels: likert_scale, required: true},
  ],
  randomize_question_order: false
};
