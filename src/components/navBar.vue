<template>
	<div class='nav-tabs'>
		<ul>
			<li>
				<router-link :to="{name:'myBook'}">
					<div class="bottomBtn mybook">书架</div>
				</router-link>
			</li>
			<li>
				<router-link :to="{name:'shopping'}">
					<div class="bottomBtn store">书城</div>
				</router-link>
			</li>
			<li>
				<router-link :to="{name:'setting'}">
					<div class="bottomBtn setting">设置</div>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'navTab'
	}
</script>

<style lang="scss">
	.nav-tabs {
		position: absolute;
		bottom: 0px;
		width: 100%;
	}
	
	ul {
		overflow: hidden;
		margin: 0px;
		padding: 0px;
	}
	
	.nav-tabs li {
		list-style-type: none;
		float: left;
		width: 33.33%;
		a{
			text-decoration: none;
			font-size: 0.14rem;
		}
	}
	.bottomBtn{
	    text-align: center;
	    text-decoration: none;
	    background-repeat: no-repeat;
	    background-position: 50% 0;
	    height: 0.5rem;
	    padding-top: 0.3rem;
	    box-sizing: border-box;
	}
	.nav-tabs li a{
		.mybook{
			background-image: url(img/btn/ic_book.png);
		}
		.store{
			background-image: url(img/btn/ic_store.png);
		}
		.setting{
			background-image: url(img/btn/ic_person.png);
		}
	}
	.nav-tabs li a.active{
		.mybook{
		background-image: url(img/btn/ic_book_p.png);
		}
		.store{
			background-image: url(img/btn/ic_store_p.png);
		}
		.setting{
			background-image: url(img/btn/ic_person_p.png);
		
	}
	}
	
	
</style>