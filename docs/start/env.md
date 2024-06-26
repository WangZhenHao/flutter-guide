# flutter环境搭建


## 在window电脑系统搭建flutter安卓app

> https://docs.flutter.dev/get-started/install/windows/mobile?tab=download

## 1.开发工具
1. 安装git https://gitforwindows.org/
2. vscode
3. Android Studio https://developer.android.com/studio/install
  - 安装完之后选择`Do no import setting`
<p>
  <img src="../.vitepress/public/start/1.png" alt="vitepress init screenshot" style="border-radius:8px">
</p>

  - SDK下载的时候，选择一些存储地址，不要放到C盘
<p>
  <img src="../.vitepress/public/start/2.png" alt="vitepress init screenshot" style="border-radius:8px">
</p>  

<p>
  <img src="../.vitepress/public/start/3.png" alt="vitepress init screenshot" style="border-radius:8px">
</p>  

4. chorme浏览器

## 2.配置vscode开发工具

- 下载flutter插件`Flutter extension for VS Code.`
https://marketplace.visualstudio.com/items?itemName=Dart-Code.flutter


## 3.安装Flutter SKD
> vscode 使用git命令下载安装太慢了，直接下载zip包，修改环境变量
<p>
  <img src="../.vitepress/public/start/5.png" alt="vitepress init screenshot" style="border-radius:8px">
</p>  


- 解压文件到`D:\software\fluttersdk`

- 设置环境变量`D:\software\fluttersdk\flutter\bin`
<p>
  <img src="../.vitepress/public/start/4.jpg" alt="vitepress init screenshot" style="border-radius:8px">
</p>  


## 4.配置安装开发环境

- 安装设置安卓模拟器

1. 启动Android Studio

2. 点击`More Actions` -> ` Device Manager `-> `Create Device`->`x86 Images`->`installed`

 大概就是这些流程，如果有报错就解决报错

 ## 5.检查开发环境设置

 ```
 flutter doctor
 ```

 - 如果报安卓SDK找不到， 可以配置
 ```
flutter config --android-sdk D:\software\androidsdk
 ```

 - 如果报android-studio找不到，可以配置
 ```
 flutter config --android-studio-dir D:\software\android studio
 ```


 ## 6. 创建一个项目

 - 打开Vscode, 打开命令面板(F1 or Ctrl+Shift+P or Shift+Cmd+P)

 - 输入`flutter new`, 选择` Flutter: New Project`命令

 ## 7.启动项目

 - 打开Vscode, 打开命令面板(F1 or Ctrl+Shift+P or Shift+Cmd+P)

 - 输入` Flutter: Select Device`命令,选择打开一个模拟器

 - 进入`android\gradle\wrapper\gradle-wrapper.properties`文件，修改下载地址，否则下载文件会不成功，打开不了项目

 ```
 distributionUrl=https\://mirrors.cloud.tencent.com/gradle/gradle-7.6.3-all.zip
# distributionUrl=https\://services.gradle.org/distributions/gradle-7.6.3-all.zip

 ```

> 遇到一些项目打不开,估计就是flutter SKD版本或者项目的包,不兼容的原因,尝试更新这些.
 
- flutter SDK更新命令
```
flutter upgrade
 ```

