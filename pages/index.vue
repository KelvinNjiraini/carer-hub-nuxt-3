<template>
    <main>
        <section id="hero" class="relative z-0">
            <!-- Hero Container -->
            <div
                class="container flex flex-col-reverse mx-auto p-6 lg:flex-row"
            >
                <!-- Content Container -->
                <div
                    class="flex flex-col space-y-10 mb-44 lg:mt-16 lg:w-1/2 xl:mb-52 pb-10 sm:pb-0"
                >
                    <h1
                        class="text-3xl md:text-5xl text-slate-700 font-bold text-center lg:text-6xl lg:max-w-md lg:text-left"
                    >
                        More than just Social work!
                    </h1>
                    <p
                        class="text-xl md:text-2xl text-center text-color-blue lg:max-w-md lg:text-left"
                    >
                        Experience Caring Connections while enriching lives
                    </p>
                    <div
                        class="mx-auto lg:mx-0 space-x-4 space-y-5 sm:space-y-0 flex flex-col sm:flex-row items-center"
                    >
                        <nuxt-link
                            to="/app/employer/signup"
                            class="text-white hover:text-green-700 px-5 py-2 inline-block rounded-lg bg-green-700 border border-green-700 hover:bg-transparent text-center"
                        >
                            Sign up as Employer
                        </nuxt-link>

                        <nuxt-link
                            to="/app/carer/signup"
                            class="text-white hover:text-blue-500 text-sm sm:text-base inline-block px-5 py-2 rounded-lg bg-blue-500 border border-blue-500 hover:bg-transparent text-center"
                        >
                            Sign up as Carer
                        </nuxt-link>
                    </div>
                </div>

                <!-- Image -->
                <div class="mb-24 mx-auto md:w-180 lg:mb-0 lg:w-1/2">
                    <NuxtImg src="hero-bg.svg" alt="hero image" />
                </div>
            </div>
        </section>
        <section class="p-8 md:p-20">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mx-auto max-w-2xl lg:text-center">
                    <h2
                        class="text-lg font-semibold leading-8 tracking-tight text-slate-700"
                    >
                        Bank efficiently
                    </h2>
                    <p
                        class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
                    >
                        Everything you need to fast and convenient care
                    </p>
                    <p class="mt-6 text-lg leading-8 text-gray-600">
                        Important features in Carer Hub to remove the hassle
                        from your care experience.
                    </p>
                </div>
                <div
                    class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl"
                >
                    <dl
                        class="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
                    >
                        <div class="relative pl-16">
                            <dt
                                class="text-base font-semibold leading-7 text-gray-900"
                            >
                                <div
                                    class="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-color-blue"
                                >
                                    <!-- Heroicon name: outline/cloud-arrow-up -->
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="w-6 h-6 text-white"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </div>
                                24/7 Access
                            </dt>
                            <dd class="mt-2 text-base leading-7 text-gray-600">
                                You can access your bank account at any time of
                                the day, any day of the week without any hassle
                                whatsoever!
                            </dd>
                        </div>

                        <div class="relative pl-16">
                            <dt
                                class="text-base font-semibold leading-7 text-gray-900"
                            >
                                <div
                                    class="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-color-blue"
                                >
                                    <!-- Heroicon name: outline/lock-closed -->
                                    <svg
                                        class="h-6 w-6 text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                                        />
                                    </svg>
                                </div>
                                Secure Transactions
                            </dt>
                            <dd class="mt-2 text-base leading-7 text-gray-600">
                                Transactions are guaranteed to be encrypted,
                                making the online system secure and reliable
                            </dd>
                        </div>

                        <div class="relative pl-16">
                            <dt
                                class="text-base font-semibold leading-7 text-gray-900"
                            >
                                <div
                                    class="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-color-blue"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="w-6 h-6 text-white"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                                        />
                                    </svg>
                                </div>
                                Mobile Deposit
                            </dt>
                            <dd class="mt-2 text-base leading-7 text-gray-600">
                                No need to go to the bank in order to make a
                                bank deposit. Just do it from the comfort of
                                your home instead!
                            </dd>
                        </div>

                        <div class="relative pl-16">
                            <dt
                                class="text-base font-semibold leading-7 text-gray-900"
                            >
                                <div
                                    class="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-color-blue"
                                >
                                    <!-- Heroicon name: outline/finger-print -->
                                    <svg
                                        class="h-6 w-6 text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33"
                                        />
                                    </svg>
                                </div>
                                Instant Alerts
                            </dt>
                            <dd class="mt-2 text-base leading-7 text-gray-600">
                                Arcu egestas dolor vel iaculis in ipsum mauris.
                                Tincidunt mattis aliquet hac quis. Id hac
                                maecenas ac donec pharetra eget.
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
//
</script>
