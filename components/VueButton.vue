<script setup>
	defineProps({
		href: { type: String, default: null },
		target: { type: String, default: '_blank' },
		icon: { type: String, default: null },
		iconColor: { type: String, default: 'text-black' }
	});
</script>

<template>
	<a
		:href="href"
		:target="target"
		class="inline-flex items-center rounded-md border border-black border-2 bg-white px-3.5 py-1.5 text-sm font-medium text-black shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400"
		rel="noopener nofollow"
	>
		<VueIcon v-if="icon" :name="icon" :class="[iconColor]" class="mr-2" />

		<slot />
	</a>
</template>
