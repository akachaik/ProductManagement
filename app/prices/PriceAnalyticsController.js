
(function () {
    "use strict";

    angular
        .module("productManagement")
        .controller("PriceAnalyticsController", ["$scope", "$filter", "products", "productService", PriceAnalyticsController]);

    function PriceAnalyticsController($scope, $filter, products, productService) {
        $scope.title = "Price Analytics";

        for (var i = 0; i < products.length; i++) {
            products[i].marginPercent = productService.calculateMarginPercent(products[i].price, products[i].cost);
            products[i].marginAmount = productService.calculateMarginAmount(products[i].price, products[i].cost);
        }

        var orderedProductsAmount = $filter("orderBy")(products, "marginAmount");
        var filteredProductsAmount = $filter("limitTo")(orderedProductsAmount, 5);
        
        var chartDataAmount = [];
        for (var i = 0; i < filteredProductsAmount.length; i++) {
            var product = filteredProductsAmount[i];
            chartDataAmount.push({
                x: product.productName,
                y: [product.cost, product.price, product.marginAmount]
            });
        }

        $scope.dataAmount = {
            series: ["Cost", "Price", "Margin Amount"],
            data: chartDataAmount
        };

        $scope.configAmount = {
            title: "Top $ Margin Products",
            tooltips: true,
            labels: false,
            mouseover: function () { },
            mouseoout: function () { },
            click: function () { },
            legend: {
                display: true,
                position: 'right'
            }
        };

        var orderedProductsPercent = $filter("orderBy")(products, "marginPercent");
        var filteredProductsPercent = $filter("limitTo")(orderedProductsPercent, 5);

        var chartDataPercent = [];
        for (var i = 0; i < filteredProductsPercent.length; i++) {
            chartDataPercent.push({
                x: filteredProductsPercent[i].productName,
                y: [filteredProductsPercent[i].marginPercent]
            });
        }

        $scope.dataPercent = {
            series: ["Margin %"],
            data: chartDataPercent
        };

        $scope.configPercent = {
            title: "Top % Margin Products",
            tooltips: true,
            labels: false,
            mouseover: function () { },
            mouseoout: function () { },
            click: function () { },
            legend: {
                display: true,
                position: 'right'
            }
        };
    }

})();