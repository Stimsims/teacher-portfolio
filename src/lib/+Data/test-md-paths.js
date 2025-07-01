export const examples = [
  {
    title: 'Migration Game',
    summary: 'Students simulated seasonal bird migration through an outdoor game.',
    details: () => import('$lib/+Data/posts/test.svx')
  },
  {
    title: 'Extension Challenges for Advanced Students',
    summary: "To ensure every student is growing every lesson, I provided extension challenges for advanced learners.",
    details: () => import('$lib/+Data/posts/math_extension.svx')
  },
  {
    title: 'The Importance of Questions',
    summary: "Using student surveys to support students in asking the questions they really need answers to.",
    details: () => import('$lib/+Data/posts/student_surveys.svx')
  }
];