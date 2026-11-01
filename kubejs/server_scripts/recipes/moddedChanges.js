// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded server example script)')

ServerEvents.recipes(event => {

//remove farmers delight dough crafting recipe
event.remove({ id: 'farmersdelight:wheat_dough_from_egg' });
event.remove({ id: 'farmersdelight:wheat_dough_from_water' });

//replace dough mixing recipe and crafting to use less water
event.remove({ id: 'create:crafting/appliances/dough' });
event.remove({ id: 'create:mixing/dough_by_mixing' });

event.recipes.createMixing('create:dough', [
  'create:wheat_flour',
  Fluid.of('minecraft:water', 333)
])

event.shapeless(
  Item.of('create:dough', 1), // arg 1: output
  [
    'create:wheat_flour',
    'minecraft:potion'
  ]
);

//pie crust replacement
event.remove({ id: 'farmersdelight:pie_crust' });

event.shaped(
  Item.of('farmersdelight:pie_crust'), // arg 1: output
  [
    ' A ',
    ' B ', // arg 2: the shape (array of strings)
    'CCC'
  ],
  {
    A: 'farmersdelight:milk_bottle',
    B: '#c:eggs',
    C: '#c:flours/wheat'
  }
);

//pie crust replacement
event.remove({ id: 'farmersdelight:apple_pie' });

event.shaped(
  Item.of('farmersdelight:apple_pie'), // arg 1: output
  [
    ' C ',
    'BBB', // arg 2: the shape (array of strings)
    'QDQ'
  ],
  {
    C: '#c:foods/dough/wheat',
    B: 'minecraft:apple',
    D: 'farmersdelight:pie_crust',
    Q: 'minecraft:sugar'
  }
);

//sweet berry cookie
event.remove({ id: 'farmersdelight:sweet_berry_cookie' });

event.shaped(
  Item.of('farmersdelight:sweet_berry_cookie', 8), // arg 1: output
  [
    'B',
    'C'
  ],
  {
    C: '#c:foods/dough/wheat',
    B: 'minecraft:sweet_berries'
  }
);

//sweet berry cookie
event.remove({ id: 'farmersdelight:honey_cookie' });

event.shaped(
  Item.of('farmersdelight:honey_cookie', 8), // arg 1: output
  [
    'B',
    'C'
  ],
  {
    C: '#c:foods/dough/wheat',
    B: 'minecraft:honey_bottle'
  }
);

//pizza
event.remove({ id: 'brewinandchewin:pizza' });

event.shaped(
  Item.of('brewinandchewin:pizza'), // arg 1: output
  [
    ' I ',
    'TBT',
    ' C '
  ],
  {
    C: '#c:foods/dough/wheat',
    T: '#brewinandchewin:foods/pizza_topping',
    I: '#brewinandchewin:foods/cheese_wedge',
    B: 'farmersdelight:tomato_sauce'
  }
);

//mystics biomes colored cakes
event.remove({ id: 'mysticsbiomes:cyan_frosted_cake' });
event.shaped(
  Item.of('mysticsbiomes:cyan_frosted_cake'), // arg 1: output
  [
    ' A ',
    'CBC', // arg 2: the shape (array of strings)
    ' D '
  ],
  {
    A: 'farmersdelight:milk_bottle',
    B: 'mysticsbiomes:cyan_egg',
    C: 'minecraft:sugar',
    D: '#c:foods/dough/wheat'
  }
);
event.remove({ id: 'mysticsbiomes:orange_frosted_cake' });
event.shaped(
  Item.of('mysticsbiomes:orange_frosted_cake'), // arg 1: output
  [
    ' A ',
    'CBC', // arg 2: the shape (array of strings)
    ' D '
  ],
  {
    A: 'farmersdelight:milk_bottle',
    B: 'mysticsbiomes:orange_egg',
    C: 'minecraft:sugar',
    D: '#c:foods/dough/wheat'
  }
);
event.remove({ id: 'mysticsbiomes:pink_frosted_cake' });
event.shaped(
  Item.of('mysticsbiomes:pink_frosted_cake'), // arg 1: output
  [
    ' A ',
    'CBC', // arg 2: the shape (array of strings)
    ' D '
  ],
  {
    A: 'farmersdelight:milk_bottle',
    B: 'mysticsbiomes:pink_egg',
    C: 'minecraft:sugar',
    D: '#c:foods/dough/wheat'
  }
);
event.remove({ id: 'mysticsbiomes:purple_frosted_cake' });
event.shaped(
  Item.of('mysticsbiomes:purple_frosted_cake'), // arg 1: output
  [
    ' A ',
    'CBC', // arg 2: the shape (array of strings)
    ' D '
  ],
  {
    A: 'farmersdelight:milk_bottle',
    B: 'mysticsbiomes:purple_egg',
    C: 'minecraft:sugar',
    D: '#c:foods/dough/wheat'
  }
);
event.remove({ id: 'mysticsbiomes:lime_frosted_cake' });
event.shaped(
  Item.of('mysticsbiomes:lime_frosted_cake'), // arg 1: output
  [
    ' A ',
    'CBC', // arg 2: the shape (array of strings)
    ' D '
  ],
  {
    A: 'farmersdelight:milk_bottle',
    B: 'mysticsbiomes:lime_egg',
    C: 'minecraft:sugar',
    D: '#c:foods/dough/wheat'
  }
);
event.remove({ id: 'mysticsbiomes:yellow_frosted_cake' });
event.shaped(
  Item.of('mysticsbiomes:yellow_frosted_cake'), // arg 1: output
  [
    ' A ',
    'CBC', // arg 2: the shape (array of strings)
    ' D '
  ],
  {
    A: 'farmersdelight:milk_bottle',
    B: 'mysticsbiomes:yellow_egg',
    C: 'minecraft:sugar',
    D: '#c:foods/dough/wheat'
  }
);
//vanilla cake
event.remove({ id: 'mysticsbiomes:vanilla_cake' });
event.shaped(
  Item.of('mysticsbiomes:vanilla_cake'), // arg 1: output
  [
    ' A ',
    'CBQ', // arg 2: the shape (array of strings)
    ' D '
  ],
  {
    A: 'farmersdelight:milk_bottle',
    B: '#c:eggs',
    C: 'minecraft:sugar',
    Q: 'mysticsbiomes:vanilla_beans',
    D: '#c:foods/dough/wheat'
  }
);
//chocolate cake
event.remove({ id: 'mysticsbiomes:chocolate_cake' });
event.shaped(
  Item.of('mysticsbiomes:chocolate_cake'), // arg 1: output
  [
    ' A ',
    'CBQ', // arg 2: the shape (array of strings)
    ' D '
  ],
  {
    A: 'farmersdelight:milk_bottle',
    B: '#c:eggs',
    C: 'minecraft:sugar',
    Q: 'minecraft:cocoa_beans',
    D: '#c:foods/dough/wheat'
  }
);
//strawberry cake
event.remove({ id: 'mysticsbiomes:strawberry_cake' });
event.shaped(
  Item.of('mysticsbiomes:strawberry_cake'), // arg 1: output
  [
    ' A ',
    'CBQ', // arg 2: the shape (array of strings)
    ' D '
  ],
  {
    A: 'farmersdelight:milk_bottle',
    B: '#c:eggs',
    C: 'minecraft:sugar',
    Q: 'mysticsbiomes:strawberry',
    D: '#c:foods/dough/wheat'
  }
);

//replace unusual furniture screws with tfmg screws
event.replaceInput(
  { input: 'unusual_furniture:screw' },         // Arg 1: the filter
  'unusual_furniture:screw',                    // Arg 2: the item to replace
  'tfmg:screw'  // Arg 3: the item to replace it with 
  // Do /kjs hand with the items you want to use to see all their tags.
);

//replace frozify cotton with hearth and harvest cotton
event.replaceInput(
  { input: 'frozify:cotton' },         // Arg 1: the filter
  'frozify:cotton',                    // Arg 2: the item to replace
  'hearthandharvest:cotton'  // Arg 3: the item to replace it with 
  // Do /kjs hand with the items you want to use to see all their tags.
);

event.shapeless(
  Item.of('hearthandharvest:fertilizer_bag', 1), // arg 1: output
  [
    'minecraft:bonemeal',
    'minecraft:mud',
    'farmersdelight:straw'
  ]
);

})