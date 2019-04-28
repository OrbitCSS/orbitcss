# OrbitCSS Changelog

## 0.3.0

### Bug fixes

* Fix the double scrolling issue when using cards in a modal.
* Add <code>!default</code> to all custom variables that are missing this.

### Improvements

* Add <code>position: relative</code> to <code>.card__content</code> class.
* Make the modal module mobile-first.
* Add the <code>$input-border-radius</code> variable for all input, textarea and select elements.
* Improve the <code>.is-checkbox</code> and <code>.is-radio</code> elements to prevent wrapping.
* Make the grid module mobile-first.
* Add the <code>$pagination-background</code> variable.
* Add the <code>$pagination-bordered-background</code> variable.
* Make the pagination module mobile-first.
* Add <code>$medium</code> variable.
* Add <code>$large</code> variable.
* Add <code>$x-large</code> variable.
* Add <code>.is-desktop-x-{size}</code> grid classes.
* Add <code>.is-desktop-x-only</code> class.
* Add <code>.is-tablet-only</code> class.

### Deprecations

* <code>$medium-min</code> variable.
* <code>$large-min</code> variable.

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
        <code>$small-max</code>
      </td>
      <td>
        <code>768px</code>
      </td>
      <td>
        <code>767px</code>
      </td>
    </tr>
  </tbody>
</table>

## 0.2.1

### Bug fixes

* Correct the flex-flow for the <code>.tabs__list</code> element.
* Correct the flex property for the <code>.grid .column</code> element.
* Fix <code>.is-loading</code> spinner display issue on Chrome/Safari.

### Improvements

* Force 100% width for modals of all sizes on mobile viewport.
* Add the <code>$accordion-background</code> variable.
* Add <code>$custom-palette</code> variable to support extending the <code>$color-palette</code> variable.

## 0.2.0

### Improvements

* Improve flex properties for the <code>Card</code> element.
* Add <code>.is-shrink</code> class to the <code>.card</code> element.
* Improve flex properties for the <code>Breadcrumb</code> element to ensure additional <code>ul</code> elements are not inline.
* Move the <code>.has-centered</code> and <code>.has-end</code> from the <code>ul</code> element to the <code>.breadcrumb</code> element.
* Improve flex properties for the <code>Alert</code> element.
* Add transparent background to buttons with the <code>.is-outline</code> helper class.
* Improve flex properties for the <code>Grid</code> system.
* Add <code>.is-mobile-auto</code> helper class to allow for equal width columns on smaller views.
* Add flex properties to the <code>.is-checkbox</code> and <code>.is-radio</code> elements.
* Improve flex properties for the <code>Hero</code> element.
* Improve flex properties for the <code>Image</code> element.
* Improve flex properties for the <code>Media</code> element.
* Remove width property from <code>.menu</code> element.
* Improve flex properties for the <code>Modal</code> element.
* Improve flex properties for the <code>Top</code> element.
* Improve flex properties for the <code>Tabs</code> element.
* Reorder color variables to support simpler customization.

### Deprecations

* Remove the $container-max-width variable.

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
        <code>$container-padding</code>
      </td>
      <td>
        <code>10px</code>
      </td>
      <td>
        <code>20px</code>
      </td>
    </tr>
    <tr>
      <th>Variable</th>
      <th>From</th>
      <th>To</th>
    </tr>
    <tr>
      <td>
        <code>$menu-slidedown-border</code>
      </td>
      <td>
        <code>1px solid #e9ecef</code>
      </td>
      <td>
        <code>1px solid $light-grey</code>
      </td>
    </tr>
  </tbody>
</table>

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
