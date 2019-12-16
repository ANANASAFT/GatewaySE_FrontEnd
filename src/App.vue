<template>
	<div id = "app">
		<Header/>
		<Breadcrumb/>
		<b-container class="bv-example-row" fluid>
			<b-row align-h="start">
				<b-col cols="2">
					<LeftSideNav/>
				</b-col>
				<b-col cols="10">
					<GatewayThumbnailDisplay/>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script>
    import Header from './components/Header.vue'
	import GatewayThumbnailDisplay from "@/components/GatewayThumbnailDisplay";
    import Breadcrumb from "@/components/Breadcrumb";
    import LeftSideNav from "@/components/LeftSideNav";
    export default {
        name: 'app',
        components: {
            LeftSideNav,
            Breadcrumb,
			Header,
			GatewayThumbnailDisplay
        }
    }
</script>

<style>

</style>
