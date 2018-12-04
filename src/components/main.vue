<template>
	<div class="framePage">
		<transition name="slide-fade">
			<router-view class="nav-slide-item"></router-view>
		</transition>
		<nav-tab></nav-tab>
	</div>
</template>

<script>
	import navTab from "./Navbar.vue"
	export default {
		components: {
			navTab
		}
	}
</script>

<style>
	.framePage {
		width: 100%;
		height: 100%;
	}
	
	.nav-slide-item {
		position: relative;
		width: 100%;
		height: calc(100% - 0.5rem);
		overflow: auto;
	}
	
	.slide-fade-enter-active {
		transition: all 0.3s ease;
	}
	
	.slide-fade-leave-active {
		transition: all 0.3s cubic-bezier(1.0, 0.5, 0.8, 1.0)
	}
	
	.slide-fade-enter-active,
	.slide-fade-leave-active {
		transform: translateX(-430px);
		opacity: 0
	}
</style>