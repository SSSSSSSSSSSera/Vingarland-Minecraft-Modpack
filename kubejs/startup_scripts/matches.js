// Visit the wiki for more info - https://kubejs.com/
const $FlintAndSteelItem = Java.loadClass("net.minecraft.world.item.FlintAndSteelItem");
const $ItemProperties = Java.loadClass("net.minecraft.world.item.Item$Properties");

StartupEvents.registry("item", (event) => {
  event.createCustom("match", () => new $FlintAndSteelItem(new $ItemProperties().durability(1)));
});