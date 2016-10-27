<template>
	<i class="iconfont icon-menu" @click="isMenuOpen = !isMenuOpen"></i>
	<div class="navtab" :class="{open:!isMenuOpen}" >
		<p @click="choose('all')">全部</p>
		<p @click="choose('good')">精华</p>
		<p @click="choose('share')">分享</p>
		<p @click="choose('ask')">问答</p>
		<p @click="choose('job')">招聘</p>
	</div>
</template>
<style lang="less">
	@import '../styles/menu/iconfont.css';
	.icon-menu {
		float: right;
		padding-right: 15px;
		/*padding-top: 5px; */
	}

	.navtab {
		margin-top: 1em;
		height : 100%;
		display: none;
		visibility : hidden;
		p {
			margin-top: 1em;
			margin-bottom: 1em;
			color: #eee;
		}
		:hover{
			cursor:pointer;
		}
	}
	.navtab.open {
		visibility: visible;
		display: block;
	}
	@media screen and (min-width: 720px) {
		.icon-menu{
			display: none;
		}
	}
	@media screen and (min-width: 720px) {
		.navtab{
			visibility : visible;
			display: block;
		}
	}
</style>
<script>
	export default {
		data () {
			return {
				isMenuOpen: true
			}
		},
		methods : {
			choose(val) {
				this.$dispatch('changeTab',val)
				this.isMenuOpen = !this.isMenuOpen
			}
		}
	}
</script>
