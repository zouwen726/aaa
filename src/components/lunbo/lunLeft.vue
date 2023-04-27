<!--  -->
<template>
<div class='lunLeft'>
    <div class="block">
        <el-carousel height="350px">
            <el-carousel-item v-for="item in png.jpgs" :key="item.id">
                <!-- <h3 class="small">{{ item }}</h3> -->
                <img class="jpg" :src="item.url" alt="">
            </el-carousel-item>
        </el-carousel>
    </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import arr from '../../assets/lunbo.js'
export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
    png:arr
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
.lunLeft{
    width: 500px;
    height: 350px;
    .jpg{
        width: 100%;
        height: 100%;
    }
//     .el-carousel__item h3 {
//     color: #475669;
//     font-size: 14px;
//     opacity: 0.75;
//     line-height: 150px;
//     margin: 0;
//   }

//   .el-carousel__item:nth-child(2n) {
//      background-color: #99a9bf;
//   }
  
//   .el-carousel__item:nth-child(2n+1) {
//      background-color: #d3dce6;
//   }


}

</style>