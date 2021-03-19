import { useContext } from 'react'
import { useTheme } from 'next-themes'
import AppContext from '@/components/AppContext'
import Utils from '@/lib/utils'

// Omit `type` because it's hard-coded.
type NavbarNavThemeChangerProps = Omit<JSX.IntrinsicElements['button'], 'type'>

const NavbarNavThemeChanger = ({
  className = '',
  ...htmlButtonProps
}: NavbarNavThemeChangerProps) => {
  const { theme, setTheme } = useTheme()

  const { mounted } = useContext(AppContext)

  return (
    <li>
      <button
        type="button"
        className={Utils.minifyString(`
          p-2.5
          rounded
          hover:bg-neutral-20
          focus-visible:bg-neutral-20
          dark:hover:bg-neutral-700
          dark:focus-visible:bg-neutral-700
          sm-base:p-3
        `)}
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        aria-label={
          mounted
            ? `Switch to ${theme === 'light' ? 'dark' : 'light'} theme`
            : 'Toggle theme'
        }
        {...htmlButtonProps}
      >
        <svg
          className={Utils.minifyString(`
            w-5
            h-5
            dark:filter-grayscale-20
            sm-base:w-6
            sm-base:h-6
          `)}
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          focusable="false"
          aria-hidden="true"
        >
          <defs>
            <linearGradient
              id="color-mode-toggle-gradient-dark"
              gradientTransform="rotate(45)"
            >
              <stop offset="0%" stopColor="#405ef7" />
              <stop offset="100%" stopColor="#772fe8" />
            </linearGradient>

            <linearGradient
              id="color-mode-toggle-gradient-light"
              gradientTransform="rotate(45)"
            >
              <stop offset="40%" stopColor="#fb5837" />
              <stop offset="100%" stopColor="#f4317d" />
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
              d="M19.782,15.2a1,1,0,0,0-1.075-.317A5.992,5.992,0,0,1,12.853,4.748,1,1,0,0,0,12.2,3.01a9,9,0,1,0,7.684,13.309A1,1,0,0,0,19.782,15.2Z"
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
              d="M12,7a5,5,0,1,0,5,5A5,5,0,0,0,12,7ZM5,12a1,1,0,0,0-1-1H2a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm.636,4.95L4.222,18.364a1,1,0,1,0,1.414,1.414L7.05,18.364A1,1,0,0,0,5.636,16.95ZM12,19a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19Zm6.364-2.05a1,1,0,1,0-1.414,1.414l1.414,1.414a1,1,0,1,0,1.414-1.414ZM22,11H20a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2ZM17.657,7.343a1,1,0,0,0,.708-.293l1.414-1.415a1,1,0,0,0-1.416-1.413L16.949,5.637a1,1,0,0,0,.708,1.706ZM12,5a1,1,0,0,0,1-1V2a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.635,7.05A1,1,0,0,0,7.051,5.637L5.637,4.222A1,1,0,0,0,4.221,5.635Z"
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
