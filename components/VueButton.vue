<script setup>
	defineProps({
		href: { type: String, default: null },
		target: { type: String, default: '_blank' },
		icon: { type: String, default: null },
		iconColor: { type: String, default: 'text-white' }
	});
</script>

<template>
	<a
		:href="href"
		:target="target"
		class="inline-flex items-center rounded-md bg-gray-900 px-3.5 py-1.5 text-sm font-medium text-white shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-white"
		rel="noopener nofollow"
	>
		<VueIcon v-if="icon" :name="icon" :class="[iconColor]" class="mr-2 max-sm:mr-0" />

		<span class="max-sm:hidden whitespace-nowrap">
			<slot />
		</span>
	</a>
</template>
