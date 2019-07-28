// ES Modules syntax
//import Unsplash from 'unsplash-js';

// require syntax
const Unsplash = require('unsplash-js').default;
const toJson = require("unsplash-js").toJson;


const unsplash = new Unsplash({
  applicationId: "d8d96a1d6dcfdb9e544a230a343b411e2b38b2531f4fabe0618ea313934a9fa8",
  secret: "5d25fa3495c3c848eff2bb20f8f7f8daf5a1c25767a4f10efc2b09dbb80977cf"
});

const getUnsplashPhotos = unsplash.collections.getCollectionPhotos(8236446, 1, 15, "popular").then(toJson);

export {getUnsplashPhotos};