  if (window.location.hostname === 'localhost') {
    setInterval(() => fetch(window.location.href), 1000);
  }