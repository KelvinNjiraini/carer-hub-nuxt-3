<script setup lang="ts">
definePageMeta({
    layout: 'carer',
});
const notifications = [
    {
        id: 1,
        message:
            'You have successfully applied to Jobot care givers association for the Chief assistant position',
        isRead: false,
    },
    {
        id: 2,
        message:
            'You have successfully applied to Jobot care givers association for the Chief assistant position',
        isRead: true,
    },
    {
        id: 3,
        message:
            'You have successfully applied to Jobot care givers association for the Chief assistant position',
        isRead: false,
    },
    {
        id: 4,
        message:
            'You have successfully applied to Jobot care givers association for the Chief assistant position',
        isRead: false,
    },
    {
        id: 5,
        message:
            'You have successfully applied to Jobot care givers association for the Chief assistant position. You have successfully applied to Jobot care givers association for the Chief assistant position. You have successfully applied to Jobot care ',
        isRead: true,
    },
];
</script>
<template>
    <div class="flex flex-col">
        <p class="text-lg mb-4 text-slate-800">
            You have {{ notifications.length }} total messages
        </p>
        <div
            v-for="notif in notifications"
            :key="notif.id"
            class="flex space-x-2 items-start"
        >
            <div>
                <Icon
                    :name="
                        notif.isRead
                            ? 'basil:envelope-open-outline'
                            : 'basil:envelope-solid'
                    "
                    class="w-8 h-8"
                    :class="notif.isRead ? 'text-gray-500' : 'text-slate-800'"
                />
            </div>
            <div>
                <p
                    :class="
                        notif.isRead
                            ? 'text-gray-500'
                            : 'text-slate-800 font-semibold'
                    "
                >
                    {{ notif.message }}
                </p>
            </div>
        </div>
    </div>
</template>
