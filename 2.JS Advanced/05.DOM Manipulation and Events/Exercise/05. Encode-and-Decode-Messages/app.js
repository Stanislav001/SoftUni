function encodeAndDecodeMessages() {
    let [sentMessage, receivedMessage] = document.querySelectorAll('textarea');

    function encodeMessage(e) {
        let message = sentMessage.value;
        let encodedMessage = '';

        for (let i = 0; i < message.length; i++) {
            encodedMessage += String.fromCharCode(message[i].charCodeAt(0) + 1);
        }

        receivedMessage.value = encodedMessage;
        sentMessage.value = '';
    }

    function decodeMessage(e) {
        let message = receivedMessage.value;
        let decodedMessage = '';

        for (let i = 0; i < message.length; i++) {
            decodedMessage += String.fromCharCode(message[i].charCodeAt(0) - 1);
        }

        receivedMessage.value = decodedMessage;
    }

    let [encodingMessage, decodingMessage] = document.querySelectorAll('button');
    encodingMessage.addEventListener('click', encodeMessage);
    decodingMessage.addEventListener('click', decodeMessage);
}