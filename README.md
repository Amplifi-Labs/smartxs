# SmartXS

## Tailwind based React Native components

<img src="https://raw.githubusercontent.com/Amplifi-Labs/smartxs/master/smartxs-components/files/Amplifi-Labs-Logo.png" alt="Smartxs Logo" width=200  />

This library is still on initial phase of development. Feel free to use it, but be aware that structural changes are still possible. If you want to use it, please, lock the imported version on your package.json file.

Key concepts of this library:

- Based on Tailwind CSS (through twrnc);
- Components can (and should) be extended and styled using twrnc styles, in a flexible way;
- Based on the KISS principle (Keep It Simple, Stupid);
- Makes props for accessibility mandatory;
- Simplifies hard tasks like, adding animations, easier;
- Tailwind CSS is doing great on the Web apps, we want to make the process of using Tailwind on the mobile as easy as on the web;
- Focus on reusability and flexibility;

If your project uses SmartXS, please, let us know! We would love :heart: to have this information!

# Components

## BackgroundImage

### Description:

This component creates a View with an image as background. Accepts jpeg and png files.

### Samples

### Props:

| Variable    | Value Type                | Default | Mandatory          | Notes                                                                           |
| ----------- | ------------------------- | ------- | ------------------ | ------------------------------------------------------------------------------- |
| tw          | Tailwind Function         | \_      | :heavy_check_mark: | \_                                                                              |
| image       | Image                     | \_      | :heavy_check_mark: | \_                                                                              |
| style       | Tailwind Style            | \_      | :x:                | \_                                                                              |
| children    | JSX.Element/JSX.Element[] | \_      | :x:                | \_                                                                              |
| bottomColor | string                    | \_      | :x:                | This color is applied on the safe area on iOS devices                           |
| mask        | string                    | \_      | :x:                | This is a color with an alpha channel. It adds a mask over the background image |

## Button

### Description:

This is a clickable component and can execute functions passed as an argument (onPress). Accepts icons and texts as parameters.

### Samples
https://appetize.io/embed/8bnmakzrptf1hv9dq7v7bnteem?autoplay=false&debug=true&device=iphone12&embed=true&scale=73&screenOnly=false&xDocMsg=true&xdocMsg=true&params=%7B%22EXDevMenuDisableAutoLaunch%22%3Atrue%2C%22EXKernelLaunchUrlDefaultsKey%22%3A%22exp%3A%2F%2Fexp.host%2F%40paulorieck%2Fsmartxs---button%2BdYnDA6euR4%22%2C%22EXKernelDisableNuxDefaultsKey%22%3Atrue%7D&osVersion=14.5

### Props:

| Variable  | Value Type               | Default | Mandatory          | Notes                                                                      |
| --------- | ------------------------ | ------- | ------------------ | -------------------------------------------------------------------------- |
| tw        | Tailwind Function        | \_      | :heavy_check_mark: | \_                                                                         |
| style     | Tailwind Style           | \_      | :x:                | This style is applied to the container View                                |
| textStyle | Tailwind Style           | \_      | :x:                | This style is applied directly to the Text component                       |
| children  | String                   | \_      | :x:                | The children props are limited to strings.                                 |
| type      | 'primary' OR 'secondary' | \_      | :x:                | If defined applies the default primary or secondary colors as button color |
| onPress   | () => void               | \_      | :heavy_check_mark: | Defines the function that will be executed when button pressed.            |
| iconLeft  | SVG string               | \_      | :x:                | If defined will add an icon to the left of the text.                       |
| iconRight | SVG string               | \_      | :x:                | If defined will add an icon to the right of the text.                      |

## Card

## Charts

### VerticalBars

## CollapsibleModal

## Forms

### InputCurrency

### InputNumber

### InputPassword

### InputText

## H1

## HR

## Image

## Info

## Label

## LoadingRound

## ProgressSteps

## Spinner

## SwipeCarousel

### Amplifi Labs

This library is being developed by Amplifi Labs. To know more about our company, please, access our [website](https://www.amplifilabs.com).

![Amplifi Labs Logo](https://raw.githubusercontent.com/Amplifi-Labs/smartxs/master/files/Amplifi-Labs-Logo.png)
