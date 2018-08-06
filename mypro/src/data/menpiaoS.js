import Mock from "mockjs"

var Random = Mock.Random;
Random.extend({
	tupian: function(data) {
		var tupian = [{
		"url":"http://www.517dv.com/upload/2015/09/21/9f6fef6839329c5e99a7fc18e166ee99.jpg",
		"tit":"郑州绿博园",
		"prePrice":30,
		"nowPrice":26
	},
	{
		"url":"http://www.517dv.com/upload/2015/09/21/f131d2b7438feec93354d89fc9db9d98.jpg",
		"tit":"郑州江南春温泉",
		"prePrice":30,
		"nowPrice":26
	},
	{
		"url":"http://www.517dv.com/upload/2015/09/21/2571d13770a1fcf70c0a004f5022dd04.jpg",
		"tit":"栾川鸡冠洞景区",
		"prePrice":30,
		"nowPrice":26
	},
	{
		"url":"http://www.517dv.com/upload/2015/09/21/d82a1294d7d52f57bc2f848e267d299a.jpg",
		"tit":"郑州方特欢乐世界",
		"prePrice":30,
		"nowPrice":26
	}]
		return this.pick(tupian)
	}
})

var menpiaoJia = Mock.mock({
	"user|4": [{
		"id|+1": 0,
		"con": "@tupian"
	}]
})

export default menpiaoJia