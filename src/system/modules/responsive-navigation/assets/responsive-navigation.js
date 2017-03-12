jQuery(document).ready(function ($) {
  var $menu = $('#mainmenu')
  var $menuBar = $('#mainmenu ul[role=menubar]')

  // Add menu icon
  $menu.prepend('<div id="mainmenu-icon">&#9776;</div>')
  var $menuIcon = $('#mainmenu-icon')

  // Click on menu icon, toggle menu
  $menuIcon.on('click', function () {
    $menuBar.slideToggle({
      complete: function () {
        $menuIcon.toggleClass('active')
      }
    })
  })

  // Click outside menu, close it
  $(document).click(function (mouseEvent) {
    if ($menuIcon.is(':visible') && $menuBar.is(':visible') && isOutsideMenu(mouseEvent)) {
      $menuBar.slideUp({
        complete: function () {
          $menuIcon.removeClass('active')
        }
      })
    }
  })

  function isOutsideMenu(mouseEvent) {
    var offsetMenuBar = $menuBar.offset()
    var insideMenuBar = mouseEvent.pageX > offsetMenuBar.left &&
      mouseEvent.pageX < offsetMenuBar.left + $menuBar.outerWidth() &&
      mouseEvent.pageY > offsetMenuBar.top &&
      mouseEvent.pageY < offsetMenuBar.top + $menuBar.outerHeight()

    var offsetMenuIcon = $menuIcon.offset()
    var insideMenuIcon = mouseEvent.pageX > offsetMenuIcon.left &&
      mouseEvent.pageX < offsetMenuIcon.left + $menuIcon.outerWidth() &&
      mouseEvent.pageY > offsetMenuIcon.top &&
      mouseEvent.pageY < offsetMenuIcon.top + $menuIcon.outerHeight()

    return !insideMenuBar && !insideMenuIcon
  }
})
