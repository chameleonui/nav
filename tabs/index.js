var $ = require('jquery');
 
module.exports = Tabs;
 
var defaults = {
  classes : {
        tabActive: 'is-active',
        targetHidden: 'is-hidden'
    }
};
 
function Tabs(elements, options){
    this.options = options || {};
    for (var i in defaults) {
        if (!(this.options[i])) this.options[i] = defaults[i];
    }
 
    this._elements = elements || '.nav-tabs > li';
    this._dataTarget = null;

    var component = this;
    $(this._elements).each(function(){
        $tab = $(this);
        $tab.on('click', function(e){
            e.preventDefault();
            component.toggleTab(this);
        });
        if ($tab.hasClass(component.options.classes.tabActive)) {
            component.toggleTab(this);
        }
    });
}

Tabs.prototype.toggleTab = function(elTab) {
    // Hide targets
    var component = this;
    $(this._elements).each(function(){
        target = $(this).children('a').attr("href");
        $(target).addClass(component.options.classes.targetHidden);
    });
    // Show target
    var target = $(elTab).children('a').attr("href");
    $(target).removeClass(this.options.classes.targetHidden);
    // Remove active class
    $(this._elements).removeClass(this.options.classes.tabActive);
    // Add Active class
    $(elTab).addClass(this.options.classes.tabActive);
};







