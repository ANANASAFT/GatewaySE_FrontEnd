<template>
    <div class="layout" id="app">
        <Layout>
            <Header>
                <MyHeader/>
            </Header>
            <Layout :style="{padding: '0 10px'}">
                <MyBreadcrumb/>
                <Content :style="{padding: '24px 0', minHeight: '280px', background: '#fff'}">
                    <Layout>
                        <Sider hide-trigger :style="{background: '#fff'}">
                            <left-side-nav/>
                        </Sider>
                        <Content :style="{padding: '24px', minHeight: '280px',maxHeight:'800px', background: '#fff'}">
                            <gateway-thumbnail-display :products = 'products'/>
                        </Content>
                    </Layout>
                </Content>
            </Layout>
            <Footer class="layout-footer-center">2019-2020 &copy; ANANASAFT</Footer>
        </Layout>
    </div>
</template>

<script>
    import MyHeader from './components/Header.vue'
    import GatewayThumbnailDisplay from "@/components/GatewayThumbnailDisplay";
    import MyBreadcrumb from "@/components/Breadcrumb";
    import LeftSideNav from "@/components/LeftSideNav";
    export default {
        name: 'app',
        components: {
            LeftSideNav,
            MyBreadcrumb,
            MyHeader,
            GatewayThumbnailDisplay
        },
        computed:{

        },
        data(){
            return {
                products: []
            }
        },
        methods:{
            getAllProducts(){
                fetch('http://toon.vipgz2.idcfengye.com/api/product/all',{method:'get'})
                    .then((response)=>{
                        // console.log(response.json());
                        return response.json();
                    })
                    .then((data)=>{
                        // console.log(data);
                        this.products = data.data
                    })
            }
        },
        mounted() {
            this.getAllProducts()
        }
    }
</script>

<style>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    }
    .layout-footer-center{
        text-align: center;
    }
</style>
