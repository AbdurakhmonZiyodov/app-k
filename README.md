# Running your React Native application
## Step 1: Start Metro
First, you will need to start Metro, the JavaScript bundler that ships with React Native. Metro "takes in an entry file and various options, and returns a single JavaScript file that includes all your code and its dependencies."—Metro Docs

To start Metro, run npx react-native start inside your React Native project folder:

``` npx react-native start ```

react-native start starts Metro Bundler.

> If you use the Yarn package manager, you can use yarn instead of npx when running React Native commands inside an existing project.

> If you're familiar with web development, Metro is a lot like webpack—for React Native apps. Unlike Swift or Objective-C, JavaScript isn't compiled—and neither is React Native. Bundling isn't the same as compiling, but it can help improve startup performance and translate some platform-specific JavaScript into more widely supported JavaScript.

# Step 2: Start your application
Let Metro Bundler run in its own terminal. Open a new terminal inside your React Native project folder. Run the following for ios debugging:

``` npx react-native run-ios ```

and the following for android debugging:

``` npx react-native run-android ```

You should see your new app running in the iOS Simulator shortly.

The application depends on these packages:

* nswag


```npm install openapi-typescript-codegen -g``` `npm run openapi`
* Go to the OpenAPI.ts file and give BASE the AppConfig.baseUrl

![Screenshot_2023-02-22_at_16.09.35](/uploads/4121604a2e984a222ca173c69eca8500/Screenshot_2023-02-22_at_16.09.35.png)

<br/>
<br/>

* Go to the request.ts file and change 

![Screenshot_2023-02-22_at_16.02.44](/uploads/099887c9f1d2b8500393081335d14876/Screenshot_2023-02-22_at_16.02.44.png)


<br/> <br/>

Before making a request to an api on android:
```npm run connect:android```

# kaif-app
# app-k
