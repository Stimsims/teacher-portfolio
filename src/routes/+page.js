import examples from '$lib/+Data/test.json';

export function load() {
  console.log("✅ load() called, loading example data");
  return {
    examples
  };
}
