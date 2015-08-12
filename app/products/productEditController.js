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

        vm.addTags = function(tags) {
            if (tags) {
                var array = tags.split(',');
                vm.product.tags = vm.product.tags ? vm.product.tags.concat(array) : array;
                vm.newTags = "";
            } else {
                alert("Please enter one or more tags seperated by commas");
            }
        }

        vm.removeTag = function(idx) {
            vm.product.tags.splice(idx, 1);
        }


    }

})();