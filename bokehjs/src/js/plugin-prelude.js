(function outer(modules, cache, entry) {
  if (Bokeh) {
    for (var name in modules) {
      Bokeh.require.modules[name] = modules[name];
    }

    for (var i = 0; i < entry.length; i++) {
        Bokeh.Collections.register_locations(Bokeh.require(entry[i]));
    }
  } else {
    throw new Error("Cannot find Bokeh. You have to load it prior to loading plugins.");
  }
})
