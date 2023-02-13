<script setup>
	defineProps({
		title: { type: String, required: true },
		body: { type: String, default: null },
	});
</script>

<template>
	<li class="relative text-left text-white py-1 px-2">
		<div class="flex items-center">
			<span class="h-2 w-2 rounded-full bg-green-400 mr-2" />

			<p class="truncate text-sm font-medium">{{ title }}</p>
		</div>
	</li>
</template>
