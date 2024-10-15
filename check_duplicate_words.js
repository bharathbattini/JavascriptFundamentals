function hasUniqueWords(sentence) {
    // Split the sentence into words, assuming words are separated by spaces
    const words = sentence.split(' ');

    // Create a Set to store unique words
    const uniqueWords = new Set();

    // Iterate through each word in the sentence
    for (let word of words) {
        // Normalize the word to avoid case sensitivity issues
        const normalizedWord = word.toLowerCase();

        // Check if the word is already in the Set
        if (uniqueWords.has(normalizedWord)) {
            // If the word is found in the Set, return false
            return false;
        }

        // Add the word to the Set
        uniqueWords.add(normalizedWord);
    }

    console.log(uniqueWords.keys());
    // If no duplicates were found, return true
    return true;
}

// Example usage:
const sentence1 = "This is a test sentence";
const sentence2 = "This is a test basw";

console.log(hasUniqueWords(sentence1)); // Output: true
console.log(hasUniqueWords(sentence2)); // Output: false
