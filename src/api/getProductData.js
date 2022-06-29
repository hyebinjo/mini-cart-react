export default async function getProductData() {
    const response = await fetch('productData.json');
    const dataArr = await response.json();
    return await dataArr;
}
