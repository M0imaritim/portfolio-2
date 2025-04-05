import About from '@/components/ui/About'

export const metadata = {
    title: 'About | Langat Moimaritim',
    description: 'About me. Learn more about Langat Moimaritim, a passionate developer and enthusiast in the world of web development and IoT.',
    openGraph: {
        title: 'About | Langat Moimaritim',
        description: 'About me. Learn more about Langat Moimaritim, a passionate developer and enthusiast in the world of web development and IoT.',
        url: 'https://langat-moimaritim.vercel.app/about',
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
        title: 'About | Langat Moimaritim',
        description: 'About me. Learn more about Langat Moimaritim, a passionate developer and enthusiast in the world of web development and IoT.',
        images: ['https://langat-moimaritim.vercel.app/og-image.png'],
        creator: '@Moimaritim',

    },
}

export default function AboutPage() {
    return (
        <>
            <About />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        name: "Langat Moimaritim",
                        url: "https://langat-moimaritim.vercel.app",
                        jobTitle: "Software Developer",
                        sameAs: [
                            "https://twitter.com/Moimaritim"
                        ]
                    })
                }}
            />
        </>
    )
}
