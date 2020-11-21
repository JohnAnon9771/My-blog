import { Theme } from '../styles/Theme';

// function injection(theme) {
//   function getInitialColorMode() {
//     const persistedColorPreference = window.localStorage.getItem('color-mode');
//     const hasPersistedPreference = typeof persistedColorPreference === 'string';
//     // If the user has explicitly chosen light or dark,
//     // let's use it. Otherwise, this value will be null.
//     if (hasPersistedPreference) {
//       return persistedColorPreference;
//     }
//     // If they haven't been explicit, let's check the media
//     // query
//     const mql = window.matchMedia('(prefers-color-scheme: dark)');
//     const hasMediaQueryPreference = typeof mql.matches === 'boolean';
//     if (hasMediaQueryPreference) {
//       return mql.matches ? 'dark' : 'light';
//     }
//     // If they are using a browser/OS that doesn't support
//     // color themes, let's default to 'light'.
//     return 'light';
//   }

//   const colorMode = getInitialColorMode();
//   const root = document.documentElement;

//   root.style.setProperty('--initial-color-mode', colorMode);
//   console.log(colorMode);
//   Object.entries(theme[colorMode]).forEach(function ([name, colorByTheme]) {
//     if (typeof colorByTheme !== 'object') {
//       const cssVarName = `--color-${name}`;
//       root.style.setProperty(cssVarName, `${colorByTheme}`);
//     } else {
//       Object.entries(colorByTheme).forEach(function ([name2, color]) {
//         const cssVarName = `--color-${name}-${name2}`;
//         root.style.setProperty(cssVarName, color);
//       });
//     }
//   });
//   alert('Funcionando');
// }

export function ScriptHydrationTheme(): JSX.Element {
  const codeToRunOnClient = `
  (function() {
    function getInitialColorMode() {
      const persistedColorPreference = window.localStorage.getItem('color-mode');
      const hasPersistedPreference = typeof persistedColorPreference === 'string';
      // If the user has explicitly chosen light or dark,
      // let's use it. Otherwise, this value will be null.
      if (hasPersistedPreference) {
        return persistedColorPreference;
      }
      // If they haven't been explicit, let's check the media
      // query
      const mql = window.matchMedia('(prefers-color-scheme: dark)');
      const hasMediaQueryPreference = typeof mql.matches === 'boolean';
      if (hasMediaQueryPreference) {
        return mql.matches ? 'dark' : 'light';
      }
      // If they are using a browser/OS that doesn't support
      // color themes, let's default to 'light'.
      return 'light';
    }

    const colorMode = getInitialColorMode();
    const root = document.documentElement;
    root.style.setProperty(
      '--color-text',
      colorMode === 'light'
        ? '${Theme.light.text.primary}'
        : '${Theme.dark.text.primary}'
    );
    root.style.setProperty(
      '--color-background',
      colorMode === 'light'
        ? '#ffff'
        : '${Theme.dark.primary}'
    );
    root.style.setProperty(
      '--color-primary',
      colorMode === 'light'
        ? '${Theme.light.primary}'
        : '${Theme.dark.primary}'
    );

    root.style.setProperty('--initial-color-mode', colorMode);
  })()`;
  // eslint-disable-next-line react/no-danger
  // const codeToRunOnClient = `(${injection})()`;
  return (
    <script
      id="theme-rehydrate"
      dangerouslySetInnerHTML={{ __html: codeToRunOnClient }}
    />
  );
}
