 # 部署

 ## 构建和发布安卓App

 ### 1.添加图标

 - 在`[project]/android/app/src/main/res/` 目录里面 默认`mipmap-`文件夹实例了正确的命名约定

 - 在 `AndroidManifest.xml`文件，更新`android:icon`属性的值，指向上一步命名,如`<application android:icon="@mipmap/ic_launcher" ...`


 ### 构建apk
 
 - 进入根目录 执行命令`flutter build apk `
