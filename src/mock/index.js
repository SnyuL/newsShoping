import Mock from "mockjs"//在主页中引入mock文件 import "../src/mock/index"
import { createNodeArray } from "typescript"

//生成数据
//  const data = Mock.mock({
const { newList } = Mock.mock({
    'string|1-4': "移动App",//随机数量
    content: "@cparagraph(1)",//句子
    id: "@increment(1)",//自动增量
    // number:5,  下面是随机字符
    "number|1-1000": 5,
    'title': "@cword(3,5)",//随机文本长度，前缀c代表中文，不写c就是英文
    "value": "vue3.x+vant",
    "newList|8-20": [   //随机数组
        {
            "name": "@cname()",//随机姓名
            "address": "@city(true)",//随机城市，true全称
            date: "@date(yyyy-MM-dd hh:mm:ss)",//随机时间
            "id": "@id()",//随机身份证号
        }
    ],
})
//根据url获取query参数，封装获取分页参数的方法
const getQuery = (url, name) => {
    console.log(url, name)
    const index = url.indexOf("?")
    if (index != -1) {
        const queryArr = url.substr(index + 1).split("&")
        for (var i = 0; i < queryArr.length; i++) {
            const itemArr = queryArr[i].split("=")
            if (itemArr[0] === name) {
                return itemArr[1]
            }
        }
    }
    return null

}
//定义请求格式,直接调用/api/get和get即可
Mock.mock('/api/get', 'get', {
    status: 200,
    msg: "获取模拟数据吧"
})
Mock.mock('/api/post', 'post', (options) => {
    console.log(JSON.parse(options.body), "options")
    //传递分页参数
    const queryDate = getQuery(options.url, "pageIndex")

    return {
        status: 200,
        msg: "post请求成功",
        list: newList,
        total: newList.length,
    }
})
//添加或者删除接口参数，获取页面中post请求传递过来的参数，然后返回成功status和msg状态
Mock.mock('/api/add', 'post', (options) => {
    const body = JSON.parse(options.body)
    newList.push(//添加
        Mock.mock({
            "title": body.title,
            "content": body.content,
        }))
    //删除
    const index = newList.findIndex(item => {
        return item.id === body.id
    })
    newList.splice(index, 1)
    return {
        status: 200,
        msg: "添加成功",
        list: newList,
        total: newList.length,
    }


})
// console.log(data,"Mock")