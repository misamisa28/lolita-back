const weekDayArr = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
function wipeOut(date) {
    //console.log('date', date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate())
    return new Date(date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate());
}

function formatTime(date) {
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDate()

    var hour = date.getHours()
    var minute = date.getMinutes()
    var second = date.getSeconds()


    return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatData(date) {
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDate()

    var hour = date.getHours()
    var minute = date.getMinutes()
    var second = date.getSeconds()


    return [year, month, day].map(formatNumber).join('-');
}

function formatNumber(n) {
    n = n.toString()
    return n[1] ? n : '0' + n
}
function objectToUrlParams(obj) {
    var str = "";
    for (var key in obj) {
        str += "&" + key + "=" + obj[key];
    }
    return str.substr(1);
}

function create(date, type = 0) {
    let dt;
    if (date && date.constructor == Date) {
        // 克隆一个
        dt = new Date(date.getTime());
    }
    else {
        if (typeof date == 'string') {
            date = date.replace(/^(\d{4})(\d{2})(\d{2})(\d{2})?(\d{2})?(\d{2})?$/, function (str, Y, M, D, h, m, s) {
                return Y + '/' + M + '/' + D + ' ' + (h || '00') + ':' + (m || '00') + ':' + (s || '00')
            }).replace(/\-/g, '\/').replace(/T/, ' ').replace(/\.\d+$/, '')
        }
        dt = date ? new Date(date) : new Date();
    }

    if (type == 1) {
        return wipeOut(dt)
    }
    return dt
}
function getDetail(date) {
    date = create(date);
    let YYYY = date.getFullYear()
    let YY = date.getYear()
    let M = date.getMonth() + 1
    let MM = ('0' + M).slice(-2)
    let D = date.getDate()
    let DD = ('0' + D).slice(-2)
    let h = date.getHours()
    let hh = ('0' + h).slice(-2)
    let m = date.getMinutes()
    let mm = ('0' + m).slice(-2)
    let s = date.getSeconds()
    let ss = ('0' + s).slice(-2)
    let w = date.getDay()
    let W = weekDayArr[w]

    let diff = wipeOut(date).getTime() - wipeOut(create()).getTime()
    let X = diff == 172800000 ? '后天' : diff == 86400000 ? '明天' : diff == 0 ? '今天' : W
    return { YYYY, YY, MM, M, DD, D, hh, h, mm, m, ss, s, w, W, X }
}
function format(date, formatStr = 'YYYY-MM-DD') {
    let info = getDetail(date);
    for (let n in info) {
        formatStr = formatStr.replace(new RegExp(n, 'g'), info[n]);
    }
    return formatStr;
}
module.exports = {
    formatTime: formatTime,
    objectToUrlParams: objectToUrlParams,
    formatData: formatData,
    format: format
};