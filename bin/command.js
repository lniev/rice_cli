#! /usr/bin/env node

const program = require("commander");
const inquirer = require("inquirer");
const chalk = require("chalk");
const ora = require("ora");
const spawn = require("cross-spawn");

let params = {};
program
  .version("0.1.0")
  .command("create <name>")
  .description("create a new project")
  .action((name) => {
    inquirer
      .prompt([
        {
          type: "list",
          name: "projectType",
          message: "select project type (选择项目类型)", // 提示信息
          default: "react",
          choices: [
            { name: "react", value: "react" },
            { name: "vue", value: "vue" },
          ],
        },
        {
          type: "list",
          name: "template",
          message: "select template (选择模板)",
          default: "react",
          choices: [
            { name: "react", value: "react" },
            { name: "react ts", value: "vue" },
          ],
        },
        {
          type: "list",
          name: "buildTool",
          message: "select buildTool (选择构建工具)",
          default: "vite",
          choices: [
            { name: "vite", value: "vite" },
            { name: "webpack", value: "webpack" },
          ],
        },
      ])
      .then((answers) => {
        params = answers;
        // 打印互用输入结果
        console.log(answers);
      });

    /* // 打印命令行输入的值
    // 文本样式
    console.log("project name is " + chalk.bold(name));

    // 颜色
    console.log("project name is " + chalk.green(name));

    // 背景色
    console.log("project name is " + chalk.bgRed(name));

    // 使用RGB颜色输出
    console.log("project name is " + chalk.rgb(4, 156, 219).underline(name));
    console.log("project name is " + chalk.hex("#049CDB").bold(name));
    console.log("project name is " + chalk.bgHex("#049CDB").bold(name));

    const message = "Loading unicorns";
    // 初始化
    const spinner = ora(message);
    // 开始加载动画
    spinner.start();

    setTimeout(() => {
      // 修改动画样式

      // Type: string
      // Default: 'cyan'
      // Values: 'black' | 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan' | 'white' | 'gray'
      spinner.color = "red";
      spinner.text = "Loading rainbows";

      setTimeout(() => {
        // 加载状态修改
        spinner.stop(); // 停止
        spinner.succeed("Loading succeed"); // 成功 ✔
        // spinner.fail(text?);  失败 ✖
        // spinner.warn(text?);  提示 ⚠
        // spinner.info(text?);  信息 ℹ
      }, 2000);
    }, 2000);

    // 定义需要按照的依赖
    const dependencies = ["vue", "vuex", "vue-router"];

    // 执行安装
    // const child = spawn("npm", ["install", "-D"].concat(dependencies), {
    //   stdio: "inherit",
    // });
    const child = spawn("npm", ["install"], {
      stdio: "inherit",
    });

    // 监听执行结果
    child.on("close", function (code) {
      // 执行失败
      if (code !== 0) {
        console.log(chalk.red("Error occurred while installing dependencies!"));
        process.exit(1);
      }
      // 执行成功
      else {
        console.log(chalk.cyan("Install finished"));
      }
    });*/
  });

program.parse();
