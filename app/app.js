﻿(function() {
    "use strict";

    var app = angular
        .module("productManagement",
        [
            "common.services"
            , "productResourceMock"
            , "ui.router"
        ]);

    app.config(["$stateProvider"
                , "$urlRouterProvider",
                function ($stateProvider, $urlRouterProvider) {
                    $urlRouterProvider.otherwise("/");
                    $stateProvider
                        .state("home", {
                            url: "/",
                            templateUrl: "app/welcomeView.html"
                        })
                        .state("productList", {
                            url: "/products",
                            templateUrl: "app/products/productListView.html",
                            controller: "productListController as vm"
                        })
                        .state("productEdit", {
                            url: "/products/edit/:productId",
                            templateUrl: "app/products/productEditView.html",
                            controller: "productEditController as vm"
                        });
                }
    ]);

})();