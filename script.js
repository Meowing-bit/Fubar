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

const zolaCode = {
    A: 'Z', B: 'A', C: 'B', D: 'C', E: 'D', F: 'E', G: 'F', H: 'G',
    I: 'H', J: 'I', K: 'J', L: 'K', M: 'L', N: 'M', O: 'N', P: 'O',
    Q: 'P', R: 'Q', S: 'R', T: 'S', U: 'T', V: 'U', W: 'V', X: 'W',
    Y: 'X', Z: 'Y'
};

const gudutCode = {
    A: 'G', B: 'H', C: 'I', D: 'J', E: 'K', F: 'L', G: 'M', H: 'N',
    I: 'O', J: 'P', K: 'Q', L: 'R', M: 'S', N: 'T', O: 'U', P: 'V',
    Q: 'W', R: 'X', S: 'Y', T: 'Z', U: 'A', V: 'B', W: 'C', X: 'D',
    Y: 'E', Z: 'F'
};

function translateText() {
    const inputText = document.getElementById('inputText').value.toUpperCase();
    const kodeSelect = document.getElementById('kodeSelect').value;
    let code = {};

    // Menentukan kode yang dipilih oleh user
    if (kodeSelect === 'FUBAR') {
        code = fubarCode;
    } else if (kodeSelect === 'MEOWING') {
        code = meowingCode;
    } else if (kodeSelect === 'ZOLA') {
        code = zolaCode;
    } else if (kodeSelect === 'GUDUT') {
        code = gudutCode;
    }

    let translatedText = '';

    for (let char of inputText) {
        if (code[char]) {
            translatedText += code[char];
        } else {
            translatedText += char; // Jika bukan huruf, biarkan tetap
        }
    }

    document.getElementById('resultText').textContent = translatedText;
}
