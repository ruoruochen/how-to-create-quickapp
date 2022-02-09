export interface IPlugin {
  apply: (globalThis) => void
}

export function applyPlugin(plugins: IPlugin[], globalThis): void {
  plugins.forEach((plugin) => plugin.apply(globalThis))
}
