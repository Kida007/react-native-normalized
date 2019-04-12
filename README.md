<h2><div align="center">react-native-normalized</div></h2>
<p align="center">Components that behave more consistently between iOS and Android</p>


<div align="center"><sub>Install using:</sub></div>
<p align="center"><code>npm i react-native-normalized</code></p>
<p align="center">
</p>

React Native's built-in components render slightly different on iOS and Android, causing you to spend extra time making the UI more consistent across devices. For example, did you know that when you create a fresh project using `react-native init`, the color of a `<Text/>` is by default <img src="readme-assets/000000.png" width="16" /> `#000000` on iOS and <img src="readme-assets/808080.png" width="16" /> `#808080` on Android?

This project provides you with slightly adjusted adaptions of built-in React Native components with the goal of being more consistent between platforms. Think of it as [normalize.css](https://github.com/necolas/normalize.css) for React Native.

## Usage
Simply import a normalized component from `react-native-normalized` instead of `react-native`:

```diff
import React from 'react'
-import {View, Text} from 'react-native'
+import {View} from 'react-native'
+import {Text} from 'react-native-normalized'

class App extends React.Component {
    render() {
        return (
            <View>
                <Text>Welcome to React Native Normalized!</Text>
            </View>
        )
    }
}

export default App;
```

## Components

### `<ActivityIndicator/>`
<table>
<tr>
<td align="center">
Native <br/><code>ActivityIndicator</code><br/> on Android
</td>
<td align="center">
Native <br/><code>ActivityIndicator</code><br/> on iOS
</td>
<th>
Normalized <br/> <code>ActivityIndicator</code><br/> on Android
</th>
</tr>
<tr>
<td align="center">
<img src="readme-assets/native-activityindicator.png"/>
</td>
<td align="center">
<img src="readme-assets/ios-activityindicator.png"/>
</td>
<td align="center">
<img src="readme-assets/normalized-activityindicator.png"/>
</td>
</tr>
</table>

<ul>
<li>The default color of the activity indicator is <code>#999999</code>, the same color as the iOS Activity Indicator.
</ul>

### `<Text/>`
<table>
<tr>
<td align="center">
Native <code>Text</code> on Android
</td>
<th>
Normalized <code>Text</code> on Android
</th>
</tr>
<tr>
<td>
<img src="readme-assets/native-text.png"/>
</td>
<td>
<img src="readme-assets/normalized-text.png"/>
</td>
</tr>
</table>

<ul>
<li>The default color of the text is black <code>#000000</code>
<li>The default font on Android is explicitly set to Roboto. This <a target="_blank" href="https://github.com/facebook/react-native/issues/15114">fixes an issue which cuts off text on Oppo and OnePlus phones.</a>
</ul>

### `<TextInput/>`
<table>
<tr>
<td align="center">
Native<br/><code>TextInput</code><br/>on Android
</td>
<td align="center">
Native<br/><code>TextInput</code><br/>on iOS
</td>
<th>
Normalized<br/><code>TextInput</code><br/>on Android
</th>
</tr>
<tr>
<td>
<img src="readme-assets/native-textinput.png"/>
</td>
<td>
<img src="readme-assets/ios-textinput.png"/>
</td>
<td>
<img src="readme-assets/normalized-textinput.png"/>
</td>
</tr>
</table>
<p align="center"><sup>Screenshot shows a TextInput with style <code>{width: '100%', height: 100, backgroundColor: 'white'}</code> and <code>multiline={true}</code>.</sup></p>


<ul>
<li>A multiline TextInput by default aligns the top on top on Android.
<li>The default placeholder text color is <code>#C7C7CD</code> on Android, the same as the iOS default
<li>The default <code>underlineColorAndroid</code> is <code>transparent</code>. This is the default behavior since React Native 0.56, so it will only make a difference if you still use an older version.
</ul>

## Authors
This library is brought to you by [Piyush Gupta](https://twitter.com/kidaa007) and [Jonny Burger](https://twitter.com/JNYBGR).

## License
MIT
