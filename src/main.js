import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 按需引入
import {
    Button,
    Row,
    Radio,
    Container,
    Aside,
    Header,
    Main,
    Menu,
    Submenu,
    MenuItemGroup,
    MenuItem,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Col,
    Card,
    Table,
    TableColumn,
    Breadcrumb,
    BreadcrumbItem,
    Tag,
    Form,
    FormItem,
    Input,
    Select,
    Checkbox,
    Switch,
    DatePicker,
    TimePicker,
    Dialog,
    Option,
    Pagination,
    MessageBox,
    Message,
    Footer
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "./assets/less/index.css"

import VideoPlayer from 'vue-video-player';
import 'video.js/dist/video-js.css'

import router from "./router/index.js"
import store from "./store/index.js"
require('vue-video-player/src/custom-theme.css')

Vue.use(VideoPlayer)
    // 按需使用
Vue.use(Button)
Vue.use(Row)
Vue.use(Radio)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Header)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Col)
Vue.use(Card)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Tag)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Select)
Vue.use(Checkbox)
Vue.use(Switch)
Vue.use(DatePicker)
Vue.use(TimePicker)
Vue.use(Dialog)
Vue.use(Option)
Vue.use(Pagination)
Vue.use(Footer)

Vue.prototype.$confirm = MessageBox.confirm // 绑定messagebox的confirm到全局上
Vue.prototype.$message = Message // 绑定message到全局上


new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')