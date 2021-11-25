var likert_scale_ID_EC = [
  "Almost Never",
  "Sometimes",
  "Often",
  "Almost Always"
];

var ID_EC_survey = {
  type: "survey-likert",
  preamble: "<h1>ID-EC</h1><div>Please report how you generally feel regarding each statement below on the following 4-point frequency scale</div>",
  questions: [
    {prompt: "I enjoy exploring new ideas.", labels: likert_scale_ID_EC, required: true},
    {prompt: "I can spend hours on a single problem because I just can’t rest without knowing the answer.", labels: likert_scale_ID_EC, required: true},
    {prompt: "I find it fascinating to learn new information.", labels: likert_scale_ID_EC, required: true},
    {prompt: "I brood for a long time in an attempt to solve some fundamental problem.", labels: likert_scale_ID_EC, required: true},
    {prompt: "I enjoy learning about subjects that are unfamiliar to me.", labels: likert_scale_ID_EC, required: true},
    {prompt: "Difficult conceptual problems can keep me awake all night thinking about solutions.", labels: likert_scale_ID_EC, required: true},
    {prompt: "I enjoy discussing abstract concepts.", labels: likert_scale_ID_EC, required: true},
    {prompt: "I feel frustrated if I can’t figure out the solution to a problem, so I work even harder to solve it.", labels: likert_scale_ID_EC, required: true},
    {prompt: "When I learn something new, would like to find out more about it.", labels: likert_scale_ID_EC, required: true},
    {prompt: "I work like a fiend at problems that I feel must be solved.", labels: likert_scale_ID_EC, required: true},
  ],
  randomize_question_order: false
};
