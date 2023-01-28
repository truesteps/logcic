<script setup>
	console.log('cic');
</script>

<template>
	<NuxtLayout>
		<h2 class="text-4xl font-bold tracking-tight text-white">
			<span class="block">
				<img
					class="inline-block h-[120px] w-[120px] rounded-full border border-4"
					src="~/assets/img/avatar.jpg"
					alt=""
				/>
			</span>

			<span class="block mt-4">
				Patrik Jánosdeák
			</span>

			<h3 class="text-2xl font-bold tracking-tight text-white">
				<div class="flex items-center">
					<span class="px-2 text-3xl">
						👉
					</span>

					<span>
						Full-stack Developer
					</span>

					<span class="px-2 text-3xl">
						👈
					</span>
				</div>
			</h3>
		</h2>

		<p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
			Currently hacking marketing asset generation at

			<a
				class="underline text-green-400"
				href="https://app.imagelance.com"
				target="_blank"
				rel="noopener nofollow"
				title="Imagelance website link"
			>
				https://app.imagelance.com
			</a>
		</p>

		<div class="mt-6 flex items-center justify-center gap-x-4">
			<VueButton
				href="https://twitter.com/stepsovich"
				icon="bi-twitter"
				icon-color="text-[#00acee]"
				title="My Twitter profile"
			>
				Twitter
			</VueButton>

			<VueButton
				href="https://www.linkedin.com/in/patrik-janosdeak/"
				icon="bi-linkedin"
				icon-color="text-[#0072b1]"
				title="My Linkedin profile"
			>
				Linked in
			</VueButton>

			<VueButton
				href="https://github.com/truesteps"
				icon="bi-github"
				icon-color="text-black"
				title="My Github profile"
			>
				Github
			</VueButton>
		</div>
	</NuxtLayout>
</template>
