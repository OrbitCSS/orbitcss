# OrbitCSS Changelog

## v2.0.0

### Core changes

* Removed node-sass package in favor of dart-sass.
* Added support for CSS variables. Customization of your theme can now be done without using SASS.
* Added <code>createColor()</code> function. It takes a color as a parameter and returns a formatted color based on the value of the <code>$color-type</code> variable. Supported values are 'hsl', 'rgba' and 'hex'. This ensures consistency throughout the framework.
* Added <code>createHSLColor($color)</code> function. This accepts any CSS color value and returns the HSL equivalent.
* Added <code>createRGBAColor($color)</code> function. This accepts any CSS color value and returns the RGBA equivalent.
* Added <code>createHexColor($color)</code> function. This accepts any CSS color value and returns the HEX equivalent.
* Removed a handful of functions from *_function.scss*. See the deprecations section for a full list.
* Added <code>$color-type</code> variable to *_colors.scss*. This variable controls the framework wide format for colors to be generated. Supported values are 'hsl', 'rgba' and 'hex'.
* Removed **link** and **disabled** from the <code>$color-palette</code> list. These colors still exist and can be referenced as per usual.
* Added new **secondary** color to the color palette.
* CSS variables added for each color along with a lighter and darker version, a text color and an alert color.
* Replaced most variables in *_general.scss* with CSS variables.
* Added <code>has-no-transition</code> helper to the global helpers. It sets the transition property of an element to **none**.
* *title* and *subtitle* changed to *heading* and *subheading*. Variables updated to reflect this change.
* Added the `is-subheading` modifier to replace the `subtitle` modifier.
* Controls for background and font color added to the *hero__content* and *hero__footer* element. Background color can no longer be set on the *hero* block.
* Added a max width control to images within the *top__brand* element.
* Various changes to the appearance of certain module elements.
* Removed <code>color($key)</code> function.
* Removed <code>title-size($key)</code> function.
* Removed `has-bg-link` and `has-text-link` modifiers from the *color* module.
* Removed the set of `is-*-title` modifiers from the Typography module.
* Removed the `subtitle` modifier from the Typography module.

