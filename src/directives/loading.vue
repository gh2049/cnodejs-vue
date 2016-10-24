<template>
	<div class="bubblingG">
	<span id="bubblingG_1">
	</span>
	<span id="bubblingG_2">
	</span>
	<span id="bubblingG_3">
	</span>
	</div>
</template>

<style>
.bubblingG {
	text-align: center;
	width:90px;
	height:56px;
	margin: auto;
}

.bubblingG span {
	display: inline-block;
	vertical-align: middle;
	width: 11px;
	height: 11px;
	margin: 28px auto;
	background: rgb(0,0,0);
	border-radius: 56px;
		-o-border-radius: 56px;
		-ms-border-radius: 56px;
		-webkit-border-radius: 56px;
		-moz-border-radius: 56px;
	animation: bubblingG 1.5s infinite alternate;
		-o-animation: bubblingG 1.5s infinite alternate;
		-ms-animation: bubblingG 1.5s infinite alternate;
		-webkit-animation: bubblingG 1.5s infinite alternate;
		-moz-animation: bubblingG 1.5s infinite alternate;
}

#bubblingG_1 {
	animation-delay: 0s;
		-o-animation-delay: 0s;
		-ms-animation-delay: 0s;
		-webkit-animation-delay: 0s;
		-moz-animation-delay: 0s;
}

#bubblingG_2 {
	animation-delay: 0.45s;
		-o-animation-delay: 0.45s;
		-ms-animation-delay: 0.45s;
		-webkit-animation-delay: 0.45s;
		-moz-animation-delay: 0.45s;
}

#bubblingG_3 {
	animation-delay: 0.9s;
		-o-animation-delay: 0.9s;
		-ms-animation-delay: 0.9s;
		-webkit-animation-delay: 0.9s;
		-moz-animation-delay: 0.9s;
}



@keyframes bubblingG {
	0% {
		width: 11px;
		height: 11px;
		background-color:rgb(0,0,0);
		transform: translateY(0);
	}

	100% {
		width: 27px;
		height: 27px;
		background-color:rgb(255,255,255);
		transform: translateY(-24px);
	}
}

@-o-keyframes bubblingG {
	0% {
		width: 11px;
		height: 11px;
		background-color:rgb(0,0,0);
		-o-transform: translateY(0);
	}

	100% {
		width: 27px;
		height: 27px;
		background-color:rgb(255,255,255);
		-o-transform: translateY(-24px);
	}
}

@-ms-keyframes bubblingG {
	0% {
		width: 11px;
		height: 11px;
		background-color:rgb(0,0,0);
		-ms-transform: translateY(0);
	}

	100% {
		width: 27px;
		height: 27px;
		background-color:rgb(255,255,255);
		-ms-transform: translateY(-24px);
	}
}

@-webkit-keyframes bubblingG {
	0% {
		width: 11px;
		height: 11px;
		background-color:rgb(0,0,0);
		-webkit-transform: translateY(0);
	}

	100% {
		width: 27px;
		height: 27px;
		background-color:rgb(255,255,255);
		-webkit-transform: translateY(-24px);
	}
}

@-moz-keyframes bubblingG {
	0% {
		width: 11px;
		height: 11px;
		background-color:rgb(0,0,0);
		-moz-transform: translateY(0);
	}

	100% {
		width: 27px;
		height: 27px;
		background-color:rgb(255,255,255);
		-moz-transform: translateY(-24px);
	}
}
</style>