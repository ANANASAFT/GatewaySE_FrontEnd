<template>
	<b-container class= "bv-example-row" fluid>
		<b-row >
			<b-col cols="4" >
				<gateway-card/>
			</b-col>
			<b-col cols="4">
				<gateway-card/>
			</b-col>
			<b-col cols="4">
				<gateway-card/>
			</b-col>
		</b-row>
		<br/>
		<b-row  align-h="left">
			<b-col cols="4" >
				<gateway-card/>
			</b-col>
			<b-col cols="4">
				<gateway-card/>
			</b-col>
			<b-col cols="4">
				<gateway-card/>
			</b-col>
		</b-row>
	</b-container>
</template>


<script>
	import GatewayCard from "@/components/GatewayCard";
    export default {
        name: "GatewayThumbnailDisplay",
        components: {GatewayCard}
    }
</script>

<style scoped>

</style>