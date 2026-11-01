// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded server example script)')

ServerEvents.recipes(event => {

event.recipes.create.mixing(Fluid.of('kubejs:undistilled_vinegar'), [Fluid.of('minecraft:water'), Item.of('minecraft:sugar', 2), Item.of('kubejs:sliced_apple', 3)]);
event.recipes.tfmg.distillation("kubejs:undistilled_vinegar", "kubejs:vinegar");
event.recipes.create.filling('kubejs:vinegar_bottle', [Fluid.of('kubejs:vinegar'), 'minecraft:glass_bottle']);

})