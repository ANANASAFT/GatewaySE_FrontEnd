<template>
    <Button style="margin: 2px;width: 90px"
        :type="curType"
        @click="brandClicked(brand.id)"
    >
        {{brand.name}}
    </Button>
</template>

<script>
    export default {
        name: "BrandSquare",
        data(){
            return{
                curType:"default"
            }
        },
        methods:{
            brandClicked(brandId){//选中或取消某个品牌
                var index = this.selectedBrands.indexOf(brandId);
                if(index==-1){
                    this.selectedBrands.push(brandId);
                    this.curType = "primary";
                }else{
                    this.selectedBrands.splice(index,1);
                    this.curType = "default";
                }
                console.log(this.selectedBrands);
            }
        },
        props:{
            selectedBrands:Array,
            brand:Object,
        },
    }
</script>

<style scoped>
    span{
        color: black;
        font-size: 14px;
    }
</style>