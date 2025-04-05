import IOT from '@/components/ui/IOT'

export const metadata = {
    title: 'IoT | Langat Moimaritim',
    description: 'Explore IoT projects by Langat Moimaritim. Passionate about embedded systems and smart solutions.',
    openGraph: {
        title: 'IoT | Langat Moimaritim',
        description: 'Explore IoT projects by Langat Moimaritim. Passionate about embedded systems and smart solutions.',
        url: 'https://langat-moimaritim.vercel.app/iot',
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
        title: 'IoT | Langat Moimaritim',
        description: 'Explore IoT projects by Langat Moimaritim. Passionate about embedded systems and smart solutions.',
        images: ['https://langat-moimaritim.vercel.app/og-image.png'],
        creator: '@Moimaritim',
    },
}

export default function IoTPage() {
    return (
        <>
            <IOT />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        name: "IoT Projects",
                        description: "IoT projects by Langat Moimaritim",
                        url: "https://langat-moimaritim.vercel.app/iot"
                    })
                }}
            />
        </>
    )
}
