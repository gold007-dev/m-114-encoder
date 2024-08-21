<template>
	<div class="navbar bg-base-100">
		<div class="navbar-start">
			<div class="dropdown">
				<div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
					</svg>
				</div>
				<ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
					<li v-for="route of routes">
						<nuxt-link :to="route.path">{{ route.name }}</nuxt-link>
					</li>
				</ul>
			</div>
			<a class="btn btn-ghost text-xl">daisyUI</a>
		</div>
		<div class="navbar-center hidden lg:flex">
			<ul class="menu menu-horizontal px-1">
				<li v-for="route of routes">
					<nuxt-link :to="route.path">{{ route.name }}</nuxt-link>
				</li>
			</ul>
		</div>
		<div class="navbar-end">
			<div class="dropdown">
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
				<ul tabindex="0" class="dropdown-content bg-base-300 rounded-box z-[1] w-52 p-2 shadow-2xl right-0">
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
		</div>
	</div>
	<div class="w-full justify-center items-center flex pt-20 flex-col"><NuxtPage /></div>
</template>
<script setup lang="ts">
const router = useRouter();
const routes = router.getRoutes().filter(r=>!r.name?.toString().toLocaleLowerCase().includes("ignore"));
</script>
