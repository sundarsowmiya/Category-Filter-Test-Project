const ghpages = require('gh-pages');
const path = require('path');

ghpages.publish('dist', {
 
}, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('published gh-pages');
  }
});
