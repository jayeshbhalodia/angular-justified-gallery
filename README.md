Angular Justified Gallery
=========================

**Requirements:** AngularJS 1.2+
**Requirements:** Jquery 1.3.2+
**Requirements:** Justified Gallery 3.6.0+


## Usage:

1. include the angular justified gallery as a dependency for your app.

    ```js
    angular.module('myApp', ['angular-justified-gallery'])
    ```

2. include the supplied JS and CSS file (or create your own CSS to override defaults).

    ```html
    <script type='text/javascript' src='angular-justified-gallery/angular-justified-gallery.js'></script>
    ```

3. That's it -- you're done!

#### via bower:
```
$ bower install angular-justified-gallery
```

**@Todo:**

1. Integrate all configuration options of Justified Gallery (https://github.com/miromannino/Justified-Gallery)
2. Integrate all configuration options of ColorBox (http://www.jacklmoore.com/colorbox/)
2. Unit tests, 100% coverage


## Configuration
The insertion of the spinner can be controlled through configuration.  It's on by default, but if you'd like to turn it off, simply configure the service:

```js
angular.module('myApp', ['angular-justified-gallery']);  
```



```js

$scope.productImages = [{
    title: 'Awesome Product one',
    imageUrl: '/uploads/product/one.jpg'
}, {
    title: 'Awesome Product two',
    imageUrl: '/uploads/product/two.jpg'
}];

```
```html
<justified-gallery images="productImages"></justified-gallery>    
```

## Credits:
Credit goes to [Miro Mannino](https://github.com/miromannino) for his excellent [Justified-Gallery](https://github.com/miromannino/Justified-Gallery) and [Jack Moore](https://github.com/jackmoore) for his awesome [colorbox](https://github.com/jackmoore/colorbox).

## License:
Licensed under the MIT license
