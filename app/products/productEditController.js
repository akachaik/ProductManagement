(function () {
    "use strict";

    angular
        .module("productManagement")
        .controller("productEditController", ["productResource", productEditController]);

    function productEditController(productResource) {
        var vm = this;
        productResource.query(function (data) {
            vm.products = data;
        });

        vm.showImage = false;
        vm.toggleImage = function () {
            vm.showImage = !vm.showImage;
        };

    }

})();