const contribution = {
    title: "Contributions",
    projects: [
        {
            title: "MX Icons",
            link: "https://mxicons.vercel.app/",
            github: "https://github.com/ig-imanish/mx-icons",
            subtitle: "React SVG Icon Library Contribution",
            techStack: ["React", "SVG", "Open Source"],
            description: [
                "Contributed new SVG icon components to the MX Icons open-source React library.",
                "Merged contributions through GitHub pull requests #11 and #44."
            ],
            pullRequests: [
                "https://github.com/ig-imanish/mx-icons/pull/11",
                "https://github.com/ig-imanish/mx-icons/pull/44"
            ]
        },
        {
            title: "Rux Programming Language",
            link: "https://rux-lang.dev/",
            github: "https://github.com/rux-lang/Rux",
            subtitle: "Fast, compiled, strongly typed, multi-paradigm",
            techStack: ["Cpp", "Rux"],
            description: [
                "Contributed the String utilities, in Rux/Std"
            ],
            pullRequests: [
                "https://github.com/rux-lang/Std/pull/18"
            ]
        },
        {
            title: "FreshScan AI",
            link: "https://freshscanai.vercel.app/",
            github: "https://github.com/jpdevhub/FreshScanAi",
            subtitle: "Open Source Frontend & PWA Contribution",
            techStack: ["React", "TypeScript", "Vite", "PWA", "Tailwind CSS"],
            description: [
                "Contributed to FreshScan AI, an edge-AI powered fish freshness assessment platform.",
                "Developed and refined the Progressive Web App installation flow, including Android install prompts and iOS Add-to-Home-Screen onboarding.",
                "Collaborated with maintainers through code review iterations and successfully merged Pull Request #85."
            ],
            pullRequests: [
                "https://github.com/jpdevhub/FreshScanAi/pull/85"
            ]
        },
        {
            title: "Go Auth API",
            link: "https://auth-server-4nmm.onrender.com/swagger/",
            github: "https://github.com/roshankumar0036singh/auth-server",
            subtitle: "Open Source Backend Security Contribution",
            techStack: ["Go", "Gin", "Redis", "Rate Limiting", "Authentication"],
            description: [
                "Contributed security and validation improvements to a Go-based authentication API.",
                "Implemented route-specific rate limiting policies for login, registration, and password recovery endpoints instead of relying solely on global IP-based throttling.",
                "Enhanced forgot-password protection by introducing email-based rate limiting with safe IP fallback handling to prevent abuse while supporting shared-network users.",
                "Improved email validation with a more permissive, case-insensitive regex and optimized performance by compiling validation patterns during application initialization.",
                "Successfully resolved issues #82 and #75 through merged open-source contributions."
            ],
            pullRequests: [
                "https://github.com/roshankumar0036singh/auth-server/pull/114"
            ]
        },
        {
            title: "Algo Infinity Verse",
            link: "https://algo-infinity-verse.vercel.app/",
            github: "https://github.com/Eshajha19/Algo-Infinity-Verse",
            subtitle: "Open Source Code Playground Contribution",
            techStack: ["React", "TypeScript", "JavaScript", "Dart", "Tailwind CSS"],
            description: [
                "Developed a multi-language Code Playground for Algo Infinity Verse, enabling users to write and execute code directly within the platform.",
                "Implemented in-browser JavaScript execution, TypeScript transpilation and execution, and Dart code execution through external service integration.",
                "Built language switching with code persistence, custom console output capture, starter templates, and reset/clear functionality.",
                "Designed a responsive split-layout playground interface with editor and console panels while maintaining the project's visual design system.",
                "Successfully resolved issues #266, #276, and #278 through merged open-source contributions."
            ],
            pullRequests: [
                "https://github.com/Eshajha19/Algo-Infinity-Verse/pull/324"
            ]
        }
    ]
}

export default contribution;