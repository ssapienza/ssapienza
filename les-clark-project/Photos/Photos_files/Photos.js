// Created by iWeb 3.0.2 local-build-20210826

setTransparentGifURL('../Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({reflection_0:new IWReflection({opacity:0.50,offset:1.00})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function photocastSubscribe()
{photocastHelper("https://www.stephaniesapienza.com/les-clark-project/Photos/rss.xml");}
function onPageLoad()
{loadMozillaCSS('Photos_files/PhotosMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');detectBrowser();adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');Widget.onload();fixAllIEPNGs('../Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
