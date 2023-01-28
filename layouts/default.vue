<template>
	<div class="h-screen w-screen relative isolate overflow-hidden bg-gray-900">
		<div class="h-full py-24 px-6 sm:px-6 sm:py-32 lg:px-8">
			<div class="flex flex-col justify-center items-center text-center h-full w-full">
				<slot />
			</div>
		</div>

		<VueBackgroundGradient />
	</div>
</template>

<script>
	import VueBackgroundGradient from '~/components/VueBackgroundGradient.vue';

	export default {
		name: 'DefaultLayout',

		components: {
			VueBackgroundGradient
		}
	}
</script>
