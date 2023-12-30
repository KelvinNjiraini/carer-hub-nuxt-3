<script setup lang="ts">
definePageMeta({
    layout: 'carer',
});
</script>
<template>
    <div class="w-full flex flex-col space-y-4">
        <div class="flex flex-col space-y-1">
            <h3 class="text-xl font-semibold text-slate-800">My Details</h3>
            <span class="text-slate-600"
                >Make changes to your personal details right here</span
            >
        </div>
        <form class="flex flex-col space-y-3 w-full">
            <div class="flex flex-col space-y-1 max-w-lg">
                <label for="firstName" class="text-slate-800">First name</label>
                <input
                    type="text"
                    id="firstName"
                    placeholder="John"
                    class="focus:outline-none border border-slate-500 focus:border-2 focus:border-slate-500 p-2 rounded-md"
                />
            </div>
            <div class="flex flex-col space-y-1 max-w-lg">
                <label for="lastName" class="text-slate-800">Last name</label>
                <input
                    type="text"
                    id="lastName"
                    placeholder="Doe"
                    class="focus:outline-none border border-slate-500 focus:border-2 focus:border-slate-500 p-2 rounded-md"
                />
            </div>

            <div class="flex flex-col space-y-1 max-w-lg">
                <label for="phoneNumber" class="text-slate-800"
                    >Phone Number</label
                >
                <input
                    type="text"
                    placeholder="+45 593036739"
                    id="phoneNumber"
                    class="focus:outline-none border border-slate-500 focus:border-2 focus:border-slate-500 p-2 rounded-md"
                />
            </div>

            <div>
                <button
                    class="bg-blue-500 hover:bg-blue-500/80 px-4 py-2 rounded-md text-white"
                >
                    Save changes
                </button>
            </div>
        </form>
        <form class="flex flex-col space-y-3 w-full mt-5">
            <h3 class="text-xl font-semibold text-slate-800">Password</h3>
            <div class="flex flex-col space-y-1 max-w-lg">
                <label for="password" class="text-slate-800">Password</label>
                <input
                    type="password"
                    id="password"
                    class="focus:outline-none border border-slate-500 focus:border-2 focus:border-slate-500 p-2 rounded-md"
                />
            </div>
            <div class="flex flex-col space-y-1 max-w-lg">
                <label for="confirmPassword" class="text-slate-800"
                    >Confirm Password</label
                >
                <input
                    type="password"
                    id="confirmPassword"
                    class="focus:outline-none border border-slate-500 focus:border-2 focus:border-slate-500 p-2 rounded-md"
                />
            </div>
            <div>
                <button
                    class="bg-color-blue hover:bg-color-blue/80 px-4 py-2 rounded-md text-white"
                >
                    Change Password
                </button>
            </div>
        </form>
    </div>
</template>
