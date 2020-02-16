jQuery(document).ready(function($) {
   $('.show-event').isotope({
      itemSelector: '.entry'
   });
   $('ul li').click(function(event) {
      // var type = $(this).attr('data-type');
      var type = $(this).data('type');
      // console.log(type);
      var ten_loai = $(this).text();
      $('.title').text(ten_loai);
      type = '.'+type;
      $('.show-event').isotope({
         filter:type
      });
   });
});
