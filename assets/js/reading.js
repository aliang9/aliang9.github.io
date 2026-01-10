/**
 * Reading Page Interactive Features
 * Handles the "I'm Feeling Lucky" buttons and book reveal animations
 */

(function() {
  'use strict';

  /**
   * Get a random item from an array
   */
  function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  /**
   * Get book cover URL from Open Library
   */
  function getCoverUrl(isbn, size) {
    size = size || 'M'; // S, M, or L
    return 'https://covers.openlibrary.org/b/isbn/' + isbn + '-' + size + '.jpg';
  }

  /**
   * Show the lucky book reveal modal
   */
  function showLuckyReveal(book) {
    var reveal = document.getElementById('luckyReveal');
    var cover = document.getElementById('luckyBookCover');
    var title = document.getElementById('luckyBookTitle');
    var author = document.getElementById('luckyBookAuthor');
    var review = document.getElementById('luckyBookReview');

    if (!reveal || !book) return;

    // Set book details
    cover.src = getCoverUrl(book.isbn, 'M');
    cover.alt = book.title + ' cover';
    title.textContent = book.title;
    author.textContent = 'by ' + book.author;

    if (book.review && book.review.trim()) {
      review.textContent = book.review;
      review.style.display = 'block';
    } else {
      review.textContent = 'On my reading list!';
      review.style.display = 'block';
    }

    // Handle cover load error
    cover.onerror = function() {
      this.src = 'data:image/svg+xml,' + encodeURIComponent(
        '<svg xmlns="http://www.w3.org/2000/svg" width="140" height="200">' +
        '<rect fill="#f0ebe3" width="140" height="200"/>' +
        '<text x="70" y="100" text-anchor="middle" fill="#5c4033" font-size="14">No Cover</text>' +
        '</svg>'
      );
    };

    // Show the reveal
    reveal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Close on background click
    reveal.onclick = function(e) {
      if (e.target === reveal) {
        closeLuckyReveal();
      }
    };

    // Close on escape key
    document.addEventListener('keydown', handleEscapeKey);
  }

  /**
   * Handle escape key to close modal
   */
  function handleEscapeKey(e) {
    if (e.key === 'Escape') {
      closeLuckyReveal();
    }
  }

  /**
   * Close the lucky book reveal modal
   */
  window.closeLuckyReveal = function() {
    var reveal = document.getElementById('luckyReveal');
    if (reveal) {
      reveal.classList.remove('active');
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEscapeKey);
    }
  };

  /**
   * Main lucky button handler
   */
  window.feelingLucky = function(type) {
    if (!window.bookData) {
      console.error('Book data not loaded');
      return;
    }

    var books;
    if (type === 'tbr') {
      books = window.bookData.tbr;
    } else if (type === 'favorites') {
      books = window.bookData.favorites;
    } else {
      console.error('Unknown book type:', type);
      return;
    }

    if (!books || books.length === 0) {
      alert('No books found in this list!');
      return;
    }

    var randomBook = getRandomItem(books);
    showLuckyReveal(randomBook);
  };

  /**
   * Initialize page
   */
  function init() {
    // Add loading state handling for book covers
    var covers = document.querySelectorAll('.book-cover');
    covers.forEach(function(img) {
      img.addEventListener('load', function() {
        this.classList.add('loaded');
      });
    });

    // Log successful initialization
    console.log('Reading page initialized');
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
