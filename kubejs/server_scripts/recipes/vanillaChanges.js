// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded server example script)')

ServerEvents.recipes(event => {

//flint and steel except it uses steel and not iron

event.remove({ output: 'minecraft:flint_and_steel' })

event.shapeless(
  Item.of('minecraft:flint_and_steel', 1), // arg 1: output
  [
    'tfmg:steel_ingot',
    'minecraft:flint'
  ]
);

//remove wheat crafting recipe for bread
event.remove({ id: 'minecraft:bread' });

//remove wheat crafting recipe for cake
event.remove({ id: 'vanillabackport:cake' });
event.remove({ id: 'minecraft:cake' });
event.remove({ id: 'create:crafting/curiosities/cake' });
event.remove({ id: 'farmersdelight:cake_from_milk_bottle' });

//minecraft cookie
event.remove({ id: 'minecraft:cookie' });

event.shaped(
  Item.of('minecraft:cookie', 8), // arg 1: output
  [
    'B',
    'C'
  ],
  {
    C: '#c:foods/dough/wheat',
    B: 'minecraft:cocoa_beans'
  }
);

event.shaped(
  Item.of('minecraft:cake'), // arg 1: output
  [
    ' A ',
    'CBC', // arg 2: the shape (array of strings)
    ' D '
  ],
  {
    A: 'farmersdelight:milk_bottle',
    B: '#c:eggs',
    C: 'minecraft:sugar',
    D: '#c:foods/dough/wheat'
  }
);

})