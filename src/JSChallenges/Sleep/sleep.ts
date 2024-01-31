//@see: https://leetcode.com/problems/sleep/
const sleep = async (millis: number = 1000): Promise<void> => {
  await new Promise((resolve) => setTimeout(resolve, millis));
};

export { sleep };
