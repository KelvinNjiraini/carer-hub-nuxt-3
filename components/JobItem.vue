<script setup lang="ts">
import { type JobItem } from '~/types/JobItem';
const props = defineProps({
    jobData: Object,
});

const { jobData } = props as { jobData: JobItem };
</script>
<template>
    <div
        class="max-w-xl text-white p-6 rounded-md inline-block bg-gradient-to-tr from-color-blue to-cyan-500 mb-4 relative"
    >
        <div class="flex flex-col space-y-3 md:flex-row md:items-center">
            <Icon
                name="bi:bookmark-fill"
                class="w-6 h-6 text-gray-300 absolute top-3 right-2 inline-block cursor-pointer hover:text-gray-300/70"
            />
            <!-- img -->
            <NuxtImg :src="jobData.img_url" class="w-16 h-16 rounded-full" />
            <!-- start of container -->
            <div class="md:ml-4 mr-auto">
                <!-- name of company -->
                <span>{{ jobData.employer }}</span>
                <!-- name of role -->
                <h4>{{ jobData.title }}</h4>
                <!-- contract/fulltime, location, date posted  -->
                <div>
                    <span>
                        {{ jobData.employment_type }} | {{ jobData.location }} |
                        {{ jobData.createdAt }}
                    </span>
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
