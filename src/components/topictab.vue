<template>
	<i class="iconfont icon-menu" @click="isMenuOpen = !isMenuOpen"></i>
	<div class="navtab" :class="{close:!isMenuOpen}" >
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
		padding-top: 5px; 
	}

	.navtab {
		margin-top: 1em;
		transition: 0.3s height cubic-bezier(.28,1.51,.29,1.51);
		height : 100%;
		background : #fff;
		visibility : visible;
		p {
			margin-top: 1em;
			margin-bottom: 1em;
			color: #eee;
		}
		:hover{
			cursor:pointer;
		}
	}
	.navtab.close {
		height: 1px;
		visibility: hidden;
	}
	@media screen and (min-width: 720px) {
		.icon-menu{
			display: none;
		}
	}
	@media screen and (min-width: 720px) {
		.navtab{
			visibility : visible;
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
