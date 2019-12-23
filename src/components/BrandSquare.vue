<template>
    <Button style="margin: 2px;width: 90px"
        :type="curType"
        @click="brandClicked(brand)"
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
            brandClicked(brand){//选中或取消某个品牌
                var index = this.selectedBrands.indexOf(brand);
                if(index==-1){
                    this.selectedBrands.push(brand);
                    this.curType = "primary";
                }else{
                    this.selectedBrands.splice(index,1);
                    this.curType = "default";
                }
                this.$emit('on-change');    //产生回调事件
                // console.log(this.selectedBrands);
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