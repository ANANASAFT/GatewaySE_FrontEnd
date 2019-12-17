<template>
    <div class="nav flex-column nav-pills nav-tabs" id="v-pills-tab" role="tablist" aria-orientation="vertical">
        <b-nav-item
                class="shadow-sm border border-light rounded nav-item"
                :active = "selectedCategory==1"
                @click="selectCategory(1)"
        >
            品牌
        </b-nav-item>
        <div
            v-if = "selectedCategory==1"
            ref="brandSquares"
        >
            <b-nav fill >
                <BrandSquare
                    class="brands"
                    v-for="brand in brands"
                    :key="brand.id"
                    :brand="brand"
                    :selected-brands="selectedBrands"
                />
            </b-nav>
        </div >
        <b-nav-item
                class="shadow-sm border border-light rounded nav-item"
                :active = "selectedCategory==2"
                @click="selectCategory(2)"
        >
            适用场景
        </b-nav-item>
        <b-nav-item
                class="shadow-sm border border-light rounded nav-item"
                :active = "selectedCategory==3"
                @click="selectCategory(3)"
        >
            协议
        </b-nav-item>
    </div>
</template>

<script>
    import BrandSquare from "@/components/BrandSquare";
    export default {
        name: "LeftSideNav",
        data:function(){
            return{
                selectedCategory:null,
                selectedBrands: [],
                brands:[
                  {id:1, name:"Nexcom"},
                  {id:2, name:"万创科技"},
                  {id:3, name:"锐捷科技"},
                  {id:4, name:"繁易科技"},
]
          }
        },
        components:{
            BrandSquare,
        },
        methods:{
            selectCategory(index){//选中某个类别
                this.selectedCategory = index;
            }
        }
    }
</script>

<style scoped>
    .nav-item{
        margin-bottom: 5px;
    }
    .brands{
        margin: 2px;
    }
</style>