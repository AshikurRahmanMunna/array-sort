const products = [
    'Dell hardcore i29 200gb laptop',
    'iphone 1TB camera flashlight Phone',
    'HP elitebook 840 g3',
    'Yellow laptop with black camera',
    'Dell 1X59 Lenovo commercial yoga laptop',
    'LG supernova laptop',
    'HTC Low price phone',
    'Dell Purple color phone with Laptop'
];

const searching = 'Dell';

// indexOf

const output = [];
// for (const product of products) {
//     if(product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
//         output.push(product);
//     }
// }

// console.log(output);

// for (const product of products) {
//     if(product.toLowerCase().includes(searching.toLowerCase())) {
//         output.push(product);
//     }
// }
// console.log(output);

// Stars with
for (const product of products) {
    if(product.toLowerCase().startsWith(searching.toLowerCase())) {
        output.push(product);
    }
}

console.log(output);