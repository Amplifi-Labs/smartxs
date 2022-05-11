# SmartXS

## Tailwind based React Native components

<img src="https://raw.githubusercontent.com/Amplifi-Labs/smartxs/master/files/SmartXS%20only%20symbol.png" alt="Smartxs Logo" width=200  />

This library is still on initial phase of development. Feel free to use it, but be aware that structural changes are still possible. If you want to use it, please, lock the imported version on your package.json file.

Key concepts of this library:

- Based on Tailwind CSS (through twrnc);
- Components can (and should) be extended and styled using twrnc styles, in a flexible way;
- Based on the KISS principle (Keep It Simple, Stupid);
- Makes props for accessibility mandatory;
- Simplifies hard tasks like, adding animations, easier;
- Tailwind CSS is doing great on the Web apps, we want to make the process of using Tailwind on the mobile as easy as on the web;
- Focus on reusability and flexibility;

# Components

## BackgroundImage

![BackgroundImage image sample](https://raw.githubusercontent.com/Amplifi-Labs/smartxs/master/files/BackgroundImage.png)

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
