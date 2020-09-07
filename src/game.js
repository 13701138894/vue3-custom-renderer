import {Application} from 'pixi.js'

const game = new Application({
    width: 700,
    height: 1080
})
document.body.append(game.view)
console.log(game)
export function gameContainer(){
    return game.stage
}