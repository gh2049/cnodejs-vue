<template>
	<div class="navtab">
		<p @click="choose('all')">全部</p>
		<p @click="choose('good')">精华</p>
		<p @click="choose('share')">分享</p>
		<p @click="choose('ask')">问答</p>
		<p @click="choose('job')">招聘</p>
	</div>
</template>

<script>

	export default {
		data () {
			return {
				button: 'all'
			}
		},
		methods : {
			choose(val) {
				this.$dispatch('changeTab',val)
			}
		}
	}
</script>
<style lang="less">
	.navtab {
		margin-top: 1em;
		p {
			margin-top: 1em;
			margin-bottom: 1em;
			color: #eee;
		}
		:hover{
			cursor:pointer;
		}
	}
	
</style>