LootJS.modifiers(event => {
  event.addBlockModifier("minecraft:obsidian").addLoot("kubejs:obsidian_shard").setCount(4);
  event.addBlockModifier("minecraft:obsidian").removeLoot("minecraft:obsidian");
});

ServerEvents.recipes(event => {
event.custom({
  "type": "indrec:compressor",
  "duration": 300,
  "energy": 2000,
  "input": {
    "count": 4,
    "ingredient": {
      "item": "kubejs:obsidian_shard"
    }
  },
  "output": {
    "items": {
      "count": 1,
      "id": "minecraft:obsidian"
    }
  }
});
event.recipes.create.compacting('kubejs:pulped_obsidian', ['create:pulp', Item.of('kubejs:obsidian_shard', 4)]);
});