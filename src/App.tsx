
import { useState, useRef } from "react"
import LiquidGlass from "./components/liquid-glass"
import { LogOutIcon, Github, Mail, Lock } from "lucide-react"






export default function App() {
  // User Info Card Controls
  const [displacementScale, setDisplacementScale] = useState(100)
  const [blurAmount, setBlurAmount] = useState(0.5)
  const [saturation, setSaturation] = useState(140)
  const [aberrationIntensity, setAberrationIntensity] = useState(2)
  const [elasticity, setElasticity] = useState(0)
  const [cornerRadius, setCornerRadius] = useState(32)
  const [userInfoOverLight, setUserInfoOverLight] = useState(false)
  const [userInfoMode, setUserInfoMode] = useState<"standard" | "polar" | "prominent" | "shader">("standard")

  // Log Out Button Controls
  const [logoutDisplacementScale, setLogoutDisplacementScale] = useState(64)
  const [logoutBlurAmount, setLogoutBlurAmount] = useState(0.1)
  const [logoutSaturation, setLogoutSaturation] = useState(130)
  const [logoutAberrationIntensity, setLogoutAberrationIntensity] = useState(2)
  const [logoutElasticity, setLogoutElasticity] = useState(0.35)
  const [logoutCornerRadius, setLogoutCornerRadius] = useState(100)
  const [logoutOverLight, setLogoutOverLight] = useState(false)
  const [logoutMode, setLogoutMode] = useState<"standard" | "polar" | "prominent" | "shader">("standard")

  // Login Form Controls
  const [loginDisplacementScale, setLoginDisplacementScale] = useState(90)
  const [loginBlurAmount, setLoginBlurAmount] = useState(0.35)
  const [loginSaturation, setLoginSaturation] = useState(150)
  const [loginAberrationIntensity, setLoginAberrationIntensity] = useState(2)
  const [loginElasticity, setLoginElasticity] = useState(0.1)
  const [loginCornerRadius, setLoginCornerRadius] = useState(28)
  const [loginOverLight, setLoginOverLight] = useState(false)
  const [loginMode, setLoginMode] = useState<"standard" | "polar" | "prominent" | "shader">("standard")

  // Shared state
  const [activeTab, setActiveTab] = useState<"userInfo" | "logOut" | "login">("userInfo")
  const containerRef = useRef<HTMLDivElement>(null)

  const [scroll, setScroll] = useState(0)

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    requestAnimationFrame(() => {
      setScroll((event?.target as any)?.scrollTop)
    })
  }

  const scrollingOverBrightSection = scroll > 230 && scroll < 500

  return (
    <div
      className={` grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-3 shadow-2xl w-full max-w-5xl mx-auto md:my-10 h-screen md:max-h-[calc(100vh-5rem)] md:rounded-3xl overflow-hidden font-[family-name:var(--font-geist-sans)]`}
    >
      {/* Left Panel - Glass Effect Demo */}
      <div className="flex-1 relative overflow-auto min-h-screen md:col-span-2" ref={containerRef} onScroll={handleScroll}>
        <div className="w-full min-h-[200vh] absolute top-0 left-0 pb-96 mb-96">
          <img src="https://picsum.photos/2000/2000" className="w-full h-96 object-cover" />
          <div className="flex flex-col gap-2" id="bright-section">
            <h2 className="text-2xl font-semibold my-5 text-center">Some Heading</h2>
            <p className="px-10">
              Bacon ipsum dolor amet hamburger Bacon ipsum dolor amet hamburger <br />
              Bacon ipsum dolor amet hamburger Bacon ipsum dolor amet hamburger
              <br />
              Bacon ipsum dolor amet hamburger Bacon ipsum dolor amet hamburger
              <br />
              Bacon ipsum dolor amet hamburger Bacon ipsum dolor amet hamburger
              <br />
              Bacon ipsum dolor amet hamburger Bacon ipsum dolor amet hamburger
              <br />
              Bacon ipsum dolor amet hamburger Bacon ipsum dolor amet hamburger
            </p>
          </div>
          <img src="https://picsum.photos/1200/1200" className="w-full h-80 object-cover my-10" />
          <img src="https://picsum.photos/1400/1300" className="w-full h-72 object-cover my-10" />
          <img src="https://picsum.photos/1100/1200" className="w-full h-96 object-cover my-10 mb-96" />
        </div>

        {activeTab === "userInfo" && (
          <LiquidGlass
              displacementScale={displacementScale}
              blurAmount={blurAmount}
              saturation={saturation}
              aberrationIntensity={aberrationIntensity}
              elasticity={elasticity}
              cornerRadius={cornerRadius}
              mouseContainer={containerRef}
              overLight={scrollingOverBrightSection || userInfoOverLight}
              mode={userInfoMode}
              style={{
                position: "fixed",
                top: "25%",
                left: "40%",
              }}
            >
              <div className="w-72 text-shadow-lg">
                <h3 className="text-xl font-semibold mb-4">User Info</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-black/10 backdrop-blur rounded-full flex items-center justify-center text-white font-semibold">JD</div>
                    <div>
                      <p className="font-medium">John Doe</p>
                      <p className="text-sm text-white">Software Engineer</p>
                    </div>
                  </div>
                  <div className="pt-2 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-white">Email:</span>
                      <span className="text-sm">john.doe@example.com</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-white">Location:</span>
                      <span className="text-sm">San Francisco, CA</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-white">Joined:</span>
                      <span className="text-sm">March 2023</span>
                    </div>
                  </div>
                </div>
              </div>
            </LiquidGlass>
        )}

        {activeTab === "logOut" && (
          <LiquidGlass
            displacementScale={logoutDisplacementScale}
            blurAmount={logoutBlurAmount}
            saturation={logoutSaturation}
            aberrationIntensity={logoutAberrationIntensity}
            elasticity={logoutElasticity}
            cornerRadius={logoutCornerRadius}
            mouseContainer={containerRef}
            overLight={scrollingOverBrightSection || logoutOverLight}
            mode={logoutMode}
            padding="8px 16px"
            onClick={() => {
              console.log("Logged out")
            }}
            style={{
              position: "fixed",
              top: "20%",
              left: "40%",
            }}
          >
            <h3 className="text-lg font-medium flex items-center gap-2">
              Log Out
              <LogOutIcon className="w-5 h-5" />
            </h3>
          </LiquidGlass>
        )}

        {activeTab === "login" && (
          <LiquidGlass
            displacementScale={loginDisplacementScale}
            blurAmount={loginBlurAmount}
            saturation={loginSaturation}
            aberrationIntensity={loginAberrationIntensity}
            elasticity={loginElasticity}
            cornerRadius={loginCornerRadius}
            mouseContainer={containerRef}
            overLight={scrollingOverBrightSection || loginOverLight}
            mode={loginMode}
            style={{
              position: "fixed",
              top: "18%",
              left: "35%",
            }}
          >
            <div className="w-80">
              <h3 className="text-xl font-semibold mb-1">Welcome back</h3>
              <p className="text-sm text-white/80 mb-5">Sign in to continue</p>
              <form className="space-y-3">
                <label className="block">
                  <span className="text-sm text-white/90 mb-1 block">Email</span>
                  <span className="relative block">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/70" />
                    <input type="email" autoComplete="username" placeholder="john.doe@example.com" className="w-full rounded-xl border border-white/20 bg-black/20 text-white placeholder:text-white/60 pl-10 pr-3 py-2.5 outline-none focus:ring-2 focus:ring-blue-300/60" />
                  </span>
                </label>
                <label className="block">
                  <span className="text-sm text-white/90 mb-1 block">Password</span>
                  <span className="relative block">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/70" />
                    <input type="password" autoComplete="current-password" placeholder="••••••••" className="w-full rounded-xl border border-white/20 bg-black/20 text-white placeholder:text-white/60 pl-10 pr-3 py-2.5 outline-none focus:ring-2 focus:ring-blue-300/60" />
                  </span>
                </label>
                <div className="flex justify-between items-center pt-1">
                  <label className="flex items-center gap-2 text-sm text-white/90">
                    <input type="checkbox" className="accent-blue-500" />
                    Remember me
                  </label>
                  <button type="button" className="text-sm text-blue-200 hover:text-blue-100 transition-colors">
                    Forgot password?
                  </button>
                </div>
                <button type="submit" className="w-full mt-2 rounded-xl bg-white/20 hover:bg-white/30 transition-colors text-white font-medium py-2.5 border border-white/20">
                  Sign in
                </button>
              </form>
            </div>
          </LiquidGlass>
        )}
      </div>

      {/* Right Panel - Control Panel */}
      <div className="row-start-2 rounded-t-3xl md:rounded-none md:col-start-3 bg-gray-900/80 h-full overflow-y-auto backdrop-blur-md border-l border-white/10 p-8 flex flex-col">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-white">Glassy Boi but Web</h2>
            <a href="https://github.com/rdev/liquid-glass-react" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg" title="View on GitHub">
              <Github className="w-6 h-6" />
            </a>
          </div>
          <p className="text-white/60 text-sm">Liquid Glass container effect for React. With settings and effects and stuff.</p>

          <p className="font-semibold text-yellow-300 text-xs mt-2 leading-snug">⚠️ This doesn't fully work in Safari and Firefox. You will not see edge refraction on non-chromium browsers.</p>
        </div>

        {/* Tab Switcher */}
        <div className="flex mb-6 bg-white/5 rounded-lg p-1">
          <button
            onClick={() => setActiveTab("userInfo")}
            className={`flex-1 px-4 py-2 text-sm font-medium rounded-md transition-all ${activeTab === "userInfo" ? "bg-blue-500 text-white shadow-lg" : "text-white/70 hover:text-white hover:bg-white/10"}`}
          >
            User Info Card
          </button>
          <button
            onClick={() => setActiveTab("logOut")}
            className={`flex-1 px-4 py-2 text-sm font-medium rounded-md transition-all ${activeTab === "logOut" ? "bg-blue-500 text-white shadow-lg" : "text-white/70 hover:text-white hover:bg-white/10"}`}
          >
            Log Out Button
          </button>
          <button
            onClick={() => setActiveTab("login")}
            className={`flex-1 px-4 py-2 text-sm font-medium rounded-md transition-all ${activeTab === "login" ? "bg-blue-500 text-white shadow-lg" : "text-white/70 hover:text-white hover:bg-white/10"}`}
          >
            Login Page
          </button>
        </div>

        <div className="space-y-8 flex-1">
          {activeTab === "userInfo" && (
            <>
              <div>
                <span className="block text-sm font-semibold text-white/90 mb-3">Refraction Mode</span>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      id="userInfoModeStandard"
                      name="userInfoMode"
                      value="standard"
                      checked={userInfoMode === "standard"}
                      onChange={(e) => setUserInfoMode(e.target.value as "standard" | "polar" | "prominent" | "shader")}
                      className="w-4 h-4 accent-blue-500"
                    />
                    <label htmlFor="userInfoModeStandard" className="text-sm text-white/90">
                      Standard
                    </label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      id="userInfoModePolar"
                      name="userInfoMode"
                      value="polar"
                      checked={userInfoMode === "polar"}
                      onChange={(e) => setUserInfoMode(e.target.value as "standard" | "polar" | "prominent" | "shader")}
                      className="w-4 h-4 accent-blue-500"
                    />
                    <label htmlFor="userInfoModePolar" className="text-sm text-white/90">
                      Polar
                    </label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      id="userInfoModeProminent"
                      name="userInfoMode"
                      value="prominent"
                      checked={userInfoMode === "prominent"}
                      onChange={(e) => setUserInfoMode(e.target.value as "standard" | "polar" | "prominent" | "shader")}
                      className="w-4 h-4 accent-blue-500"
                    />
                    <label htmlFor="userInfoModeProminent" className="text-sm text-white/90">
                      Prominent
                    </label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      id="userInfoModeShader"
                      name="userInfoMode"
                      value="shader"
                      checked={userInfoMode === "shader"}
                      onChange={(e) => setUserInfoMode(e.target.value as "standard" | "polar" | "prominent" | "shader")}
                      className="w-4 h-4 accent-blue-500"
                    />
                    <label htmlFor="userInfoModeShader" className="text-sm text-white/90">
                      Shader (Experimental)
                    </label>
                  </div>
                </div>
                <p className="text-xs text-white/50 mt-2">Controls the refraction calculation method</p>
              </div>

              <div>
                <span className="block text-sm font-semibold text-white/90 mb-3">Displacement Scale</span>
                <div className="mb-2">
                  <span className="text-xl font-mono text-blue-300">{displacementScale}</span>
                </div>
                <input type="range" min="0" max="200" step="1" value={displacementScale} onChange={(e) => setDisplacementScale(Number(e.target.value))} className="w-full" />
                <p className="text-xs text-white/50 mt-2">Controls the intensity of edge distortion</p>
              </div>

              <div>
                <span className="block text-sm font-semibold text-white/90 mb-3">Blur Amount</span>
                <div className="mb-2">
                  <span className="text-xl font-mono text-green-300">{blurAmount.toFixed(1)}</span>
                </div>
                <input type="range" min="0" max="1" step="0.01" value={blurAmount} onChange={(e) => setBlurAmount(Number(e.target.value))} className="w-full" />
                <p className="text-xs text-white/50 mt-2">Controls backdrop blur intensity</p>
              </div>

              <div>
                <span className="block text-sm font-semibold text-white/90 mb-3">Saturation</span>
                <div className="mb-2">
                  <span className="text-xl font-mono text-purple-300">{saturation}%</span>
                </div>
                <input type="range" min="100" max="300" step="10" value={saturation} onChange={(e) => setSaturation(Number(e.target.value))} className="w-full" />
                <p className="text-xs text-white/50 mt-2">Controls color saturation of the backdrop</p>
              </div>

              <div>
                <span className="block text-sm font-semibold text-white/90 mb-3">Chromatic Aberration</span>
                <div className="mb-2">
                  <span className="text-xl font-mono text-cyan-300">{aberrationIntensity}</span>
                </div>
                <input type="range" min="0" max="20" step="1" value={aberrationIntensity} onChange={(e) => setAberrationIntensity(Number(e.target.value))} className="w-full" />
                <p className="text-xs text-white/50 mt-2">Controls RGB channel separation intensity</p>
              </div>

              <div>
                <span className="block text-sm font-semibold text-white/90 mb-3">Elasticity</span>
                <div className="mb-2">
                  <span className="text-xl font-mono text-orange-300">{elasticity.toFixed(2)}</span>
                </div>
                <input type="range" min="0" max="1" step="0.05" value={elasticity} onChange={(e) => setElasticity(Number(e.target.value))} className="w-full" />
                <p className="text-xs text-white/50 mt-2">Controls how much the glass reaches toward the cursor</p>
              </div>

              <div>
                <span className="block text-sm font-semibold text-white/90 mb-3">Corner Radius</span>
                <div className="mb-2">
                  <span className="text-xl font-mono text-pink-300">{cornerRadius === 999 ? "Full" : `${cornerRadius}px`}</span>
                </div>
                <input type="range" min="0" max="100" step="1" value={cornerRadius} onChange={(e) => setCornerRadius(Number(e.target.value))} className="w-full" />
                <p className="text-xs text-white/50 mt-2">Controls the roundness of the glass corners</p>
              </div>

              <div>
                <span className="block text-sm font-semibold text-white/90 mb-3">Over Light</span>
                <div className="flex items-center space-x-3">
                  <input type="checkbox" id="userInfoOverLight" checked={userInfoOverLight} onChange={(e) => setUserInfoOverLight(e.target.checked)} className="w-5 h-5 accent-blue-500" />
                  <label htmlFor="userInfoOverLight" className="text-sm text-white/90">
                    Tint liquid glass dark (use for bright backgrounds)
                  </label>
                </div>
                <p className="text-xs text-white/50 mt-2">Makes the glass darker for better visibility on light backgrounds</p>
              </div>
            </>
          )}

          {activeTab === "logOut" && (
            <>
              <div>
                <span className="block text-sm font-semibold text-white/90 mb-3">Refraction Mode</span>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      id="logoutModeStandard"
                      name="logoutMode"
                      value="standard"
                      checked={logoutMode === "standard"}
                      onChange={(e) => setLogoutMode(e.target.value as "standard" | "polar" | "prominent" | "shader")}
                      className="w-4 h-4 accent-blue-500"
                    />
                    <label htmlFor="logoutModeStandard" className="text-sm text-white/90">
                      Standard
                    </label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      id="logoutModePolar"
                      name="logoutMode"
                      value="polar"
                      checked={logoutMode === "polar"}
                      onChange={(e) => setLogoutMode(e.target.value as "standard" | "polar" | "prominent" | "shader")}
                      className="w-4 h-4 accent-blue-500"
                    />
                    <label htmlFor="logoutModePolar" className="text-sm text-white/90">
                      Polar
                    </label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      id="logoutModeProminent"
                      name="logoutMode"
                      value="prominent"
                      checked={logoutMode === "prominent"}
                      onChange={(e) => setLogoutMode(e.target.value as "standard" | "polar" | "prominent" | "shader")}
                      className="w-4 h-4 accent-blue-500"
                    />
                    <label htmlFor="logoutModeProminent" className="text-sm text-white/90">
                      Prominent
                    </label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      id="logoutModeShader"
                      name="logoutMode"
                      value="shader"
                      checked={logoutMode === "shader"}
                      onChange={(e) => setLogoutMode(e.target.value as "standard" | "polar" | "prominent" | "shader")}
                      className="w-4 h-4 accent-blue-500"
                    />
                    <label htmlFor="logoutModeShader" className="text-sm text-white/90">
                      Shader
                    </label>
                  </div>
                </div>
                <p className="text-xs text-white/50 mt-2">Controls the refraction calculation method</p>
              </div>

              <div>
                <span className="block text-sm font-semibold text-white/90 mb-3">Displacement Scale</span>
                <div className="mb-2">
                  <span className="text-xl font-mono text-blue-300">{logoutDisplacementScale}</span>
                </div>
                <input type="range" min="0" max="200" step="1" value={logoutDisplacementScale} onChange={(e) => setLogoutDisplacementScale(Number(e.target.value))} className="w-full" />
                <p className="text-xs text-white/50 mt-2">Controls the intensity of edge distortion</p>
              </div>

              <div>
                <span className="block text-sm font-semibold text-white/90 mb-3">Blur Amount</span>
                <div className="mb-2">
                  <span className="text-xl font-mono text-green-300">{logoutBlurAmount.toFixed(1)}</span>
                </div>
                <input type="range" min="0" max="1" step="0.01" value={logoutBlurAmount} onChange={(e) => setLogoutBlurAmount(Number(e.target.value))} className="w-full" />
                <p className="text-xs text-white/50 mt-2">Controls backdrop blur intensity</p>
              </div>

              <div>
                <span className="block text-sm font-semibold text-white/90 mb-3">Saturation</span>
                <div className="mb-2">
                  <span className="text-xl font-mono text-purple-300">{logoutSaturation}%</span>
                </div>
                <input type="range" min="100" max="300" step="10" value={logoutSaturation} onChange={(e) => setLogoutSaturation(Number(e.target.value))} className="w-full" />
                <p className="text-xs text-white/50 mt-2">Controls color saturation of the backdrop</p>
              </div>

              <div>
                <span className="block text-sm font-semibold text-white/90 mb-3">Chromatic Aberration</span>
                <div className="mb-2">
                  <span className="text-xl font-mono text-cyan-300">{logoutAberrationIntensity}</span>
                </div>
                <input type="range" min="0" max="20" step="1" value={logoutAberrationIntensity} onChange={(e) => setLogoutAberrationIntensity(Number(e.target.value))} className="w-full" />
                <p className="text-xs text-white/50 mt-2">Controls RGB channel separation intensity</p>
              </div>

              <div>
                <span className="block text-sm font-semibold text-white/90 mb-3">Elasticity</span>
                <div className="mb-2">
                  <span className="text-xl font-mono text-orange-300">{logoutElasticity.toFixed(2)}</span>
                </div>
                <input type="range" min="0" max="1" step="0.05" value={logoutElasticity} onChange={(e) => setLogoutElasticity(Number(e.target.value))} className="w-full" />
                <p className="text-xs text-white/50 mt-2">Controls how much the glass reaches toward the cursor</p>
              </div>

              <div>
                <span className="block text-sm font-semibold text-white/90 mb-3">Corner Radius</span>
                <div className="mb-2">
                  <span className="text-xl font-mono text-pink-300">{logoutCornerRadius === 999 ? "Full" : `${logoutCornerRadius}px`}</span>
                </div>
                <input type="range" min="0" max="100" step="1" value={logoutCornerRadius} onChange={(e) => setLogoutCornerRadius(Number(e.target.value))} className="w-full" />
                <p className="text-xs text-white/50 mt-2">Controls the roundness of the glass corners</p>
              </div>

              <div>
                <span className="block text-sm font-semibold text-white/90 mb-3">Over Light</span>
                <div className="flex items-center space-x-3">
                  <input type="checkbox" id="logoutOverLight" checked={logoutOverLight} onChange={(e) => setLogoutOverLight(e.target.checked)} className="w-5 h-5 accent-blue-500" />
                  <label htmlFor="logoutOverLight" className="text-sm text-white/90">
                    Tint liquid glass dark (use for bright backgrounds)
                  </label>
                </div>
                <p className="text-xs text-white/50 mt-2">Makes the glass darker for better visibility on light backgrounds</p>
              </div>
            </>
          )}

          {activeTab === "login" && (
            <>
              <div>
                <span className="block text-sm font-semibold text-white/90 mb-3">Refraction Mode</span>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      id="loginModeStandard"
                      name="loginMode"
                      value="standard"
                      checked={loginMode === "standard"}
                      onChange={(e) => setLoginMode(e.target.value as "standard" | "polar" | "prominent" | "shader")}
                      className="w-4 h-4 accent-blue-500"
                    />
                    <label htmlFor="loginModeStandard" className="text-sm text-white/90">
                      Standard
                    </label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      id="loginModePolar"
                      name="loginMode"
                      value="polar"
                      checked={loginMode === "polar"}
                      onChange={(e) => setLoginMode(e.target.value as "standard" | "polar" | "prominent" | "shader")}
                      className="w-4 h-4 accent-blue-500"
                    />
                    <label htmlFor="loginModePolar" className="text-sm text-white/90">
                      Polar
                    </label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      id="loginModeProminent"
                      name="loginMode"
                      value="prominent"
                      checked={loginMode === "prominent"}
                      onChange={(e) => setLoginMode(e.target.value as "standard" | "polar" | "prominent" | "shader")}
                      className="w-4 h-4 accent-blue-500"
                    />
                    <label htmlFor="loginModeProminent" className="text-sm text-white/90">
                      Prominent
                    </label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      id="loginModeShader"
                      name="loginMode"
                      value="shader"
                      checked={loginMode === "shader"}
                      onChange={(e) => setLoginMode(e.target.value as "standard" | "polar" | "prominent" | "shader")}
                      className="w-4 h-4 accent-blue-500"
                    />
                    <label htmlFor="loginModeShader" className="text-sm text-white/90">
                      Shader
                    </label>
                  </div>
                </div>
                <p className="text-xs text-white/50 mt-2">Controls the refraction calculation method</p>
              </div>

              <div>
                <span className="block text-sm font-semibold text-white/90 mb-3">Displacement Scale</span>
                <div className="mb-2">
                  <span className="text-xl font-mono text-blue-300">{loginDisplacementScale}</span>
                </div>
                <input type="range" min="0" max="200" step="1" value={loginDisplacementScale} onChange={(e) => setLoginDisplacementScale(Number(e.target.value))} className="w-full" />
                <p className="text-xs text-white/50 mt-2">Controls the intensity of edge distortion</p>
              </div>

              <div>
                <span className="block text-sm font-semibold text-white/90 mb-3">Blur Amount</span>
                <div className="mb-2">
                  <span className="text-xl font-mono text-green-300">{loginBlurAmount.toFixed(1)}</span>
                </div>
                <input type="range" min="0" max="1" step="0.01" value={loginBlurAmount} onChange={(e) => setLoginBlurAmount(Number(e.target.value))} className="w-full" />
                <p className="text-xs text-white/50 mt-2">Controls backdrop blur intensity</p>
              </div>

              <div>
                <span className="block text-sm font-semibold text-white/90 mb-3">Saturation</span>
                <div className="mb-2">
                  <span className="text-xl font-mono text-purple-300">{loginSaturation}%</span>
                </div>
                <input type="range" min="100" max="300" step="10" value={loginSaturation} onChange={(e) => setLoginSaturation(Number(e.target.value))} className="w-full" />
                <p className="text-xs text-white/50 mt-2">Controls color saturation of the backdrop</p>
              </div>

              <div>
                <span className="block text-sm font-semibold text-white/90 mb-3">Chromatic Aberration</span>
                <div className="mb-2">
                  <span className="text-xl font-mono text-cyan-300">{loginAberrationIntensity}</span>
                </div>
                <input type="range" min="0" max="20" step="1" value={loginAberrationIntensity} onChange={(e) => setLoginAberrationIntensity(Number(e.target.value))} className="w-full" />
                <p className="text-xs text-white/50 mt-2">Controls RGB channel separation intensity</p>
              </div>

              <div>
                <span className="block text-sm font-semibold text-white/90 mb-3">Elasticity</span>
                <div className="mb-2">
                  <span className="text-xl font-mono text-orange-300">{loginElasticity.toFixed(2)}</span>
                </div>
                <input type="range" min="0" max="1" step="0.05" value={loginElasticity} onChange={(e) => setLoginElasticity(Number(e.target.value))} className="w-full" />
                <p className="text-xs text-white/50 mt-2">Controls how much the glass reaches toward the cursor</p>
              </div>

              <div>
                <span className="block text-sm font-semibold text-white/90 mb-3">Corner Radius</span>
                <div className="mb-2">
                  <span className="text-xl font-mono text-pink-300">{loginCornerRadius === 999 ? "Full" : `${loginCornerRadius}px`}</span>
                </div>
                <input type="range" min="0" max="100" step="1" value={loginCornerRadius} onChange={(e) => setLoginCornerRadius(Number(e.target.value))} className="w-full" />
                <p className="text-xs text-white/50 mt-2">Controls the roundness of the glass corners</p>
              </div>

              <div>
                <span className="block text-sm font-semibold text-white/90 mb-3">Over Light</span>
                <div className="flex items-center space-x-3">
                  <input type="checkbox" id="loginOverLight" checked={loginOverLight} onChange={(e) => setLoginOverLight(e.target.checked)} className="w-5 h-5 accent-blue-500" />
                  <label htmlFor="loginOverLight" className="text-sm text-white/90">
                    Tint liquid glass dark (use for bright backgrounds)
                  </label>
                </div>
                <p className="text-xs text-white/50 mt-2">Makes the glass darker for better visibility on light backgrounds</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
