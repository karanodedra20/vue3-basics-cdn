const app = Vue.createApp({
  data() {
    return {
      url: 'www.google.com',
      showBooks: true,
      books: [
        { title: 'The Secret', author: 'Rhonda', isFav: true },
        { title: 'The Power of Now', author: 'Eckhart', isFav: false },
      ],
      x: 0,
      y: 0,
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    toggleFavBook(book) {
      book.isFav = !book.isFav;
    },
    handleEvent(e, data) {
      console.log(e.type, e);
      if (data) {
        console.log(data);
      }
    },
    handleMousemove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFav);
    },
  },
});

app.mount('#app');
