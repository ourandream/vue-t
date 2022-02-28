import { provide } from 'vue'
import key from './key';

let isLogin = {
    install() {
        provide(key, this.loginState)
    },
    loginState :{
        token: '',
        hasToken: false,
        login() {
            this.token = '123',
            this.hasToken = true
        },
        logout() {
            this.token = ''
            this.hasToken = false
        },
        check() {
            return this.hasToken
        }
    }
}

export default isLogin