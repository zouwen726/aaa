<!--  -->
<template>
<div class='hotCen'>
   <div class="box">
    <div class="div" v-for="item in items.navs" :key="item.id">{{ item.name }}</div>
    
   </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import obj from '../../assets/lunbo.js'
export default {
//import引入的组件需要注入到对象中才能使用

components: {},
data() {
//这里存放数据
return {
    // list:22,
    items:obj
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
.hotCen{
    width: 800px;
    height: 100px;
    // display: grid;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #49e21f;
    // grid-template-columns: repeat(11,1fr);
    // gap: 10px;
    .box{
        width: 95%;
        height: 70%;
        display: grid;
        grid-template-columns: repeat(11,1fr);
        background-color: #fff;
        gap: 10px;
        div{
            border-radius: 3px;
            background-color: #b7ec5a;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
        }
    }
   
}

</style>