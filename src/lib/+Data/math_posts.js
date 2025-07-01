[
  {
    "id": "math_extension",
    "title": "Math Extension Challenges",
    "summary": "Following cognitive load theory, math skills start simple. Challenging extension problems connected to the students funds of knowledge are added in to connect the basic math skill to useful, real world problems.",
    "details": "math extension challenges summary",
    "image": "/images/fractions.jpg"
  },
  {
    "id": "student_surveys",
    "title": "Understanding student needs with surveys",
    "summary": "To help students articulate their questions about math, I use a question ranking system so students understand the kinds of questions they can ask, and can indicate how important they are to that student.",
    "details": "Details about student surveys",
    "image": "/images/literacy.jpg"
  }
]


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
  }
];