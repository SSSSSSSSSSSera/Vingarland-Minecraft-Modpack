ServerEvents.recipes(event => {

event.shapeless(
  Item.of('indrec:rubber_tree_sapling', 1), // arg 1: output
  [
    'minecraft:resin_clump',
    'minecraft:oak_sapling'
  ]
);

});

LootJS.lootTables(event => {
    event
        .getLootTable("minecraft:blocks/oak_leaves")
        .firstPool()
        .addEntry(LootEntry.of("indrec:rubber_tree_sapling").randomChance(0.055))
})