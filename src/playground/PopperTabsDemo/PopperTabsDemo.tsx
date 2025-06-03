import PopperTabs from '../../components/PopperTabs/PopperTabs';

const tabs = [
  {
    tab: 'components',
    value: 'components',
    content: (
      <div className='p-1 w-[32rem]'>
        <div className='p-1'>
          <h3 className='text-lg font-semibold text-gray-900 mb-2'>
            Components
          </h3>
          <p className='text-xs text-gray-600 mb-3'>
            Beautiful, animated React components inspired by modern design
            systems and delightful user experiences
          </p>

          <div className='mb-3'>
            <h4 className='text-xs font-medium text-gray-500 uppercase tracking-wide mb-1'>
              Available Now - Production Ready
            </h4>
            <div className='space-y-1'>
              <div className='p-1 hover:bg-gray-50 rounded-md cursor-pointer'>
                <div className='flex items-center justify-between'>
                  <div className='flex-1'>
                    <h5 className='text-sm font-medium text-gray-900'>
                      PushButton
                    </h5>
                    <p className='text-xs text-gray-600'>
                      CRED-inspired press animation with satisfying tactile
                      feedback and premium interactions
                    </p>
                  </div>
                  <div className='flex items-center gap-2'>
                    <span className='text-xs text-gray-500'>TypeScript</span>
                    <span className='text-xs bg-green-100 text-green-700 px-2 py-1 rounded-md'>
                      ✅ Ready
                    </span>
                  </div>
                </div>
              </div>
              <div className='p-1 hover:bg-gray-50 rounded-md cursor-pointer'>
                <div className='flex items-center justify-between'>
                  <div className='flex-1'>
                    <h5 className='text-sm font-medium text-gray-900'>
                      AnimatedButton
                    </h5>
                    <p className='text-xs text-gray-600'>
                      Smooth state transitions with customizable animation
                      presets and micro-interactions
                    </p>
                  </div>
                  <div className='flex items-center gap-2'>
                    <span className='text-xs text-gray-500'>Framer Motion</span>
                    <span className='text-xs bg-green-100 text-green-700 px-2 py-1 rounded-md'>
                      ✅ Ready
                    </span>
                  </div>
                </div>
              </div>
              <div className='p-1 hover:bg-gray-50 rounded-md cursor-pointer'>
                <div className='flex items-center justify-between'>
                  <div className='flex-1'>
                    <h5 className='text-sm font-medium text-gray-900'>
                      ShimmerButton
                    </h5>
                    <p className='text-xs text-gray-600'>
                      Beautiful shimmer effects with premium feel, polish and
                      customizable gradients
                    </p>
                  </div>
                  <div className='flex items-center gap-2'>
                    <span className='text-xs text-gray-500'>
                      CSS Animations
                    </span>
                    <span className='text-xs bg-green-100 text-green-700 px-2 py-1 rounded-md'>
                      ✅ Ready
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className='text-xs font-medium text-gray-500 uppercase tracking-wide mb-1'>
              Coming Soon - In Development
            </h4>
            <div className='grid grid-cols-3 gap-1'>
              <div className='p-1 hover:bg-gray-50 rounded-md cursor-pointer'>
                <h5 className='text-sm font-medium text-gray-900'>
                  Animated Cards
                </h5>
                <p className='text-xs text-gray-600'>
                  Cards with smooth transitions, hover effects and parallax
                  scrolling
                </p>
              </div>
              <div className='p-1 hover:bg-gray-50 rounded-md cursor-pointer'>
                <h5 className='text-sm font-medium text-gray-900'>
                  Smooth Modals
                </h5>
                <p className='text-xs text-gray-600'>
                  Modal dialogs with delightful entry, exit and backdrop
                  animations
                </p>
              </div>
              <div className='p-1 hover:bg-gray-50 rounded-md cursor-pointer'>
                <h5 className='text-sm font-medium text-gray-900'>
                  Fluid Tabs
                </h5>
                <p className='text-xs text-gray-600'>
                  Tab components with seamless layout animations and indicators
                </p>
              </div>
              <div className='p-1 hover:bg-gray-50 rounded-md cursor-pointer'>
                <h5 className='text-sm font-medium text-gray-900'>
                  Delightful Toggles
                </h5>
                <p className='text-xs text-gray-600'>
                  Switches and toggles with satisfying tactile feedback systems
                </p>
              </div>
              <div className='p-1 hover:bg-gray-50 rounded-md cursor-pointer'>
                <h5 className='text-sm font-medium text-gray-900'>
                  Loading States
                </h5>
                <p className='text-xs text-gray-600'>
                  Skeleton loaders, spinners and progress indicators
                </p>
              </div>
              <div className='p-1 hover:bg-gray-50 rounded-md cursor-pointer'>
                <h5 className='text-sm font-medium text-gray-900'>
                  Form Elements
                </h5>
                <p className='text-xs text-gray-600'>
                  Animated inputs, selects and validation states
                </p>
              </div>
            </div>
          </div>

          <div className='mt-3 p-1 bg-blue-50 rounded-md'>
            <p className='text-xs text-blue-700'>
              💡 Each component runs at buttery 60fps with zero performance
              compromises and full accessibility support
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    tab: 'tech stack',
    value: 'tech-stack',
    content: (
      <div className='p-1 w-[28rem]'>
        <div className='p-1'>
          <h3 className='text-lg font-semibold text-gray-900 mb-2'>
            Tech Stack
          </h3>
          <p className='text-xs text-gray-600 mb-3'>
            Modern technologies powering delightful user experiences and
            developer productivity
          </p>

          <div className='space-y-2'>
            <div className='grid grid-cols-4 gap-1 text-center'>
              <div className='p-1 bg-blue-50 rounded-md hover:bg-blue-100 transition-colors cursor-pointer'>
                <div className='text-lg'>⚛️</div>
                <h4 className='text-sm font-medium text-gray-900'>React</h4>
                <p className='text-xs text-gray-600'>v19 Latest</p>
                <p className='text-xs text-gray-500 mt-1'>Core framework</p>
              </div>
              <div className='p-1 bg-purple-50 rounded-md hover:bg-purple-100 transition-colors cursor-pointer'>
                <div className='text-lg'>🎭</div>
                <h4 className='text-sm font-medium text-gray-900'>Framer</h4>
                <p className='text-xs text-gray-600'>Motion</p>
                <p className='text-xs text-gray-500 mt-1'>Animation engine</p>
              </div>
              <div className='p-1 bg-cyan-50 rounded-md hover:bg-cyan-100 transition-colors cursor-pointer'>
                <div className='text-lg'>🎨</div>
                <h4 className='text-sm font-medium text-gray-900'>Tailwind</h4>
                <p className='text-xs text-gray-600'>CSS</p>
                <p className='text-xs text-gray-500 mt-1'>Styling system</p>
              </div>
              <div className='p-1 bg-orange-50 rounded-md hover:bg-orange-100 transition-colors cursor-pointer'>
                <div className='text-lg'>🎯</div>
                <h4 className='text-sm font-medium text-gray-900'>Radix UI</h4>
                <p className='text-xs text-gray-600'>Primitives</p>
                <p className='text-xs text-gray-500 mt-1'>Accessible base</p>
              </div>
            </div>

            <div className='grid grid-cols-3 gap-1 text-center'>
              <div className='p-1 bg-blue-50 rounded-md hover:bg-blue-100 transition-colors cursor-pointer'>
                <div className='text-lg'>🔷</div>
                <h4 className='text-sm font-medium text-gray-900'>
                  TypeScript
                </h4>
                <p className='text-xs text-gray-600'>v5.0+ Latest</p>
                <p className='text-xs text-gray-500 mt-1'>Type safety & DX</p>
              </div>
              <div className='p-1 bg-yellow-50 rounded-md hover:bg-yellow-100 transition-colors cursor-pointer'>
                <div className='text-lg'>📦</div>
                <h4 className='text-sm font-medium text-gray-900'>Vite</h4>
                <p className='text-xs text-gray-600'>Lightning fast</p>
                <p className='text-xs text-gray-500 mt-1'>Build tool & HMR</p>
              </div>
              <div className='p-1 bg-pink-50 rounded-md hover:bg-pink-100 transition-colors cursor-pointer'>
                <div className='text-lg'>🧪</div>
                <h4 className='text-sm font-medium text-gray-900'>Storybook</h4>
                <p className='text-xs text-gray-600'>Documentation</p>
                <p className='text-xs text-gray-500 mt-1'>Component docs</p>
              </div>
            </div>
          </div>

          <div className='mt-2 p-1 bg-gray-50 rounded-md'>
            <p className='text-xs text-gray-600 text-center'>
              Modern stack optimized for developer experience, performance and
              maintainability
            </p>
          </div>

          <div className='mt-2 p-1 bg-green-50 rounded-md'>
            <p className='text-xs text-green-700'>
              🚀 Zero-config setup with hot reload, instant builds and automatic
              type checking
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    tab: 'getting started',
    value: 'getting-started',
    content: (
      <div className='p-1 w-[30rem]'>
        <div className='p-1'>
          <h3 className='text-lg font-semibold text-gray-900 mb-2'>
            Getting Started
          </h3>
          <p className='text-xs text-gray-600 mb-3'>
            Get up and running with Flow components in under 2 minutes with our
            streamlined setup process
          </p>

          <div className='space-y-2'>
            <div>
              <h4 className='text-xs font-medium text-gray-500 uppercase tracking-wide mb-1'>
                Quick Setup - Three Simple Steps
              </h4>
              <div className='space-y-1'>
                <div className='p-1 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors'>
                  <div className='flex items-center gap-2'>
                    <span className='text-xs bg-gray-200 text-gray-700 px-1 rounded-md'>
                      1
                    </span>
                    <code className='text-xs text-gray-700 flex-1'>
                      git clone https://github.com/adwaithks/flow.git
                      my-flow-project
                    </code>
                  </div>
                  <p className='text-xs text-gray-500 mt-1 ml-6'>
                    Clone the repository to your local machine with custom
                    directory name
                  </p>
                </div>
                <div className='p-1 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors'>
                  <div className='flex items-center gap-2'>
                    <span className='text-xs bg-gray-200 text-gray-700 px-1 rounded-md'>
                      2
                    </span>
                    <code className='text-xs text-gray-700 flex-1'>
                      cd my-flow-project && npm install --legacy-peer-deps
                    </code>
                  </div>
                  <p className='text-xs text-gray-500 mt-1 ml-6'>
                    Navigate to project directory and install all dependencies
                    with compatibility flags
                  </p>
                </div>
                <div className='p-1 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors'>
                  <div className='flex items-center gap-2'>
                    <span className='text-xs bg-gray-200 text-gray-700 px-1 rounded-md'>
                      3
                    </span>
                    <code className='text-xs text-gray-700 flex-1'>
                      npm run dev -- --open --host localhost --port 3000
                    </code>
                  </div>
                  <p className='text-xs text-gray-500 mt-1 ml-6'>
                    Start development server with hot reload, auto-open browser
                    and custom port configuration
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h4 className='text-xs font-medium text-gray-500 uppercase tracking-wide mb-1'>
                System Requirements & Compatibility
              </h4>
              <div className='grid grid-cols-3 gap-1'>
                <div className='p-1 border border-gray-200 rounded-md text-center hover:border-gray-300 transition-colors'>
                  <h5 className='text-sm font-medium text-gray-900'>Node.js</h5>
                  <p className='text-xs text-gray-600'>18+ Required</p>
                  <p className='text-xs text-gray-500'>LTS Recommended</p>
                </div>
                <div className='p-1 border border-gray-200 rounded-md text-center hover:border-gray-300 transition-colors'>
                  <h5 className='text-sm font-medium text-gray-900'>
                    Package Manager
                  </h5>
                  <p className='text-xs text-gray-600'>npm/yarn/pnpm</p>
                  <p className='text-xs text-gray-500'>Any modern PM</p>
                </div>
                <div className='p-1 border border-gray-200 rounded-md text-center hover:border-gray-300 transition-colors'>
                  <h5 className='text-sm font-medium text-gray-900'>
                    Browser Support
                  </h5>
                  <p className='text-xs text-gray-600'>Modern browsers</p>
                  <p className='text-xs text-gray-500'>ES2020+ support</p>
                </div>
              </div>
            </div>

            <div className='p-1 bg-amber-50 rounded-md border border-amber-200'>
              <p className='text-xs text-amber-700'>
                ⚠️ Development Notice: Component APIs are subject to change
                during active development phase
              </p>
            </div>

            <div className='p-1 bg-purple-50 rounded-md'>
              <p className='text-xs text-purple-700'>
                ✨ Pro Tip: Check out the playground directory to interact with
                all available components and examples
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

const PopperTabsDemo = () => {
  return <PopperTabs tabs={tabs} />;
};

export default PopperTabsDemo;
