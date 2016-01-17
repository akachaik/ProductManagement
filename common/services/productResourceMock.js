(function() {
    "use strict";

    var app = angular
                .module("productResourceMock", ["ngMockE2E"]);

    app.run(function($httpBackend) {
        var products = [
            {
                "productId": 1,
                "productName": "Leaf Rakex",
                "productCode": "GDN-001",
                "releaseDate": "March 19, 2009",
                "description": "Leaf rake withe 48 inch handle.",
                "cost": 9.90,
                "price": 19.95,
                "category": "Garden",
                "tags": ["leaf", "tool"],
                "imageUrl": "https://openclipart.org/image/2400px/svg_to_png/26215/Leaf-Rake.png"
            },
            {
                "productId": 2,
                "productName": "Hammerx",
                "productCode": "GDN-002",
                "releaseDate": "May 21, 2009",
                "description": "Hammer withe 48 inch handle.",
                "cost": 20.00,
                "price": 32.99,
                "category": "Garden",
                "tags": ["barow","cart", "wheelbarrow"],
                "imageUrl": "https://openclipart.org/image/2400px/svg_to_png/4793/david-benjamin-Hammer.png"
            }
        ];

        var productUrl = "/api/products";
        $httpBackend.whenGET(productUrl).respond(products);

        var editingRegex = new RegExp(productUrl + "/[0-9][0-9]*");
        $httpBackend.whenGET(editingRegex).respond(function(method, url, data) {
            var product = { "productId": 0 };
            var parameters = url.split('/');
            var length = parameters.length;
            var id = parameters[length - 1];

            if (id > 0) {
                for (var i = 0; i < products.length; i++) {
                    if (products[i].productId == id) {
                        product = products[i];
                        break;
                    }
                }
            }

            return [200, product, {}];

        });

        $httpBackend.whenPOST(productUrl).respond(function(method, url, data) {
            var product = angular.fromJson(data);

            if (!product.productId) {
                // new product id
                product.productId = products[products.length - 1].productId + 1;
                products.push(product);
            } else {
                // update product
                for (var i = 0; i < products.length; i++) {
                    if (products[i].productId == product.productId) {
                        products[i] = product;
                        break;
                    }
                }
            }

            return [200, product, {}];
        });

        $httpBackend.whenGET(/app\//).passThrough();
    });
})();