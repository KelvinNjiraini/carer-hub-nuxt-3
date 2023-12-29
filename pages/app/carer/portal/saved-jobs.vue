<script setup lang="ts">
import type { JobItem as JobType } from '~/types/JobItem';
definePageMeta({
    layout: 'carer',
});

const dummyJobs: JobType[] = [
    {
        id: 10,
        category: 'assisted-caregiver',
        title: 'Assisted CareGiver',
        employer: 'Davidson Carers',
        createdAt: '20-12-2023',
        no_of_applicants: 12,
        status: 'open',
        employment_type: 'contract',
        img_url:
            'https://images.pexels.com/photos/9740571/pexels-photo-9740571.jpeg?auto=compress&cs=tinysrgb&w=600',
        location: 'Sydney, Australia',
    },

    {
        id: 8,
        category: 'respite-caregiver',
        title: 'Respite CareGiver',
        employer: 'Respite Carers central',
        createdAt: '20-12-2023',
        no_of_applicants: 7,
        status: 'open',
        employment_type: 'full-time',
        img_url:
            'https://images.pexels.com/photos/10142683/pexels-photo-10142683.jpeg?auto=compress&cs=tinysrgb&w=600',
        location: 'London, United Kingdom',
    },
    {
        id: 12,
        category: 'assisted-living',
        title: 'Assisted Living CareGiver',
        employer: 'Assistance Capital',
        createdAt: '20-12-2023',
        no_of_applicants: 21,
        status: 'open',
        employment_type: 'contract',
        img_url:
            'https://images.pexels.com/photos/9973155/pexels-photo-9973155.jpeg?auto=compress&cs=tinysrgb&w=600',
        location: 'Cardiff, Wales',
    },
];
</script>
<template>
    <div class="flex flex-col w-full space-y-4">
        <div class="">
            <span
                >You have <strong>{{ `${dummyJobs.length} ` }}</strong
                >saved jobs</span
            >
        </div>
        <div
            v-for="job in dummyJobs"
            :key="job.id"
            class="flex w-full flex-col"
        >
            <JobItem :job-data="job" :is-saved="true" />
        </div>
    </div>
</template>
