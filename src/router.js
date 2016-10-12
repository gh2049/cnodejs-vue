const routers = {
    '/index': {
        component (resolve) {
            require(['./views/index.vue'], resolve);
        }
    },
    '/topic/:id' : {
    	 name:'topic',
         component: function(resolve){
            require(['./views/topic.vue'],resolve);
        }
    }
};
export default routers;