<template>
<!--    <div class="nav flex-column nav-pills nav-tabs" id="v-pills-tab" role="tablist" aria-orientation="vertical">-->
<!--        <b-nav-item-->
<!--                class="shadow-sm border border-light rounded nav-item"-->
<!--                :active = "selectedCategory==1"-->
<!--                @click="selectCategory(1)"-->
<!--        >-->
<!--            品牌-->
<!--        </b-nav-item>-->
<!--        <div-->
<!--            v-if = "selectedCategory==1"-->
<!--            ref="brandSquares"-->
<!--        >-->
<!--            <b-nav fill >-->
<!--                <BrandSquare-->
<!--                    class="brands"-->
<!--                    v-for="brand in brands"-->
<!--                    :key="brand.id"-->
<!--                    :brand="brand"-->
<!--                    :selected-brands="selectedBrands"-->
<!--                />-->
<!--            </b-nav>-->
<!--        </div >-->
<!--        <b-nav-item-->
<!--                class="shadow-sm border border-light rounded nav-item"-->
<!--                :active = "selectedCategory==2"-->
<!--                @click="selectCategory(2)"-->
<!--        >-->
<!--            适用场景-->
<!--        </b-nav-item>-->
<!--        <b-nav-item-->
<!--                class="shadow-sm border border-light rounded nav-item"-->
<!--                :active = "selectedCategory==3"-->
<!--                @click="selectCategory(3)"-->
<!--        >-->
<!--            协议-->
<!--        </b-nav-item>-->
<!--    </div>-->
    <Menu theme="light" width="auto" :active-name="2" :open-names="['1']">
        <Submenu name="1">
            <template slot="title">
                <Icon type="ios-keypad"></Icon>
                网关品牌
            </template>
            <Row>
                <i-col v-for="brand in brands"
                        :key="brand.id"
                        span="12">
                    <brand-square
                        :brand="brand"
                        :selected-brands="selectedBrands"
                        @on-change="selectedBrandsChanged"
                    />
                </i-col>
            </Row>
        </Submenu>
        <Submenu name="2">
            <template slot="title">
                <Icon type="ios-navigate"></Icon>
                Item 2
            </template>
            <MenuItem name="2-1">Option 1</MenuItem>
            <MenuItem name="2-2">Option 2</MenuItem>
        </Submenu>
        <Submenu name="3">
            <template slot="title">
                <Icon type="ios-analytics"></Icon>
                Item 3
            </template>
            <MenuItem name="3-1">Option 1</MenuItem>
            <MenuItem name="3-2">Option 2</MenuItem>
        </Submenu>
    </Menu>
</template>

<script>
    import BrandSquare from "@/components/BrandSquare";
    export default {
        name: "LeftSideNav",
        data:function(){
            return{
                selectedBrands: [], //储存选择的品牌对象
                brands:[            //展示的品牌按钮
                  {id:1, name:"Anybus"},
                  {id:2, name:"万创科技"},
                  {id:3, name:"纵横智控"},
                  {id:4, name:"繁易科技"},
]
          }
        },
        props:[
            'getAllProducts',
            'clearProducts'
        ],  //从app传来的两个数据检索方法
        components:{
            BrandSquare,
        },
        methods:{
            selectedBrandsChanged(){        //当子组件按钮被点击时回调该方法
                if(this.selectedBrands.length==0){
                    this.getAllProducts()
                }else{
                    this.clearProducts()
                }
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