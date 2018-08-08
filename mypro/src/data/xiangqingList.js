import Mock from "mockjs"

var Xiangqing = Mock.mock({
	"list|1": [{
		"price": "@integer(30,500)",
		"pingfen": "@float(1,9,0,1)",
		"address":"@county(true)",
		"text":"@csentence(2,10)"
	}]
})

export default Xiangqing;