import { createApp } from 'vue'
import router from '@/route'
import App from './App.vue'
import store from '@/store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import mitt from 'mitt'
// import { faSpinner } from '@fortawesome/pro-regular-svg-icons'

const emitter = mitt()

library.add(faUserSecret)
let vue = createApp(App)
vue.component('font-awesome-icon', FontAwesomeIcon)

vue.directive('randomColor', {
    mounted(el, binding) {
        let count = 0
        console.log("binding", binding.value)
        setInterval(() => {
            if (count < binding.value.length) {
                el.style.color = binding.value[count]
                count++
            }
            else {
                count = 0
            }
        }, 1000);

    }
})
// window.bootstrap = bootstrap
vue.use(router)
vue.use(store)
vue.mount('#app')


export default emitter
