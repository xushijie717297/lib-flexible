class Methods{
	startRecognize(routerJson) {
		var routerJson = routerJson[0]
		var options = {engine: 'iFly'};
		var text = "";
		return new Promise(function(resolve,reject){
			plus.speech.startRecognize(options, function(s) {
				text += s;
				console.log(routerJson)
				for(let i in routerJson){
					if(text.indexOf(i) != -1){
						console.log(i)
						console.log("我要跳转了",routerJson[i])
						// window.location.href = routerJson[i]
						// return routerJson[i]
						resolve(routerJson[i]);
					}
				}
			}, function(e) {
				// alert("语音识别失败：" + e.message);
				reject("语音识别失败!");
			});
		});
	}
}
export default new Methods()