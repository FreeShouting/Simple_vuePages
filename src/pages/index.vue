<template>
    <div class="index-wrap">
          <div class="index-left">
            <div class="index-left-block">
               <h2>全部产品</h2>
                 <template v-for="product in productList">
                <h3>{{ product.title }}</h3>
                 <ul>
                 <li v-for="item in product.list">
                     <a :href="item.url">{{ item.name }}</a>
                   <span v-if="item.hot" class="hot-tag">HOT</span>
                   </li>
                 </ul>
              <div v-if="!product.last" class="hr"></div>
               </template>
            </div>
            <div class="index-left-block lastest-news">
              <h2>最新消息</h2>
              <ul>
              <li v-for="item in newsList">
                  <a :href="item.url">{{ item.title}}</a>
                </li>
              </ul>
            </div>
          </div>
         <div class="index-right">
             <slide-show :slides="slides" :inv="slideSpeed"></slide-show>
               <div class="index-board-list">
                 <div class="index-board-item" v-for="(item,index) in boardList"
                 :class="[{'line-last' : index%2!==0 },
                   'index-board-'+item.id]">
                      <div class="index-board-item-inner">
                         <h2>{{ item.title }}</h2>
                         <p>{{ item.description }}</p>
                        <div class="index-board-button">
                          <a href="" class="button">立即购买</a>
                        </div>
                      </div>
                 </div>
               </div>
         </div>
     </div>
</template>

<script>
  import slideShow from '../components/slideShow'
  export default {
      /*引入子组件slideShow*/
      components:{
        slideShow
      },
    //发送数据请求的部分
  /*  created:function () {
         this.$http.get('getlist')
           .then(function (data) {
             console.log(data)
           },function (err) {
             console.log(err)
           })
       },*/
  //数据的部分
    data() {
      return {
         //幻灯片的部分开始书写
           slides:[
                     {
                      src:require('../assets/slideShow/pic1.jpg'),
                       title:'xxx1',
                       href:'detail/analysis'
                     },
                     {
                       src:require('../assets/slideShow/pic2.jpg'),
                       title:'xxx2',
                       href:'detail/count'
                     },
                     {
                       src:require('../assets/slideShow/pic3.jpg'),
                       title:'xxx3',
                       href:'detail/forecast'
                     },
                     {
                       src:require('../assets/slideShow/pic4.jpg'),
                       title:'xxx4',
                       href:'detail/public'
                     },
                 ],

          boardList:[
                      {
                        title:'开放产品',
                        description:'开放产品是一款开放产品',
                        saleout:false,
                        id:'car'
                      },
                      {
                        title:'品牌营销',
                        description:'开放产品是一款开放产品',
                         id:'earth',
                        saleout:false
                      },
                      {
                        title:'使命必达',
                        description:'开放产品是一款开放产品',
                        saleout:true,
                        id:"loud"
                      },
                      {
                        title:'永攀高峰',
                        description:'开放产品是一款开放产品',
                        saleout:true,
                        id:"mouten"
                      }
                  ],
        //新闻列表开始书写
        newsList:[
                    {
                     title:'91助手',
                      url:'http://wenxin.com'
                    },
                    {
                      title:'产品助手',
                      url:'http://twitter.com'
                    },
                    {
                      title:'智能地图',
                      url:'http://maps.com',
                      hot:true
                    },
                    {
                      title:'团队语音',
                      url:'http://phone.com'
                    },
                 ],
        //产品列表的数据
       productList:{
         pc:{
            'title':'PC产品',
           list:[
                   {
                     name:'数据统计',
                     url:'http://starcraft.com'
                   },
                   {
                     name:'数据预测',
                     url:'http://warcraft.com'
                   },
                   {
                     name:'流量分析',
                     url:'http://overcraft.com',
                     hot:true
                   },
                   {
                     name:'广告发布',
                     url:'http://hearstone.com'
                   },
                ]
             },
         app:{
           'title':'手机应用类',
            last:true,
           list:[
                   {
                     name:'91助手',
                     url:'http://wenxin.com'
                   },
                   {
                     name:'产品助手',
                     url:'http://twitter.com'
                   },
                   {
                     name:'智能地图',
                     url:'http://maps.com',
                     hot:true
                   },
                   {
                     name:'团队语音',
                     url:'http://phone.com'
                   },
                 ]
              },
         },
         //productList的列表结束
       }
    }

}
</script>

<style>
 .index-wrap{
     margin: 0 auto;
     width: 1200px;
     overflow: hidden;
   }
  .index-left{
    float: left;
    width: 300px;
    text-align: left;
  }
   .index-right{
     float: left;
     width: 900px;
   }
   .index-left-block{
     margin: 15px;
     background: #fff;
     box-show:0 0 1px #ddd
   }
  .index-left-block .hr{
    margin-bottom: 20px;
  }
  .index-left-block h2{
    background: #4fc08d;
    color: #fff;
    padding: 10px 15px;
    margin-bottom: 20px;
  }
  .index-left-block h3{
    padding:  0 15px 5px 15px;
    font-weight: bold;
     color: #222;
  }
   .index-left-block ul{
     padding: 10px 15px;
   }
  .index-left-block li{
    padding: 5px;
  }
 .index-left-block li a{
   text-decoration: none;
 }

   .index-left-list{
     overflow: hidden;
   }
  .index-board-item{
    float: left;
    width: 400px;
    background: #fff;
    box-shadow: 0 0 1px #ddd;
    padding: 10px;
    margin-right: 20px;
    margin-bottom: 20px;
  }
  .index-board-item-inner{
    min-height: 125px;
    padding-left: 120px;
  }
  .index-board-car .index-board-item-inner{
    background: url("../assets/images/1.png") no-repeat;
  }
   .index-board-earth .index-board-item-inner{
     background: url("../assets/images/2.png")  no-repeat;
   }
   .index-board-loud .index-board-item-inner{
     background: url("../assets/images/3.png")  no-repeat;
   }
   .index-board-mouten .index-board-item-inner{
     background: url("../assets/images/4.png")  no-repeat;
   }
   .index-board-item h2{
     font-size: 18px;
     font-weight: bold;
     color: #000;
     margin-bottom: 15px;
   }
  .line-last{
    margin-left: 0;
  }
  .index-board-button{
    margin-top: 20px;
  }
 .index-board-button a{
   text-decoration: none;
 }
  .lastest-news{
    min-height: 512px;
  }
  .hot-tag{
    background: red;
    color: #fff;
  }
</style>
