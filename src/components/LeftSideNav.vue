<!--产品浏览页左侧筛选栏-->
<template>
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
                使用环境
            </template>
            <MenuItem name="2-1">Option 1</MenuItem>
            <MenuItem name="2-2">Option 2</MenuItem>
        </Submenu>
        <Submenu name="3">
            <template slot="title">
                <Icon type="ios-analytics"></Icon>
                协议
            </template>
            <MenuItem name="3-1">Option 1</MenuItem>
            <MenuItem name="3-2">Option 2</MenuItem>
        </Submenu>
        <Submenu name="4">
            <template slot="title">
                <Icon type="ios-analytics"></Icon>
                硬件
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