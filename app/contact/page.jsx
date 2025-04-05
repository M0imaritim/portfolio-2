import Contact from '@/components/ui/Contact'

export const metadata = {
    title: 'Contact | Langat Moimaritim',
    description: 'Get in touch with Langat Moimaritim. Let’s collaborate or discuss ideas in web development and IoT.',
    openGraph: {
        title: 'Contact | Langat Moimaritim',
        description: 'Get in touch with Langat Moimaritim. Let’s collaborate or discuss ideas in web development and IoT.',
        url: 'https://langat-moimaritim.vercel.app/contact',
        images: [
            {
                url: 'https://langat-moimaritim.vercel.app/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Langat Moimaritim',
            },
        ],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Contact | Langat Moimaritim',
        description: 'Get in touch with Langat Moimaritim. Let’s collaborate or discuss ideas in web development and IoT.',
        images: ['https://langat-moimaritim.vercel.app/og-image.png'],
        creator: '@Moimaritim',
    },
}

export default function ContactPage() {
    return (
        <>
            <Contact />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ContactPage",
                        name: "Contact Langat Moimaritim",
                        url: "https://langat-moimaritim.vercel.app/contact"
                    })
                }}
            />
        </>
    )
}
