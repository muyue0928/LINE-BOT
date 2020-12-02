// 引用linebot SDK
var linebot = require('linebot');

// 用於辨識Line Channel的資訊
var bot = linebot({
  channelId: '1655240414',
  channelSecret: '9c4c9f47c935285a65b93d23b4a7721a',
  channelAccessToken: 'h0wWk4QzzLf4mDtxOA8St/yipuJZZgIWQtCuPn4o+rabxEJntZbgvxDtyl8L7oj0JUdX23mci2bsX0Xm/BALtb3J6miSar3awM81cCF4AXP/Z7LD1pnWPydvMp2gPNPgXsIFShyqE/7O6I/9RqzyWwdB04t89/1O/w1cDnyilFU='
});

// 當有人傳送訊息給Bot時
bot.on('message', function (event) {
    mes=event.message.text;
  // event.message.text是使用者傳給bot的訊息
  // 使用event.reply(要回傳的訊息)方法可將訊息回傳給使用者
  event.reply('要回傳的訊息').then(function (data) {
    // 當訊息成功回傳後的處理
  }).catch(function (error) {
    // 當訊息回傳失敗後的處理
  });
});

// Bot所監聽的webhook路徑與port
bot.listen('/linewebhook', 3000, function () {
    console.log('[BOT已準備就緒]');
});