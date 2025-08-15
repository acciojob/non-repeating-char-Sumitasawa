function firstNonRepeatedChar(str) {
  let freq = {};

  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }

  for (let char of str) {
    if (freq[char] === 1) {
      return char;
    }
  }

  return null; // JavaScript null, not string
}

// For prompt/alert-based setup:
const input = prompt("Enter a string:");
const result = firstNonRepeatedChar(input);

if (result !== null) {
  alert(result);
} else {
  alert(""); // Or some agreed empty signal
}
