ServerEvents.tags('block', event => {
//disable duplicate industry recrafted ores
  event.add('oregenerationdisabler:disabled_overworld_ores', [
   'indrec:tin_ore',
   'indrec:deepslate_tin_ore',
   'indrec:iridium_ore',
   'indrec:deepslate_iridium_ore'
  ]);
})