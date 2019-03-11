# OrbitCSS Changelog

## 0.1.7

### Bug fixes

* Removed the previously depreciated class .is-mobile-column from grid.sccs.

### Deprecations

* The <code>.is-outline</code> class for the <code>.tabs__item</code> element has been removed.

## 0.1.6

### Bug fixes

* Fix put in place to correct the display issue for <code>.is-loading</code> buttons on mobile view.

### Improvements

* Added styling for <code>.tabs__item:hover</code>.
* Removed the padding from <code>.containers</code> on mobile viewport.
* <code>100%</code> width has been added back to the <code>.container</code> element.
* Added the <code>.is-mobile-shrink</code> and <code>.is-desktop-shrink</code> column classes.
* Changed <code>.margin-top</code> property to <code>-0.4em</code> for both <code>.is-select::after</code> and <code>.has-arrow::after</code>.
* Changed <code>width</code> and <code>height</code> properties to <code>0.625em</code> for <code>.has-arrow::after</code>.
* Flex properties added to the <code>.card</code> element to ensure <code>.card__content</code> grows to available space.
* Added <code>$white</code> background to all form elements.
* The <code>.box-sizing: border-box</code> property has been applied to all elements.

### Deprecations

* The <code>.is-outline</code> class for the <code>.tabs__item</code> element will be removed in the next patch. Has currently been removed from the documentation.

### Variable changes

<table class="table is-bordered">
  <tbody>
    <tr>
      <th>Variable</th>
      <th>From</th>
      <th>To</th>
    </tr>
    <tr>
      <td>
        <code>$select-arrow-height</code>
      </td>
      <td>
        <code>0.375em</code>
      </td>
      <td>
        <code>0.625em</code>
      </td>
    </tr>
    <tr>
      <td>
        <code>$select-arrow-width</code>
      </td>
      <td>
        <code>0.375em</code>
      </td>
      <td>
        <code>0.625em</code>
      </td>
    </tr>
  </tbody>
</table>

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
