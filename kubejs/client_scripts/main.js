// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded client example script)')

CapeJS.addCapes(event => {
//Sera
    event.register("9bc18b7f-d095-469a-bdde-475059c91d78", "maymunderecape");
//Effects
    event.register("ce7558eb-3f97-4c04-b176-3033a5023a25", "vinegarcape");
//Miruna
    event.register("b6555e10-6c46-4e6c-b1b9-29dbcdd995ce", "vinegarcape");
//Hippoz
    event.register("b8ba5183-0f6f-49c3-8711-7aaf1d4bacdb", "rosemarycape");
});

ItemEvents.modifyTooltips(event => {
  // Add tooltip to all of these items
  event.add('kubejs:bloody_horse_essence', {shift: false}, Text.red('You Monster...'))
  
})