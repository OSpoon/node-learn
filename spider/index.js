const request = require('request')
const iconv = require('iconv-lite')
const cheerio = require('cheerio')

for (let i = 102407; i < 102408; i++) {
    const url = `https://www.dy2018.com/i/${i}.html`
    console.log(`start request id:  ${i}`)
    // 发起请求 参考地址: https://www.npmjs.com/package/request
    request.get(url, { timeout: 1000 }, (err, res, body) => {
        console.log(`response id:  ${i}`)
        if (err) {
            console.log(err.code)
        } else {
            // 编码转换
            const html = iconv.decode(body, 'gb2312')
            // 加载html数据
            const $ = cheerio.load(html)
            // 匹配节点 参考地址: https://www.jianshu.com/p/629a81b4e013
            const hint = $('center h1').text()
            if (hint) {
                console.log(hint)
            } else {
                const title = $('.title_all h1').text()
                console.log(title)
            }
        }
    })
}