<template>
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
