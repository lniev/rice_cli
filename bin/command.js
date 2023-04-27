#! /usr/bin/env node
import inquirer from 'inquirer';

inquirer.prompt([
  {
    type: 'input', //type： input, number, confirm, list, checkbox ...
    name: 'name', // key 名
    message: 'Your name', // 提示信息
    default: 'my-node-cli' // 默认值
  }
]).then(answers => {
  // 打印互用输入结果
  console.log(answers)
})