# React Native UI Library Proof of Concept

Over the past months/years, Rangle has engaged with various RN codebases, often pondering the choice of a component library. This PoC aims to provide insights into our potential direction.

> [!CAUTION]
> Crafted hastily, the code here isn't ideal for reuse. Extract learnings, not code.

## Run it Yourself
Experience it firsthand by installing [Expo Go](https://expo.dev/go) on your device. Scan [the QR code on this page](https://snack.expo.dev/@tinyjim93/rn-ui-libs-poc) to start.

For local development, clone this repo, execute `npm install`, and `npm start` in the project root. Then, scan the QR code in the terminal or run it in a simulator.

## The Libraries
Built on [Expo](https://expo.dev/), the PoC simplifies React Native prototyping.

Libraries compared:
- Fully native solution
- [Tamagui](https://tamagui.dev/)
- [UI-kitten](https://akveo.github.io/react-native-ui-kitten/)

[RNUILib](https://wix.github.io/react-native-ui-lib/docs/getting-started/setup) wasn't included due to setup errors.

## Learnings
> [!NOTE]
> Every project is different and has different requirements.
> My experiences in this PoC might not be the same as in your project.
> 
>
> Your millage may vary.

### Fully Native Solution
The fully native solution offers unparalleled flexibility, allowing for extensive customization. However, its downside lies in the significant time investment required for implementation. 
This steep learning curve, compared to UI libraries, makes it less viable for most projects. Nonetheless, mastering a React-Native-only approach can deepen your understanding of React Native fundamentals. 

Despite its challenges, I found that while working on this PoC, although more demanding, the fully native solution instilled a sense of control and ownership over the codebase.

### Tamagui
Initially skeptical, I found Tamagui surprisingly intuitive and efficient. Its user-friendly components and visually appealing design out of the box, along with exceptional documentation, made it stand out. 
The swift implementation and positive experience lead me to recommend considering Tamagui as the default UI library for React Native projects. 

As a side-note, based on my usage and research, while Tamagui supports `react-native-web`, I don't think it is fully production ready for that yet. 
Make sure to do appropriate research before diving into that.

### UI-Kitten
Included only for evaluation because we have an upcomming project. UI-Kitten is no longer maintainted and is thus anyway not recommended. 

Building the screen with UI-kitten felt out of sync with typical React Native practices and failed to deliver expected functionality. 
Despite adequate documentation for basic tasks, I doubt that this will work for more complex projects. 

I recommend steering clear of UI-Kitten, even if it receives future updates.

### RNUILib
Despite significant time investment, I could not get RNUILib to work. Unclear documentation and setup errors made it impossible to work with it. 

I had (and still have) high expectations due to its extensive components library, the reality fell short during my attempt. 
While I acknowledge the possibility of "skill-issues" during my exploration, the initial experience with RNUILib's documentation was incredibly disappointing. 

Until substantial improvements are made, I cannot recommend RNUILib for adoption. 
