<template>
	<div class="header" v-link="{path: '/index' }">
		<h1 style="display:none">cnodejs</h1>
		<img src="../images/cnodejs.svg">
	</div>
</template>

<style scoped lang="less">
	.header {
		cursor : pointer;
		text-align: center;
		background-color: #444;
		img {
			width: 200px;
		    height: auto;
		    max-width : 100%;
		    vertical-align: middle;
		    border: 0;
		}
	}

</style>