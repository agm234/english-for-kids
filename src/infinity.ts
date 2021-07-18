
export let infinity = function (item: HTMLElement, item2: HTMLElement, item3: Node | null) {
    var loadMore = function () {
        for (var i = 0; i < 20; i++) {
            item.insertBefore(
                item2,
                item3,
            );
        }
    }

    // Detect when scrolled to bottom.
    item.addEventListener('scroll', function () {
        if (item.scrollTop + item.clientHeight >= item.scrollHeight) {
            loadMore();
        }
    });

    // Initially load some items.
    loadMore();
}
// loadMore(card: Array<Category>) {

//     this.element.innerHTML = '';
//     this.element.appendChild(this.CreateCardCategorie.element);
//     for (var i = 0; i < 8; i++) {
//       this.element.insertBefore(
//         new CardCategorie(card[i].name, /*wordcards.length*/ 8).element,
//         this.CreateCardCategorie.element,
//       );
//     }
//   }


//   qwer(card: Array<Category>) {
//     console.log(4565456454545)
//     document.addEventListener('scroll', () => {
//       console.log(40)
//       if (true) {
//         console.log(4045)
//         this.loadMore(card);
//       }
//     });
//   }