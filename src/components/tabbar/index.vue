<template>
    <div class="tab-bar">
        <div class="tab">
            <div class="name">LOLITA</div>
            <ul>
                <router-link tag="li" to="/" exact>衣服</router-link>
                <router-link tag="li" to="/order">正在预约</router-link>
                <router-link tag="li" to="/final">正在尾款</router-link>
            </ul>
        </div>
        <div class="tab">
            <div class="name">统计</div>
            <ul>
                <router-link tag="li" to="/sta-lolita">衣服</router-link>
                <router-link tag="li" to="/sta-store">店铺</router-link>
            </ul>
        </div>
        <div class="tab">
            <div class="name">LOLITA分类</div>
            <ul>
                <router-link tag="li" to="/type-store">店铺</router-link>
                <router-link tag="li" to="/type">LOLITA类型</router-link>
            </ul>
        </div>
        <div class="tab">
            <div class="name">文章</div>
            <ul>
                <router-link tag="li" to="/inform">通知</router-link>
                <router-link tag="li" to="/article">文章</router-link>
            </ul>
        </div>
        <div class="tab">
            <div class="name">消息</div>
            <ul>
                <router-link tag="li" to="/feedback">信息反馈</router-link>
                <router-link tag="li" to="/message">消息</router-link>
            </ul>
        </div>
        <div class="tab">
            <div class="name">账号管理</div>
            <ul>
                <router-link tag="li" to="/check">审核</router-link>
                <router-link tag="li" to="/manage">管理</router-link>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style lang="scss" scoped>
    $grey: #eee;

    .tab-bar{
        position: fixed;
        width: 150px;
        height: 100%;
        overflow-y: auto;
        left: 0;
        top:0;
        z-index: 5;
        background: white;
        text-align: center;
        border-right:1px solid $grey;
        .tab{
            &:first-child{
                margin-top: 50px;
            }
            .name{
                background: $grey;
                height: 35px;
                line-height:35px;
                font-size: 14px;
            }
            ul{
                font-size: 12px;
                li{
                    height:25px;
                    padding: 5px 0;
                    line-height:25px;
                    cursor:pointer;
                }
            }
        }
    }
</style>