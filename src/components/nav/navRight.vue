<!--  -->
<template>
    <div class="navRight" :style="{width:width,height:height,backgroundColor:bgc}">
        <div class="div">
            <span class="i"><i class="el-icon-attract"></i></span>
            <span>大会员</span>
        </div>
        <div class="div">
            <span class="i"><i class="el-icon-message"></i></span>
            <span>消息</span>
        </div>
        <div class="div">
            <span class="i"><i class="el-icon-timer"></i></span>
            <span>动态</span>
        </div>

        <div class="div">
            <span class="i"><i class="el-icon-star-off"></i></span>
            <span>收藏</span>
        </div>
        <div class="div">
            <span class="i"><i class="el-icon-share"></i></span>
            <span>历史</span>
        </div>
        <div class="div">
            <span class="i"><i class="el-icon-medal"></i></span>
            <span>创造中心</span>
        </div>
        <el-button type="success" round> <i class="el-icon-s-promotion png"></i>投稿</el-button>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
props:['color','width','height','bgc'],
components: {},
data() {
//这里存放数据
return {

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
}
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
.navRight{
    width: 400px;
    height: 65px;
    display: flex;
    background-color: #4eb8ec;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    color: #fff;
    padding-left: 20px;
    padding-right: 20px;
    div{
        display: flex;
        flex-direction: column;
        .i{
            margin-left: 5px;
            font-size: 16px;
        }
        span{
            cursor: pointer;
        }
    }
    .png{
            margin-right: 5px;
        }

}
</style>