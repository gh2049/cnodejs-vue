<template>
	<header>
		<h1 style="display:none">cnodejs</h1>
		<img src="../images/cnodejs.svg" v-link="{path: '/index' }">
		<topictab></topictab>
	</header>
	
</template>

<script>
	import topictab from "./topictab";

	export default {
		components: {
			topictab
		}
	}
</script>

<style scoped lang="less">
	header {
		position: fixed;
		width: 100%;
		text-align: center;
		background-color: #444;
		opacity: 0.8;
		img {
			  width: 150px;
		    height: auto;
		    max-width : 100%;
		    vertical-align: middle;
		    border: 0;

		}
		@media screen and (min-width:720px) {
    	position: fixed;
    	left: 0;
    	top: 0;
   	 	bottom: 0;
    	width: 240px;
		  padding: 75px 0;
		  opacity: 1;
    }
	}

</style>