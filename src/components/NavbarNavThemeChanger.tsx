import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

// Omit `type` because it's hard-coded.
type NavbarNavThemeChangerProps = Omit<JSX.IntrinsicElements['button'], 'type'>

const NavbarNavThemeChanger = ({
  className = '',
  ...htmlButtonProps
}: NavbarNavThemeChangerProps) => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  return (
    <li>
      <button
        type="button"
        className="p-3 rounded hover:bg-neutral-20 dark:hover:bg-neutral-700"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        {...htmlButtonProps}
      >
        <svg
          className="w-6 h-6 dark:filter-desaturate"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          aria-hidden="true"
          focusable="false"
        >
          <defs>
            <linearGradient
              id="color-mode-toggle-gradient-dark"
              gradientTransform="rotate(45)"
            >
              <stop offset="20%" stopColor="#34d399" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>

            <linearGradient
              id="color-mode-toggle-gradient-light"
              gradientTransform="rotate(45)"
            >
              <stop offset="20%" stopColor="#fbbf24" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>

            <filter id="svg-gaussian-blur">
              <feGaussianBlur stdDeviation="1.1" />
            </filter>
          </defs>

          <symbol
            id="color-mode-toggle-icon-dark"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="url('#color-mode-toggle-gradient-dark')"
              d="M12.85,20a7.987,7.987,0,0,0,6.215-2.962.376.376,0,0,0-.362-.605,6.267,6.267,0,0,1-4.274-11.6.375.375,0,0,0-.117-.694A8,8,0,1,0,12.85,20Z"
            />
          </symbol>

          <symbol
            id="color-mode-toggle-icon-light"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="url('#color-mode-toggle-gradient-light')"
              d="M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0 c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2 c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1 C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06 c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41 l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41 c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36 c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z"
            />
          </symbol>

          {/* Avoid hydration mismatch by rendering after mounted on the client. */}
          {mounted ? (
            <>
              <use
                filter="url('#svg-gaussian-blur')"
                xlinkHref={`#color-mode-toggle-icon-${
                  theme === 'light' ? 'dark' : 'light'
                }`}
              />

              <use
                xlinkHref={`#color-mode-toggle-icon-${
                  theme === 'light' ? 'dark' : 'light'
                }`}
              />
            </>
          ) : (
            <></>
          )}
        </svg>
      </button>
    </li>
  )
}

export default NavbarNavThemeChanger
