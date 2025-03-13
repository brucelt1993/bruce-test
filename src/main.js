/**
 * 主入口文件
 * 
 * 这个文件是项目的主入口点，包含主要的应用逻辑。
 */

function greet(name) {
  return `你好，${name}！欢迎来到Bruce的测试项目。`;
}

// 简单的测试
console.log(greet('开发者'));

// 导出函数供其他模块使用
module.exports = {
  greet
};
