<div align="center">

# Flow ✨

### Beautiful, animated React components inspired by modern design systems

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

</div>

---

Flow is a collection of meticulously crafted animated components for React applications. Born from a recreation of CRED's iconic push button, we're building a comprehensive library of smooth, delightful UI components that make your app feel alive.

> ⚠️ **Development Notice**: This project is still under active development. Component APIs are subject to changes as we work to make them more generic and reusable. Additionally, the components are not fully tested and may contain bugs or unexpected behavior.

---

## 🎯 Vision

Currently a Vite-powered playground, Flow is evolving into a production-ready component library that you'll be able to install and use in your React projects. We're focused on creating components that aren't just functional, but genuinely delightful to interact with.

---

## ✨ Components

### 🚀 Available Now

#### **PushButton**

_A faithful recreation of CRED's famous push button with that satisfying press animation_

![PushButton Demo](/demos/pushbutton.gif)

#### **AnimatedButton**

_Smooth, customizable button with various animation states_

![AnimatedButton Demo](/demos/animatedbutton.gif)

#### **ShimmerButton**

_Another CRED-inspired component featuring a beautiful shimmer effect animation_

![ShimmerButton Demo](/demos/shimmerbutton.gif)

#### **PopperTabs**

_Dynamic tab component with smooth popper-style animations and transitions_

![PopperTabs Demo](/demos/poppertabs.gif)

### 🔮 Coming Soon

- 🎴 **Animated Cards** - Cards that come alive with smooth transitions
- 🪟 **Smooth Modals** - Modal dialogs with delightful entry/exit animations
- 🔄 **Delightful Toggles** - Switches and toggles with satisfying feedback
- 📑 **Fluid Tabs** - Tab components with seamless transitions
- ✨ **And much more...** - The sky's the limit!

---

## 🛠️ Tech Stack

<div align="center">

| Technology           | Version | Purpose          |
| -------------------- | ------- | ---------------- |
| ⚛️ **React**         | 19      | Core framework   |
| 🎨 **Tailwind CSS**  | Latest  | Styling system   |
| 🎭 **Framer Motion** | Latest  | Animation engine |
| 📦 **Vite**          | Latest  | Build tool       |
| 🔷 **TypeScript**    | Latest  | Type safety      |

</div>

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Development Setup

```bash
# 1️⃣ Clone the repository
git clone https://github.com/adwaithks/flow.git

# 2️⃣ Navigate to project directory
cd flow

# 3️⃣ Install dependencies
npm install

# 4️⃣ Start the development server
npm run dev

# 5️⃣ Build for production (not recommended right now)
npm run build
```

---

## 🗺️ Roadmap

<div align="center">

| Status | Component                        | Description                  |
| ------ | -------------------------------- | ---------------------------- |
| ✅     | **CRED-inspired Push Button**    | _Satisfying press animation_ |
| ✅     | **Basic Animated Button**        | _Smooth state transitions_   |
| ✅     | **CRED-inspired Shimmer Button** | _Beautiful shimmer effects_  |
| ✅     | **PopperTabs**                   | _Dynamic tab animations_     |
| 🚧     | **More animated components**     | _Coming soon..._             |

</div>

---

## 🎨 Design Philosophy

<div align="center">

### **Our mission: Bring life to components.**

</div>

Every interaction should feel alive. A button isn't just clicked—it responds, breathes, and acknowledges your touch. A card doesn't just appear—it arrives with purpose. This is what Flow is about.

### 💭 Core Beliefs

- 🎬 **Motion creates emotion** - The right animation at the right moment creates memorable experiences
- 🔍 **Details matter** - Those subtle bounces, smooth transitions, and perfect timing make all the difference
- 🚫 **Static is boring** - Your UI should respond to users like a living thing
- ⚡ **Performance is non-negotiable** - Life-like doesn't mean sluggish. Every animation runs at a buttery 60fps
- 😊 **Pure delight** - Sometimes the best experiences are just about making people smile

Flow transforms your interface from a static document into a living, breathing experience. Because when components come alive, users feel the difference.

---

## 📦 Future Installation

> 🚧 **Important Notice**: Flow is not yet available as an npm package. This section outlines our current direction, but plans may change. We're considering either publishing as a traditional npm package or shifting to a copy-paste component library approach. The package name `flow` is also tentative and may change with slight variations.

Once published as a library, you'll be able to install Flow like this:

```bash
# Using npm
npm install flow

# Using yarn
yarn add flow

# Using pnpm
pnpm add flow
```

### Usage Example

```jsx
import { PushButton, AnimatedButton, ShimmerButton } from 'flow';

function App() {
  return (
    <div className='space-y-4'>
      <PushButton onClick={() => console.log('That felt good!')}>
        Press Me
      </PushButton>

      <AnimatedButton>Animate Me</AnimatedButton>

      <ShimmerButton>Shimmer Away</ShimmerButton>
    </div>
  );
}
```

---

## 🤝 Contributing

While we're still in early development, we'd love to hear your ideas! Feel free to open issues for component requests or animation ideas.

### Ways to Contribute

- 🐛 Report bugs and issues
- 💡 Suggest new component ideas
- 🎨 Share animation concepts
- 📝 Improve documentation
- 🧪 Help with testing

---

## 📄 License

See the [LICENSE](LICENSE) file for details

---

<div align="center">

**Made with ❤️ and lots of keyframes**

_Star ⭐ this repo if you find it useful!_

</div>
