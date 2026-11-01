// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded server example script)')

ServerEvents.recipes(event => {
    event.recipes.farmersdelight.cutting(
        'minecraft:apple',
        '#c:tools/knife', // tool
        [ // results
            Item.of('kubejs:sliced_apple', 2)
        ],
    )
})