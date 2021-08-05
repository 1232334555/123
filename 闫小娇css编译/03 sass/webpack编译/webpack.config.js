// 配置
module.exports = {
	// 入口
	entry: './main.js',
	// 出口
	output: {
		filename: 'index.js'
	},
	// 配置module属性
	module: {
		// 配置规则
		rules: [
			{
				test: /\.scss$/,
				loaders: 'style-loader!css-loader!sass-loader'
			}
		]
	},
    // 模式
    mode: 'development'
}