function debounce(fn, delay) {
  let timer;

  return function (...arg) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn(...arg);
    }, delay);
  };
}
