
# nav

Basic types of navigation

## Installation

Install with [component](http://component.io):

    $ component install chameleonui/nav

## API

### Stylus

#### Use flags

You can disable and enable nav features through use-flags:

```
// Only nav-inline is enabled by default
use-nav-inline = true|false;
use-nav-stacked = false|true;
use-nav-tabs = false|true;
```

#### Variables

You can customize look'n'feel of navs with following variables:

```
nav-inline-class = "nav-inline";
nav-inline-margin = 0 0 1;
nav-inline-padding = 0;
nav-inline-item-padding = .25;

nav-stacked-class = "nav-stacked";
nav-stacked-margin = 0 0 1;
nav-stacked-padding = 0;
nav-stacked-item-padding = .25;

nav-tabs-class = "nav-tabs";
nav-tabs-margin = 0 0 1;
nav-tabs-padding = 0;
nav-tabs-item-padding = .25 .5;
nav-tabs-item-border-color = #999;
nav-tabs-item-border-width = 1px;
nav-tabs-item-border-style = solid;
nav-tabs-item-border-radius = 3px;
nav-tabs-item-active-bg-color = #fff;
```

#### Init

```
nav();
```

### JavaScript

There is Javascript necessary fornav-tabs switch:

```js
var Tabs = require('nav/tabs');
var tabs = new Tabs(); // seek and enable all .nav-tabs
```

## Author(s)

Edgedesign s.r.o. – Tomas Kuba

## License

The MIT License (MIT)

Copyright © 2013 Edgedesign s.r.o.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.