$(document).on("change", ".price-sorting", function() {
    var $sortingMethod = $(this).val();

    if ($sortingMethod == 'priceLowToHigh') {
        sortProductsPriceAscending();
    }
    else if ($sortingMethod == 'priceHighToLow') {
        sortProductsPriceDescending();
    }
});

function sortProductsPriceAscending() {
    var $products = $('.product-column');
    $products.sort(function(a, b){ return $(a).data("price")-$(b).data("price")});

    $('.product-row').each(function() {
        var $currentRow = $(this);
        $currentRow.html($products);
    });

}

function sortProductsPriceDescending() {
    var $products = $('.product-column');
    $products.sort(function(a, b){ return $(b).data("price") - $(a).data("price")});

    $('.product-row').each(function() {
        var $currentRow = $(this);
        $currentRow.html($products);
    });
}