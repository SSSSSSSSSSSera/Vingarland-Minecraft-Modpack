// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded server example script)')

ServerEvents.recipes(event => {
event.shapeless(
  Item.of('kubejs:match', 1), // arg 1: output
  [
    'chemica:phosphorus_dust',
    'minecraft:stick'
  ]
);
})