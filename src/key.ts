import { InjectionKey } from 'vue'


interface loginStateType {
    token: string;
    hasToken: boolean;
    login(): void;
    logout(): void;
    check(): boolean;
}

const key = Symbol('isLogin') as InjectionKey<loginStateType>

export default key