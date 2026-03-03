import { redirect } from 'next/navigation';

// Pricing page is currently disabled — redirect to homepage
export default function PricingPage() {
    redirect('/');
}
