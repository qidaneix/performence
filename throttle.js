function throttle(fn, delay) {
  let timer;

  return function (...args) {
    if (timer) return;
    timer = setTimeout(() => {
      fn(...args);
      timer = null;
    }, delay);
  };
}
