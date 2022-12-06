(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['modalCart'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"item-background\">\r\n    <img class=\"food-image\" src="
    + alias4(((helper = (helper = lookupProperty(helpers,"url") || (depth0 != null ? lookupProperty(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":2,"column":32},"end":{"line":2,"column":39}}}) : helper)))
    + " alt="
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":2,"column":44},"end":{"line":2,"column":52}}}) : helper)))
    + ">\r\n    <div class=\"food-info-background\">\r\n        <p class=\"name\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":4,"column":24},"end":{"line":4,"column":32}}}) : helper)))
    + "</p>\r\n        <p class=\"price\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"price") || (depth0 != null ? lookupProperty(depth0,"price") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data,"loc":{"start":{"line":5,"column":25},"end":{"line":5,"column":34}}}) : helper)))
    + "</p>\r\n        <p class=\"ingredients\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"ingredients") || (depth0 != null ? lookupProperty(depth0,"ingredients") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ingredients","hash":{},"data":data,"loc":{"start":{"line":6,"column":31},"end":{"line":6,"column":46}}}) : helper)))
    + "</p>\r\n        <p class=\"reviews\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"reviews") || (depth0 != null ? lookupProperty(depth0,"reviews") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"reviews","hash":{},"data":data,"loc":{"start":{"line":7,"column":27},"end":{"line":7,"column":38}}}) : helper)))
    + "</p>\r\n    </div>\r\n    <button id=\"remove-cart-button\" class=\"remove-button\">Remove Item</button>\r\n</div>";
},"useData":true});
})();