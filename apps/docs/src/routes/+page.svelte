<svelte:head>
	<title>Monorepo Template - Documentation</title>
	<meta
		name="description"
		content="A modern monorepo template built with Turborepo, SvelteKit, TailwindCSS, and pnpm"
	/>
</svelte:head>

<main
	class="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100 w-full"
	data-theme="CustomThemeExample"
>
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
		<!-- Hero Section -->
		<section class="text-center mb-12 sm:mb-16">
			<h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-900 mb-4 sm:mb-6">
				Monorepo Template
			</h1>
			<p class="text-lg sm:text-xl text-primary-600 max-w-4xl mx-auto px-2">
				A modern, scalable monorepo template built with cutting-edge technologies for rapid
				development and deployment.
			</p>
		</section>

		<!-- Technology Grid -->
		<div
			class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16"
		>
			<!-- Turborepo Card -->
			<div
				class="bg-white rounded-lg p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-200 hover:border-primary-300"
			>
				<div class="flex items-center mb-3 sm:mb-4">
					<div
						class="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="w-5 h-5 sm:w-6 sm:h-6 text-primary-600"
							><path
								d="M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z"
							/><path
								d="M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z"
							/></svg
						>
					</div>
					<h3 class="text-lg sm:text-xl font-semibold text-primary-900">Turborepo</h3>
				</div>
				<p class="text-sm sm:text-base text-primary-600 mb-3 sm:mb-4">
					High-performance build system for JavaScript and TypeScript codebases. Enables incremental
					builds, intelligent caching, and parallel execution across your monorepo.
				</p>
				<div>
					<span
						class="inline-block bg-primary-100 text-primary-800 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full font-medium"
						>Build System</span
					>
				</div>
			</div>

			<!-- SvelteKit Card -->
			<div
				class="bg-white rounded-lg p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-secondary-200 hover:border-secondary-300"
			>
				<div class="flex items-center mb-3 sm:mb-4">
					<div
						class="w-10 h-10 sm:w-12 sm:h-12 bg-secondary-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="w-5 h-5 sm:w-6 sm:h-6 text-secondary-600"
							><path
								d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"
							/></svg
						>
					</div>
					<h3 class="text-lg sm:text-xl font-semibold text-secondary-900">SvelteKit</h3>
				</div>
				<p class="text-sm sm:text-base text-secondary-600 mb-3 sm:mb-4">
					The fastest way to build Svelte apps. Full-stack framework with file-based routing,
					server-side rendering, and excellent developer experience.
				</p>
				<div>
					<span
						class="inline-block bg-secondary-100 text-secondary-800 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full font-medium"
						>Framework</span
					>
				</div>
			</div>

			<!-- TailwindCSS Card -->
			<div
				class="bg-white rounded-lg p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-tertiary-200 hover:border-tertiary-300"
			>
				<div class="flex items-center mb-3 sm:mb-4">
					<div
						class="w-10 h-10 sm:w-12 sm:h-12 bg-tertiary-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="w-5 h-5 sm:w-6 sm:h-6 text-tertiary-600"
							><path
								d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"
							/><circle cx="13.5" cy="6.5" r=".5" fill="currentColor" /><circle
								cx="17.5"
								cy="10.5"
								r=".5"
								fill="currentColor"
							/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor" /><circle
								cx="8.5"
								cy="7.5"
								r=".5"
								fill="currentColor"
							/></svg
						>
					</div>
					<h3 class="text-lg sm:text-xl font-semibold text-tertiary-900">TailwindCSS</h3>
				</div>
				<p class="text-sm sm:text-base text-tertiary-600 mb-3 sm:mb-4">
					Utility-first CSS framework for rapid UI development. Highly customizable, responsive, and
					optimized for production builds.
				</p>
				<div>
					<span
						class="inline-block bg-tertiary-100 text-tertiary-800 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full font-medium"
						>Styling</span
					>
				</div>
			</div>

			<!-- Skeleton UI Card -->
			<div
				class="bg-white rounded-lg p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-success-200 hover:border-success-300"
			>
				<div class="flex items-center mb-3 sm:mb-4">
					<div
						class="w-10 h-10 sm:w-12 sm:h-12 bg-success-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="w-5 h-5 sm:w-6 sm:h-6 text-success-600"
							><path
								d="M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z"
							/></svg
						>
					</div>
					<h3 class="text-lg sm:text-xl font-semibold text-success-900">Skeleton UI</h3>
				</div>
				<p class="text-sm sm:text-base text-success-600 mb-3 sm:mb-4">
					Modern UI toolkit for Svelte and SvelteKit. Provides beautiful, accessible components with
					excellent TypeScript integration.
				</p>
				<div>
					<span
						class="inline-block bg-success-100 text-success-800 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full font-medium"
						>Components</span
					>
				</div>
			</div>

			<!-- pnpm Card -->
			<div
				class="bg-white rounded-lg p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-warning-200 hover:border-warning-300"
			>
				<div class="flex items-center mb-3 sm:mb-4">
					<div
						class="w-10 h-10 sm:w-12 sm:h-12 bg-warning-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="w-5 h-5 sm:w-6 sm:h-6 text-warning-600"
							><line x1="10" x2="14" y1="2" y2="2" /><line x1="12" x2="15" y1="14" y2="11" /><circle
								cx="12"
								cy="14"
								r="8"
							/></svg
						>
					</div>
					<h3 class="text-lg sm:text-xl font-semibold text-warning-900">pnpm</h3>
				</div>
				<p class="text-sm sm:text-base text-warning-600 mb-3 sm:mb-4">
					Fast, disk space efficient package manager. Features workspace support, symlink-based
					node_modules, and strict dependency management.
				</p>
				<div>
					<span
						class="inline-block bg-warning-100 text-warning-800 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full font-medium"
						>Package Manager</span
					>
				</div>
			</div>

			<!-- TypeScript Card -->
			<div
				class="bg-white rounded-lg p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-error-200 hover:border-error-300"
			>
				<div class="flex items-center mb-3 sm:mb-4">
					<div
						class="w-10 h-10 sm:w-12 sm:h-12 bg-error-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="w-5 h-5 sm:w-6 sm:h-6 text-error-600"
							><path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5" /><path
								d="M14 6a6 6 0 0 1 6 6v3"
							/><path d="M4 15v-3a6 6 0 0 1 6-6" /><rect
								x="2"
								y="15"
								width="20"
								height="4"
								rx="1"
							/></svg
						>
					</div>
					<h3 class="text-lg sm:text-xl font-semibold text-error-900">TypeScript</h3>
				</div>
				<p class="text-sm sm:text-base text-error-600 mb-3 sm:mb-4">
					Typed JavaScript at scale. Provides static type checking, enhanced IDE support, and better
					developer experience across the entire monorepo.
				</p>
				<div>
					<span
						class="inline-block bg-error-100 text-error-800 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full font-medium"
						>Language</span
					>
				</div>
			</div>
		</div>

		<!-- Features Section -->
		<section class="mb-12 sm:mb-16">
			<h2 class="text-2xl sm:text-3xl font-bold text-primary-900 mb-6 sm:mb-8 text-center">
				Key Features
			</h2>
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
				<div class="space-y-4 sm:space-y-6">
					<div class="flex items-start group">
						<div
							class="w-5 h-5 sm:w-6 sm:h-6 bg-primary-500 rounded-full flex-shrink-0 mt-1 mr-3 sm:mr-4 group-hover:scale-110 transition-transform"
						></div>
						<div>
							<h3 class="font-semibold text-primary-900 text-base sm:text-lg mb-1">
								Monorepo Architecture
							</h3>
							<p class="text-sm sm:text-base text-primary-600">
								Shared packages, consistent tooling, and efficient dependency management across
								multiple applications.
							</p>
						</div>
					</div>
					<div class="flex items-start group">
						<div
							class="w-5 h-5 sm:w-6 sm:h-6 bg-secondary-500 rounded-full flex-shrink-0 mt-1 mr-3 sm:mr-4 group-hover:scale-110 transition-transform"
						></div>
						<div>
							<h3 class="font-semibold text-secondary-900 text-base sm:text-lg mb-1">
								Incremental Builds
							</h3>
							<p class="text-sm sm:text-base text-secondary-600">
								Turborepo's intelligent caching system ensures only changed packages are rebuilt.
							</p>
						</div>
					</div>
					<div class="flex items-start group">
						<div
							class="w-5 h-5 sm:w-6 sm:h-6 bg-tertiary-500 rounded-full flex-shrink-0 mt-1 mr-3 sm:mr-4 group-hover:scale-110 transition-transform"
						></div>
						<div>
							<h3 class="font-semibold text-tertiary-900 text-base sm:text-lg mb-1">Type Safety</h3>
							<p class="text-sm sm:text-base text-tertiary-600">
								Full TypeScript support with shared type definitions across all packages and
								applications.
							</p>
						</div>
					</div>
				</div>
				<div class="space-y-4 sm:space-y-6">
					<div class="flex items-start group">
						<div
							class="w-5 h-5 sm:w-6 sm:h-6 bg-success-500 rounded-full flex-shrink-0 mt-1 mr-3 sm:mr-4 group-hover:scale-110 transition-transform"
						></div>
						<div>
							<h3 class="font-semibold text-success-900 text-base sm:text-lg mb-1">
								Modern UI Components
							</h3>
							<p class="text-sm sm:text-base text-success-600">
								Reusable UI components with Skeleton UI, featuring accessibility support and
								excellent TypeScript integration.
							</p>
						</div>
					</div>
					<div class="flex items-start group">
						<div
							class="w-5 h-5 sm:w-6 sm:h-6 bg-warning-500 rounded-full flex-shrink-0 mt-1 mr-3 sm:mr-4 group-hover:scale-110 transition-transform"
						></div>
						<div>
							<h3 class="font-semibold text-warning-900 text-base sm:text-lg mb-1">
								Efficient Package Management
							</h3>
							<p class="text-sm sm:text-base text-warning-600">
								pnpm's symlink-based approach saves disk space and ensures consistent installations.
							</p>
						</div>
					</div>
					<div class="flex items-start group">
						<div
							class="w-5 h-5 sm:w-6 sm:h-6 bg-error-500 rounded-full flex-shrink-0 mt-1 mr-3 sm:mr-4 group-hover:scale-110 transition-transform"
						></div>
						<div>
							<h3 class="font-semibold text-error-900 text-base sm:text-lg mb-1">
								Developer Experience
							</h3>
							<p class="text-sm sm:text-base text-error-600">
								Hot reloading, linting, formatting, and testing setup out of the box.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Getting Started Section -->
		<section
			class="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg p-6 sm:p-8 border border-primary-200"
		>
			<h2 class="text-2xl sm:text-3xl font-bold text-primary-900 mb-4 sm:mb-6 text-center">
				Getting Started
			</h2>
			<div class="max-w-4xl mx-auto">
				<div class="bg-primary-900 rounded-lg p-3 sm:p-4 mb-4 overflow-x-auto">
					<code class="text-primary-50 text-xs sm:text-sm">
						# Install pnpm (if not already installed)<br />
						curl -fsSL https://get.pnpm.io/install.sh | sh<br /><br />
						# Install dependencies<br />
						pnpm install<br /><br />
						# Start development server<br />
						## All apps<br />
						pnpm dev<br /><br />
						## Docs app<br />
						pnpm dev --filter=docs<br /><br />
						## Web app<br />
						pnpm dev --filter=web<br /><br />
					</code>
				</div>
				<div class="space-y-2 sm:space-y-3">
					<p class="text-sm sm:text-base text-primary-600 text-left">
						This template provides a solid foundation for building scalable applications with modern
						web technologies.
					</p>
					<p class="text-sm sm:text-base text-primary-600 text-left">
						Please consider leaving a star on the <a
							href="https://github.com/adidoesnt/monorepo-template"
							class="text-primary-600 underline hover:text-primary-700 transition-colors"
							>GitHub repository</a
						> if you find this template useful.
					</p>
				</div>
			</div>
		</section>
	</div>
</main>
