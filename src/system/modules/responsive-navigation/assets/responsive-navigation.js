jQuery(document).ready(function ($) {
  var $mainmenu = $('#mainmenu')
  var $menu = $('#mainmenu > ul')

  // Add menu icon
  $mainmenu.prepend('<div id="mainmenu-icon">&#9776;</div>')
  var $menuIcon = $('#mainmenu-icon')

  // Click on menu icon, toggle menu
  $menuIcon.on('click', function () {
    $menu.slideToggle({
      complete: function () {
        $menuIcon.toggleClass('active')
      }
    })
  })

  // Click outside menu, close it
  $(document).click(function (mouseEvent) {
    if ($menuIcon.is(':visible') && $menu.is(':visible') && isOutsideMenu(mouseEvent)) {
      $menu.slideUp({
        complete: function () {
          $menuIcon.removeClass('active')
        }
      })
    }
  })

  function isOutsideMenu(mouseEvent) {
    var offsetMenuBar = $menu.offset()
    var insideMenuBar = mouseEvent.pageX > offsetMenuBar.left &&
      mouseEvent.pageX < offsetMenuBar.left + $menu.outerWidth() &&
      mouseEvent.pageY > offsetMenuBar.top &&
      mouseEvent.pageY < offsetMenuBar.top + $menu.outerHeight()

    var offsetMenuIcon = $menuIcon.offset()
    var insideMenuIcon = mouseEvent.pageX > offsetMenuIcon.left &&
      mouseEvent.pageX < offsetMenuIcon.left + $menuIcon.outerWidth() &&
      mouseEvent.pageY > offsetMenuIcon.top &&
      mouseEvent.pageY < offsetMenuIcon.top + $menuIcon.outerHeight()

    return !insideMenuBar && !insideMenuIcon
  }
})
