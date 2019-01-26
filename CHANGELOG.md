# OrbitCSS Changelog

## 0.1.5

### Bug fixes

* Reorder grid sizes to ensure desktop columns are given priority
* Remove 100% width from container

## 0.1.4

### Bug fixes

* Fix calcColWidth() function converting units to string.

## 0.1.3

### Bug fixes

* Set default input and select border radius to 0. Select elements had rounded borders on Safari.

### Improvements

* Move accordion.scss to to the elements directory.
* Added calcColWidth(int) function to the grid.
* Add column support for the desktop viewport.
* Added padding to the container element on small viewports.


## 0.1.2

### Bug fixes

* Added a default statement to the `$title-font-family` variable.

### Improvements

* Added support for a `.is-mobile-column` class. Prevents a column with no pre-defined size from taking on 100% width on mobile devices.

## 0.1.1

### Bug fixes

* Changed CSS ordering to prevent grid visibility overriding the helper visibility classes
* Fixed mobile only column display issue

### Improvements

* Added a `.has-no-list-style` class for `ul` elements.
* Changed `$card-padding` variable to `$card-header-padding`.
