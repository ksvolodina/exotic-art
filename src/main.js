import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/style/main.scss';
import components from '@/components/UI'
import template from '@/components/template'

const app = createApp(App)

template.forEach(template => {
    app.component(template.name, template)
})
components.forEach(component => {
    app.component(component.name, component)
})


app
    .use(router)
    .mount('#app')
