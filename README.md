##
> 根据入口解析调用模块

## 安装

```shell

    npm install  call-dependency

```

## 使用
  
``` javascript

    //DEMO:
    deps('./src/main.js', {
		fileExtensions: ['js', 'scss', 'vue', 'css'],
		resolve: {
			alias: {
				'@': path.resolve(__dirname, '../src'),
			},
			extensions:['.js','.vue','.json']

		},
		// includeNpm: true
	})

	.then(res => {
		return res.image('./power-puff.svg');
	})
	.then((writtenImagePath) => {
		console.log('Image written to ' + writtenImagePath);
	});

```
![结果图](https://p0.meituan.net/travelcube/5991ef42878d35098ac4f98f027dcb6a30992.png)


**options**
| 参数 | 必输 | 默认 | 说明 | 备注 |
|-----|------|-----|-----|------|
| entry | 是 | | 入口文件| |


## PR

## ISSUE

## Inspired

- [webpack](https://github.com/webpack)
- [dependents](https://github.com/dependents)
- [node-source-walk](https://github.com/dependents/node-source-walk)

## 其它
