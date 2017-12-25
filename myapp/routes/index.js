var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index');
});



function getRouter(url) {
	url.forEach(x => {
		router.get('/' + x, function (req, res, next) {
			res.render('pages/' + x);
		});
	})
}
var arr = ['jdjs','jxxczl', 'qufujxd', 'zoucjxd', 'jiaxjxd', 'jxly', 'rjsxjj', 'jxxczl'];
getRouter(arr);

module.exports = router;
