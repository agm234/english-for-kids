export const infinity = function (item: HTMLElement, item2: HTMLElement, item3: Node | null) {
  const LoadMore = function () {
    for (let i = 0; i < 20; i += 1) {
      item.insertBefore(item2, item3);
    }
  };

  // Detect when scrolled to bottom.
  item.addEventListener('scroll', () => {
    if (item.scrollTop + item.clientHeight >= item.scrollHeight) {
      LoadMore();
    }
  });

  // Initially load some items.
  LoadMore();
};
