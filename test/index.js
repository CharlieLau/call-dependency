



const path = require('path')
const deps = require('../index')


deps('./index.js',{}).then(res=>res.image('./test/project.svg')).then(_path=>console.log('Image written to ' + _path))




// deps('./src/main.js', {
// 		fileExtensions: ['js', 'scss', 'vue', 'css'],
// 		resolve: {
// 			alias: {
// 				'@': path.resolve(__dirname, '../src'),
// 			},
// 			extensions:['.js','.vue','.json']

// 		},
// 		// includeNpm: true
// 	})

// 	.then(res => {
// 		return res.image('./power-puff.svg');
// 	})
// 	.then((writtenImagePath) => {
// 		console.log('Image written to ' + writtenImagePath);
// 	});