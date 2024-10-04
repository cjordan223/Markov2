document.getElementById('generateBtn').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const order = parseInt(document.getElementById('order').value);
    const length = parseInt(document.getElementById('length').value);
    const randomness = parseFloat(document.getElementById('randomness').value);

    if (inputText.trim() === '') {
        alert('Please enter some training text.');
        return;
    }

    const markovChain = buildMarkovChain(inputText, order);
    const generatedText = generateText(markovChain, length, order, randomness);
    document.getElementById('outputText').textContent = generatedText;
});

function buildMarkovChain(text, order) {
    const words = text.split(/\s+/);
    const chain = {};

    for (let i = 0; i <= words.length - order; i++) {
        const key = words.slice(i, i + order).join(' ');
        const nextWord = words[i + order];

        if (!chain[key]) {
            chain[key] = [];
        }
        if (nextWord) {
            chain[key].push(nextWord);
        }
    }
    return chain;
}

function generateText(chain, length, order, randomness) {
    const keys = Object.keys(chain);
    let key = keys[Math.floor(Math.random() * keys.length)];
    const words = key.split(' ');

    for (let i = 0; i < length - order; i++) {
        const nextWords = chain[key];
        if (!nextWords || nextWords.length === 0) {
            // Restart with a random key if we reach a dead end
            key = keys[Math.floor(Math.random() * keys.length)];
            const newWords = key.split(' ');
            words.push(...newWords);
            continue;
        }

        // Apply randomness to the selection of the next word
        const wordFrequencies = {};
        nextWords.forEach(word => {
            wordFrequencies[word] = (wordFrequencies[word] || 0) + 1;
        });

        const total = nextWords.length;
        const weightedWords = Object.keys(wordFrequencies).map(word => {
            return { word, weight: wordFrequencies[word] / total };
        });

        weightedWords.sort((a, b) => b.weight - a.weight);

        let nextWord;
        if (Math.random() < randomness) {
            // Randomly select from the less probable words
            nextWord = weightedWords[weightedWords.length - 1].word;
        } else {
            // Select the most probable word
            nextWord = weightedWords[0].word;
        }

        words.push(nextWord);
        key = words.slice(words.length - order, words.length).join(' ');
    }

    return words.join(' ');
}
