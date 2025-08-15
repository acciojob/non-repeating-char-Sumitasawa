function firstNonRepeatedChar(str) {
  let freq = {};
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }
  for (let char of str) {
    if (freq[char] === 1) return char;
  }
  return null; // real null
}

const input = prompt("Enter a string:");
alert(firstNonRepeatedChar(input)); // ❌ This will convert null to "null"
