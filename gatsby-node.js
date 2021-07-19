const axios = require('axios');

const get = endpoint => axios.get(`https://rg-homeservecomsc-reg-uks-001-single.azurewebsites.net/sitecore/api/ssc/item/${endpoint}`);

const getProductData = names =>
  Promise.all(
    names.map(async name => {
		 console.log('https://rg-homeservecomsc-reg-uks-001-single.azurewebsites.net/sitecore/api/ssc/item/${name}');
      const { data: products } = await get(`${name}`);
	  
      return { ...products };
    })
  );

exports.createPages = async ({ actions: { createPage } }) => {
  const allProducts = await getProductData(['9076BDB7-0D08-4C37-95F9-973071C281EF', '7234C1D6-9880-4B14-88E2-BD0B3EABEC50']);

  // Create a page that lists all Products.
  // createPage({
    // path: `/`,
    // component: require.resolve('./src/templates/all-products.js'),
    // context: { allProducts }
  // });

  // Create a page for each Product.
  allProducts.forEach(product => {
	console.log('${product}');
    createPage({
      path: `/product/${product.DisplayTitle}/`,
      component: require.resolve('./src/templates/product.js'),
      context: { product }
    });
  });
};