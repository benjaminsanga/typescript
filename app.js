var userInput;
var userName;
userInput = 5;
userInput = 'Ben';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error occured', 500);
