// Bolt - Integrations Engineer, Technical Assessment
// a) list every merchant who runs a platform that we don't support
// b) list every merchant who is more than one major or two minor versions behind
const platforms = [
	["Magento 1", "2.3.1"],
	["Magento 2", "1.2.4.1"],
	["WooCommerce", "7.0.0"],
	["BigCommerce", "5.3.1567"],
	["Miva", "6.2.4.174"],
	["Volusion", "3.3"]
];

// convert platforms array of arrays into an object for quicker lookups
const formatPlatforms = (arr) => {
  return arr.reduce((acc, cur) => {
    acc[cur[0]] = cur[1];
    return acc;
  }, {});
}
const platformsObj = formatPlatforms(platforms);

const getNotSupported = (str) => {
  const result = [];
  const arr = str.split('\n').map(item => item.split(','));

  arr.forEach(item => {
    if (!platformsObj[item[1]]) {
      // a) check if the platform is supported
      result.push(item[0]);
    } else {
      const major = Number(item[2].split('.')[0]);
      const minor = Number(item[2].split('.')[1]);
      const majorRef = Number(platformsObj[item[1]].split('.')[0]);
      const minorRef = Number(platformsObj[item[1]].split('.')[1]);
      // b) check if merchant is at least one major version behind
      if (major < majorRef) {
        result.push(item[0]);
      }
      // b) check if merchant is at least two minor version behind
      if (minor + 2 < minorRef) {
        result.push(item[0]);
      }
    }
  });
  return result;
}

// Test
const merchants = "Acme,Miva,6.1.3.5\nBabcock Enterprises,Volusion,3.0\nCatalyst,Magento 1,2.1.0\nDharma Collective,Magento 1,1.5.0\nEarsnip,WooCommerce,6.3.1\nFunny Balloons,Responsible Ecommerce,3.5.4\nGreat Outdoors,Magento 2,1.1.2.0\nHugz,BigCommerce,5.0.3";

const test = getNotSupported(merchants);
console.log(test);