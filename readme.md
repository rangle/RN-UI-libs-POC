# React Native UI library POC

In the last few months/years Rangle has worked with several RN codebases. The question regularly comes up which component library we should use. This PoC hopes to give insight in which direction we should go.

> [!CAUTION]
> This was written in a very short time. 
> Take the learnings but don't reuse the crappy code

## Run it yourself
You can run the code by installing [expo-go](https://expo.dev/go) on your own device. Scan [the QR on this page](https://snack.expo.dev/@tinyjim93/rn-ui-libs-poc) on your device to get started.

Local development is also possible by cloning this repo, `npm install`  and running `npm start` in the root of the project.
You can then run the app on your device by scanning the QR code in the terminal or by running the app in a simulator.

## The libraries
The whole PoC is based on [Expo](https://expo.dev/). This is because it is the easiest way to get started with React Native.

The libraries that are compared in this PoC are:
- Fully native solution
- [Tamagui](https://tamagui.dev/)
- [UI-kitten](https://akveo.github.io/react-native-ui-kitten/)

There was an attempt to include [RNUILib](https://wix.github.io/react-native-ui-lib/docs/getting-started/setup) but due to errors in the setup it was not included in this PoC.

## Learnings
> [!NOTE]
> Every project is different and has different requirements.
> My experiences in this PoC might not be the same as in your project.
> 
>
> Your millage may vary.

### Fully native solution
The fully native solution is the most flexible solution. You can do anything you want with it. The downside is that it takes a lot of time to implement everything. This is not a problem if you have a lot of time, but in most cases you don't have that luxury.
The Native solution also has a steep learning curve compared to UI-libariers.
Nevertheless, I do think that being able to write a fully native solution is a good skill to have. It gives you a better understanding of how React Native works and how to implement things.

During this PoC I tried to spend as little time possible to make it work, but I thought it would be a good comparison to see how "native" feels and how "UI-libs" feel. 
The difference between it was quite harsh, I definitely had to make my brain work harder to build the same thing that was easy in the UI-libs.
The solution was harder to create, but came with less frustration than UI-Kitten. I felt in control and things not working felt like my own fault.

For most projects, I would not recommend the fully native solution.

### Tamagui
I was very skeptical about Tamagui, especially because I find it promises too much, but I was pleasantly surprised. 
The components are very easy to use and look good out of the box. Compared to the other solutions in the list the documentation was outstanding. 
I could figure most things out from experience, documentation and the provided code examples.

The Tamagui implementation was done the quickest on this list and felt the by far the best to use. 

From my research and this PoC I would recommend Rangle to adopt Tamagui as the default UI library for React Native projects.

Based on my usage and research, I do think it is good to callout that I don't think `react-native-web` is a great solution yet. The components we use on the web are completely different than mobile and do not translate well to web. 
I know there have been great products build with it, but in many cases the pain of using `react-native-web` does not stack against advantages.

### UI-kitten
UI-Kitten is no longer maintained, the only reason I included it in this PoC is because an upcoming client used it in their project and I wanted to understand how it works.
I am not impressed by it. It feels like there was a gap in my knowledge of how React Native works and how UI-Kitten wants you to work with it. 
The components didn't fully do what I expected them to do. The documentation was okay, but I am not sure if it would be good enough once I start building more complex screens. 

I would stay away from UI-Kitten, even if the maintainers start working on it again. 

### RNUILib
Useful to mention that I spend most of my time in this PoC working on RNUILib. I was not able to get it to work. 
The documentation was not clear and the errors I got were not helpful. Purely from the quantity of documentation and components you would have high expectations of this library, but it is hard to recommend a library that gives so much trouble during setup.
To be completely fair, I spend only a couple days on the whole PoC and I might have missed something. The fact that the PoC works with Expo and several UI-libs, might also impact this.

As I didn't get the chance to build something with RNUILib it is hard to say something about that, however I did spend a lot of time reading the documentation. 
It is absolutely horrendous. It is by far the worst documentation I have worked with. Originally the examples look sufficient, but from the text and examples it is not always clear what the component does.

For now I would not recommend RNUILib. I do still expect it will be the most powerful UI library currently available, but you will need to invest a lot of time to get there. 
