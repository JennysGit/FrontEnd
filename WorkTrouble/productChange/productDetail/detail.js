var app = angular.module('app', []);

app.controller('MainController', MainController);


function MainController($http) {

    var vm = this;

    this.productName = "T-shirt";
    this.selectedProductOptions = {};

    vm.needDisableOptions = false;


    let psid = '3047500213699059';


    $http.get('../mockdata/productDimensions.json').then(function(res) {
        vm.productDimesions = res.data.productOptions;
    });

    $http.get('../mockdata/productDetail.json').then(function(res) {
        vm.products = res.data;
        setProductOptions();

    });


    function setProductOptions() {
        var product = getProductByPSID(psid);

        vm.selectedProductOptions = product.variationOptions;

        //console.log(product);
    }


    this.resetOptions = function(key) {
        var selectedOptions = {};
        for (var prop in vm.selectedProductOptions) { // Need to Ensure the property order.

            selectedOptions[prop] = vm.selectedProductOptions[prop];
            if (prop === key) {
                break;
            }
        }

        vm.selectedProductOptions = selectedOptions;

        var filteredProducts = getProductsByOptions(vm.selectedProductOptions);

        console.log(filteredProducts);
    }


    function getProductByPSID(psid) {
        var product = vm.products.filter(function(item) {
            return item.productId == psid;
        });

        return product[0];
    }


    function getProductsByOptions(options) {
        var selectedOptions = vm.selectedProductOptions;

        return vm.products.filter(function(item) {
            var variationOptions = item.variationOptions;
            var filtered = true;
            for (var prop in selectedOptions) {
                if (selectedOptions[prop] != variationOptions[prop]) {
                    filtered = false;
                    break;
                }

            }

            return filtered;
        });
    }
}
