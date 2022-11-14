export type user = {
    name: string
    age: number
}
export const initialuser:user = {
    name: '',
    age: 0
}
export const initialdetail:detail = {
    address: '',
    no: 0
}
export type detail = {
    address: string
    no: number
}

export type Ipayload  = detail & user


export type initialState = {
    user:user[] | any
    detail: detail[] | any
}

export const initialStateStore: initialState = {
    user:[ {
        name: '',
        age: 0
    }],
    detail : [{
        address : '',
        no: 0
    }]
}