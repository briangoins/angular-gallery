(function($) {

  $.fn.count = function(key, fn) {
    return this.each(function() {

      var $this = $(this), 
        oldVal = $this.data(key),
        newVal = fn.call($this)

      if(oldVal == newVal) return
      $this.data(key, newVal)
      console.debug('countChange', newVal, oldVal, key)
      $this.trigger('countChange', [newVal, oldVal, key])  
    });
  }

})(jQuery);

$(window).load(function() {
  var gridItems = $('#hidden-grid').children('.grid-item').clone()
  $('#grid')
    .masonry({
      // options
      columnWidth: '.grid-sizer',
      itemSelector: '.grid-item',
      gutter: '.gutter-sizer'
    })
    .append(gridItems)
    .masonry('appended', gridItems)
})

$(function() {

  $('.header-filter input').on('change keyup', function() {
    $('#hidden-grid').count('imageCount', function() {
      return $(this).children('.grid-item').length
    })
  });

  $('#hidden-grid').on('countChange', function() {

    var oldItems = $('#grid').masonry('getItemElements'),
      newItems = $('#hidden-grid').children('.grid-item').clone()

    console.debug('new items: ', newItems)

    $('#grid')
      .masonry('remove', oldItems)
      .append(newItems)
      .masonry('addItems', newItems)
      
    $('#grid').masonry('layout')
  });

});