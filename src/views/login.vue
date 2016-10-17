<template>
	<div class="login_view">
		<input class="login_input" type="text" placeholder="输入你的 Access Token" v-model="token">
		<button @click="login" class="login_button">登录</button>
	</div>
</template>
<style>
	.login_input{
		display: block;
		width: 300px;
		height: 35px;
		border : 1px rgba(128, 189, 1, 0.52) solid;
		border-radius: 3px;
	}
</style>
<script>
	import { accessToken } from "../../accessToken"; //本人的token

	export  default {
		data () {
			return {
				token : accessToken || ''
			}			
		},
		methods : {
			login () {
				let _this = this
				this.$http.post('https://cnodejs.org/api/v1/accesstoken',{ accesstoken: this.token})
					.then (
						res => {
							if (res.body.success) {
								console.log(this,_this)
								localStorage.userinfo = JSON.stringify(res.body)
								localStorage.accesstoken = this.token
							}
						},
						err => console.error(err)
					)
			}

		}

	}
</script>
<style>
	
</style>