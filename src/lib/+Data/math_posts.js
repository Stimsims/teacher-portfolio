
export const examples = [
  {
    title: 'Math Extension Challenges',
    summary: 'Following cognitive load theory, math skills start simple. Challenging extension problems connected to the students funds of knowledge are added in to connect the basic math skill to useful, real world problems.',
    details: () => import('$lib/+Data/posts/math_extension.svx')
  },
  {
    title: 'Understanding student needs with surveys',
    summary: "To help students articulate their questions about math, I use a question ranking system so students understand the kinds of questions they can ask, and can indicate how important they are to that student.",
    details: () => import('$lib/+Data/posts/student_surveys.svx')
  },
  {
    title: 'Cross-curricular Lesson Plan - Math and Biology',
    summary: "Maths is a language, it's strengths are best understood when studying the natural world. A game of 'migration' tag sharpened kids data gathering and display skills, while keeping them excited and active.",
    details: () => import('$lib/+Data/posts/lesson_plan_bird_migration.svx')
  }
];