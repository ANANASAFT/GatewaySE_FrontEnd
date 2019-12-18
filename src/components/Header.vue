<template>
<!--	<div>-->
<!--		<b-navbar toggleable="sm" type="dark" variant="dark">-->
<!--			<b-navbar-brand href="#">网关智能分析引擎</b-navbar-brand>-->
<!--			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>-->

<!--			<b-collapse id="nav-collapse" is-nav>-->
<!--				<b-navbar-nav class="ml-auto">-->
<!--					<b-nav-form>-->
<!--						<b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>-->
<!--						<b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>-->
<!--					</b-nav-form>-->

<!--					<b-nav-item-dropdown text="Lang" right>-->
<!--						<b-dropdown-item href="#">EN</b-dropdown-item>-->
<!--						<b-dropdown-item href="#">ES</b-dropdown-item>-->
<!--						<b-dropdown-item href="#">RU</b-dropdown-item>-->
<!--						<b-dropdown-item href="#">FA</b-dropdown-item>-->
<!--					</b-nav-item-dropdown>-->

<!--					<b-nav-item-dropdown right>-->
<!--						&lt;!&ndash; Using 'button-content' slot &ndash;&gt;-->
<!--						<template v-slot:button-content>-->
<!--							<em>User</em>-->
<!--						</template>-->
<!--						<b-dropdown-item href="#">Profile</b-dropdown-item>-->
<!--						<b-dropdown-item href="#">Sign Out</b-dropdown-item>-->
<!--					</b-nav-item-dropdown>-->
<!--				</b-navbar-nav>-->
<!--			</b-collapse>-->
<!--		</b-navbar>-->
<!--	</div>-->
	<Row>
		<i-col span="16">
			<Menu mode="horizontal" theme="dark" active-name="1">
				<MenuItem name="1" style="font-size: 25px;color: white" >
					智能网关分析引擎
				</MenuItem>
				<MenuItem name="2">
					<Icon type="ios-people" />
					用户管理
				</MenuItem>
				<MenuItem name="3">
						<Icon type="ios-stats" />
						统计分析
				</MenuItem>
				<MenuItem name="4">
					<Icon type="ios-construct" />
					综合设置
				</MenuItem>
			</Menu>
		</i-col>
		<i-col span="8">
			<row>
				<i-col span="14">
					<Input style="width: 240px" icon="ios-search-outline" />
				</i-col>
				<i-col span="6">
					<Button type="text" style="background: white">搜索产品</Button>
				</i-col>
				<i-col span="4">
					<Avatar icon="ios-person" />
				</i-col>
			</row>
		</i-col>
	</Row>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

</style>