//var currentPage = document.URL;
//$('.intro').parallax({imageSrc: '../images/flat.png'});

var pswpElement = document.querySelectorAll('.pswp')[0];

var aboutItems = [
    {
        src: '/../images/about/fam.jpg',
        w: 1421,
        h: 911,
        title: 'Tony in his natural habitat.'
    },
    {
        src: '/../images/about/telly.jpg',
        w: 1600,
        h: 1364
    },
    {
        src: '/../images/about/dominica.jpg',
        w: 1600,
        h: 1600,
        title: 'Tony in his natural habitat.'
    },
    {
        src: '/../images/about/art.jpg',
        w: 2390,
        h: 1227,
        title: 'Tony in his natural habitat.'
    }
];

//Binding Event
document.querySelector('.ps-item').addEventListener('click', function() {
  // Get values from html data
  var parentName = this.dataset.parent;
  var dataIndex = this.dataset.indexNumber;

  // Parse Values
  var galleryName = window[parentName];
  var indexNum = parseInt(dataIndex);

  // Slide to start at
  var options = {
      index: indexNum
  };

  // Select and open gallery
  var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, galleryName, options);
  gallery.init();
});
