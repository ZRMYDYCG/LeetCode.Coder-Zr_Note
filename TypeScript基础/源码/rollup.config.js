import ts from "rollup-plugin-typescript2"
import serve from "rollup-plugin-serve"
import { nodeResolve } from "@rollup/plugin-node-resolve"
import { fileURLToPath } from 'url'
import { dirname, resolve } from "path"
import { SourceMap } from "module"


const __filename = fileURLToPath(import.meta.url) // 绝对路径: 当前文件的绝对路径

const __dirname = dirname(__filename) // 绝对路径: 当前文件所在的文件夹

export default {
    input: resolve(__dirname, "src/index.ts"),
    output: {
        format: "iife",
        file: resolve(__dirname, "dist/bundle.js"),
        sourcemap: true // 源码调试功能
    },
    plugins: [
        nodeResolve({
            extensions: [".js", ".ts"]
        }),
        ts({
            tsconfig: resolve(__dirname, "tsconfig.json")
        }),
        serve({
            post: 3000,
            openPage: "/public/index.html",
            open: true
        })
    ]
}