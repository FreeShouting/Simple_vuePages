<template>
     <div>
        <div class="dialog-wrap" v-if="isShow">
           <div class="dialog-cover" @click="closeMyself"></div>
           <div class="dialog-content">
             <p class="dialog-close" @click="closeMyself">x</p>
              <slot>empty</slot>
           </div>
        </div>
     </div>
</template>

<script>
     export default {
       props:{
         isShow:{
           type:Boolean,
           default:false
         }
       },//结束
       data(){
         return {
         }
       },
       methods:{
         closeMyself(){
           this.$emit('on-close')
         }
       },
     }
</script>

<style>
   .drap-enter-active{
     transition: all .5s ease;
   }
  .drap-leave-active{
    transition: all .3s ease;
  }
  .drap-enter{
    transform: translatey(-500px);
  }
  .drap-leave-active{
    transform: translateY(-500px);
  }
  .dialog-wrap{
    position: fixed;
    height: 100%;
    width: 100%;
  }
  .dialog-cover{
    background: #000;
    opacity: .3;
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
  .dialog-content{
    width: 50%;
    position: fixed;
    max-height: 50%;
    overflow: auto;
    background: #fff;
    top: 20%;
    left: 50%;
    margin-left: -25%;
    z-index: 10;
    border: 2px solid #464068;
    padding: 2%;
    line-height: 1.6;
  }
  .dialog-close{
    position: absolute;
    right: 5px;
    top: 4px;
    width: 20px;
    height: 20px;
    text-align: center;
    cursor: pointer;
  }



</style>
