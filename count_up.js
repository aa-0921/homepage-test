const el = {
    count: document.getElementById("count"),
    // button: document.getElementById("button"),
  };
  const DURATION = 3.6;
  let isAnimating = false;
  // $(document).ready( function(){
  // ページ読み込み時に実行したい処理
  // });
  $(document).ready(function () {
    // el.button.addEventListener("click", (e) => {
    if (isAnimating) {
      return;
    }
    isAnimating = true;
    const from = parseInt(el.count.dataset.from, 10);
    const to = parseInt(el.count.dataset.to, 10);
    let obj = { count: from };
    TweenMax.to(obj, DURATION, {
      count: to,
      ease: Power3.easeInOut,
      onUpdate: () => {
        el.count.textContent = Math.floor(obj.count);
      },
      onComplete: () => {
        isAnimating = false;
        // el.count.textContent = "14,870";
      },
    });
  });