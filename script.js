const fubarCode = {
    A: 'F', B: 'G', C: 'H', D: 'I', E: 'J', F: 'K', G: 'L', H: 'M',
    I: 'N', J: 'O', K: 'P', L: 'Q', M: 'R', N: 'S', O: 'T', P: 'U',
    Q: 'V', R: 'W', S: 'X', T: 'Y', U: 'Z', V: 'A', W: 'B', X: 'C',
    Y: 'D', Z: 'E'
};

const meowingCode = {
    A: 'M', B: 'N', C: 'O', D: 'P', E: 'Q', F: 'R', G: 'S', H: 'T',
    I: 'U', J: 'V', K: 'W', L: 'X', M: 'Y', N: 'Z', O: 'A', P: 'B',
    Q: 'C', R: 'D', S: 'E', T: 'F', U: 'G', V: 'H', W: 'I', X: 'J',
    Y: 'K', Z: 'L'
};

function translateText() {
    const inputText = document.getElementById('inputText').value.toUpperCase();
    const kodeSelect = document.getElementById('kodeSelect').value;
    let code = kodeSelect === 'FUBAR' ? fubarCode : meowingCode;
    let translatedText = '';

    for (let char of inputText) {
        if (code[char]) {
            translatedText += code[char];
        } else {
            translatedText += char; // If the character is not in the alphabet, keep it unchanged
        }
    }

    document.getElementById('resultText').textContent = translatedText;
}
