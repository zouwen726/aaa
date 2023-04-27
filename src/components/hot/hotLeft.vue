<!--  -->
<template>
<div class='hotLeft' >
    <div ><span class="circle" style="background-color: #ff9212;"><i class="el-icon-aim i"></i></span> 动态</div>
    <div ><span class="circle" style="background-color: #f07775;"><i class="el-icon-lightning i"></i></span>热门</div>
    <div ><span class="circle" style="background-color: #59ca73;"><i class="el-icon-ship i"></i></span>频道</div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
// import pngs from '../../assets/lunbo.js'
export default {
    props:['width','height'],
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
//@import url(); 引入公共c
.hotLeft{
    width: 300px;
    height: 100px;
    background-color: #e08989;
    display: flex;
    justify-content: space-around;
    align-items: center;
    
    div{
        width: 70px;
        height: 70px;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 14px;
        .circle{
            width: 50px;
            height: 50px;
            border-radius: 25px;
            background-color: #e26161;
            line-height: 50px;
            text-align: center;
            font-size: 24px;
            color: #fff;
            margin-bottom: 4px;
        }
        .i{
            cursor: pointer;
        }
    }
}
</style>