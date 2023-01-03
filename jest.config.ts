import type { Config } from "jest"
import { defaults } from "jest-config"

const config: Config = {
	collectCoverage: true,
	collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}", "!src/**/*.d.ts"],
	preset: "ts-jest",
	// watchAll: true,
}

export default config
