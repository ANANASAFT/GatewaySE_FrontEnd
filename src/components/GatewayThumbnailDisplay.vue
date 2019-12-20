<template>
	<div>
		<Row :gutter="8" class="row">
			<i-col span="6">
				<gateway-card/>
			</i-col>
			<i-col span="6">
				<gateway-card/>
			</i-col>
			<i-col span="6">
				<gateway-card/>
			</i-col>
			<i-col span="6">
				<gateway-card/>
			</i-col>
		</Row>
		<Row :gutter="8" class="row">
			<i-col span="6">
				<gateway-card/>
			</i-col>
			<i-col span="6">
				<gateway-card/>
			</i-col>
			<i-col span="6">
				<gateway-card/>
			</i-col>
			<i-col span="6">
				<gateway-card/>
			</i-col>
		</Row>
		<Row :gutter="8" class="row">
			<i-col span="6">
				<gateway-card/>
			</i-col>
			<i-col span="6">
				<gateway-card/>
			</i-col>
			<i-col span="6">
				<gateway-card/>
			</i-col>
			<i-col span="6">
				<gateway-card/>
			</i-col>
		</Row>
		<Page align="center" page-size="12" :total="50" show-total />
	</div>
</template>


<script>
	import GatewayCard from "@/components/GatewayCard";
    export default {
        name: "GatewayThumbnailDisplay",
        components: {GatewayCard}
    }
</script>

<style scoped>
.row{
	margin-bottom: 10px;
}
</style>