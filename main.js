var userName = 'Nat';

var helloMessage = (userName !== '') ? `Hello ${userName}!`: 'Hello!';
console.log(helloMessage);

var userQuestion = 'Will the car be fixed soon?';

if (userQuestion !== '') {
    console.log(userQuestion)
    var randomNumber = Math.floor(Math.random() * 8);

    var eightBall = '';
    switch(randomNumber) {
        case 0:
            response = 'It is certain.';
            break;
        case 1:
            response = 'It is decidedly so.';
            break;
        case 2:
            response = 'Reply hazy - try again';
            break;
        case 3:
            response = 'Cannot predict now';
            break;
        case 4:
            response = 'Do not count on it';
            break;
        case 5:
            response = 'My sources say so';
            break;
        case 6:
            response = 'Outlook not so good';
            break;
        case 7:
            response = 'Signs point to yes';
            break
    }
    console.log(response)
} else {
    console.log('Please specify a question!')
}

