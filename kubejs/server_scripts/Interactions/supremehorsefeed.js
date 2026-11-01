ItemEvents.entityInteracted('kubejs:supreme_horse_feed', event => {
  if(event.target.type != 'minecraft:horse') return
  event.player.addItemCooldown("kubejs:supreme_horse_feed",300);
  event.item.count--
  event.player.giveInHand('kubejs:horse_essence')
  event.target.playSound('minecraft:entity.horse.ambient')
})