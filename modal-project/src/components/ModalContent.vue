<template>
<!-- clck.self 只有點到backdrop的區域時才會觸發 -->
    <div class="backdrop" @click.self="closeModal"> 
        <div class="modal" :class="{ dark :theme ==='dark-mode'}">
            
            <p> {{someProp}}</p>
            <slot></slot>
            <slot name="linkslinks"></slot>
        </div>
    </div>
</template>

<style scoped>
.modal{
    width: 400px;
    padding: 20px;
    margin: 100px auto;
    background: white;
    border-radius: 10px;
}

.backdrop{
    top: 0;
    position: fixed;
    background: rgba(0,0,0,0.5);
    width: 100%;
    height: 100%
}

.dark {
    /* background-color: black; */
    color: black;
}
</style>

<script>
export default {
    props:['someProp','theme'],
    data(){
        
    },methods:{
        closeModal(){
            this.$emit('closecloseclose')
        }

    }
}
</script>


