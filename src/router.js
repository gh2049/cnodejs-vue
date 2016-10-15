const routers = {
    '/index': {
        component (resolve) {
            require(['./views/index.vue'], resolve);
        }
    },
    '/topic/:id' : {
    	 name:'topic',
         component (resolve){
            require(['./views/topic.vue'],resolve);
        }
    },
    '/login' : {
         component (resolve){
            require(['./views/login.vue'],resolve);
        }
    }
};
export default routers;