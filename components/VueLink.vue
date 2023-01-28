<script setup>
	defineProps({
		href: { type: String, default: '#' }
	});
</script>

<template>
	<a :href="href" class="underline underline-offset-2 text-green-400" :target="href !== '#' ? '_blank' : ''" rel="noopener nofollow">
		<slot />
	</a>
</template>
