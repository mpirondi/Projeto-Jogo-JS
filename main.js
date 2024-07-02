const player = new Player({
    x: 0,
    y: 0,
    size: 50,
    step: 3,
    color: 'red',
})
const game = new Game()

game.add(player)

requestAnimationFrame((t) => game.update(game))
