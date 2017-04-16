
function ProductDimensionsDirective() {
    return {
        restrict: 'E',
        template: 'ProductDimentions.html',
        scope: {
            productDimesions: '@',
            productDetail: '@',
            psid: '@'
        },
        link: function(scope, element, attrs) {


            function init() {
                let product = getProductByPSID(psid);

                vm.selectedProductOptions = product.variationOptions;

                for (var prop in vm.selectedProductOptions) {
                    productOptionNames.push(prop);
                }

                vm.quantityArray = getQuantityArray(product.maxQuantity);
                vm.quantity = vm.quantityArray[0];
            }

        }
    }
}
