<!--  -->
<template>
<div class='hotRight'>
    <div class="div"><i class="el-icon-share"></i>专栏</div>
    <div class="div"><i class="el-icon-info"></i>活动</div>
    <div class="div"><i class="el-icon-circle-plus"></i>社区中心</div>
    <div class="div"><i class="el-icon-help"></i>直播</div>
    <div class="div"><i class="el-icon-headset"></i>课堂</div>
    <div class="div"><i class="el-icon-heavy-rain"></i>新歌热榜</div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
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
.hotRight{
    width: 300px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    font-size: 14px;
    background-color: #c2dc30;
    justify-content: space-around;
    div{
      width: 30%;
      height: 30px;
      background-color: #c14d4d;
      // align-items: center;
      line-height: 30px;
      text-align: center;
      cursor: pointer;
    }
}

</style>