<script lang="ts">
	let stats = {
		users: 1247,
		revenue: 45678,
		orders: 89,
		growth: 12.5
	};

	let recentActivity = [
		{ id: 1, user: 'Sarah Johnson', action: 'placed order', amount: '$299', time: '2 min ago' },
		{ id: 2, user: 'Mike Chen', action: 'completed payment', amount: '$149', time: '5 min ago' },
		{ id: 3, user: 'Emma Davis', action: 'requested refund', amount: '$89', time: '12 min ago' },
		{ id: 4, user: 'Alex Thompson', action: 'subscribed', amount: '$29/month', time: '18 min ago' }
	];

	let chartData = [
		{ month: 'Jan', sales: 12000, users: 850 },
		{ month: 'Feb', sales: 15000, users: 920 },
		{ month: 'Mar', sales: 18000, users: 1100 },
		{ month: 'Apr', sales: 22000, users: 1250 },
		{ month: 'May', sales: 25000, users: 1400 },
		{ month: 'Jun', sales: 28000, users: 1550 }
	];
</script>

<svelte:head>
	<title>Dashboard - Monorepo Template</title>
	<meta name="description" content="Mock admin dashboard built with the monorepo template" />
</svelte:head>

<main
	class="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100 w-full"
	data-theme="CustomThemeExample"
