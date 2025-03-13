/**
 * utils.js的测试文件
 */

const { formatDate, getRandomInt } = require('../src/utils');

// 假设我们使用某种测试框架（如Jest）
describe('格式化日期函数', () => {
  test('应该正确格式化日期', () => {
    const date = new Date(2025, 0, 1); // 2025-01-01
    expect(formatDate(date)).toBe('2025-01-01');
  });
});

describe('随机整数函数', () => {
  test('生成的随机数应该在指定范围内', () => {
    const min = 1;
    const max = 10;
    
    // 运行多次测试以增加可靠性
    for (let i = 0; i < 100; i++) {
      const randomNum = getRandomInt(min, max);
      expect(randomNum).toBeGreaterThanOrEqual(min);
      expect(randomNum).toBeLessThanOrEqual(max);
    }
  });
});
