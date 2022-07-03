<template>
    <div>
        <hr>
        我是子组件
        这是我的车子{{ cars }}
    </div>
    <button @click="hClick">点我换车</button>
</template>

<script setup lang="ts">
// JS
// defineProps({
//     cars:{type:String,required:true}
// })

// TS 写法
// type propsType = {
//     cars:String
// }
const { cars } = defineProps<{
    cars?: String
}>()
console.log(cars);


// 子传父------------------------------------------
// JS
// const eimt = defineEmits(['huanche'])
// const hClick = () => {
//     eimt('huanche','科尼赛克')
// }

// TS
const emit = defineEmits<{
    // xingcan 表示形参,自定义的
    (e: 'huanche', xingcan: string): void
}>()
const hClick = () => {
    emit('huanche', '科尼赛克')
}


</script>

<style lang="scss" scoped>
</style>