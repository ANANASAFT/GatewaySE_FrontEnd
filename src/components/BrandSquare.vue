<template>
    <b-nav-item
        :class="{'shadow-sm rounded':true,'bg-secondary':selectedBrands.indexOf(brand.id)!=-1}"
        @click="brandClicked(brand.id)"
    >
        <span>
            {{brand.name}}
        </span>
    </b-nav-item>
</template>

<script>
    export default {
        name: "BrandSquare",
        data(){
            return{
            }
        },
        methods:{
            brandClicked(brandId){//选中或取消某个品牌
                var index = this.selectedBrands.indexOf(brandId);
                if(index==-1){
                    this.selectedBrands.push(brandId);
                }else{
                    this.selectedBrands.splice(index,1);
                }
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