import {createRenderer} from '@vue/runtime-core'
const renderer = createRenderer({
    createElement(type){
        console.log(type)
    },
    insert(el,parent){
        console.log(el,parent)
    }
});
export function createApp(c){
    return renderer.createApp(c)
}