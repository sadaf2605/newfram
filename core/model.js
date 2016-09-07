Apize = require('../apize/apize');

apize = new Apize();
apize.define('user',{
	name: "hi"
})


console.log(apize.getModelName())