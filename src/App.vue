<template>
    <div>
        我是APP组件
    </div>
    <Son :cars="car" @huanche='huanche' />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Son from './compontnes/son.vue'

const car = ref('布加迪')

const huanche = (val: string) => {
    car.value = val
}

</script>

<style lang="scss" scoped>
</style>