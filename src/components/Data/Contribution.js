const contribution = {
    title: "Contributions",
    projects: [
        {
            title: "MX Icons",
            link: "https://mxicons.vercel.app/",
            github: "https://github.com/ig-imanish/mx-icons",
            subtitle: "React SVG Icon Library Contribution",
            techStack: ["React", "SVG", "Open Source"],
            pullRequests: [
                {
                    url: "https://github.com/ig-imanish/mx-icons/pull/11",
                    description: [
                        "Added LinkedIn and Facebook icon variants.",
                        "Resolved icon asset structure issues.",
                        "Fixed ESLint validation errors.",
                        "Verified successful library builds."
                    ]
                },
                {
                    url: "https://github.com/ig-imanish/mx-icons/pull/44",
                    description: [
                        "Added GitFork icon to the library.",
                        "Integrated GitHub star and fork statistics.",
                        "Enhanced repository information display.",
                        "Maintained consistency with existing icon designs."
                    ]
                }
            ]
        },
        {
            title: "Rux Programming Language",
            link: "https://rux-lang.dev/",
            github: "https://github.com/rux-lang/Rux",
            subtitle: "Fast, compiled, strongly typed, multi-paradigm",
            techStack: ["Cpp", "Rux"],
            pullRequests: [
                {
                    url: "https://github.com/rux-lang/Packages/pull/18",
                    description: [
                        "Added core string utility APIs.",
                        "Implemented case conversion and formatting helpers.",
                        "Added prefix, suffix, and split operations.",
                        "Optimized split functionality using zero-copy string views."
                    ]
                },
                {
                    url: "https://github.com/rux-lang/Packages/pull/62",
                    description: [
                        "Added integer, floating-point, and boolean parsing utilities.",
                        "Implemented lightweight, dependency-free parsing with built-in validation.",
                        "Added support for scientific notation, signed values, and flexible boolean literals.",
                        "Introduced a consistent `(value, bool)` API for explicit parse success/failure handling."
                    ]
                },
            ]
        },

        {
            title: "FreshScan AI",
            link: "https://fresh-scanai.vercel.app/",
            github: "https://github.com/jpdevhub/FreshScanAi",
            subtitle: "Open Source Frontend & PWA Contribution",
            techStack: ["React", "TypeScript", "Vite", "PWA", "Tailwind CSS"],
            pullRequests: [
                {
                    url: "https://github.com/jpdevhub/FreshScanAi/pull/85",
                    description: [
                        "Implemented a custom PWA installation experience.",
                        "Added service worker registration and offline support.",
                        "Restricted install prompts to mobile devices.",
                        "Improved app assets and installation workflow."
                    ]
                }
            ]
        },

        {
            title: "Go Auth API",
            link: "https://auth-server-4nmm.onrender.com/swagger/",
            github: "https://github.com/roshankumar0036singh/auth-server",
            subtitle: "Open Source Backend Security Contribution",
            techStack: ["Go", "Gin", "Redis", "Rate Limiting", "Authentication"],
            pullRequests: [
                {
                    url: "https://github.com/roshankumar0036singh/auth-server/pull/114",
                    description: [
                        "Implemented endpoint-specific rate limiting.",
                        "Added email-based throttling for password recovery.",
                        "Improved email validation logic.",
                        "Enhanced API security and performance."
                    ]
                },
                {
                    url: "https://github.com/roshankumar0036singh/auth-server/pull/203",
                    description: [
                        "Implemented paginated user retrieval.",
                        "Added total user count support.",
                        "Introduced page and limit query parameters.",
                        "Improved admin API response structure."
                    ]
                }
            ]
        },

        {
            title: "Algo Infinity Verse",
            link: "https://algo-infinity-verse.vercel.app/",
            github: "https://github.com/Eshajha19/Algo-Infinity-Verse",
            subtitle: "Open Source Code Playground Contribution",
            techStack: ["React", "TypeScript", "JavaScript", "Dart", "Tailwind CSS"],
            pullRequests: [
                {
                    url: "https://github.com/Eshajha19/Algo-Infinity-Verse/pull/324",
                    description: [
                        "Built a multi-language code playground.",
                        "Added JavaScript, TypeScript, and Dart execution support.",
                        "Implemented code persistence and console output handling.",
                        "Created a responsive editor and console interface."
                    ]
                }
            ]
        }

    ]
};

export default contribution;
