let api_root="https://www.easy-mock.com/mock/5c7116956f09752cdf0d695d/lolita/"

var api = {
    lolita:{
        //lolita
        lolita: api_root + 'lolita',
        //种类
        type: api_root + 'type',
        //颜色
        color: api_root +'color',
        //风格
        style: api_root + 'style',
        //店铺
        store: api_root + 'store',
        //统计
        statistics_store: api_root + 'statistics-store',
        statistics_lolita: api_root + 'statistics-lolita'
    },
    account:{
        //管理员
        admin: api_root + 'admin',
        //用户
        user: api_root + 'user',
        //用户收藏
        collection: api_root + 'collection',
        //积分记录
        points: api_root + 'points'
    },
    article:{
        //文章
        article: api_root + 'article',
        //通知
        inform: api_root + 'inform'
    },
    message:{
        //反馈
        feedback: api_root +'feedback',
        //系统消息
        message: api_root + 'message',
        //对话
        chat: api_root + 'chat'
    }
}
module.exports = api