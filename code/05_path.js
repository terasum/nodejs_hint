// the path package
var path = require('path');
//规范化路径
var paths = path.normalize('/foo/bar/baz/asdf/quxx/..');
console.log(paths);
//连接路径
paths = path.join('/foo','bar','baz/asdf','quux','..');
console.log(paths);

//解析路径
// 将多个路径解析为一个绝对路径,如果当前处理的路径不是绝对路径，就讲当前的工作目录附加
paths = path.resolve('/foo/bar','./baz');
console.log(paths);
//查找两个绝对路径之间的相对路径
paths = path.relative('data/orandea/test/data','data/orandea/ipml/bbb');
console.log(paths);
//提取路径的组成部分
paths = path.dirname('/foo/bar/baz/index.html');
console.log(paths);
//取得去掉扩展名的文件名  需要预先知道其扩展名
var basename = path.basename('/foo/baz/index.html','.html');
console.log(basename);
//取得扩展名
var ext = path.extname('/foo/baz/index.html');
console.log(ext);
ext = path.extname('/foo/baz/index');
console.log(ext);
ext = path.extname('/foo/baz/index.');
console.log(ext);
//判断路径是否存在
// 在早期的版本的node 中  exists 方法是在path模块中的，在更新的版本中，在fs模块中了
/*path.exists('path_to_test',function(exist){
  console.log(`exist:${exist}`);
})*/
var fs = require('fs');
fs.exists('path_to_test',function(exist){
  console.log(exist);
});
