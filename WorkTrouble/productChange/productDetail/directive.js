function ProductDimensionsDirective() {
    return {
        restrict: 'E',
        template: 'ProductDimentions.html',
        scope: {
            productDimensions: '@',
            allProducts: '@',
            psid: '@'
        },
        link: function(scope, element, attrs) {
            var allDimensionNames = [];

            init();


            function init() {
                let product = getProductByPSID(psid);
                scope.selectedProductDimensions = product.variationOptions;

                for (var dimensionName in scope.selectedProductDimensions) {
                    allDimensionNames.push(dimensionName);
                }

                vm.quantityArray = getQuantityArray(product.maxQuantity);
                vm.quantity = vm.quantityArray[0];
            }


            function getProductByPSID(psid) {
                // for (var i = 0; i < scope.allProducts.length; i++) {
                //     if (scope.allProducts[i].productId == psid) {
                //         return scope.allProducts[i];
                //     }
                // }

                var products = allProducts.filter(function(item) {
                    return item == psid;
                })

                return products[0];
            }


            function getProductsByOptions(options) {
                var products = [];
                for (var i = 0; i < scope.allProducts.length; i++) {
                    var filtered = true;
                    for (var prop in options) {
                        if (options[prop] != scope.allProducts[i].variationOptions[prop]) {
                            filtered = false;
                            break;
                        }
                    }

                    if (filtered) {
                        products.push(scope.allProducts[i]);
                    }
                }

                return products;
            }



            function getProductOptionsName(products, optionName) {
                var options = [];

                for (var i = 0; i < products.length; i++) {

                    var vOption = products[i].variationOptions;

                    options.push(products[i].variationOptions[optionName]);
                }
                return options;
            }

            function getDisableProductsOptions(enableOptions, optionName) {
                var disableOptions = [];

                var options = vm.allDimensionNames[optionName];
                for (var i = 0; i < options.length; i++) {
                    var option = options[i];
                    if (enableOptions.indexOf(option) == -1) {
                        disableOptions.push(option);
                    }
                }

                return disableOptions;
            }

            function getQuantityArray(num) {

                var arr = [];
                for (i = 1; i <= num; i++) {
                    arr.push(i);
                }
                return arr;
            }
        }
    }
}
