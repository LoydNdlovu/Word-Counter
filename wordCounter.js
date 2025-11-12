
function countWords(sentence) {
  if (sentence.trim() === "") return 0; // handle empty string
  return sentence.split(" ").length;
}