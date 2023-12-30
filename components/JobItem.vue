<script setup lang="ts">
import { type JobItem } from '~/types/JobItem';
import { ref } from 'vue';
const props = defineProps<{
    jobData: JobItem;
    isSaved: boolean;
}>();
const { jobData, isSaved } = props as { jobData: JobItem; isSaved: boolean };
</script>
<template>
    <div
        class="max-w-2xl text-white p-4 rounded-md inline-block bg-gradient-to-tr from-blue-500 to-cyan-500 relative"
    >
        <div class="flex flex-col space-y-3 md:flex-row md:items-center">
            <Icon
                name="bi:bookmark-fill"
                class="w-6 h-6 absolute top-3 right-2 inline-block cursor-pointer"
                :class="
                    isSaved
                        ? 'text-red-400 hover:text-red-400/80 '
                        : 'text-gray-300 hover:text-gray-300/70'
                "
            />
            <!-- img -->
            <NuxtImg :src="jobData.img_url" class="w-16 h-16 rounded-full" />
            <!-- start of container -->
            <div class="md:ml-4 mr-auto">
                <!-- name of company -->
                <span class="font-semibold uppercase text-sm">{{
                    jobData.employer
                }}</span>
                <!-- name of role -->
                <h4 class="text-2xl font-sembold text-slate-900 mb-2 sm:mb-0">
                    {{ jobData.title }}
                </h4>
                <!-- contract/fulltime, location, date posted  -->
                <div class="flex space-x-1 sm:space-x-3 items-center">
                    <div class="flex items-center space-x-1">
                        <Icon
                            name="ion:briefcase"
                            class="w-4 h-4 text-inherit"
                        />
                        <span class="capitalize text-xs sm:text-base">
                            {{ jobData.employment_type }}
                        </span>
                    </div>
                    <div class="flex items-center space-x-1">
                        <Icon
                            name="ion:location-sharp"
                            class="w-4 h-4 text-inherit"
                        />
                        <span class="capitalize text-xs sm:text-base">
                            {{ jobData.location }}
                        </span>
                    </div>
                    <div class="flex items-center space-x-1">
                        <Icon
                            name="bi:calendar-date-fill"
                            class="w-4 h-4 text-inherit"
                        />
                        <span class="capitalize text-xs sm:text-base">
                            {{ jobData.createdAt }}
                        </span>
                    </div>
                </div>
            </div>
            <!-- end of container -->
            <!-- view application btn -->
            <div>
                <button
                    class="text-white hover:text-white text-sm sm:text-base inline-block px-6 py-2 rounded-lg bg-green-500 border border-green-500 hover:border-white hover:bg-transparent text-center"
                >
                    View
                </button>
            </div>
        </div>
    </div>
</template>
