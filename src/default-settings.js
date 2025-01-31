const kDefaultSettings = {
  upperBaselinePos: 0.15,
  lowerBaselinePos: 0.85,
  primaryImageScale: 0.75,
  primaryImageOpacity: 0.85,
  primaryTextScale: 0.95,
  primaryTextOpacity: 0.85,
  secondaryImageScale: 0.5,
  secondaryImageOpacity: 0.85,
  secondaryTextScale: 1.0,
  secondaryTextStroke: 2.0,
  secondaryTextOpacity: 0.85,
  // secondaryLanguageMode valid values are:
  //    'disabled',
  //    'audio' (use audio language),
  //    'last' (use last used language)
  secondaryLanguageMode: 'audio',
  // bcp47 code of the last used language
  secondaryLanguageLastUsed: undefined,
};

module.exports = kDefaultSettings;
