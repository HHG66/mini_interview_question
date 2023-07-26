const request = (data) => {
    let promise = new Promise(function (resolve, reject) {
        wx.request({
            url: data.url.search('http') == -1 ? wx.requestUrl + data.url : data.url,
            header: data.header,
            data: data.data,
            method: data.type,
            success: function (res) {
                console.log(res);
                // app.netWorkData.result = res.data
                resolve(res)
            }

        })
    })
    return promise
}
module.exports = request