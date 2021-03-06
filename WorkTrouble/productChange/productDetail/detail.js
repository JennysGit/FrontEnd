var app = angular.module('app', []);

app.controller('MainController', MainController)
    .directive('productDimensions', ProductDimensionsDirective);


function MainController($http) {

    var vm = this;

    var allProducts = []
    this.productName = "T-shirt";
    this.selectedProductOptions = {};
    this.quantityArray = [];

    this.disabledProducts = [];

    var productOptionNames = [];

    vm.needDisableOptions = false;


    let psid = '3047500213699059';


    $http.get('../mockdata/productDimensions.json').then(function(res) {
        vm.productDimesions = res.data.productOptions;
    });

    $http.get('../mockdata/productDetail.json').then(function(res) {
        allProducts = res.data;
        initProductOptions();
    });


    function initProductOptions() {
        let product = getProductByPSID(psid);

        vm.selectedProductOptions = product.variationOptions;

        for (var prop in vm.selectedProductOptions) {
            productOptionNames.push(prop);
        }

        vm.quantityArray = getQuantityArray(product.maxQuantity);
        vm.quantity = vm.quantityArray[0];
    }


    this.resetOptions = function(key, value) {
        var selectedOptions = {};
        var slectedOptionName = ""
        vm.disabledProducts = [];
        for (var prop in vm.selectedProductOptions) { // Need to Ensure the property order.

            selectedOptions[prop] = vm.selectedProductOptions[prop];
            if (prop === key) {
                slectedOptionName = prop;
                break;
            }
        }
        vm.selectedProductOptions = selectedOptions;

        disableProductionOptions(key);

    }


    function getProductByPSID(psid) {
        for (var i = 0; i < allProducts.length; i++) {
            if (allProducts[i].productId == psid) {
                var product = angular.copy(allProducts[i]);
                return product;
            }
        }

        return "";
    }




    /*
     * filter the products that contains the the option name & value.
     * params: {fit: 'Junior's', size: 'M'} 
     */
    function getProductsByOptions(options) {
        var products = [];
        for (var i = 0; i < allProducts.length; i++) {
            var filtered = true;
            for (var prop in options) {
                if (options[prop] != allProducts[i].variationOptions[prop]) {
                    filtered = false;
                    break;
                }
            }

            if (filtered) {
                products.push(allProducts[i]);
            }
        }

        return products;
    }

    // disable product optionsf. 
    function disableProductionOptions(optionName) {
        var index = productOptionNames.indexOf(optionName);
        var length = productOptionNames.length;
        var products = getProductsByOptions(vm.selectedProductOptions);

        for (var i = 0; i <= index; i++) {
            $('.' + productOptionNames[i]).find('input').prop('disabled', false);
        }

        // Reset the quantity and enable. compute the quantity.
        // the last options before quantity.
        if (optionName == productOptionNames[length - 1]) {
            vm.disableQuantity = false;
            // make sure only get one product.
            if (products.length == 1) {
                vm.quantityArray = getQuantityArray(products[0].maxQuantity);
                vm.quantity = vm.quantityArray[0];
            }

        } else {

            var disableOptionName = productOptionNames[index + 1];

            var enableOptions = getProductOptionsName(products, disableOptionName);
            var disableOptions = getDisableProductsOptions(enableOptions, disableOptionName);

            $.each(disableOptions, function(index, item) {
                $('.' + disableOptionName).find('#' + item).prop('disabled', true);
            });
            // disable quantity.disableQuantity = true;
            vm.disableQuantity = true;
            vm.quantityArray = [1];
            vm.quantity = 1;
        }
    }

    function getQuantityArray(num) {

        var arr = [];
        for (i = 1; i <= num; i++) {
            arr.push(i);
        }
        return arr;
    }

    function getProductOptionsName(products, optionName) {
        var options = [];

        for (var i = 0; i < products.length; i++) {

            var vOption = products[i].variationOptions;

            options.push(products[i].variationOptions[optionName]);
        }
        // angular.foreach(products, function(item) {
        //     options.push(item.variationOptions[optionName]);
        // })

        return options;
    }

    function getDisableProductsOptions(enableOptions, optionName) {
        var disableOptions = [];

        var options = vm.productDimesions[optionName];
        for (var i = 0; i < options.length; i++) {
            var option = options[i];
            if (enableOptions.indexOf(option) == -1) {
                disableOptions.push(option);
            }
        }

        return disableOptions;
    }
}

