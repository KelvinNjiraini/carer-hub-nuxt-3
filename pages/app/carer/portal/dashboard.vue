<script setup lang="ts">
import { type JobItem as JobType } from '~/types/JobItem';
definePageMeta({
    layout: 'carer',
});

const dummyJobs: JobType[] = [
    {
        id: 1,
        category: 'adult-day-care',
        title: 'Adult DayCare',
        employer: 'Joms Day Care',
        createdAt: '20-12-2023',
        no_of_applicants: 32,
        status: 'open',
        employment_type: 'contract',
        img_url:
            'https://images.pexels.com/photos/9740571/pexels-photo-9740571.jpeg?auto=compress&cs=tinysrgb&w=600',
        location: 'Sydney, Australia',
    },
    {
        id: 2,
        category: 'adult-day-care',
        title: 'Adult DayCare',
        employer: 'Joms Day Care',
        createdAt: '20-12-2023',
        no_of_applicants: 32,
        status: 'open',
        employment_type: 'full-time',
        img_url:
            'https://images.pexels.com/photos/5800229/pexels-photo-5800229.jpeg?auto=compress&cs=tinysrgb&w=600',
        location: 'Nairobi, Kenya',
    },
    {
        id: 3,
        category: 'adult-day-care',
        title: 'Adult DayCare',
        employer: 'Joms Day Care',
        createdAt: '20-12-2023',
        no_of_applicants: 32,
        status: 'open',
        employment_type: 'contract',
        img_url:
            'https://images.pexels.com/photos/10142683/pexels-photo-10142683.jpeg?auto=compress&cs=tinysrgb&w=600',
        location: 'London, United Kingdom',
    },
    {
        id: 4,
        category: 'adult-day-care',
        title: 'Adult DayCare',
        employer: 'Joms Day Care',
        createdAt: '20-12-2023',
        no_of_applicants: 32,
        status: 'open',
        employment_type: 'full-time',
        img_url:
            'https://images.pexels.com/photos/7260948/pexels-photo-7260948.jpeg?auto=compress&cs=tinysrgb&w=600',
        location: 'Newcastle, UK',
    },
    {
        id: 5,
        category: 'adult-day-care',
        title: 'Adult DayCare',
        employer: 'Joms Day Care',
        createdAt: '20-12-2023',
        no_of_applicants: 32,
        status: 'open',
        employment_type: 'contract',
        img_url:
            'https://images.pexels.com/photos/9973155/pexels-photo-9973155.jpeg?auto=compress&cs=tinysrgb&w=600',
        location: 'Cardiff, Wales',
    },
];
</script>
<template>
    <div class="w-full space-y-5">
        <div class="">
            <span
                >Showing results for
                <strong>{{ dummyJobs.length }}</strong> jobs</span
            >
        </div>
        <div
            v-for="job in dummyJobs"
            :key="job.id"
            class="flex flex-col w-full space-y-4"
        >
            <JobItem :job-data="job" :is-saved="false" />
        </div>
    </div>
</template>
