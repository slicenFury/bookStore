<template>
	<div class='nav-tabs'>
		<ul>
			<li>
				<router-view :to="{name:'myBook'}">
					<div><img src="../../build/logo.png"></div>
					<div>书架</div>
				</router-view>
				<router-view :to="{name:'shopping'}">
					<div><img src="../../build/logo.png"></div>
					<div>首页</div>
				</router-view>
				<router-view :to="{name:'setting'}">
					<div><img src="../../build/logo.png"></div>
					<div>我的</div>
				</router-view>
			</li>
		</ul>

	</div>
</template>

<script>
	export default{
		name:'navTab'
	}
</script>

<style lang="scss">
</style>