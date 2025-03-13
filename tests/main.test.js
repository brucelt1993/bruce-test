/**
 * main.js的测试文件
 */

const { greet } = require('../src/main');

// 假设我们使用某种测试框架（如Jest）
describe('Greet function', () => {
  test('应该返回正确的问候语', () => {
    const result = greet('测试用户');
    expect(result).toBe('你好，测试用户！欢迎来到Bruce的测试项目。');
  });
  
  test('应该处理空字符串', () => {
    const result = greet('');
    expect(result).toBe('你好，！欢迎来到Bruce的测试项目。');
  });
});
