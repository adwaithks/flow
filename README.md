# Flow ✨

> Beautiful, animated React components inspired by modern design systems

Flow is a collection of meticulously crafted animated components for React applications. Born from a recreation of CRED's iconic push button, we're building a comprehensive library of smooth, delightful UI components that make your app feel alive.

## 🎯 Vision

Currently a Vite-powered playground, Flow is evolving into a production-ready component library that you'll be able to install and use in your React projects. We're focused on creating components that aren't just functional, but genuinely delightful to interact with.

## ✨ Components

### Available Now

- **PushButton** - A faithful recreation of CRED's famous push button with that satisfying press animation

<video width="400" controls></video>

  <source src="./demos/push-button-demo.mov" type="video/quicktime">
  Your browser does not support the video tag.
</video>

- **AnimatedButton** - Smooth, customizable button with various animation states

<video width="400" controls>
  <source src="./demos/animated-button-demo.mov" type="video/quicktime">
  Your browser does not support the video tag.
</video>

### Coming Soon

- Animated Cards
- Smooth Modals
- Delightful Toggles
- Fluid Tabs
- And much more...

## 🚀 Current Status

This is currently a development playground using:

- ⚛️ React 19
- 🎨 Tailwind CSS
- 🎭 Framer Motion
- 📦 Vite
- 🔷 TypeScript

## 🛠️ Development

```bash
# Clone the repository
git clone https://github.com/yourusername/flow.git

# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build
```

## 🗺️ Roadmap

- [x] CRED-inspired Push Button
- [x] Basic Animated Button
- [ ] More animated components

## 🎨 Design Philosophy

**Our mission: Bring life to components.**

Every interaction should feel alive. A button isn't just clicked—it responds, breathes, and acknowledges your touch. A card doesn't just appear—it arrives with purpose. This is what Flow is about.

We believe that:

- **Motion creates emotion** - The right animation at the right moment creates memorable experiences
- **Details matter** - Those subtle bounces, smooth transitions, and perfect timing make all the difference
- **Static is boring** - Your UI should respond to users like a living thing
- **Performance is non-negotiable** - Life-like doesn't mean sluggish. Every animation runs at a buttery 60fps
- **Pure delight** - Sometimes the best experiences are just about making people smile

Flow transforms your interface from a static document into a living, breathing experience. Because when components come alive, users feel the difference.

## 📝 Future Installation

Once published as a library, you'll be able to install Flow like this:

```bash
npm install @yourusername/flow
# or
yarn add @yourusername/flow
```

And use it in your React app:

```jsx
import { PushButton, AnimatedButton } from '@yourusername/flow';

function App() {
  return (
    <PushButton onClick={() => console.log('That felt good!')}>
      Press Me
    </PushButton>
  );
}
```

## 🤝 Contributing

While we're still in early development, we'd love to hear your ideas! Feel free to open issues for component requests or animation ideas.

## 📄 License

See the [LICENSE](LICENSE) file for details

---

<p align="center">Made with ❤️ and lots of keyframes</p>
