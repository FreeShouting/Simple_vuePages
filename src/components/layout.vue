<template>
  <div>
        <div class="app-head">
          <div class="app-head-inner">
            <router-link :to="{path:'/'}">
            <img src="../assets/logo.png" alt="">
            </router-link>
              <div class="head-nav">
             <ul class="nav-list">
                 <!--<li v-if="username!==''" class="nav-pile">|</li>
               <li   v-if="username!==''"  @click="logClick">退出</li>-->
                <li  v-if="username===''"  @click="logClick">登录</li>
               <li   class="nav-pile">|</li>
              <li    v-if="username===''"  @click="regClick">注册</li>
              <li    class="nav-pile">|</li>
              <li @click="aboutClick">关于</li>
            </ul>
          </div>
        </div>
     </div>
     <div class="app-content">
         <keep-alive>
         <router-view></router-view>
         </keep-alive>
     </div>
     <div class="app-foot">
       <p>@ 2016 finshenal MIT</p>
     </div>
    <my-dialog :is-show="isShowAboutDialog" @on-close="closeDialog('isShowAboutDialog')">
       <p>
         为了今生能与你相遇，我花尽了所有的力气，把满天的相思羽化成桃花雨，只为让你携着春露，踏香而来，等你在桃源深深处，邂逅一场最美的相遇，无悔于今生，无悔于来世。
         为了今生，能与你相遇，从小，我就苦读诗书，勤练琴棋书画，水月伴蒹葭，只等青梅遇到竹马，你会踏韵而来，与你共研一池翰墨，并肩泼墨合诗，牵手缠绵入画，只为与你，遨游墨海，袖手天下。
         为了今生，能与你相遇，我把思念刻进粒粒文字里，让相思成风，化语成景，盛开在每一个必经的路口，即使错过风，错过雨，今生来世，也不会错过你，你一来，便会看到我一树花开。
         今生为了，能遇见你，我笔走龙蛇，衣袂飘飘，历练了狂风暴雨，只等风华遇到雪月，与你相拥兰亭，摘星揽月，听墨唱歌，与你曲水流觞，把酒醉诗，双笔共案，墨就一笺旷世奇缘。
       </p>
    </my-dialog>

    <my-dialog :is-show="isShowLogDialog" @on-close="closeDialog('isShowLogDialog')">
     <log-form @has-log="onSuccessLog"></log-form>
    </my-dialog>

    <my-dialog :is-show=" isShowRegDialog" @on-close="closeDialog('isShowRegDialog')">
      <reg-form></reg-form>
    </my-dialog>


  </div>
</template>

<script>
  import Dialog from './base/Dialog'
  import LogForm from './LogForm'
  import RegForm from './RegForm'
export default {
    components:{
      MyDialog:Dialog,
      LogForm,
      RegForm,
    },
    data(){
      return {
        isShowAboutDialog:false,
        isShowLogDialog:false,
        isShowRegDialog:false,
        username:''
      }
    },//结束
   methods:{
      aboutClick(){
        this.isShowAboutDialog=true
      },
       logClick(){
         this.isShowLogDialog=true

       },
       regClick(){
         this.isShowRegDialog=true
       },
       closeDialog(attr){
        this[attr]=false
     },
     onSuccessLog(data){
       console.log(data)
       this.closeDialog('isShowLogDialog')
       this.username=data.username

     }
   }
}
</script>

<style>
     ol,ul{
       list-style: none;
     }
     table{
       border-collapse: collapse;
       border-spacing: 0;
     }
     a{
       color: inherit;
       border-spacing: 0;
     }
    body{
      background: #f0f2f5;
      font-family: 'Microsoft YaHei';
      font-size: 14px;
      color: #444;
    }
   .app-head{
     background: #363636;
     color: #b2b2b2;
     height: 90px;
     line-height: 90px;
     width: 100%;
   }
   .app-head-inner{
     width: 1200px;
     margin: 0 auto;
   }
    .head-logo{
      float: left;
    }
     .app-head-inner img{
       width: 50px;
       margin-top: 20px;
     }
     .head-nav{
       float: right;
     }
     .head-nav ul{
       overflow: hidden;
     }
     .head-nav ul li{
       cursor: pointer;
       float: left;
     }
   .nav-pile{
     padding:  0 10px;
    }
    .app-foot{
      text-align: center;
      height: 80px;
      width: 100%;
      line-height: 80px;
      background: #e3e4e8;
      clear: both;
      margin-top: 30px;
    }
   .container{
     width: 1200px;
     margin: 0 auto;
   }
   .hr{
     height: 1px;
     width: 100%;
     background-color: #ddd;
   }
  .button{
    background: #4fc08d;
    color: #fff;
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;
  }
  .button:hover{
    background: #4fc08d;
  }


</style>
