<!--  -->
<template>
<div class='item'>
    <div class="div" >
      <div class="img"></div>
      <div class="txt">
        动漫给予了我们从未有过的人生
      </div>
      <div class="author ">血小板゚゚゚゚゚゚4-7</div>
    </div>
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
.item{
    // height: 100%;
//   display: flex;
//   justify-content: space-between;
//   align-content: space-between;
//   flex-wrap: wrap;
    // display: grid;
    // grid-template-columns: repeat(3,1fr);
  .div{
    // width: 250px;
    height: 170px;
    background-color: #f2f27d;
    .img{
      width: 100%;
      height: 120px;
      background-color: #93e430;
    }
    .txt{
      font-size: 14px;
      font-weight: bold;
    }
    .author{
      font-size: 12px;
      margin-top: 10px;
    }
}
}

</style>