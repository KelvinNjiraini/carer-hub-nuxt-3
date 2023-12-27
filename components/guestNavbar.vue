<script lang="ts" setup></script>

<template>
    <nav class="py-5 px-7 flex justify-between items-center">
        <nuxt-link to="/">
            <NuxtImg
                src="carer-hub-high-resolution-logo-transparent.svg"
                class="h-[3rem]"
            />
        </nuxt-link>
        <ul class="flex items-center space-x-4 self-stretch">
            <li>
                <nuxt-link
                    to="/guest/about"
                    class="flex space-x-1 items-center text-blue-500 hover:text-blue-500/70"
                >
                    <span class="capitalize">About us</span>
                    <Icon
                        name="material-symbols-light:arrow-circle-right-outline-rounded"
                        size="2rem"
                    />
                </nuxt-link>
            </li>
            <li>
                <nuxt-link
                    to="/guest/news"
                    class="flex space-x-1 items-center text-blue-500 hover:text-blue-500/70"
                >
                    <span class="capitalize">News</span>
                    <Icon
                        name="material-symbols-light:arrow-circle-right-outline-rounded"
                        size="2rem"
                    />
                </nuxt-link>
            </li>
            <li>
                <nuxt-link
                    to="/guest/register-check"
                    class="flex space-x-1 items-center text-blue-500 hover:text-blue-500/70"
                >
                    <span class="capitalize">Check our register</span>
                    <Icon
                        name="material-symbols-light:arrow-circle-right-outline-rounded"
                        size="2rem"
                    />
                </nuxt-link>
            </li>
        </ul>
    </nav>
</template>
