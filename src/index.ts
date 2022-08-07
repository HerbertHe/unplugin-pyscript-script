import { createUnplugin } from "unplugin"

export const unplugin = createUnplugin(() => {
	return {
		name: "unplugin-pyscript-script",
		transformInclude(id) {
			return id.endsWith(`.script.py`)
		},
		transform(code) {
			const RegExp = /\#\ *output *\= *([A-Za-z0-9\-\_]+)/
			const output = code.match(RegExp)

			const c = code.replace(RegExp, "")

			if (!!output) {
				return `export const script = '<py-script output="${output[1]}">${c}<py-script>'`
			}

			return `export const script = '<py-script>${c}<py-script>'`
		}
	}
})

const { vite, rollup, webpack, esbuild } = unplugin

export { vite as vitePlugin, rollup as rollupPlugin, webpack as webpackPlugin, esbuild as esbuildPlugin }