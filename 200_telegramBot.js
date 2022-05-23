const Bot = require('node-telegram-bot-api');

const bot = new Bot('****', { polling: true });

const onChatMessage = (msg) => {
    const chatID = msg.chat.id;
    bot.sendMessage(chatID, 'oh, hello', {
        disable_notification: true,
    }).then(() => {
        console.log('replay sent');
    });
};

bot.on('message', (msg) => {
    console.log(msg);
    if (msg.text) {
        return onChatMessage(msg);
    }
});
