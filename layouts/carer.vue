<script setup lang="ts">
const sidebarOpen = ref<boolean>(false);
const userMenuOpen = ref<boolean>(false);
const currentPath = ref<string>('');
const pages = [
    { path: 'dashboard', icon: 'ant-design:home-outlined', name: 'Dashboard' },
    {
        path: 'my-applications',
        icon: 'ph:files-duotone',
        name: 'My Applications',
    },
    { path: 'my-account', icon: 'carbon:account', name: 'My Account' },
];

watchEffect(() => {
    const route = useRoute();
    const routeArr = route.fullPath.split('/');
    currentPath.value = routeArr[routeArr.length - 1];
});
</script>
<template>
    <div>
        <!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
        <div
            class="relative z-40 md:hidden"
            role="dialog"
            aria-modal="true"
            v-if="sidebarOpen"
        >
            <div
                class="fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity ease-linear duration-300"
                :class="sidebarOpen ? 'opacity-100' : 'opacity-0'"
                @click="sidebarOpen = !sidebarOpen"
            ></div>

            <div class="fixed inset-0 flex">
                <div
                    class="relative flex w-full max-w-xs flex-1 flex-col bg-slate-700 pt-5 pb-4 transition-all ease-in-out duration-300 transform"
                    :class="sidebarOpen ? 'translate-x-0' : '-translate-x-full'"
                >
                    <div
                        class="absolute top-0 right-0 -mr-12 pt-2 ease-in-out duration-300"
                        :class="sidebarOpen ? 'opacity-100' : 'opacity-0'"
                    >
                        <button
                            type="button"
                            class="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            @click="sidebarOpen = !sidebarOpen"
                        >
                            <span class="sr-only">Close sidebar</span>
                            <!-- Heroicon name: outline/x-mark -->
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
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>

                    <div class="flex flex-shrink-0 items-center px-4">
                        <NuxtImg
                            class="h-8 w-auto"
                            src="carer-hub-high-resolution-logo-transparent.svg"
                            alt="Carer Hub Logo"
                        />
                    </div>
                    <div class="mt-5 h-0 flex-1 overflow-y-auto">
                        <nav
                            class="space-y-1 px-2"
                            v-for="page in pages"
                            :key="page.path"
                        >
                            <!-- Current: "bg-indigo-800 text-white", Default: "text-indigo-100 hover:bg-indigo-600" -->

                            <nuxt-link
                                :to="`/app/carer/portal/${page.path}`"
                                class="text-slate-100 hover:bg-slate-600 group flex items-center space-x-2 px-2 py-2 text-base font-medium rounded-md"
                                @click="sidebarOpen = !sidebarOpen"
                            >
                                <!-- Heroicon name: outline/home -->
                                <Icon :name="page.icon" class="w-7 h-7" />
                                <span>{{ page.name }}</span>
                            </nuxt-link>
                        </nav>
                    </div>
                </div>

                <div class="w-14 flex-shrink-0" aria-hidden="true">
                    <!-- Dummy element to force sidebar to shrink to fit close icon -->
                </div>
            </div>
        </div>

        <!-- Static sidebar for desktop -->
        <div class="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
            <!-- Sidebar component, swap this element with another sidebar if you like -->
            <div
                class="flex flex-grow flex-col overflow-y-auto bg-slate-700 pt-5"
            >
                <div class="flex flex-shrink-0 items-center px-4">
                    <NuxtImg
                        class="h-8 w-auto"
                        src="carer-hub-high-resolution-logo-transparent.svg"
                        alt="Carer Hub Logo"
                    />
                </div>
                <div class="mt-5 flex flex-1 flex-col">
                    <nav
                        class="space-y-1 px-2"
                        v-for="page in pages"
                        :key="page.path"
                    >
                        <!-- Current: "bg-indigo-800 text-white", Default: "text-indigo-100 hover:bg-indigo-600" -->

                        <nuxt-link
                            :to="`/app/carer/portal/${page.path}`"
                            class="text-slate-100 hover:bg-slate-600 group flex items-center px-2 py-2 space-x-2 text-base font-medium rounded-md"
                        >
                            <!-- Heroicon name: outline/home -->
                            <Icon :name="page.icon" class="w-7 h-7" />
                            <span>{{ page.name }}</span>
                        </nuxt-link>
                    </nav>
                </div>
            </div>
        </div>
        <div class="flex flex-1 flex-col md:pl-64">
            <div
                class="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow"
            >
                <button
                    type="button"
                    class="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-500 md:hidden"
                    @click="sidebarOpen = !sidebarOpen"
                >
                    <span class="sr-only">Open sidebar</span>
                    <!-- Heroicon name: outline/bars-3-bottom-left -->
                    <svg
                        class="h-6 w-6"
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
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                        />
                    </svg>
                </button>
                <div class="flex flex-1 justify-end px-4">
                    <!-- <div class="flex flex-1">
                        <form class="flex w-full md:ml-0">
                            <label for="search-field" class="sr-only"
                                >Search</label
                            >
                            <div
                                class="relative w-full text-gray-400 focus-within:text-gray-600"
                            >
                                <div
                                    class="pointer-events-none absolute inset-y-0 left-0 flex items-center"
                                >
                                    
                                    <svg
                                        class="h-5 w-5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <input
                                    id="search-field"
                                    class="block h-full w-full border-transparent py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm"
                                    placeholder="Search"
                                    type="search"
                                    name="search"
                                />
                            </div>
                        </form>
                    </div> -->
                    <div class="flex items-center md:ml-6">
                        <nuxt-link
                            type="button"
                            class="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
                            to="/app/carer/portal/my-notifications"
                        >
                            <span class="sr-only">View notifications</span>
                            <!-- Heroicon name: outline/bell -->
                            <svg
                                class="h-6 w-6"
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
                                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                                />
                            </svg>
                        </nuxt-link>

                        <!-- Profile dropdown -->
                        <div class="relative ml-3">
                            <div>
                                <button
                                    type="button"
                                    class="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
                                    id="user-menu-button"
                                    aria-expanded="false"
                                    aria-haspopup="true"
                                    @click="userMenuOpen = !userMenuOpen"
                                >
                                    <span class="sr-only">Open user menu</span>
                                    <img
                                        class="h-8 w-8 rounded-full"
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt=""
                                    />
                                </button>
                            </div>

                            <div
                                class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition ease-out duration-100"
                                :class="
                                    userMenuOpen
                                        ? 'transform opacity-100 scale-100'
                                        : 'transform opacity-0 scale-95'
                                "
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="user-menu-button"
                                tabindex="-1"
                                v-if="userMenuOpen"
                            >
                                <!-- Active: "bg-gray-100", Not Active: "" -->
                                <nuxt-link
                                    to="/app/carer/portal/profile"
                                    class="px-4 py-2 text-sm text-slate-700 flex items-center space-x-2"
                                    role="menuitem"
                                    tabindex="-1"
                                    id="user-menu-item-0"
                                    @click="userMenuOpen = !userMenuOpen"
                                >
                                    <Icon
                                        name="iconamoon:profile-circle-bold"
                                        class="w-6 h-6"
                                    />
                                    <span>My Profile</span></nuxt-link
                                >

                                <nuxt-link
                                    to="/app/carer/portal/saved-jobs"
                                    class="px-4 py-2 text-sm text-slate-700 flex items-center space-x-2"
                                    role="menuitem"
                                    tabindex="-1"
                                    id="user-menu-item-0"
                                    @click="userMenuOpen = !userMenuOpen"
                                >
                                    <Icon
                                        name="bi:bookmark-fill"
                                        class="w-5 h-5"
                                    />
                                    <span>Saved Jobs</span></nuxt-link
                                >

                                <!-- <nuxt-link
                                    to="/app/carer/portal/settings"
                                    class="block px-4 py-2 text-sm text-gray-700"
                                    role="menuitem"
                                    tabindex="-1"
                                    id="user-menu-item-1"
                                    >Settings</nuxt-link
                                > -->

                                <button
                                    class="px-4 py-2 text-sm text-red-700 flex items-center space-x-2"
                                    role="menuitem"
                                    tabindex="-1"
                                    id="user-menu-item-2"
                                >
                                    <Icon
                                        name="humbleicons:logout"
                                        class="w-6 h-6"
                                    />
                                    <span>Sign out</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <main>
                <div class="py-6">
                    <div class="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                        <h1
                            class="text-2xl font-semibold text-gray-900 capitalize"
                        >
                            {{ currentPath }}
                        </h1>
                    </div>
                    <div class="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                        <!-- Replace with your content -->
                        <div class="py-4">
                            <slot />
                        </div>
                        <!-- /End replace -->
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<style scoped>
.router-link-active {
    @apply bg-slate-800 text-white;
}
</style>
