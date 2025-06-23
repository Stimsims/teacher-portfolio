import examples from '$lib/+Data/test.json';

// +page.js or +layout.js
export const prerender = true;


export function load() {
  console.log("✅ load() called, loading example data");
  return {
    examples
  };
}