>
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
		<!-- Header -->
		<header class="mb-8">
			<div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
				<div>
					<h1 class="text-3xl sm:text-4xl font-bold text-primary-900">Mock Dashboard</h1>
					<p class="text-primary-600 mt-2">
						This is a mock dashboard built to showcase the monorepo template.
					</p>
					<p class="text-primary-600 mt-2">
						Please consider leaving a star on the
						<a
							href="https://github.com/adidoesnt/svelte-monorepo-template"
							class="text-primary-600 underline">GitHub repository</a
						>
						if you find this template useful.
					</p>
				</div>
				<div class="mt-4 sm:mt-0 flex gap-3">
					<button
						class="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
					>
						Export Data
					</button>
					<button
						class="px-4 py-2 bg-secondary-500 text-white rounded-lg hover:bg-secondary-600 transition-colors"
					>
						Settings
					</button>
				</div>
			</div>
		</header>

		<!-- Stats Cards -->
		<section class="mb-8">
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				<div class="bg-white rounded-lg p-6 shadow-lg border border-primary-200">
					<div class="flex items-center justify-between">
						<div>
							<p class="text-sm font-medium text-primary-600">Total Users</p>
							<p class="text-2xl font-bold text-primary-900">{stats.users.toLocaleString()}</p>
						</div>
						<div class="p-3 bg-primary-100 rounded-lg">
							<svg
								class="w-6 h-6 text-primary-600"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
								></path>
							</svg>
						</div>
					</div>
					<div class="mt-4 flex items-center text-sm">
						<span class="text-success-600 font-medium">+12.5%</span>
						<span class="text-primary-600 ml-2">from last month</span>
					</div>
				</div>

				<div class="bg-white rounded-lg p-6 shadow-lg border border-secondary-200">
					<div class="flex items-center justify-between">
						<div>
							<p class="text-sm font-medium text-secondary-600">Revenue</p>
							<p class="text-2xl font-bold text-secondary-900">${stats.revenue.toLocaleString()}</p>
						</div>
						<div class="p-3 bg-secondary-100 rounded-lg">
							<svg
								class="w-6 h-6 text-secondary-600"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
								></path>
							</svg>
						</div>
					</div>
					<div class="mt-4 flex items-center text-sm">
						<span class="text-success-600 font-medium">+8.2%</span>
						<span class="text-secondary-600 ml-2">from last month</span>
					</div>
				</div>

				<div class="bg-white rounded-lg p-6 shadow-lg border border-tertiary-200">
					<div class="flex items-center justify-between">
						<div>
							<p class="text-sm font-medium text-tertiary-600">Orders</p>
							<p class="text-2xl font-bold text-tertiary-900">{stats.orders}</p>
						</div>
						<div class="p-3 bg-tertiary-100 rounded-lg">
							<svg
								class="w-6 h-6 text-tertiary-600"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
								></path>
							</svg>
						</div>
					</div>
					<div class="mt-4 flex items-center text-sm">
						<span class="text-success-600 font-medium">+15.3%</span>
						<span class="text-tertiary-600 ml-2">from last month</span>
					</div>
				</div>

				<div class="bg-white rounded-lg p-6 shadow-lg border border-success-200">
					<div class="flex items-center justify-between">
						<div>
							<p class="text-sm font-medium text-success-600">Growth</p>
							<p class="text-2xl font-bold text-success-900">{stats.growth}%</p>
						</div>
						<div class="p-3 bg-success-100 rounded-lg">
							<svg
								class="w-6 h-6 text-success-600"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
								></path>
							</svg>
						</div>
					</div>
					<div class="mt-4 flex items-center text-sm">
						<span class="text-success-600 font-medium">+2.1%</span>
						<span class="text-success-600 ml-2">from last month</span>
					</div>
				</div>
			</div>
		</section>

		<!-- Charts and Activity -->
		<section class="grid grid-cols-1 lg:grid-cols-3 gap-8">
			<!-- Sales Chart -->
			<div class="lg:col-span-2 bg-white rounded-lg p-6 shadow-lg border border-warning-200">
				<h3 class="text-lg font-semibold text-warning-900 mb-4">Sales Overview</h3>
				<div class="h-64 flex items-end justify-between space-x-2">
					{#each chartData as data}
						<div class="flex-1 flex flex-col items-center">
							<div
								class="w-full bg-warning-100 rounded-t"
								style="height: {(data.sales / 28000) * 200}px"
							>
								<div
									class="w-full bg-warning-500 rounded-t"
									style="height: {(data.users / 1550) * 100}%"
								></div>
							</div>
							<p class="text-xs text-warning-600 mt-2">{data.month}</p>
						</div>
					{/each}
				</div>
				<div class="mt-4 flex justify-center space-x-6 text-sm">
					<div class="flex items-center">
						<div class="w-3 h-3 bg-warning-500 rounded mr-2"></div>
						<span class="text-warning-600">Sales</span>
					</div>
					<div class="flex items-center">
						<div class="w-3 h-3 bg-warning-300 rounded mr-2"></div>
						<span class="text-warning-600">Users</span>
					</div>
				</div>
			</div>

			<!-- Recent Activity -->
			<div class="bg-white rounded-lg p-6 shadow-lg border border-error-200">
				<h3 class="text-lg font-semibold text-error-900 mb-4">Recent Activity</h3>
				<div class="space-y-4">
					{#each recentActivity as activity}
						<div class="flex items-start space-x-3">
							<div class="w-2 h-2 bg-error-500 rounded-full mt-2"></div>
							<div class="flex-1">
								<p class="text-sm font-medium text-error-900">{activity.user}</p>
								<p class="text-xs text-error-600">{activity.action} • {activity.amount}</p>
								<p class="text-xs text-error-400">{activity.time}</p>
							</div>
						</div>
					{/each}
				</div>
				<button
					class="w-full mt-4 px-4 py-2 bg-error-500 text-white rounded-lg hover:bg-error-600 transition-colors text-sm"
				>
					View All Activity
				</button>
			</div>
		</section>

		<!-- Quick Actions -->
		<section class="mt-8">
			<h3 class="text-lg font-semibold text-primary-900 mb-4">Quick Actions</h3>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
				<button
					class="p-4 bg-white rounded-lg shadow-lg border border-primary-200 hover:shadow-xl transition-shadow"
				>
					<div class="flex items-center space-x-3">
						<div class="p-2 bg-primary-100 rounded-lg">
							<svg
								class="w-5 h-5 text-primary-600"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 6v6m0 0v6m0-6h6m-6 0H6"
								></path>
							</svg>
						</div>
						<div class="text-left">
							<p class="font-medium text-primary-900">Add User</p>
							<p class="text-xs text-primary-600">Create new account</p>
						</div>
					</div>
				</button>

				<button
					class="p-4 bg-white rounded-lg shadow-lg border border-secondary-200 hover:shadow-xl transition-shadow"
				>
					<div class="flex items-center space-x-3">
						<div class="p-2 bg-secondary-100 rounded-lg">
							<svg
								class="w-5 h-5 text-secondary-600"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
								></path>
							</svg>
						</div>
						<div class="text-left">
							<p class="font-medium text-secondary-900">Generate Report</p>
							<p class="text-xs text-secondary-600">Export data</p>
						</div>
					</div>
				</button>

				<button
					class="p-4 bg-white rounded-lg shadow-lg border border-tertiary-200 hover:shadow-xl transition-shadow"
				>
					<div class="flex items-center space-x-3">
						<div class="p-2 bg-tertiary-100 rounded-lg">
							<svg
								class="w-5 h-5 text-tertiary-600"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
								></path>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
								></path>
							</svg>
						</div>
						<div class="text-left">
							<p class="font-medium text-tertiary-900">Settings</p>
							<p class="text-xs text-tertiary-600">Configure app</p>
						</div>
					</div>
				</button>

				<button
					class="p-4 bg-white rounded-lg shadow-lg border border-success-200 hover:shadow-xl transition-shadow"
				>
					<div class="flex items-center space-x-3">
						<div class="p-2 bg-success-100 rounded-lg">
							<svg
								class="w-5 h-5 text-success-600"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
								></path>
							</svg>
						</div>
						<div class="text-left">
							<p class="font-medium text-success-900">Support</p>
							<p class="text-xs text-success-600">Get help</p>
						</div>
					</div>
				</button>
			</div>
		</section>
	</div>
</main>
