// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded startup example script)')
Platform.mods.kubejs.name = 'Vinegarland'
StartupEvents.registry('item', event => {
//vinegar and sober items

event.create('sober')
    .displayName('Sober');
event.create('vinegar')
    .displayName('Vinegar');

//obsidian shard
event.create('obsidian_shard')
    .displayName('Obsidian Shard')
    .tag('c:obsidians');

//sliced apple
  event.create('sliced_apple').food(food => {
    food
      .nutrition(2.5)
      .saturation(1.2)
      .fastToEat()
  });
  
//horse essences
event.create('horse_essence')
    .displayName('Horse Essence');

event.create('bloody_horse_essence')
    .displayName('Bloody Horse Essence');

//supreme horse feed
event.create('supreme_horse_feed')
    .displayName('Supreme Horse Feed');

//incomplete supreme horse feed
event.create('incomplete_supreme_horse_feed', 'create:sequenced_assembly')
    .displayName('Incomplete Supreme Horse Feed');

//stans ipod touch
event.create('stans_ipod_touch')
    .displayName('Stans 4th Generation Ipod Touch');

//vinegar bottle
event.create('vinegar_bottle')
    .displayName('Vinegar Bottle');

//opsecium horse armor
event.create("opsecium_horse_armor", "horse_armor")
    .material("netherite")
   .armorTexture(
     "kubejs:textures/entity/horse/armor/opsecium"
   )
    .texture("kubejs:item/opsecium_horse_armor");
});

StartupEvents.registry('block', event => {
  //libstanpreg block
  event.create('libstanpreg_so')
    .displayName('libstanpreg.so');

//obsidian block
  event.create('pulped_obsidian')
    .displayName('Pulped Obsidian')
    .hardness(40) // Set hardness (affects mining time)
    .resistance(500) // Set resistance (to explosions, etc)
    .requiresTool(true) // Requires a tool or it won't drop (see tags below)
    .tag('c:obsidians') //makes this block an ore
    .tagBlock('c:obsidians')//makes this block(tag of 
    .tagBlock('frame_changer:portal_frames')//makes this block(tag of 
    .tagBlock('minecraft:mineable/pickaxe') // or a pickaxe
    .tagBlock('minecraft:needs_diamond_tool'); // the tool tier must be at least iron
});
const $SoundEvents = Java.loadClass('net.minecraft.sounds.SoundEvents')
const $ParticleTypes = Java.loadClass('net.minecraft.core.particles.ParticleTypes')

StartupEvents.registry('fluid', event => {
  event.create('vinegar')
    .displayName('Vinegar')
    .tint(0xfcd48b)
    .type(type => type
      .renderType(3)
      .stillTexture('kubejs:block/liquid_still')
      .flowingTexture('kubejs:block/liquid_flow')
      .fallDistanceModifier(0)
      .density(1000)
      .viscosity(4000)
    );

  event.create('undistilled_vinegar')
    .displayName('Undistilled Vinegar')
    .tint(0xffe9c1)
    .type(type => type
      .renderType(3)
      .stillTexture('kubejs:block/liquid_still')
      .flowingTexture('kubejs:block/liquid_flow')
      .fallDistanceModifier(0)
      .density(1000)
      .viscosity(4000)
    );

  event.create('liquidized_horse_essence')
    .displayName('Liquidized Horse Essence')
    .type(type => type
      .renderType(3)
      .stillTexture('kubejs:block/liquidized_horse_essence')
      .flowingTexture('kubejs:block/liquidized_horse_essence')
      .fallDistanceModifier(0)
      .density(1000)
      .viscosity(4000)
    );
});
