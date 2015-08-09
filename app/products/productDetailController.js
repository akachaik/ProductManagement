(function() {
    "use strict";

    angular
        .module("productManagement")
        .controller("productDetailController", [productDetailController]);

    function productDetailController() {
        var vm = this;

        vm.product = {
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
        };
        vm.title = "Product Datail : " + vm.product.productName;;

        if (vm.product.tags) {
            vm.product.tagList = vm.product.tags.toString();
        }

    }
})();