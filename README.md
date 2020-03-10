<h2><div align="center">react-native-normalized</div></h2>
<p align="center">Components that behave more consistently between iOS and Android</p>
<p align="center"><a href="https://rnnormalized.netlify.com/">https://rnnormalized.netlify.com</a> </p>


<div align="center"><sub>Install using:</sub></div>
<p align="center"><code>npm i react-native-normalized</code></p>
<p align="center">
</p>

React Native's built-in components render slightly different on iOS and Android, causing you to spend extra time making the UI more consistent across devices. For example, did you know that when you create a fresh project using `react-native init`, the color of a `<Text/>` is by default <img src="https://raw.githubusercontent.com/Kida007/react-native-normalized/HEAD/readme-assets/000000.png" width="16" /> `#000000` on iOS and <img src="https://raw.githubusercontent.com/Kida007/react-native-normalized/HEAD/readme-assets/808080.png" width="16" /> `#808080` on Android?

This project provides you with slightly adjusted adaptions of built-in React Native components with the goal of being more consistent between platforms. Think of it as [normalize.css](https://github.com/necolas/normalize.css) for React Native.

To be clear, these are not bugs in React Native, rather RN opts to preserve the default behavior on each platform as much as possible. Nonetheless, you might prefer to use components that behave more consistently.

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

## APIs and Components

### `Alert`

* `Alert.alert()` is by default not dismissable. The RN implementation is dismissable on Android but not on iOS.
> ✅ Since React Native v0.60, this is fixed!

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
<img src="https://raw.githubusercontent.com/Kida007/react-native-normalized/HEAD/readme-assets/native-activityindicator.png"/>
</td>
<td align="center">
<img src="https://raw.githubusercontent.com/Kida007/react-native-normalized/HEAD/readme-assets/ios-activityindicator.png"/>
</td>
<td align="center">
<img src="https://raw.githubusercontent.com/Kida007/react-native-normalized/HEAD/readme-assets/normalized-activityindicator.png"/>
</td>
</tr>
</table>

<ul>
<li>The default color of the activity indicator is <code>#999999</code>, the same color as the iOS Activity Indicator.
</ul>

### `<Image/>`

* By default, on Android, an `<Image/>` fades in with a 300ms delay. With the normalized component, there is no fade animation.

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
<img src="https://raw.githubusercontent.com/Kida007/react-native-normalized/HEAD/readme-assets/native-text.png"/>
</td>
<td>
<img src="https://raw.githubusercontent.com/Kida007/react-native-normalized/HEAD/readme-assets/normalized-text.png"/>
</td>
</tr>
</table>


<ul>
<li>The default color of the text is black <code>#000000</code>
    <blockquote> ✅ Since React Native v0.60, this is fixed!</blockquote>

<li>The default font on Android is explicitly set to Roboto. This <a target="_blank" href="https://github.com/facebook/react-native/issues/15114">fixes an issue which cuts off text on Oppo and OnePlus phones:</a>
</ul>

<table>
<tr>
<td align="center">
Native <code>Text</code> on OnePlus phone
</td>
<th>
Normalized <code>Text</code> on OnePlus phone
</th>
</tr>
<tr>
<td>
<img src="https://raw.githubusercontent.com/Kida007/react-native-normalized/HEAD/readme-assets/bold-text-native-oppo.png"/>
</td>
<td>
<img src="https://raw.githubusercontent.com/Kida007/react-native-normalized/HEAD/readme-assets/bold-text-normalized.png"/>
</td>
</tr>
</table>
<p align="center"><sup>Screenshot shows a Text on OxygenOS which is bold and inside a <code>&lt;View style={{flexDirection: 'row'}}> container</code>, triggering the bug.</sup></p>

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
<img src="https://raw.githubusercontent.com/Kida007/react-native-normalized/HEAD/readme-assets/native-textinput.png"/>
</td>
<td>
<img src="https://raw.githubusercontent.com/Kida007/react-native-normalized/HEAD/readme-assets/ios-textinput.png"/>
</td>
<td>
<img src="https://raw.githubusercontent.com/Kida007/react-native-normalized/HEAD/readme-assets/normalized-textinput.png"/>
</td>
</tr>
</table>
<p align="center"><sup>Screenshot shows a TextInput with style <code>{width: '100%', height: 100, backgroundColor: 'white'}</code> and <code>multiline={true}</code>.</sup></p>


<ul>
<li>If <code>multiline</code> is true, the text aligns on top on Android.
<li>The default placeholder text color is <code>#C7C7CD</code> on Android, the same as the iOS default
<li>The default <code>underlineColorAndroid</code> is <code>transparent</code>. This is the default behavior since React Native 0.56, so it will only make a difference if you still use an older version.
<li><strong>New since 2.0.0:</strong> The default color is `#000`, regardless of dark mode or not. Otherwise the text input color might become '#fff' on iOS if the device turns to dark mode.
</ul>

## Development and Ideas

Do you know of more components that could be made more consistent and that would fit well into this project? Let us know!

Currently we have two ideas for which we welcome code and comments:

- [x] ~~[Consistent dismissal behavior for Alert.alert()](https://github.com/Kida007/react-native-normalized/issues/2)~~ **Implemented in v1.1.0**
- [x] [Consistent &lt;Picker/&gt;](https://github.com/Kida007/react-native-normalized/issues/1)

## Authors
This library is brought to you by [Piyush Gupta](https://twitter.com/kidaa007) and [Jonny Burger](https://twitter.com/JNYBGR).

## License
MIT
