setInterval(() => {
  for (var o in window)
    0 == o.indexOf('cloud_') &&
      t(i[o]) !== t(window[o]) &&
      ((i[o] =
        'object' == typeof window[o]
          ? JSON.parse(JSON.stringify(window[o]))
          : window[o]),
      n.emit('varChanged', {
        [o]: 'function' == typeof window[o] ? window[o].toString() : window[o],
      }));
}, 0);
