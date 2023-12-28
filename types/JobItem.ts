export type JobItem = {
    id: number;
    category: string;
    title: string;
    employer: string;
    createdAt: string;
    no_of_applicants: number;
    status: 'open' | 'filled' | 'suspended';
    employment_type: 'contract' | 'full-time';
    img_url: string;
    location: string;
};
