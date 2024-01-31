module.exports = function (api) {
	api.cache(true);
	return {
		presets: ["babel-preset-expo"],
		plugins: [
			["react-native-reanimated/plugin"],
			[
				"module-resolver",
				{
					root: ["."],
					alias: {
						// "~/components": "./src/components",
						// "~/INIT-PROJECT": "./src/INIT-PROJECT",
						// "~/screens": "./src/screens",
						// "~/context": "./src/context",
						// "~/HOC": "./src/HOC",
						// "~/redux": "./src/redux",
						// "~/server-API": "./src/screens",
						// "~/data-storage": "./src/data-storage",
						// "~/THEME": "./src/THEME",
						// "~/UTILS": "./src/UTILS",
						// "~/assets": "./assets",
					},
				},
			],
		],
	};
};
