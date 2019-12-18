<template>
<!--	<div id = "app">-->
<!--		<Header/>-->
<!--		<Breadcrumb />-->
<!--		<b-container class="bv-example-row" fluid>-->
<!--			<b-row align-h="start">-->
<!--				<b-col cols="2">-->
<!--					<LeftSideNav/>-->
<!--				</b-col>-->
<!--				<b-col cols="10">-->
<!--					<GatewayThumbnailDisplay/>-->
<!--				</b-col>-->
<!--			</b-row>-->
<!--		</b-container>-->
<!--	</div>-->
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
							<gateway-thumbnail-display/>
						</Content>
					</Layout>
				</Content>
			</Layout>
			<Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
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
