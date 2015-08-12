(function () {
    "use strict";

    angular
        .module("productManagement")
        .controller("productEditController", ["product", "$state", productEditController]);

    function productEditController(product, $state) {
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

        vm.submit = function() {
            vm.product.$save();
        };

        vm.cancel = function() {
            $state.go('productList');
        };


    }

})();