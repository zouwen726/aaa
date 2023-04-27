<!--  -->
<template>
<div class='nav'>
    <NavLeft color="#fff" width="500px" height="65px" bgc="red"></NavLeft>
    <NavCen color="#fff" width="400px" height="65px" bgc="#fddd9b"></NavCen>
    <NavRight color="#fff" width="460px" height="65px"></NavRight>
    <div class="png">
        <img src="../../../public/img/logo.png" alt="">
    </div>
    <!-- <img src="../../../public/img/01.webp" alt=""> -->
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import NavLeft  from'./navLeft.vue'
import NavCen  from'./navCen.vue'
import NavRight  from'./navRight.vue'
export default {
//import引入的组件需要注入到对象中才能使用
components: {NavLeft,NavCen,NavRight},
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
.nav{
    position: relative;
    width: 100%;
    height: 160px;
    display: flex;
    background-color: #8bd942;
    background-image: url('../../../public/img/01.webp');
    .png{
       
        position: absolute;
        // position: fixed;
        top: 70px;
        left: 100px;
        img{
            width: 150px;
        }
    }
    // img{
    //     position: absolute;
    //     width: 100%;
    //     height: 100%;
    // }
}

</style>