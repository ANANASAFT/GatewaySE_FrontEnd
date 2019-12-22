<template>
    <div v-if="products.length>0">
        <Row v-for="i in 3"
             :key = i
             :gutter="8" class="row">
            <i-col v-for="j in 4"
                   :key = j
                   span="6">
                <gateway-card :product = 'products[(i-1)*4+j-1]'/>
            </i-col>
        </Row>
        <Page :on-change="getPage" align="center" :total="50" show-total />
    </div>
</template>


<script>
    import GatewayCard from "@/components/GatewayCard";
    export default {
        name: "GatewayThumbnailDisplay",
        components: {GatewayCard},
        data(){
            return{
                currentPage:2
            }
        },
        methods:{
          getPage(page){
              alert(page);
          }
        },
        props:{
            products:Array
        }
    }
</script>

<style scoped>
    .row{
        margin-bottom: 10px;
    }
</style>