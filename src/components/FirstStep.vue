<template>
    <label for="service-type">Service type</label>
    <input type="radio" id="service" name="service" v-model="service"/>
</template>

<script>
export default {
    data() {
        return {
            service: '',
        }
    }
}
</script>