(function () {
    "use strict";

    angular
        .module("productManagement")
        .controller("productEditController", ["product", productEditController]);

    function productEditController(product) {
        var vm = this;

        vm.product = product;
        vm.opened = false;

        if (vm.product && vm.product.productId) {
            vm.title = "Edit : " + product.productName;
        } else {

            vm.title = "New Product";
        }

        vm.open = function($event) {
            $event.preventDefault();
            $event.stopPropagation();

            vm.opened = !vm.opened;
        }


    }

})();