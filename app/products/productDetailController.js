(function() {
    "use strict";

    angular
        .module("productManagement")
        .controller("productDetailController", ["product", "productService", productDetailController]);

    function productDetailController(product, productService) {
        var vm = this;

        vm.product = product;
        vm.title = "Product Datail : " + vm.product.productName;;

        vm.marginPercent = productService.calculateMarginPercent(vm.product.price, vm.product.cost);

        if (vm.product.tags) {
            vm.product.tagList = vm.product.tags.toString();
        }

    }
})();