<!--  -->
<template>
<div class='hot margin top'>
    <hotLeft>222</hotLeft>
    <hotCen></hotCen>
    <hotRight></hotRight>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import hotLeft from '../../components/hot/hotLeft.vue'
import hotRight from '../../components/hot/hotRight.vue'
import hotCen from '../../components/hot/hotCen.vue'
export default {
//import引入的组件需要注入到对象中才能使用
components: {hotLeft,hotRight,hotCen},
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
@import url('../../assets/css//home.css');
.hot{
    width: 100%;
    display: flex;
    // height: 350px;
    // background-color: #de5d5d;
}

</style>