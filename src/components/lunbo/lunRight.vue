<!--  -->
<template>
<div class='lunRight'>
    <item v-for="item in num" :key="item"></item>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import item from '../lunbo/item.vue'
export default {
//import引入的组件需要注入到对象中才能使用
components: {item},
data() {
//这里存放数据
return {
    num:6
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
.lunRight{
    width: 850px;
    height: 350px;
    margin-left: 20px;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    justify-content: space-around;
    gap: 10px;
    // align-items: ;
    // align-content: space-between;
    // gap: 10px 10px;
    background-color: #e56969;
}

</style>