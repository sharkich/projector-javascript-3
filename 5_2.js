function optimizer(data) {
    const result = {};
for (const [key, value] of Object.entries(data)) {
    result[key.toLowerCase()] = parseFloat(value).toFixed(2);
    
}

    return result;
};

const priceData = {
    Apples: '23.4',
    BANANAS: '48',
    oRAngGEs: '48.7584',
};

let updatedPriceData = optimizer(priceData);
console.log(updatedPriceData)    // {apples: '23.40', bananas: '48.00', oranges: '48.76'}