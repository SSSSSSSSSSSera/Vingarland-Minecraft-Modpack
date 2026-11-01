// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded server example script)')

ServerEvents.recipes(event => {
  event.recipes.create.pressing('vinegarland_mod:opsecium_sheet', 'vinegarland_mod:opsecium_ingot');
  event.recipes.create.crushing('vinegarland_mod:opsecium_powder', 'vinegarland_mod:opsecium_ingot');
event.shaped(
  Item.of('kubejs:opsecium_horse_armor'), // arg 1: output
  [
    'A A',
    'ABA', // arg 2: the shape (array of strings)
    'C C'
  ],
  {
    A: 'vinegarland_mod:opsecium_sheet',
    B: 'minecraft:leather',  //arg 3: the mapping object
    C: 'vinegarland_mod:opsecium_ingot'
  }
);
})