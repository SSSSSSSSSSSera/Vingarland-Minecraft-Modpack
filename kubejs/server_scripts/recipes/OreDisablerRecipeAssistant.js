ServerEvents.recipes(event => {
//replace industry recrafted raw iridium with chemica iridium dust
event.replaceInput(
  { input: '#c:raw_materials/iridium' },         // Arg 1: the filter
  '#c:raw_materials/iridium',                    // Arg 2: the item to replace
  'chemica:iridium_dust'  // Arg 3: the item to replace it with 
  // Do /kjs hand with the items you want to use to see all their tags.
);
//replace simple radio wire with power grid wire
event.replaceInput(
  { input: 'simpleradio:copper_wire' },         // Arg 1: the filter
  'simpleradio:copper_wire',                    // Arg 2: the item to replace
  'powergrid:wire'  // Arg 3: the item to replace it with 
  // Do /kjs hand with the items you want to use to see all their tags.
);
//custom resin recipe 4 fun
event.custom({
  "type": "indrec:compressor",
  "duration": 100,
  "energy": 400,
  "input": {
    "ingredient": {
      "item": "indrec:stick_resin"
    }
  },
  "output": {
    "items": {
      "count": 1,
      "id": "minecraft:resin_clump"
    }
  }
});
});