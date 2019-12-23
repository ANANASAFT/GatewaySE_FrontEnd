<!--网关展示卡片组件-->
<template>
    <Card v-if="product!=null" class="product" width="auto" >
        <div style="text-align:center">
            <img src="../assets/gateway.png" style="width: auto;height: 150px">
            <p class="title">{{this.product.model}}</p>
            <h3>{{this.product.brand}}</h3>
            <p>{{this.product.industrialGrade}}</p>
            <p>{{this.product.description.slice(0,70)}}...</p>
        </div>
    </Card>
</template>

<script>
    export default {
        name: "GatewayCard",
        props: {
            product: {
                type: Object,
                default() {
                    return null;
                }
            }
        }
    }
</script>

<style scoped>
    .product {
        box-shadow: 2px 2px 2px darkgrey;
        height: 350px;
    }
    .title{
        color: dodgerblue;
        font-size: 20px;
    }
</style>