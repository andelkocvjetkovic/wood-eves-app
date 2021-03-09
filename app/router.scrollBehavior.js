export default function (to, from, savedPosition) {
  if (savedPosition) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(savedPosition);
      }, 310);
    });
  } else {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0, behavior: "smooth" });
      }, 560);
    });
  }
}
