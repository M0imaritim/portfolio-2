import Projects from '@/components/ui/Projects'

export const metadata = {
    title: 'Projects | Langat Moimaritim',
    description: 'A showcase of web and IoT projects built by Langat Moimaritim.',
    openGraph: {
        title: 'Projects | Langat Moimaritim',
        description: 'A showcase of web and IoT projects built by Langat Moimaritim.',
        images: [
            {
                url: 'https://langat-moimaritim.vercel.app/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Langat Moimaritim',
            },
        ],
        url: 'https://langat-moimaritim.vercel.app/projects',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Projects | Langat Moimaritim',
        description: 'A showcase of web and IoT projects built by Langat Moimaritim.',
        images: ['https://langat-moimaritim.vercel.app/og-image.png'],
        creator: '@Moimaritim',
    },
}

export default function ProjectsPage() {
    return (
        <>
            <Projects />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "CreativeWork",
                        name: "Langat Moimaritim Projects",
                        url: "https://langat-moimaritim.vercel.app/projects",
                        creator: {
                            "@type": "Person",
                            name: "Langat Moimaritim"
                        }
                    })
                }}
            />
        </>
    )
}
