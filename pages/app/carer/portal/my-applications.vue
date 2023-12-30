<script lang="ts" setup>
import type { ColumnDef } from '@tanstack/vue-table';
import { type JobItem } from '~/types/JobItem';
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
type ApplicationItem = Omit<
    JobItem,
    'no_of_applicants' | 'img_url' | 'createdAt'
>;

const columns: ColumnDef<ApplicationItem>[] = [
    {
        accessorKey: 'id',
        header: 'ID',
    },
    {
        accessorKey: 'category',
        header: 'Category',
    },
    {
        accessorKey: 'title',
        header: 'Title',
    },
    {
        accessorKey: 'employer',
        header: 'Employer',
    },
    {
        accessorKey: 'employment_type',
        header: 'Employment Type',
    },
    {
        accessorKey: 'location',
        header: 'Location',
    },
    {
        accessorKey: 'status',
        header: 'Status',
    },
];

const data: ApplicationItem[] = [
    {
        id: 1,
        category: 'adult-day-care',
        title: 'Adult DayCare',
        employer: 'Joms Day Care',
        status: 'open',
        employment_type: 'contract',
        location: 'Sydney, Australia',
    },
    {
        id: 2,
        category: 'adult-day-care',
        title: 'Adult DayCare',
        employer: 'Joms Day Care',
        status: 'open',
        employment_type: 'full-time',
        location: 'Nairobi, Kenya',
    },
    {
        id: 3,
        category: 'adult-day-care',
        title: 'Adult DayCare',
        employer: 'Joms Day Care',
        status: 'open',
        employment_type: 'contract',
        location: 'London, United Kingdom',
    },
    {
        id: 4,
        category: 'adult-day-care',
        title: 'Adult DayCare',
        employer: 'Joms Day Care',

        status: 'open',
        employment_type: 'full-time',

        location: 'Newcastle, UK',
    },
    {
        id: 5,
        category: 'adult-day-care',
        title: 'Adult DayCare',
        employer: 'Joms Day Care',
        status: 'open',
        employment_type: 'contract',
        location: 'Cardiff, Wales',
    },
];

definePageMeta({
    layout: 'carer',
});
</script>
<template>
    <div class="container py-10 mx-auto">
        <DataTable :columns="columns" :data="data" />
    </div>
</template>
