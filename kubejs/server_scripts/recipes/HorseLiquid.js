ServerEvents.recipes(event => {
  event.recipes.create.emptying(Fluid.of('kubejs:liquidized_horse_essence'), 'kubejs:horse_essence')
  event.recipes.create.emptying(Fluid.of('biomesoplenty:blood'), 'kubejs:bloody_horse_essence')
})