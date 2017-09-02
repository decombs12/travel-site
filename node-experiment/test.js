var filesYo = require('fs');
var https = require('https');

filesYo.writeFile(__dirname + "/index.html", "<h1>HTML rocks</h1>");

var dogUrl = "https://twt-thumbs.washtimes.com/media/image/2017/09/01/Harvey_Trump_17746.jpg-94c0f_c0-214-4555-2869_s885x516.jpg?d1da42dda29e76e3954824d04150eaac0de6a41b";
var dogFile = filesYo.createWriteStream(__dirname + "/node-dog.jpeg");
var request = https.get(dogUrl, function(response) {
    response.pipe(dogFile);
});