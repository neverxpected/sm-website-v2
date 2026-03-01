import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact | Switch Media Marketing LLC",
    description:
        "Reach out to Switch Media Marketing LLC. Tell us about your infrastructure goals and schedule a strategy audit with our engineering team.",
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
