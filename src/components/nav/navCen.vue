<!--  -->
<template>
<div class='navCen' :style="{width:width,height:height,backgroundColor:bgc}">
    <div class="div1" ><div class="ipt"><input type="text" placeholder="vue"><i class="el-icon-zoom-in i"></i></div> </div>
    <div class="div2"><div class="login"><router-link to="/login">登录</router-link></div></div>
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
.navCen{
    width: 400px;
    height: 65px;
    background-color: #f28d8d;
    display: flex;
    align-items: center;
    .div1{
        flex: 3;
        display: flex;
        .ipt{
            width: 90%;
            margin-left: 40px;
            input{
                width: 90%;
                height: 35px;
                padding-left: 10px;
                border-radius: 20px;
                border: none;
                outline: none;
            }
            .i{
                margin-left: -30px;
                cursor: pointer;
            }
        }
    }
    .div1:hover{
        opacity: .8;
    }
    .div2{
           flex: 1;
            .login{
                width: 50px;
                height: 50px;
                border-radius: 25px;
                line-height: 50px;
                text-align: center;
                background-color: skyblue;
                margin-left: 20px;
            }
            a{
                text-decoration: none;
                color: #ffff;
                cursor: pointer;
            }
    }
   
}



</style>