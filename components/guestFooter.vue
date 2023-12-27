<template>
    <footer class="flex justify-between py-5 px-7 bg-slate-700">
        <div class="flex flex-col space-y-4">
            <nuxt-link to="/">
                <NuxtImg
                    src="carer-hub-high-resolution-logo-transparent.svg"
                    class="h-[2rem]"
                />
            </nuxt-link>
            <p class="max-w-sm text-white text-sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam,
                molestiae? Aspernatur, exercitationem ex? Repellat tenetur ad
                maiores aut, deserunt modi asperiores ipsum voluptatum natus
                perferendis? Eos itaque adipisci non praesentium.
            </p>
        </div>
        <div>
            <h2 class="font-semibold text-white">Quick links</h2>
            <div>
                <nuxt-link
                    to="/app/carer/login"
                    class="flex space-x-1 items-center text-blue-500 hover:text-blue-500/70"
                >
                    <span class="capitalize">Carer register</span>
                    <Icon
                        name="material-symbols-light:arrow-circle-right-outline-rounded"
                        size="2rem"
                    />
                </nuxt-link>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
//
</script>
