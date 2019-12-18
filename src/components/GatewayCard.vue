<template>
<!--	<b-card class="shadow-sm bg-white rounded">-->
<!--		<p class="text-center">-->
<!--			<img src="../assets/gateway.png" style="width: 200px; height: 150px;"  alt="Image">-->
<!--		</p>-->
<!--		<b-card-body>-->
<!--			<b-card-title style="font-size: 20px; color: dodgerblue">InRouter615-S 工业LTE路由器</b-card-title>-->
<!--			<b-card-text>-->
<!--				稳定、易用、安全的4G工业路由器<br/>-->
<!--				5网口、VPN、WiFi、双SIM卡<br/>-->
<!--			</b-card-text>-->
<!--		</b-card-body>-->
<!--	</b-card>-->
	<Card class="product" width="auto">
		<div style="text-align:center">
			<img src="../assets/gateway.png" style="width: auto;height: 150px">
			<p class="title">工业LTE路由器</p>
			<p>稳定、易用、安全的4G工业路由器</p>
			<p>5网口、VPN、WiFi、双SIM卡</p>
		</div>
	</Card>
</template>

<script>
    export default {
        name: "GatewayCard"
    }
</script>

<style scoped>
	.product{
		box-shadow:2px 2px 2px darkgrey;
	}
	.title{
		color: dodgerblue;
		font-size: 20px;
	}
</style>