* Add CSS variable support to all modules. Refer to the [documentation](https://orbitcss.com/documentation/) of each module for the list of CSS variables.

### New Sass variables

<table class="table">
  <tbody>
    <tr>
      <th>Variable</th>
      <th>Module</th>
      <th>Default value</th>
    </tr>
    <tr>
      <td><code>$hero-background-color</code></td>
      <td>Hero</td>
      <td><code>hsl(0deg, 0%, 100%, 1)</code></td>
    </tr>
    <tr>
      <td><code>$hero-color</code></td>
      <td>Hero</td>
      <td><code>hsl(0deg, 0%, 22%, 1)</code></td>
    </tr>
    <tr>
      <td><code>$input-error-background</code></td>
      <td>Form</td>
      <td><code>hsl(348deg, 100%, 58%, 0.2)</code></td>
    </tr>
    <tr>
      <td><code>$input-error-border-color</code></td>
      <td>Form</td>
      <td><code>hsl(347deg, 100%, 58%, 1)</code></td>
    </tr>
    <tr>
      <td><code>$input-error-color</code></td>
      <td>Form</td>
      <td><code>hsl(0deg, 0%, 22%, 1)</code></td>
    </tr>
    <tr>
      <td><code>$input-border-width</code></td>
      <td>Form</td>
      <td><code>1px</code></td>
    </tr>
    <tr>
      <td><code>$select-loading-speed</code></td>
      <td>Form</td>
      <td><code>.8s</code></td>
    </tr>
    <tr>
      <td><code>$select-loading-width</code></td>
      <td>Form</td>
      <td><code>2px</code></td>
    </tr>
    <tr>
      <td><code>$select-loading-color</code></td>
      <td>Form</td>
      <td><code>hsl(32deg, 12%, 82%, 1)</code></td>
    </tr>
    <tr>
      <td><code>$top-shadow</code></td>
      <td>Top (Navbar)</td>
      <td><code>none</code></td>
    </tr>
    <tr>
      <td><code>$top-brand-color</code></td>
      <td>Top (Navbar)</td>
      <td><code>inherit</code></td>
    </tr>
    <tr>
      <td><code>$top-brand-max-logo-width</code></td>
      <td>Top (Navbar)</td>
      <td><code>200px</code></td>
    </tr>
    <tr>
      <td><code>$top-link-background</code></td>
      <td>Top (Navbar)</td>
      <td><code>hsl(0deg, 0%, 66%, 0.15)</code></td>
    </tr>
    <tr>
      <td><code>$top-social-hover-color</code></td>
      <td>Top (Navbar)</td>
      <td><code>inherit</code></td>
    </tr>
    <tr>
      <td><code>$menu-list-background</code></td>
      <td>Menu</td>
      <td><code>transparent</code></td>
    </tr>
    <tr>
      <td><code>$menu-list-hover-background</code></td>
      <td>Menu</td>
      <td><code>hsl(0deg, 0%, 75%, 0.09)</code></td>
    </tr>
    <tr>
      <td><code>$menu-list-hover-color</code></td>
      <td>Menu</td>
      <td><code>hsl(0deg, 0%, 22%, 1)</code></td>
    </tr>
    <tr>
      <td><code>$menu-divider-width</code></td>
      <td>Menu</td>
      <td><code>1px</code></td>
    </tr>
    <tr>
      <td><code>$menu-divider-color</code></td>
      <td>Menu</td>
      <td><code>hsl(210deg, 16%, 92%, 1)</code></td>
    </tr>
    <tr>
      <td><code>$menu-expandable-border-width</code></td>
      <td>Menu</td>
      <td><code>1px</code></td>
    </tr>
    <tr>
      <td><code>$menu-expandable-border-color</code></td>
      <td>Menu</td>
      <td><code>hsl(210deg, 16%, 92%, 1)</code></td>
    </tr>
    <tr>
      <td><code>$pagination-border-color</code></td>
      <td>Pagination</td>
      <td><code>transparent</code></td>
    </tr>
    <tr>
      <td><code>$pagination-border-width</code></td>
      <td>Pagination</td>
      <td><code>1px</code></td>
    </tr>
    <tr>
      <td><code>$pagination-border-radius</code></td>
      <td>Pagination</td>
      <td><code>0</code></td>
    </tr>
    <tr>
      <td><code>$pagination-hover-color</code></td>
      <td>Pagination</td>
      <td><code>hsl(0deg, 0%, 22%, 1)</code></td>
    </tr>
    <tr>
      <td><code>$pagination-bordered-color</code></td>
      <td>Pagination</td>
      <td><code>hsl(0deg, 0%, 22%, 1)</code></td>
    </tr>
    <tr>
      <td><code>$pagination-bordered-border-color</code></td>
      <td>Pagination</td>
      <td><code>4px</code></td>
    </tr>
    <tr>
      <td><code>$pagination-bordered-active-border-color</code></td>
      <td>Pagination</td>
      <td><code>hsl(255deg, 73%, 58%, 1)</code></td>
    </tr>
    <tr>
      <td><code>$pagination-bordered-active-color</code></td>
      <td>Pagination</td>
      <td><code>hsl(0deg, 0%, 100%, 1)</code></td>
    </tr>
    <tr>
      <td><code>$pagination-bordered-hover-background</code></td>
      <td>Pagination</td>
      <td><code>hsl(0deg, 0%, 100%, 1)</code></td>
    </tr>
    <tr>
      <td><code>$pagination-bordered-hover-border-color</code></td>
      <td>Pagination</td>
      <td><code>hsl(33, 12%, 72%, 1)</code></td>
    </tr>
    <tr>
      <td><code>$pagination-bordered-hover-color</code></td>
      <td>Pagination</td>
      <td><code>hsl(0deg, 0%, 22%, 1)</code></td>
    </tr>
    <tr>
      <td><code>$accordion-border-width</code></td>
      <td>Accordion</td>
      <td><code>1px</code></td>
    </tr>
    <tr>
      <td><code>$accordion-border-color</code></td>
      <td>Accordion</td>
      <td><code>hsl(0deg, 0%, 90%, 1)</code></td>
    </tr>
    <tr>
      <td><code>$accordion-title-background-color</code></td>
      <td>Accordion</td>
      <td><code>transparent</code></td>
    </tr>
    <tr>
      <td><code>$accordion-content-color</code></td>
      <td>Accordion</td>
      <td><code>hsl(0deg, 0%, 22%, 1)</code></td>
    </tr>
    <tr>
      <td><code>$accordion-content-background</code></td>
      <td>Accordion</td>
      <td><code>hsl(0deg, 0%, 100%, 1)</code></td>
    </tr>
    <tr>
      <td><code>$alert-background-color</code></td>
      <td>Alert</td>
      <td><code>hsl(0deg, 0%, 100%, 1)</code></td>
    </tr>
    <tr>
      <td><code>$alert-color</code></td>
      <td>Alert</td>
      <td><code>hsl(0deg, 0%, 22%, 1)</code></td>
    </tr>
    <tr>
      <td><code>$button-hover-background</code></td>
      <td>Button</td>
      <td><code>hsl(0deg, 0%, 100%, 1)</code></td>
    </tr>
    <tr>
      <td><code>$button-hover-color</code></td>
      <td>Button</td>
      <td><code>hsl(0deg, 0%, 22%, 1)</code></td>
    </tr>
    <tr>
      <td><code>$button-rounded-radius</code></td>
      <td>Button</td>
      <td><code>6px</code></td>
    </tr>
    <tr>
      <td><code>$button-loading-speed</code></td>
      <td>Button</td>
      <td><code>0.8s</code></td>
    </tr>
    <tr>
      <td><code>$dropdown-color</code></td>
      <td>Dropdown</td>
      <td><code>hsl(0deg, 0%, 22%, 1)</code></td>
    </tr>
    <tr>
      <td><code>$dropdown-border-width</code></td>
      <td>Dropdown</td>
      <td><code>1px</code></td>
    </tr>
    <tr>
      <td><code>$dropdown-border-color</code></td>
      <td>Dropdown</td>
      <td><code>hsl(0deg, 0%, 80%, 0.34)</code></td>
    </tr>
    <tr>
      <td><code>$dropdown-link-hover-color</code></td>
      <td>Dropdown</td>
      <td><code>inherit</code></td>
    </tr>
    <tr>
      <td><code>$image-thumb-border-width</code></td>
      <td>Image</td>
      <td><code>1px</code></td>
    </tr>
    <tr>
      <td><code>$image-thumb-border-color</code></td>
      <td>Image</td>
      <td><code>hsl(33, 12%, 82%, 1)</code></td>
    </tr>
    <tr>
      <td><code>$modal-color</code></td>
      <td>Modal</td>
      <td><code>hsl(0deg, 0%, 22%, 1)</code></td>
    </tr>
    <tr>
      <td><code>$table-background-color</code></td>
      <td>Table</td>
      <td><code>hsl(0deg, 0%, 100%, 1)</code></td>
    </tr>
    <tr>
      <td><code>$table-color</code></td>
      <td>Table</td>
      <td><code>hsl(0deg, 0%, 22%, 1)</code></td>
    </tr>
    <tr>
      <td><code>$tab-item-background</code></td>
      <td>Tabs</td>
      <td><code>hsl(0deg, 0%, 100%, 1)</code></td>
    </tr>
    <tr>
      <td><code>$tab-item-active-background</code></td>
      <td>Tabs</td>
      <td><code>hsl(0deg, 0%, 100%, 1)</code></td>
    </tr>
    <tr>
      <td><code>$tab-item-hover-color</code></td>
      <td>Tabs</td>
      <td><code>hsl(234deg, 100%, 64%, 1)</code></td>
    </tr>
    <tr>
      <td><code>$tab-item-hover-background</code></td>
      <td>Tabs</td>
      <td><code>hsl(0deg, 0%, 100%, 1)</code></td>
    </tr>
    <tr>
      <td><code>$tab-content-background</code></td>
      <td>Tabs</td>
      <td><code>transparent</code></td>
    </tr>
    <tr>
      <td><code>$tab-content-color</code></td>
      <td>Tabs</td>
      <td><code>hsl(0deg, 0%, 22%, 1)</code></td>
    </tr>
    <tr>
      <td><code>$secondary</code></td>
      <td>Colors</td>
      <td><code>#ff5e82</code></td>
    </tr>
    <tr>
      <td><code>$theme-font-color</code></td>
      <td>Base</td>
      <td><code>hsl(0deg, 0%, 22%, 1)</code></td>
    </tr>
    <tr>
      <td><code>$theme-background-color</code></td>
      <td>Base</td>
      <td><code>hsl(0deg, 0%, 100%, 1)</code></td>
    </tr>
  </tbody>
</table>

### Removed Sass variables
<table class="table">
  <tbody>
    <tr>
      <th>Variable</th>
      <th>Module</th>
      <th>Replaced with</th>
    </tr>
    <tr>
      <td><code>$select-arrow-height</code></td>
      <td>Form</td>
      <td>-</td>
    </tr>
    <tr>
      <td><code>$input-border</code></td>
      <td>Form</td>
      <td><code>$input-border-color</code><br /><code>$input-border-width</code></td>
    </tr>
    <tr>
      <td><code>$top-burger-height</code></td>
      <td>Top (Navbar)</td>
      <td>-</td>
    </tr>
    <tr>
      <td><code>$menu-list-hover</code></td>
      <td>Menu</td>
      <td><code>$menu-list-hover-background</code></td>
    </tr>
    <tr>
      <td><code>$menu-divider</code></td>
      <td>Menu</td>
      <td><code>$menu-divider-color</code><br /><code>$menu-divider-width</code></td>
    </tr>
    <tr>
      <td><code>$menu-expandable-border</code></td>
      <td>Menu</td>
      <td><code>$menu-expandable-border-color</code><br /><code>$menu-expandable-border-width</code></td>
    </tr>
    <tr>
      <td><code>$pagination-border</code></td>
      <td>Pagination</td>
      <td><code>$pagination-border-color</code><br /><code>$pagination-border-width</code></td>
    </tr>
    <tr>
      <td><code>$pagination-rounded</code></td>
      <td>Pagination</td>
      <td><code>$pagination-rounded-radius</code></td>
    </tr>
    <tr>
      <td><code>$pagination-bordered</code></td>
      <td>Pagination</td>
      <td><code>$pagination-bordered-border-color</code></td>
    </tr>
    <tr>
      <td><code>$pagination-bordered-active</code></td>
      <td>Pagination</td>
      <td><code>$pagination-bordered-active-background</code></td>
    </tr>
    <tr>
      <td><code>$pagination-bordered-hover</code></td>
      <td>Pagination</td>
      <td><code>$pagination-bordered-hover-border-color</code></td>
    </tr>
    <tr>
      <td><code>$accordion-border</code></td>
      <td>Accordion</td>
      <td><code>$accordion-border-color</code><br /><code>$accordion-border-width</code></td>
    </tr>
    <tr>
      <td><code>$button-border-style</code></td>
      <td>Button</td>
      <td>-</td>
    </tr>
    <tr>
      <td><code>$button-text-align</code></td>
      <td>Button</td>
      <td>-</td>
    </tr>
    <tr>
      <td><code>$button-loading-animation</code></td>
      <td>Button</td>
      <td><code>$button-loading-speed</code></td>
    </tr>
    <tr>
      <td><code>$card-border-style</code></td>
      <td>Card</td>
      <td>-</td>
    </tr>
    <tr>
      <td><code>$dropdown-border</code></td>
      <td>Dropdown</td>
      <td><code>$dropdown-border-color</code><br /><code>$dropdown-border-width</code></td>
    </tr>
    <tr>
      <td><code>$dropdown-radius</code></td>
      <td>Dropdown</td>
      <td><code>$dropdown-border-radius</code></td>
    </tr>
    <tr>
      <td><code>$dropdown-link-hover</code></td>
      <td>Dropdown</td>
      <td><code>$dropdown-link-hover-background</code></td>
    </tr>
    <tr>
      <td><code>$image-thumb-border</code></td>
      <td>Image</td>
      <td><code>$image-thumb-border-color</code><br /><code>$image-thumb-border-width</code></td>
    </tr>
    <tr>
      <td><code>$media-border-style</code></td>
      <td>Media</td>
      <td>-</td>
    </tr>
    <tr>
      <td><code>$tag-border-style</code></td>
      <td>Tags</td>
      <td>-</td>
    </tr>
    <tr>
      <td><code>$body-font-color</code></td>
      <td>Base</td>
      <td><code>$theme-font-color</code></td>
    </tr>
  </tbody>
</table>

## v1.1.1

### Notes
Forgot to update version number in compiled css. This is a trivial patch - but it needs to be done.

## v1.1.0

### Notes
Apologies for the necessary deprecations.

### Improvements

* Items within a list using the <code>is-inline-list</code> modifier will now wrap.
* Added a **top-margin** of **0.3rem** to <code>dt</code> elements that are preceded by a <code>dd</code> element. This adds a little more breathing room.
* Removed the **_form.scss** module. This should have been removed version 1.0.
* Removed **bottom-margin** from **heading** tags when used in a <code>top__brand</code> element.
* Removed the redundant **form/form.scss** file.
* Removed **absolute positioning** from the <code>top__burger</code> element when the <code>is-mobile-responsive</code> modifier is active.
* Added 'square' to the <code>$image-square-sizes</code> list and removed the <code>$image-square-size</code> variable.
* Changed the default value of <code>$tab-border-radius</code> to <b>0</b>. Previous value was <b>6px</b>.
* Added <code>is-loading</code> modifier to the <code>is-select</code> container.
* New form variable <code>$select-loading-animation</code> with value <b>spinner .8s linear infinite</b>.
* New form variable <code>$select-loading-width</code> with value <b>2px</b>.
* New form variable <code>$select-loading-color</code> with value <b>$light-grey</b>.


### Bug fixes

* Tab list item padding was being applied to the <code>li</code> element instead of the <code>a</code> element. All content within a tab list item must be placed within the <code>a</code> element.
* The <code>is-flex-start</code> **grid** modifier is now using the <code>align-items</code> CSS property instead of <code>align-content</code>.
* Menu list item padding was being applied to the <code>li</code> element instead of the <code>a</code> element. All content within a menu list item must be placed within the <code>a</code> element.
* Removed the on hover underline for <code>a</code> elements in <code>pagination</code> list items.
* Pagination list item padding was being applied to the <code>li</code> element instead of the <code>a</code> element. All content within a pagination list item must be placed within the <code>a</code> element.
* The <code>is-active</code> modifier now works on <code>top__burger</code> elements that do not have the <code>has-animate</code> modifier.
* The <code>top__burger</code> element now appears vertically centered within the **top bar**.
* The <code>is-mobile-response.is-open</code> modifier did not work on **top** elements with **containers**. This has been corrected.
* Active list items within the <code>is-expandable</code> list now use the correct background color.
* Button addon groups where taking up 100% width when nested within a button group. These have been corrected to auto width.
* Tag groups and addons now have 100% width.

### Deprecations
* The <code>tabs__title</code> element will be removed this patch. Please use a regular list item or create your own title element.
* The <code>tabs__item</code> element will be removed this patch. To create a tabs list item you only need a regular <code>li</code> element within a list that contains the <code>tabs__list</code> class.
* The <code>has-borders</code> modifier in the **tabs** module has been replaced with <code>has-border</code>.
* The <code>$tab-bar-color</code> variable will be removed and replaced with <code>$tab-border-color</code>. The default value remains the same.
* The <code>$tab-bar-width</code> variable will be removed and replaced with <code>$tab-border-width</code>. The default value remains the same.
* The <code>menu__slidedown</code> element will be removed this patch. Please use the <code>is-expandable</code> modifier instead.
* The <code>$menu-slidedown-border</code> variable will be removed this patch and replaced with <code>$menu-expandable-border</code>. The default value remains the same.
* The <code>$menu-slidedown-margin</code> variable will be removed this patch and replaced with <code>$menu-expandable-margin</code>. The default value remains the same.
* The <code>$menu-slidedown-padding-left</code> variable will be removed this patch and replaced with <code>$menu-expandable-padding-left</code>. The default value remains the same.
* The <code>$menu-slidedown-item-padding</code> variable will be removed this patch and replaced with <code>$menu-expandable-item-padding</code>. The default value remains the same.
* The <code>$image-square-size</code> variable has been removed. You can edit this value with the <code>$image-square-sizes</code> variable instead.


## v1.0.1

### Improvements
* Add <code>$input-background-color</code> variable. Use this to override the default **$white** background color on form elements.
* Add <code>$input-color</code> variable. Use this to override the default **inherit** text color on form elements.

### Bug fixes
* Corrected **.top__links** li element not applying by removing rogue comma.
* The <code>$top-link-hover-decoration</code> variable now applies to any nested link elements.
* <code>.top__burger</code> now sits in the top right corner when the **.is-mobile-responsive** modifier is being used.

## v1.0.0

### Core changes
* Reorganised structure of the **scss** folder. Helpers have been moved into the **base** folder as these are all part of OrbitCSS's base core.
* <code>/helpers/general.scss</code> can now be found at <code>/base/helpers.scss</code>.
* An **include all** file has been added for each folder allowing developers to include the entire contents instead of each single file.
*  The **switch** and **slider** elements have been separated into two modules independently from the general form module.
* The **media** module has been moved to the **elements** directory.
* <code>/navigation/navbar</code> has been renamed to <code>/navigation/top</code>.
* <code>.has-start</code>, <code>.has-centered</code> and <code>.has-end</code> helpers have been added to the OrbitCSS global helpers. These will align child flex content using the CSS <code>justify-content</code> property.
* Core functions and mixins moved to their own file at <code>/base/functions.scss</code>.
* The <code>.has-padding-only-sides</code> global helper has been removed. Replace existing implementations with <code>class="has-no-padding-top has-no-padding-bottom"</code>.
* New mixin <code>element-color</code> has been added. Read more about how to use it in the [OrbitCSS documentation](https://orbitcss.com/documentation/getting-started/customization).

### Typography
* <code>.has-centered</code> and <code>.has-end</code> helpers have been removed from the <code>ul.is-inline-list</code> helper. As these are now global helpers, any previous use will function as normal and no changes are required.
* All link elements now implement <code>text-decoration: underline;</code> on **hover** state. Previously this was controlled via use of the <code>.is-hover-underline</code> helper.
* Removed the <code>.is-hover-underline</code> helper.

### Form
* Form module has been split up unto three modules for the general form content, switch and slider.
* The <code>.is-small</code> helper for the **switch** module has been removed. If you still require this class you can copy the code from a previous version of OrbitCSS.
* The <code>.upload</code> element has been removed. This should have never existed and predates initial OrbitCSS releases. Use the <code>.is-file-input</code> element class instead.

### Grid
* <code>.has-centered</code> and <code>.has-end</code> helpers have been removed from the **grid** element. As these are now global helpers any previous use will function as normal and no changes are required.

### Breadcrumb
* <code>.has-centered</code> and <code>.has-end</code> helpers have been removed from the **breadcrumb** element. As this previously applied to the child <code>ul</code> element you will now have to add these helpers directly to the <code>ul</code> element. For example replace:
<pre><code>&lt;nav class="breadcrumb has-centered"&gt;
&#9;&lt;ul&gt;...&lt;/ul&gt;
&lt;/nav&gt;</code></pre>
WITH
<pre><code>&lt;nav class="breadcrumb"&gt;
&#9;&lt;ul class="has-centered"&gt;...&lt;/ul&gt;
&lt;/nav&gt;</code></pre>

### Top
* Module renamed from **navbar** to **top**.
* <code>.has-centered</code> and <code>.has-end</code> helpers have been removed from the **top** element. As this previously applied to the child <code>.container</code> element (only when one was present) you will now have to add these helpers directly to the <code>.container</code> element. For example replace:
<pre><code>&lt;nav class="top has-centered"&gt;
&#9;&lt;div class="container"&gt;...&lt;/div&gt;
&lt;/nav&gt;</code></pre>
WITH
<pre><code>&lt;nav class="top"&gt;
&#9;&lt;div class="container has-centered"&gt;...&lt;/div&gt;
&lt;/nav&gt;</code></pre>
* Added <code>$top-link-hover-decoration</code> variable. Allows you to add underline styling to top links.
* Added <code>$top-link-hover-color</code> variable. Allows you to set a text color for links in the hover state.
* Added <code>$top-link-active-background</code> variable. Allows you to set a background color for links that are in the active state via the is-active helper.
* Moved the <code>.is-active</code> helper up to the <code>li</code> element instead of the actual <code>a</code> element. This allows for active styling to be applied to list items that are not actually links.
* Removed the <code>.is-even</code> helper due to lack of browser support for <code>justify-content: space-evenly</code>.
* Remove the <code>.is-neat</code> helper. It's use case was too specific.
* Previously all <code>ul</code> elements would be hidden on small view ports. This is no longer the case and all elements are visible without the use of the <code>.is-mobile-responsive</code> helper.
* Added <code>$top-social-padding</code> variable. This is applied directly to the <code>.top__social</code> element.
* Overhauled the <code>.is-mobile-responsive</code> helper. All <code>.top__links</code> and <code>.top__social</code> elements will stack neatly when on small view port. Content can be triggered by adding <code>.is-open</code> to the <code>.top</code> element.
* The <code>.top__burger</code> element has been overhauled. Only one span is required within the element:
<pre><code>&lt;div class="top__burger"&gt;
&#9;&lt;span&gt;&lt;/span&gt;
&lt;/div&gt;</code></pre>
* Added <code>$top-burger-padding</code> variable. This is applied directly to the <code>.top__burger</code> element.
* Removed the <code>$top-burger-bar-width</code> variable.
* Added <code>$top-burger-bar-gap</code> variable. This defines the spacing between each of the bars in the burger.
* Removed <code>.top__links--mobile</code> modifier.
* Added the <code>.top__buttons</code> element. This will provide clean styling for buttons in the nav bar.
* Added <code>$top-button-padding</code> variable. This is applied directly to the <code>.top__buttons</code> element.

### Pagination
* <code>.has-centered</code> and <code>.has-end</code> helpers have been removed from the **pagination** element. As these are now global helpers any previous use will function as normal and no changes are required.
* Padding now applies to the <code>li</code> element instead of the nested link element.

### Alert
* The <code>alert-color</code> mixin has been removed. Any implementation of it should now make use of the global <code>element-color</code> mixin.
* The <code>$alert-radius</code> has been updated to 0. This removes rounded corners on the alert element by default.

### Button
* The <code>button-color</code> mixin has been removed. Any implementation of it should now make use of the global <code>element-color</code> mixin.
* <code>.has-centered</code> and <code>.has-end</code> helpers have been removed from the <code>.is-button-group</code> and <code>.is-addon-group</code> elements. As these are now global helpers any previous use will function as normal and no changes are required.

### Card
* The <code>.has-no-padding</code> helper has been removed from the **card** element. As this previously removed the padding from the child **header**, **content** and **footer** you will have to add <code>.has-no-padding</code> to each of these elements individually.
* Removed the <code>.card--modal</code> modifier. **Card** elements can now just be placed directly in the modal.
* Removed the <code>.is-rounded</code> helper class and changed the default value of the <code>$card-radius</code> variable to 0.

### Modal
* The <code>$modal-overlay-background</code> variable can now be overridden.
* Removed the <code>.card--modal</code> modifier. **Card** elements can now just be placed directly in the modal.
* Removed the <code>.has-padding</code> helper from the <code>.modal__content</code> element. Padding is now set as the default and can be overridden with the global <code>.has-no-padding</code> helper.
* Set the default value of the <code>$modal-radius</code> variable to 0.

### Tabs
* <code>.has-centered</code> and <code>.has-end</code> helpers have been removed from the **tabs** element. As this previously applied to the child <code>.tabs__list</code> element you will now have to add these helpers directly to the <code>.tabs__list</code> element. For example replace:
<pre><code>&lt;div class="tabs has-centered"&gt;
&#9;&lt;ul class="tabs__list"&gt;...&lt;/ul&gt;
&lt;/div&gt;</code></pre>
WITH
<pre><code>&lt;div class="tabs"&gt;
&#9;&lt;ul class="tabs__list has-centered"&gt;...&lt;/ul&gt;
&lt;/div&gt;</code></pre>
* Remove the <code>.has-rounded-borders</code> helper from the <code>.tabs__item</code> element. Border radius can now be controlled with the **$tab-border-radius** variable.
* Added the <code>$tab-border-radius</code> variable with a default value of **0**. This variable can be used to control the border radius of the tab list items.

### Tags
* The <code>tag-color</code> mixin has been removed. Any implementation of it should now make use of the global <code>element-color</code> mixin.
* <code>.has-centered</code> and <code>.has-end</code> helpers have been removed from the <code>.is-tag-group</code> and <code>.is-addon-group</code> elements. As these are now global helpers any previous use will function as normal and no changes are required.

### Menu
* The <code>.link__list</code> <code>a</code> styling has been moved to the <code>li</code> element. This allows for list items that do not have links. The exception is <code>.menu__slidedown</code> elements. The styling will isntead be inherited by the first child.
* Remove the 100% width and no margin default that was applied to all buttons within a menu.
* Removed the <code>.is-open</code> modifier on the slide down menu. To trigger an open state; only the <code>.is-active</code> modifier needs to be applied to the parent item.
* Restructure to prevent nested content inheriting the properties of the core menu elements.

### Section
* Added <code>1rem</code> left & right padding to all 3 section sizes.

### Accordion
* Removed the <code>.is-open</code> modifier on the <code>.accordion__content</code> element. To trigger an open state; the <code>.is-active</code> modifier needs to be applied to a direct parent of the <code>.accordion__content</code> element.

### Table
* Removed the <code>.has-scroll</code> helper.
* Added <code>.is-table-container</code> element. Wrapping a table with this class will enable horizontal scrolling.

### Dropdown
* Changed the default value of the <code>$dropdown-radius</code> variable to 0.
* Removed the margin override from dropdown buttons.

### Bug fixes
* Flex is now only applied to elements with <code>.hero__content</code> who are a direct descendant of the <code>.hero.is-full</code> element.
* Using <code>.is-end</code> and <code>.is-center</code> will only apply to direct descendants of the <code>.card__footer</code> element and not all descendants.
* Span and label styling is only applied to direct descendants of <code>.is-input-group</code> element. This was causing elements such as buttons using icons to display incorrectly.

***

## 0.4.4

### Bug fixes

* Corrected bottom margin when using multiple subtitles after a title element.
* Dropdown element arrow now calculating EMs based on font base size.
* Removed the margin on ul elements using the <code>.is-inline-list</code> helper.
* Using the <code>.is-rounded</code> and <code>.is-thumbnail</code> helpers together now forces the rounded border radius.
* Avoid <code>.has-text-muted</code> being overriden by adding <code>!important</code>.

### Improvements
* Added <code>.has-centered</code> and <code>.has-end</code> alignment helpers for the ul element.
* Added <code>.has-no-padding-left</code> and <code>.has-no-padding-right</code> general helper classes.
* Added pointer cursor to the burger menu.
* Changed the structure of the <code>.button--close</code> element to support color inheritance.

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
        <code>$button-cross-width</code>
      </td>
      <td>
        <code>2px</code>
      </td>
      <td>
        <code>1px</code>
      </td>
    </tr>
    <tr>
      <td>
        <code>$button-cross-color</code>
      </td>
      <td>
        <code>$white</code>
      </td>
      <td>
        <code>inherit</code>
      </td>
    </tr>
  </tbody>
</table>

### Deprecations

* <code>$button-cross-height</code> variable.

## 0.4.3

### Bug fixes

* <code>$dropdown-radius</code> now actually changes the border radius for a dropdown element.
* <code>$tag-addon-radius</code> now controls the border radius for tags in addon groups.
* <code>$slider-track-height</code> now correctly sets the height for the <code>sliderTrack()</code> mixin.
* Remove redundant <code>$top-burger-bar-width</code> variable from the navbar module.
* <code>$subtitle-color</code> now editable.
* Burger menu now has the correct width when <code>.is-active</code> helper is active.
* Labels and spans in input groups now resize correctly when the <code>$font-base</code> variable is changed.
* Switches now resize correctly when the <code>$font-base</code> variable is changed.
* Corrected padding on the dropdown element when the <code>.has-arrow</code> is active and the <code>$font-base</code> variable has been changed.
* Corrected positioning of select element's arrow when the <code>$font-base</code> variable has been changed.

### Improvements
* Removed <code>margin-right</code> from any button using the <code>.is-full</code> helper in a button group.
* Added the <code>$label-font-size</code> and <code>$label-line-height</code> variables for form label customization.

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
        <code>$label-font-size</code>
      </td>
      <td>
        <code></code>
      </td>
      <td>
        <code>calculateRem(16)</code>
      </td>
    </tr>
    <tr>
      <td>
        <code>$label-line-height</code>
      </td>
      <td>
        <code></code>
      </td>
      <td>
        <code>1.6</code>
      </td>
    </tr>
  </tbody>
</table>

### Notes

* The <code>.is-small</code> helper for the switch element will be removed in version 0.5.0. The small version of the switch does not benefit the framework and is too specific.

## 0.4.2

### Improvements

* Move the <code>a</code> element into <code>typography.scss</code>.

### Bug fixes

* Fix <code>.has-link-inherit</code> not applying to deeper nested links.
* Correct typo in changelog for v0.4.1.

## 0.4.1

### Improvements

* Add <code>.is-active</code> helper to button element.
* Add <code>.is-flex-start</code> helper to the grid element.
* Add <code>.has-link-inherit</code> helper to force child link elements to inherit the text color of the parent.
* Add <code>.is-hover-underline</code> helper.
* New variable <code>$list-item-padding</code> to set the padding on <code>li</code> elements in ordered and unordered lists.
* Add <code>.is-inline-list</code> helper to the unordered list element.
* Set burger bar color based on border color instead of background color.

### Bug fixes

* Make <code>$card-header-color</code> variable overridable.
* Fix border display on focus state for form elements within an input group.
* Fix variable height bug for form elements within an input group in Chrome.
* Nested unordered lists no longer inherit the <code>list-style-type</code> styling of a parent unordered list with the <code>.has-no-list-style</code> helper.

### Deprecations

* <code>$top-burger-bar-width</code> variable.

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
        <code>$list-item-padding</code>
      </td>
      <td>
        <code></code>
      </td>
      <td>
        <code>0</code>
      </td>
    </tr>
    <tr>
      <td>
        <code>$top-burger-bar-height</code>
      </td>
      <td>
        <code>2px</code>
      </td>
      <td>
        <code>1px</code>
      </td>
    </tr>
    <tr>
      <td>
        <code>$top-burger-color</code>
      </td>
      <td>
        <code>$white</code>
      </td>
      <td>
        <code>inherit</code>
      </td>
    </tr>
  </tbody>
</table>

## 0.4.0

### Notes

Before upgrading check the use of the <code>.is-{size}-only</code> and <code>.is-{screen}-offset-{size}</code> helper classes throughout your code and update as per the below improvements.

### Improvements

* Change column offset responsive helpers to read <code>.is-offset-{screen}-{size}</code> instead of <code>.is-{screen}-offset-{size}</code>.
* Change all of the responsive <code>.is-{screen}-only</code> helpers to display only for the given view port (not larger).
* Add <code>.is-tablet-up</code> helper to display on the medium and up viewport.
* Add <code>.is-tablet-down</code> helper to display on the medium and small viewports.
* Add <code>.is-desktop-up</code> helper to display on the large and up viewport.
* Add <code>.is-desktop-down</code> helper to display on the large, medium and small viewports.
* Add <code>.is-desktop-auto</code> helper.
* Add <code>.is-desktop-x-auto</code> helper.
* Create the <code>column-size()</code> mixin to make column sizing easier to manage.
* Reduce overall size of <code>orbit.css</code> and <code>orbit.min.css</code>.

### Bug fixes

* Fix typo in the column offset responsive helpers.


## 0.3.2

### Bug fixes

* Correct class name for the <code>.has-no-wrap</code> helper.
* Add <code>padding-right</code> to <b>select</b> element to prevent text/arrow overlap.


## 0.3.1

### Improvements

* Add <code>.has-no-wrap</code> helper class. Applies <code>white-space: nowrap</code>.
* Add border radius to the <code>.card__header</code> and <code>.card__footer</code> elements when the <b>card</b> block has the <code>.is-rounded</code> modifier.
* Add <code>$card-header-color</code> variable.

### Deprecations

* Remove the <code>.is-reversed</code> grid modifier.

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
        <code>$breadcrumb-disabled-color</code>
      </td>
      <td>
        <code>lighten($dark-grey, 35%)</code>
      </td>
      <td>
        <code>$muted</code>
      </td>
    </tr>
    <tr>
      <td>
        <code>$card-header-color</code>
      </td>
      <td>
        <code></code>
      </td>
      <td>
        <code>$black</code>
      </td>
    </tr>
  </tbody>
</table>

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
* Improve flex properties for the Hero element.
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
