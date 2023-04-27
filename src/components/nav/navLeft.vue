<!--  -->
<template>
<div class='navLeft' :style="{ color:color,backgroundColor:bgc,width:width,height:height }">
    <div class="div"><i class="el-icon-sunny"></i><router-link to="/home">首页</router-link></div>
    <div class="div"><router-link to="/login">番剧</router-link></div>
    <div class="div">直播</div>
    <div class="div">游戏中心</div>
    <div class="div">会员购</div>
    <div class="div">漫画</div>
    <div class="div">赛事</div>
    <div class="div">春日</div>
    <div class="div">下载客户端</div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
props:['color','width','height','bgc'],
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
.navLeft{
    width: 400px;
    height: 70px;
    display: flex;
    background-color: #ee7a7a;
    justify-content: space-around;
    align-items: center;
    padding-left:20px;
    padding-right: 20px;
    font-size: 14px;
    cursor: pointer;
    color: #fff;
    div{
      a{
        text-decoration: none;
        color: #fff;
      }
    }
}

</style>