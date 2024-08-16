<template>
	<div class="dropdown mb-72">
		<div tabindex="0" role="button" class="btn m-1">
			Theme
			<svg
				width="12px"
				height="12px"
				class="inline-block h-2 w-2 fill-current opacity-60"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 2048 2048"
			>
				<path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
			</svg>
		</div>
		<ul tabindex="0" class="dropdown-content bg-base-300 rounded-box z-[1] w-52 p-2 shadow-2xl">
			<li>
				<input
					type="radio"
					name="theme-dropdown"
					class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
					aria-label="Default"
					value="default"
				/>
			</li>
			<li v-for="theme of themes">
				<input
					type="radio"
					name="theme-dropdown"
					class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
					:aria-label="theme"
					:value="theme"
				/>
			</li>
		</ul>
	</div>
	<div class="w-full justify-center flex pt-20">
		<details class="dropdown">
			<summary class="btn m-1">open or close</summary>
			<ul class="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
				<li v-for="route of routes">
					<nuxt-link :to="route.path">{{ route.name }}</nuxt-link>
				</li>
			</ul>
		</details>
	</div>
	<div class="w-full justify-center items-center flex pt-20 flex-col"><NuxtPage /></div>
</template>
<script setup lang="ts">
const router = useRouter();
const routes = router.getRoutes();
</script>
