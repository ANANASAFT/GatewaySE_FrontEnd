<!--网关展示区块主题组件-->
<template>
    <div v-if="products.length>0">
        <Row v-for="i in 3"
             :key = i
             :gutter="8" class="row">
            <i-col v-for="j in 4"
                   :key = j
                   span="6">
                <gateway-card :product = "(12*(currentPage-1)+(i-1)*4+j-1) < products.length ? products[12*(currentPage-1)+(i-1)*4+j-1] : null"/>
            </i-col>
        </Row>
    </div>
</template>


<script>
    import GatewayCard from "@/components/GatewayCard";
    export default {
        name: "GatewayThumbnailDisplay",
        components: {GatewayCard},
        data(){
            return{
                // currentPage:Number
            }
        },
        methods:{
          // getPage(page){
          //     this.currentPage = page;
          // }
        },
        props:{
            products:{
                type:Array,
                default(){
                    return [];
                }
            },
            currentPage:{
                type:Number,
                default(){
                    return 1;
                }
            }
        }
    }
</script>

<style scoped>
    .row{
        margin-bottom: 10px;
    }
</style>