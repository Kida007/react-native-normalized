<h2><div align="center">react-native-normalized</div></h2>
<p align="center">Components that behave more consistently between iOS and Android</p>


<div align="center"><sub>Install using:</sub></div>
<p align="center"><code>npm i react-native-normalized</code></p>
<p align="center">
<img src="https://img.shields.io/github/languages/code-size/kida007/react-native-normalized.svg">
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

### `<Text/>`
<table>
<tr>
<th>
Native <code>Text</code> on Android
</th>
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
<li>The default color of the text is black `#000000`
<li>The default font on Android is explicitly set to Roboto. This <a target="_blank" href="https://github.com/facebook/react-native/issues/15114">fixes an issue which cuts off text on Oppo and OnePlus phones.</a>
</ul>
