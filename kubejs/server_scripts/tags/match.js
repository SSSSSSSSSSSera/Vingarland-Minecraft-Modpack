ServerEvents.tags('item', event => {
  // Get the #forge:cobblestone tag collection and add Diamond Ore to it
  event.add('c:tools/igniter', 'kubejs:match')
  event.add('minecraft:creeper_igniters', 'kubejs:match')
  event.add('aeronautics:levitite_catalyzer', 'kubejs:match')
});