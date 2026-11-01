ServerEvents.recipes(event => {
  // For this code to work, kubejs:incomplete_spore_blossom needs to be added to the game
  const transitional = 'kubejs:incomplete_supreme_horse_feed' // Making a constant to store the transitional item makes the code more readable
  event.recipes.create.sequenced_assembly(
      // Outputs:
      [
       'kubejs:supreme_horse_feed' // Main output, will appear in JEI as the result
      ],
      // Input:
      'farmersdelight:horse_feed',
      // Sequence:
      [
        // The transitional item is a constant, that is 'kubejs:incomplete_spore_blossom' and is used during the intermediate stages of the assembly.
        // Like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item.
        event.recipes.create.cutting(transitional, transitional),
        event.recipes.create.deploying(transitional, [transitional, 'chemica:salt']),
        event.recipes.create.deploying(transitional, [transitional, 'minecraft:hay_block']),
        event.recipes.create.deploying(transitional, [transitional, 'kubejs:sliced_apple']),
        event.recipes.create.deploying(transitional, [transitional, 'minecraft:hay_block']),
        event.recipes.create.cutting(transitional, transitional),
        event.recipes.create.deploying(transitional, [transitional, 'vinegarland_mod:opsecium_ingot']),
      ]
    )
    .transitionalItem(transitional) // Set the transitional item
    .loops(2) // Set the number of loops
})