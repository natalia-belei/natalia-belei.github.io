import { contactsConfig } from "./contacts";

export const CONTENT_TYPE = Object.freeze({
    PARAGRAPH: 0,
    SUBTITLE: 1,
    IMAGE: 2,
    BANNER: 3,
    HIGHLIGHTS: 4,
    SPACER: 5,
});

export const projectsPageConfig = {
    meta: {
        title: `${contactsConfig.ownerFullName} | Projects`,
        description: "UI/UX Designer Projects.",
    },

    mainTitle: "Imagination Triumphs over Knowledge!",
    previewButtonTitle: "View Project",
}

/* to use custom color it must be defined within tailwind.config.js. For instance, refer to the example for the 'indigo' color:
 safelist: [
    ...
    {
        pattern: /(!)?text-(...|indigo|...)/,
    },
  ],
  ...
  theme: {
    ...
    extend: {
        ...
      colors: {
        ...
        indigo: "#F2F0EE",
      },
    },
*/

const projectsData = [
    {
        id: 2,
        isShown: true,
        type: "Landing page",
        title: "ONLINE STYLIST",
        shortDescription: "Service providing services from professional stylists, helping women choose the right clothes.",
        image: "/images/projects/project-sample-2/hero-image.jpg",

        detailsPage:
        {
            sections: [
                {
                    type: CONTENT_TYPE.BANNER,
                    content: "/images/projects/project-sample-2/hero-image.jpg",
                    altText: "Project Sample 2 alternative text",
                    styles: {
                        container: {
                            maxWidth: null, // percentage with step of 10% | pixel value 100-1000px with step of 100px | null for default (e.g. "700px" or "60%" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            position: null, // "start" | "center" | "end" | null (e.g. "center" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            fullScreen: false, // true | false - if true, the content will be rendered across the full width of the screen. Warning: cannot be use together with 'container:maxWidth' or 'container:position'.
                        },
                        backgroundId: null,
                    }
                },
                {
                    type: CONTENT_TYPE.HIGHLIGHTS,
                    content: [
                        "Role: UI/UX Designer",
                        "Tools: Figma, Photoshop, Illustrator",
                        "Duration: 3 months",
                    ],
                    styles: {
                        container: {
                            maxWidth: null, // percentage with step of 10% | pixel value 100-1000px with step of 100px | null for default (e.g. "700px" or "60%" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            position: null, // "start" | "center" | "end" | null (e.g. "center" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            fullScreen: false, // true | false - if true, the content will be rendered across the full width of the screen. Warning: cannot be use together with 'container:maxWidth' or 'container:position'.
                        },
                        backgroundId: 4,
                    },
                },
                {
                    type: CONTENT_TYPE.SPACER,
                    content: null,
                    styles: {
                        backgroundId: null,
                    },
                },
                {
                    type: CONTENT_TYPE.SUBTITLE,
                    content: "Project Description",
                    styles: {
                        color: null, // set to null for default or refer to the comment above for details
                        alignment: "center", // "left" | "center" | "right" | "justify" | null (e.g. "center" or null for default)
                        fontWeight: "extrabold", // "normal" | "medium" | "semibold" | "bold" | "extrabold" | null (e.g. "bold" or null for default)
                        container: {
                            maxWidth: null, // percentage with step of 10% | pixel value 100-1000px with step of 100px | null for default (e.g. "700px" or "60%" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            position: null, // "start" | "center" | "end" | null (e.g. "center" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            fullScreen: false, // true | false - if true, the content will be rendered across the full width of the screen. Warning: cannot be use together with 'container:maxWidth' or 'container:position'.
                        },
                        backgroundId: null,
                    }
                },
                {
                    type: CONTENT_TYPE.PARAGRAPH,
                    content: "BEST CHOICE is a revolutionary styling app designed to empower women in making confident fashion choices with the guidance of professional stylists. Our platform offers personalized consultations and expert advice to help clients discover their unique style preferences and curate their wardrobes effortlessly.",
                    styles: {
                        color: null, // set to null for default or refer to the comment above for details
                        alignment: "center", // "left" | "center" | "right" | "justify" | null (e.g. "center" or null for default)
                        fontWeight: null, // "normal" | "medium" | "semibold" | "bold" | "extrabold" | null (e.g. "bold" or null for default)
                        container: {
                            maxWidth: "800px", // percentage with step of 10% | pixel value 100-1000px with step of 100px | null for default (e.g. "700px" or "60%" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            position: "center", // "start" | "center" | "end" | null (e.g. "center" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            fullScreen: false, // true | false - if true, the content will be rendered across the full width of the screen. Warning: cannot be use together with 'container:maxWidth' or 'container:position'.
                        },
                        backgroundId: null,
                    }
                },
                {
                    type: CONTENT_TYPE.SPACER,
                    content: null,
                    styles: {
                        backgroundId: null,
                    },
                },
                {
                    type: CONTENT_TYPE.SUBTITLE,
                    content: "- Social Media",
                    styles: {
                        color: null, // set to null for default or refer to the comment above for details
                        alignment: "left", // "left" | "center" | "right" | "justify" | null (e.g. "center" or null for default)
                        fontWeight: "extrabold", // "normal" | "medium" | "semibold" | "bold" | "extrabold" | null (e.g. "bold" or null for default)
                        container: {
                            maxWidth: null, // percentage with step of 10% | pixel value 100-1000px with step of 100px | null for default (e.g. "700px" or "60%" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            position: null, // "start" | "center" | "end" | null (e.g. "center" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            fullScreen: false, // true | false - if true, the content will be rendered across the full width of the screen. Warning: cannot be use together with 'container:maxWidth' or 'container:position'.
                        },
                        backgroundId: 1,
                    },
                },
                {
                    type: CONTENT_TYPE.PARAGRAPH,
                    content: "Engaging social media posts showcasing outfit inspirations, style tips, and client testimonials. Eye-catching graphics and visuals highlighting seasonal trends and exclusive offers.Interactive polls and quizzes to encourage audience engagement and gather feedback.",
                    styles: {
                        color: null, // set to null for default or refer to the comment above for details
                        alignment: "left", // "left" | "center" | "right" | "justify" | null (e.g. "center" or null for default)
                        fontWeight: null, // "normal" | "medium" | "semibold" | "bold" | "extrabold" | null (e.g. "bold" or null for default)
                        container: {
                            maxWidth: "60%", // percentage with step of 10% | pixel value 100-1000px with step of 100px | null for default (e.g. "700px" or "60%" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            position: "start", // "start" | "center" | "end" | null (e.g. "center" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            fullScreen: false, // true | false - if true, the content will be rendered across the full width of the screen. Warning: cannot be use together with 'container:maxWidth' or 'container:position'.
                        },
                        backgroundId: 1,
                    }
                },
                {
                    type: CONTENT_TYPE.SUBTITLE,
                    content: "- Email Marketing",
                    styles: {
                        color: null, // set to null for default or refer to the comment above for details
                        alignment: "left", // "left" | "center" | "right" | "justify" | null (e.g. "center" or null for default)
                        fontWeight: "extrabold", // "normal" | "medium" | "semibold" | "bold" | "extrabold" | null (e.g. "bold" or null for default)
                        container: {
                            maxWidth: null, // percentage with step of 10% | pixel value 100-1000px with step of 100px | null for default (e.g. "700px" or "60%" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            position: null, // "start" | "center" | "end" | null (e.g. "center" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            fullScreen: false, // true | false - if true, the content will be rendered across the full width of the screen. Warning: cannot be use together with 'container:maxWidth' or 'container:position'.
                        },
                        backgroundId: 1,
                    },
                },
                {
                    type: CONTENT_TYPE.PARAGRAPH,
                    content: "Tailored email campaigns delivering curated style recommendations based on client preferences. Promotional emails featuring limited-time offers, discounts, and new arrivals. Informative newsletters sharing fashion insights, styling tips, and behind-the-scenes glimpses into the world of fashion.",
                    styles: {
                        color: null, // set to null for default or refer to the comment above for details
                        alignment: "left", // "left" | "center" | "right" | "justify" | null (e.g. "center" or null for default)
                        fontWeight: null, // "normal" | "medium" | "semibold" | "bold" | "extrabold" | null (e.g. "bold" or null for default)
                        container: {
                            maxWidth: "60%", // percentage with step of 10% | pixel value 100-1000px with step of 100px | null for default (e.g. "700px" or "60%" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            position: "start", // "start" | "center" | "end" | null (e.g. "center" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            fullScreen: false, // true | false - if true, the content will be rendered across the full width of the screen. Warning: cannot be use together with 'container:maxWidth' or 'container:position'.
                        },
                        backgroundId: 1,
                    }
                },
                      {
                    type: CONTENT_TYPE.SUBTITLE,
                    content: "- Landing Page",
                    styles: {
                        color: null, // set to null for default or refer to the comment above for details
                        alignment: "left", // "left" | "center" | "right" | "justify" | null (e.g. "center" or null for default)
                        fontWeight: "extrabold", // "normal" | "medium" | "semibold" | "bold" | "extrabold" | null (e.g. "bold" or null for default)
                        container: {
                            maxWidth: null, // percentage with step of 10% | pixel value 100-1000px with step of 100px | null for default (e.g. "700px" or "60%" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            position: null, // "start" | "center" | "end" | null (e.g. "center" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            fullScreen: false, // true | false - if true, the content will be rendered across the full width of the screen. Warning: cannot be use together with 'container:maxWidth' or 'container:position'.
                        },
                        backgroundId: 1,
                    },
                },
                {
                    type: CONTENT_TYPE.PARAGRAPH,
                    content: "Visually appealing landing page with a user-friendly interface and intuitive navigation. Clear call-to-action buttons prompting visitors to download the ChicSelect app, book a styling session, or subscribe to our newsletter. Compelling content highlighting the benefits of our styling services and showcasing client success stories.",
                    styles: {
                        color: null, // set to null for default or refer to the comment above for details
                        alignment: "left", // "left" | "center" | "right" | "justify" | null (e.g. "center" or null for default)
                        fontWeight: null, // "normal" | "medium" | "semibold" | "bold" | "extrabold" | null (e.g. "bold" or null for default)
                        container: {
                            maxWidth: "60%", // percentage with step of 10% | pixel value 100-1000px with step of 100px | null for default (e.g. "700px" or "60%" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            position: "start", // "start" | "center" | "end" | null (e.g. "center" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            fullScreen: false, // true | false - if true, the content will be rendered across the full width of the screen. Warning: cannot be use together with 'container:maxWidth' or 'container:position'.
                        },
                        backgroundId: 1,
                    }
                },
                {
                    type: CONTENT_TYPE.SPACER,
                    content: null,
                    styles: {
                        backgroundId: null,
                    },
                },
                   {
                    type: CONTENT_TYPE.SUBTITLE,
                    content: "Social Media",
                    styles: {
                        color: null, // set to null for default or refer to the comment above for details
                        alignment: "center", // "left" | "center" | "right" | "justify" | null (e.g. "center" or null for default)
                        fontWeight: "extrabold", // "normal" | "medium" | "semibold" | "bold" | "extrabold" | null (e.g. "bold" or null for default)
                        container: {
                            maxWidth: null, // percentage with step of 10% | pixel value 100-1000px with step of 100px | null for default (e.g. "700px" or "60%" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            position: null, // "start" | "center" | "end" | null (e.g. "center" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            fullScreen: false, // true | false - if true, the content will be rendered across the full width of the screen. Warning: cannot be use together with 'container:maxWidth' or 'container:position'.
                        },
                        backgroundId: null,
                    },
                },
                {
                    type: CONTENT_TYPE.IMAGE,
                    content: [
                        // max 6 images per row
                        "/images/projects/project-sample-2/image-socialmedia-wide.jpg",
                    ],
                    styles: {
                        container: {
                            maxWidth: null, // percentage with step of 10% | pixel value 100-1000px with step of 100px | null for default (e.g. "700px" or "60%" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            position: null, // "start" | "center" | "end" | null (e.g. "center" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            fullScreen: true, // true | false - if true, the content will be rendered across the full width of the screen. Warning: cannot be use together with 'container:maxWidth' or 'container:position'.
                        },
                        backgroundId: null,
                    }
                },
                {
                    type: CONTENT_TYPE.SUBTITLE,
                    content: "Email Marketing Design",
                    styles: {
                        color: null, // set to null for default or refer to the comment above for details
                        alignment: "center", // "left" | "center" | "right" | "justify" | null (e.g. "center" or null for default)
                        fontWeight: "extrabold", // "normal" | "medium" | "semibold" | "bold" | "extrabold" | null (e.g. "bold" or null for default)
                        container: {
                            maxWidth: null, // percentage with step of 10% | pixel value 100-1000px with step of 100px | null for default (e.g. "700px" or "60%" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            position: null, // "start" | "center" | "end" | null (e.g. "center" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            fullScreen: false, // true | false - if true, the content will be rendered across the full width of the screen. Warning: cannot be use together with 'container:maxWidth' or 'container:position'.
                        },
                        backgroundId: null,
                    },
                },
                {
                    type: CONTENT_TYPE.IMAGE,
                    content: [
                        // max 6 images per row
                        "/images/projects/project-sample-2/image-email1.png",
                        "/images/projects/project-sample-2/image-email2.png",
                    ],
                    styles: {
                        container: {
                            maxWidth: null, // percentage with step of 10% | pixel value 100-1000px with step of 100px | null for default (e.g. "700px" or "60%" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            position: null, // "start" | "center" | "end" | null (e.g. "center" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            fullScreen: false, // true | false - if true, the content will be rendered across the full width of the screen. Warning: cannot be use together with 'container:maxWidth' or 'container:position'.
                        },
                        backgroundId: null,
                    }
                },
                {
                    type: CONTENT_TYPE.SPACER,
                    content: null,
                    styles: {
                        backgroundId: null,
                    },
                },
                 {
                    type: CONTENT_TYPE.IMAGE,
                    content: [
                        // max 6 images per row
                        "/images/projects/project-sample-2/image-email3.png",
                    ],
                    styles: {
                        container: {
                            maxWidth: null, // percentage with step of 10% | pixel value 100-1000px with step of 100px | null for default (e.g. "700px" or "60%" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            position: null, // "start" | "center" | "end" | null (e.g. "center" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            fullScreen: true, // true | false - if true, the content will be rendered across the full width of the screen. Warning: cannot be use together with 'container:maxWidth' or 'container:position'.
                        },
                        backgroundId: null,
                    }
                },
                {
                    type: CONTENT_TYPE.SUBTITLE,
                    content: "Landing page",
                    styles: {
                        color: null, // set to null for default or refer to the comment above for details
                        alignment: "center", // "left" | "center" | "right" | "justify" | null (e.g. "center" or null for default)
                        fontWeight: "extrabold", // "normal" | "medium" | "semibold" | "bold" | "extrabold" | null (e.g. "bold" or null for default)
                        container: {
                            maxWidth: null, // percentage with step of 10% | pixel value 100-1000px with step of 100px | null for default (e.g. "700px" or "60%" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            position: null, // "start" | "center" | "end" | null (e.g. "center" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            fullScreen: false, // true | false - if true, the content will be rendered across the full width of the screen. Warning: cannot be use together with 'container:maxWidth' or 'container:position'.
                        },
                        backgroundId: null,
                    },
                },
                {
                    type: CONTENT_TYPE.IMAGE,
                    content: [
                        // max 6 images per row
                        "/images/projects/project-sample-2/Mockup wide.png",
                    ],
                    styles: {
                        container: {
                            maxWidth: null, // percentage with step of 10% | pixel value 100-1000px with step of 100px | null for default (e.g. "700px" or "60%" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            position: null, // "start" | "center" | "end" | null (e.g. "center" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            fullScreen: true, // true | false - if true, the content will be rendered across the full width of the screen. Warning: cannot be use together with 'container:maxWidth' or 'container:position'.
                        },
                        backgroundId: 2,
                    }
                },
                {
                    type: CONTENT_TYPE.SUBTITLE,
                    content: "- Colored Subtitle With Background -",
                    styles: {
                        color: "indigo", // set to null for default or refer to the comment above for details
                        alignment: "center", // "left" | "center" | "right" | "justify" | null (e.g. "center" or null for default)
                        fontWeight: "extrabold", // "normal" | "medium" | "semibold" | "bold" | "extrabold" | null (e.g. "bold" or null for default)
                        container: {
                            maxWidth: null, // percentage with step of 10% | pixel value 100-1000px with step of 100px | null for default (e.g. "700px" or "60%" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            position: null, // "start" | "center" | "end" | null (e.g. "center" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            fullScreen: false, // true | false - if true, the content will be rendered across the full width of the screen. Warning: cannot be use together with 'container:maxWidth' or 'container:position'.
                        },
                        backgroundId: 5,
                    },
                },
            ],

            backgrounds: [
                {
                    // unique id of the background
                    id: 1,
                    // relative path to the background image or null
                    image: "/images/projects/project-sample-2/bg-colorful-smoke.png",
                    // true | false - if true, the background image will be hidden on smaller screens
                    hideImageOnSmallerScreens: true,
                    // any combination of the next values: "top" | "center" | "bottom" | "left" | "right" (e.g. "right bottom", "center, top", "center" etc.)
                    // or percentage or pixels value (e.g. "50%", "50% 80%", "100px 200px")
                    // or null for default
                    position: "right center",
                    // percentage or pixels value (e.g. "50%", "100px")
                    // "contain" for image to scale down to fit the content area
                    // "cover" for image to scale up to cover the content area
                    size: "contain",
                    // true | false - if true, the background image will be repeated, otherwise it will be shown only once
                    repeat: false,
                    // background color in hex format (e.g. "#000000") 
                    // or one of the predefined colors from tailwind.config.js (e.g. "indigo") 
                    // or null for default
                    color: null,
                },
                {
                    id: 2,
                    image: "/images/projects/project-sample-2//bg-repeatable-pattern.png",
                    hideImageOnSmallerScreens: false,
                    position: null,
                    size: null,
                    repeat: true,
                    color: null,
                },
                {
                    id: 3,
                    image: null,
                    hideImageOnSmallerScreens: false,
                    position: null,
                    size: null,
                    repeat: false,
                    color: "#eefaff"
                },
                {
                    id: 4,
                    image: null,
                    hideImageOnSmallerScreens: false,
                    position: null,
                    size: null,
                    repeat: false,
                    color: "#d4f4ff"
                },
                {
                    id: 5,
                    image: null,
                    hideImageOnSmallerScreens: false,
                    position: null,
                    size: null,
                    repeat: false,
                    color: "#e0f2ff"
                },
            ]
        }
    },
    {
        id: 1,
        isShown: true,
        type: "MOBILE APP",
        title: "Pet food delivery service",
        shortDescription: "The app is designed to provide a convenient and hassle-free solution for pet owners.",
        image: "/images/projects/pet-food-delivery-service/hero-image.png",

        detailsPage: {
            sections: [
                {
                    type: CONTENT_TYPE.BANNER,
                    content: "/images/projects/pet-food-delivery-service/hero-image.png",
                    altText: "Pet food delivery service mobile app",
                    styles: {
                        container: {
                            maxWidth: null, // percentage with step of 10% | pixel value 100-1000px with step of 100px | null for default (e.g. "700px" or "60%" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            position: null, // "start" | "center" | "end" | null (e.g. "center" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            fullScreen: false, // true | false - if true, the content will be rendered across the full width of the screen. Warning: cannot be use together with 'container:maxWidth' or 'container:position'.
                        },
                        backgroundId: null,
                    }
                },
                {
                    type: CONTENT_TYPE.HIGHLIGHTS,
                    content: [
                        "Role: Product Designer",
                        "Tools: Figma, Photoshop, Illustrator",
                        "Duration: 05/2023",
                    ],
                    styles: {
                        container: {
                            maxWidth: null, // percentage with step of 10% | pixel value 100-1000px with step of 100px | null for default (e.g. "700px" or "60%" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            position: null, // "start" | "center" | "end" | null (e.g. "center" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            fullScreen: false, // true | false - if true, the content will be rendered across the full width of the screen. Warning: cannot be use together with 'container:maxWidth' or 'container:position'.
                        },
                        backgroundId: null,
                    }
                },
                {
                    type: CONTENT_TYPE.SUBTITLE,
                    content: "- Hassle-free solution for pet owners -",
                    styles: {
                        color: null, // set to null for default or refer to the comment above for details
                        alignment: "center", // "left" | "center" | "right" | "justify" | null (e.g. "center" or null for default)
                        fontWeight: "extrabold", // "normal" | "medium" | "semibold" | "bold" | "extrabold" | null (e.g. "bold" or null for default)
                        container: {
                            maxWidth: null, // percentage with step of 10% | pixel value 100-1000px with step of 100px | null for default (e.g. "700px" or "60%" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            position: null, // "start" | "center" | "end" | null (e.g. "center" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            fullScreen: false, // true | false - if true, the content will be rendered across the full width of the screen. Warning: cannot be use together with 'container:maxWidth' or 'container:position'.
                        },
                        backgroundId: null,
                    }
                },
                {
                    type: CONTENT_TYPE.PARAGRAPH,
                    content: "The pet food delivery service app is designed to provide a convenient and hassle-free solution for pet owners to meet their pets nutritional needs. The target users of the app are tech-savvy pet owners, primarily residing in urban areas, who prioritize their pets' health, seek cost-effective options, and embrace the convenience of mobile apps for their pet-related needs.",
                    styles: {
                        color: null, // set to null for default or refer to the comment above for details
                        alignment: "center", // "left" | "center" | "right" | "justify" | null (e.g. "center" or null for default)
                        fontWeight: null, // "normal" | "medium" | "semibold" | "bold" | "extrabold" | null (e.g. "bold" or null for default)
                        container: {
                            maxWidth: "800px", // percentage with step of 10% | pixel value 100-1000px with step of 100px | null for default (e.g. "700px" or "60%" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            position: "center", // "start" | "center" | "end" | null (e.g. "center" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            fullScreen: false, // true | false - if true, the content will be rendered across the full width of the screen. Warning: cannot be use together with 'container:maxWidth' or 'container:position'.
                        },
                        backgroundId: null,
                    }
                },
                {
                    type: CONTENT_TYPE.SPACER,
                    content: null,
                    styles: {
                        backgroundId: null,
                    },
                },
                {
                    type: CONTENT_TYPE.SUBTITLE,
                    content: "- The main advantages of the app -",
                    styles: {
                        color: null, // set to null for default or refer to the comment above for details
                        alignment: "center", // "left" | "center" | "right" | "justify" | null (e.g. "center" or null for default)
                        fontWeight: "extrabold", // "normal" | "medium" | "semibold" | "bold" | "extrabold" | null (e.g. "bold" or null for default)
                        container: {
                            maxWidth: null, // percentage with step of 10% | pixel value 100-1000px with step of 100px | null for default (e.g. "700px" or "60%" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            position: null, // "start" | "center" | "end" | null (e.g. "center" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            fullScreen: false, // true | false - if true, the content will be rendered across the full width of the screen. Warning: cannot be use together with 'container:maxWidth' or 'container:position'.
                        },
                        backgroundId: null,
                    },
                },
                {
                    type: CONTENT_TYPE.IMAGE,
                    content: [
                        // max 6 images per row
                        "/images/projects/pet-food-delivery-service/phone-screen-with-number.png",
                        "/images/projects/pet-food-delivery-service/phone-screen-with-number 1.png",
                        "/images/projects/pet-food-delivery-service/phone-screen-with-number 2.png",
                        "/images/projects/pet-food-delivery-service/phone-screen-with-number 3.png",
                    ],
                    styles: {
                        container: {
                            maxWidth: null, // percentage with step of 10% | pixel value 100-1000px with step of 100px | null for default (e.g. "700px" or "60%" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            position: null, // "start" | "center" | "end" | null (e.g. "center" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            fullScreen: false, // true | false - if true, the content will be rendered across the full width of the screen. Warning: cannot be use together with 'container:maxWidth' or 'container:position'.
                        },
                        backgroundId: 1,
                    }
                },
                {
                    type: CONTENT_TYPE.SUBTITLE,
                    content: "- Problem",
                    styles: {
                        color: null, // set to null for default or refer to the comment above for details
                        alignment: "left", // "left" | "center" | "right" | "justify" | null (e.g. "center" or null for default)
                        fontWeight: "extrabold", // "normal" | "medium" | "semibold" | "bold" | "extrabold" | null (e.g. "bold" or null for default)
                        container: {
                            maxWidth: null, // percentage with step of 10% | pixel value 100-1000px with step of 100px | null for default (e.g. "700px" or "60%" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            position: null, // "start" | "center" | "end" | null (e.g. "center" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            fullScreen: false, // true | false - if true, the content will be rendered across the full width of the screen. Warning: cannot be use together with 'container:maxWidth' or 'container:position'.
                        },
                        backgroundId: 1,
                    },
                },
                {
                    type: CONTENT_TYPE.PARAGRAPH,
                    content: "The app aims to address the challenges and limitations faced by pet owners when purchasing pet food from physical stores, such as limited availability, inconvenience, and time constraints. By providing a user-friendly platform for online ordering and delivery, the app seeks to streamline the process and offer a convenient solution for pet owners to access a wide range of quality pet food options.",
                    styles: {
                        color: null, // set to null for default or refer to the comment above for details
                        alignment: "left", // "left" | "center" | "right" | "justify" | null (e.g. "center" or null for default)
                        fontWeight: null, // "normal" | "medium" | "semibold" | "bold" | "extrabold" | null (e.g. "bold" or null for default)
                        container: {
                            maxWidth: "50%", // percentage with step of 10% | pixel value 100-1000px with step of 100px | null for default (e.g. "700px" or "60%" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            position: "start", // "start" | "center" | "end" | null (e.g. "center" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            fullScreen: false, // true | false - if true, the content will be rendered across the full width of the screen. Warning: cannot be use together with 'container:maxWidth' or 'container:position'.
                        },
                        backgroundId: 1,
                    }
                },
                {
                    type: CONTENT_TYPE.SUBTITLE,
                    content: "- Goal",
                    styles: {
                        color: null, // set to null for default or refer to the comment above for details
                        alignment: "left", // "left" | "center" | "right" | "justify" | null (e.g. "center" or null for default)
                        fontWeight: "extrabold", // "normal" | "medium" | "semibold" | "bold" | "extrabold" | null (e.g. "bold" or null for default)
                        container: {
                            maxWidth: null, // percentage with step of 10% | pixel value 100-1000px with step of 100px | null for default (e.g. "700px" or "60%" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            position: null, // "start" | "center" | "end" | null (e.g. "center" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            fullScreen: false, // true | false - if true, the content will be rendered across the full width of the screen. Warning: cannot be use together with 'container:maxWidth' or 'container:position'.
                        },
                        backgroundId: 1,
                    },
                },
                {
                    type: CONTENT_TYPE.PARAGRAPH,
                    content: "The goal of the project is to design an interactive app that not only simplifies the pet food ordering and delivery process but also enhances the overall user experience, meeting the specific needs and preferences of pet owners while instilling trust and reliability in the service.",
                    styles: {
                        color: null, // set to null for default or refer to the comment above for details
                        alignment: "left", // "left" | "center" | "right" | "justify" | null (e.g. "center" or null for default)
                        fontWeight: null, // "normal" | "medium" | "semibold" | "bold" | "extrabold" | null (e.g. "bold" or null for default)
                        container: {
                            maxWidth: "50%", // percentage with step of 10% | pixel value 100-1000px with step of 100px | null for default (e.g. "700px" or "60%" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            position: "start", // "start" | "center" | "end" | null (e.g. "center" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            fullScreen: false, // true | false - if true, the content will be rendered across the full width of the screen. Warning: cannot be use together with 'container:maxWidth' or 'container:position'.
                        },
                        backgroundId: 1,
                    }
                },
                {
                    type: CONTENT_TYPE.SPACER,
                    content: null,
                    styles: {
                        backgroundId: null,
                    },
                },
                {
                    type: CONTENT_TYPE.SUBTITLE,
                    content: "- Understanding the challenge -",
                    styles: {
                        color: null, // set to null for default or refer to the comment above for details
                        alignment: "center", // "left" | "center" | "right" | "justify" | null (e.g. "center" or null for default)
                        fontWeight: "extrabold", // "normal" | "medium" | "semibold" | "bold" | "extrabold" | null (e.g. "bold" or null for default)
                        container: {
                            maxWidth: null, // percentage with step of 10% | pixel value 100-1000px with step of 100px | null for default (e.g. "700px" or "60%" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            position: null, // "start" | "center" | "end" | null (e.g. "center" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            fullScreen: false, // true | false - if true, the content will be rendered across the full width of the screen. Warning: cannot be use together with 'container:maxWidth' or 'container:position'.
                        },
                        backgroundId: null,
                    },
                },
                {
                    type: CONTENT_TYPE.IMAGE,
                    content: [
                        // max 6 images per row
                        "/images/projects/pet-food-delivery-service/challenge-bar.png"
                    ],
                    styles: {
                        container: {
                            maxWidth: null, // percentage with step of 10% | pixel value 100-1000px with step of 100px | null for default (e.g. "700px" or "60%" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            position: null, // "start" | "center" | "end" | null (e.g. "center" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            fullScreen: false, // true | false - if true, the content will be rendered across the full width of the screen. Warning: cannot be use together with 'container:maxWidth' or 'container:position'.
                        },
                        backgroundId: null,
                    }
                },
                {
                    type: CONTENT_TYPE.SUBTITLE,
                    content: "- User Research -",
                    styles: {
                        color: null, // set to null for default or refer to the comment above for details
                        alignment: "center", // "left" | "center" | "right" | "justify" | null (e.g. "center" or null for default)
                        fontWeight: "extrabold", // "normal" | "medium" | "semibold" | "bold" | "extrabold" | null (e.g. "bold" or null for default)
                        container: {
                            maxWidth: null, // percentage with step of 10% | pixel value 100-1000px with step of 100px | null for default (e.g. "700px" or "60%" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            position: null, // "start" | "center" | "end" | null (e.g. "center" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            fullScreen: false, // true | false - if true, the content will be rendered across the full width of the screen. Warning: cannot be use together with 'container:maxWidth' or 'container:position'.
                        },
                        backgroundId: null,
                    },
                },
                {
                    type: CONTENT_TYPE.PARAGRAPH,
                    content: "In conducting user research for the pet food delivery service app, we employed a combination of methods including interviews, surveys, and usability testing.  Through user research, we gained valuable insights into the specific needs, pain points, and expectations of pet owners, which helped shape the app's features, user interface, and overall user experience. This research enabled us to design an app that aligns with the actual preferences and requirements of the target users, rather than relying solely on assumptions.",
                    styles: {
                        color: null, // set to null for default or refer to the comment above for details
                        alignment: "center", // "left" | "center" | "right" | "justify" | null (e.g. "center" or null for default)
                        fontWeight: null, // "normal" | "medium" | "semibold" | "bold" | "extrabold" | null (e.g. "bold" or null for default)
                        container: {
                            maxWidth: "800px", // percentage with step of 10% | pixel value 100-1000px with step of 100px | null for default (e.g. "700px" or "60%" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            position: "center", // "start" | "center" | "end" | null (e.g. "center" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            fullScreen: false, // true | false - if true, the content will be rendered across the full width of the screen. Warning: cannot be use together with 'container:maxWidth' or 'container:position'.
                        },
                        backgroundId: null,
                    }
                },
                {
                    type: CONTENT_TYPE.IMAGE,
                    content: [
                        // max 6 images per row
                        "/images/projects/pet-food-delivery-service/notes-bord.png",
                    ],
                    styles: {
                        container: {
                            maxWidth: null, // percentage with step of 10% | pixel value 100-1000px with step of 100px | null for default (e.g. "700px" or "60%" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            position: null, // "start" | "center" | "end" | null (e.g. "center" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            fullScreen: true, // true | false - if true, the content will be rendered across the full width of the screen. Warning: cannot be use together with 'container:maxWidth' or 'container:position'.
                        },
                        backgroundId: null,
                    }
                },
                {
                    type: CONTENT_TYPE.SPACER,
                    content: null,
                    styles: {
                        backgroundId: null,
                    },
                },
                {
                    type: CONTENT_TYPE.SUBTITLE,
                    content: "- User Personas -",
                    styles: {
                        color: null, // set to null for default or refer to the comment above for details
                        alignment: "center", // "left" | "center" | "right" | "justify" | null (e.g. "center" or null for default)
                        fontWeight: "extrabold", // "normal" | "medium" | "semibold" | "bold" | "extrabold" | null (e.g. "bold" or null for default)
                        container: {
                            maxWidth: null, // percentage with step of 10% | pixel value 100-1000px with step of 100px | null for default (e.g. "700px" or "60%" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            position: null, // "start" | "center" | "end" | null (e.g. "center" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            fullScreen: false, // true | false - if true, the content will be rendered across the full width of the screen. Warning: cannot be use together with 'container:maxWidth' or 'container:position'.
                        },
                        backgroundId: null,
                    },
                },
                {
                    type: CONTENT_TYPE.PARAGRAPH,
                    content: "User personas serve as representative models embodying the goals and traits of a broader user community. Typically, these personas are encapsulated in concise one or two-page documents, akin to the example below. These brief descriptions encompass behavioral tendencies, aspirations, competencies, perspectives, and contextual details, providing a comprehensive understanding of a persona's operating environment.",
                    styles: {
                        color: null, // set to null for default or refer to the comment above for details
                        alignment: "center", // "left" | "center" | "right" | "justify" | null (e.g. "center" or null for default)
                        fontWeight: null, // "normal" | "medium" | "semibold" | "bold" | "extrabold" | null (e.g. "bold" or null for default)
                        container: {
                            maxWidth: "800px", // percentage with step of 10% | pixel value 100-1000px with step of 100px | null for default (e.g. "700px" or "60%" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            position: "center", // "start" | "center" | "end" | null (e.g. "center" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            fullScreen: false, // true | false - if true, the content will be rendered across the full width of the screen. Warning: cannot be use together with 'container:maxWidth' or 'container:position'.
                        },
                        backgroundId: null,
                    }
                },
                {
                    type: CONTENT_TYPE.IMAGE,
                    content: [
                        // max 6 images per row
                        "/images/projects/pet-food-delivery-service/user-personas-1.png",
                        "/images/projects/pet-food-delivery-service/user-personas-2.png",
                    ],
                    styles: {
                        container: {
                            maxWidth: null, // percentage with step of 10% | pixel value 100-1000px with step of 100px | null for default (e.g. "700px" or "60%" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            position: null, // "start" | "center" | "end" | null (e.g. "center" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            fullScreen: false, // true | false - if true, the content will be rendered across the full width of the screen. Warning: cannot be use together with 'container:maxWidth' or 'container:position'.
                        },
                        backgroundId: null,
                    }
                },
                {
                    type: CONTENT_TYPE.SPACER,
                    content: null,
                    styles: {
                        backgroundId: null,
                    },
                },
                {
                    type: CONTENT_TYPE.SUBTITLE,
                    content: "- User Journey Map -",
                    styles: {
                        color: null, // set to null for default or refer to the comment above for details
                        alignment: "center", // "left" | "center" | "right" | "justify" | null (e.g. "center" or null for default)
                        fontWeight: "extrabold", // "normal" | "medium" | "semibold" | "bold" | "extrabold" | null (e.g. "bold" or null for default)
                        container: {
                            maxWidth: null, // percentage with step of 10% | pixel value 100-1000px with step of 100px | null for default (e.g. "700px" or "60%" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            position: null, // "start" | "center" | "end" | null (e.g. "center" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            fullScreen: false, // true | false - if true, the content will be rendered across the full width of the screen. Warning: cannot be use together with 'container:maxWidth' or 'container:position'.
                        },
                        backgroundId: null,
                    },
                },
                 {
                    type: CONTENT_TYPE.PARAGRAPH,
                    content: "A journey map helps to visualize the steps a user takes to accomplish their goal with the help of digital product.",
                    styles: {
                        color: null, // set to null for default or refer to the comment above for details
                        alignment: "center", // "left" | "center" | "right" | "justify" | null (e.g. "center" or null for default)
                        fontWeight: null, // "normal" | "medium" | "semibold" | "bold" | "extrabold" | null (e.g. "bold" or null for default)
                        container: {
                            maxWidth: "800px", // percentage with step of 10% | pixel value 100-1000px with step of 100px | null for default (e.g. "700px" or "60%" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            position: "center", // "start" | "center" | "end" | null (e.g. "center" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            fullScreen: false, // true | false - if true, the content will be rendered across the full width of the screen. Warning: cannot be use together with 'container:maxWidth' or 'container:position'.
                        },
                        backgroundId: null,
                    }
                },
                {
                    type: CONTENT_TYPE.IMAGE,
                    content: [
                        // max 6 images per row
                        "/images/projects/pet-food-delivery-service/user-journey-map.png",
                    ],
                    styles: {
                        container: {
                            maxWidth: null, // percentage with step of 10% | pixel value 100-1000px with step of 100px | null for default (e.g. "700px" or "60%" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            position: null, // "start" | "center" | "end" | null (e.g. "center" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            fullScreen: true, // true | false - if true, the content will be rendered across the full width of the screen. Warning: cannot be use together with 'container:maxWidth' or 'container:position'.
                        },
                        backgroundId: null,
                    }
                },
                {
                    type: CONTENT_TYPE.SPACER,
                    content: null,
                    styles: {
                        backgroundId: null,
                    },
                },
                {
                    type: CONTENT_TYPE.SUBTITLE,
                    content: "- Paper Wireframes -",
                    styles: {
                        color: null, // set to null for default or refer to the comment above for details
                        alignment: "center", // "left" | "center" | "right" | "justify" | null (e.g. "center" or null for default)
                        fontWeight: "extrabold", // "normal" | "medium" | "semibold" | "bold" | "extrabold" | null (e.g. "bold" or null for default)
                        container: {
                            maxWidth: null, // percentage with step of 10% | pixel value 100-1000px with step of 100px | null for default (e.g. "700px" or "60%" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            position: null, // "start" | "center" | "end" | null (e.g. "center" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            fullScreen: false, // true | false - if true, the content will be rendered across the full width of the screen. Warning: cannot be use together with 'container:maxWidth' or 'container:position'.
                        },
                        backgroundId: null,
                    },
                },
                {
                    type: CONTENT_TYPE.PARAGRAPH,
                    content: "A low-fidelity prototype for a pet food delivery service might consist of hand-drawn sketches or simple digital wireframes depicting the user interface and basic functionalities of the app or website.",
                    styles: {
                        color: null, // set to null for default or refer to the comment above for details
                        alignment: "center", // "left" | "center" | "right" | "justify" | null (e.g. "center" or null for default)
                        fontWeight: null, // "normal" | "medium" | "semibold" | "bold" | "extrabold" | null (e.g. "bold" or null for default) 
                        container: {
                            maxWidth: "800px", // percentage with step of 10% | pixel value 100-1000px with step of 100px | null for default (e.g. "700px" or "60%" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            position: "center", // "start" | "center" | "end" | null (e.g. "center" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            fullScreen: false, // true | false - if true, the content will be rendered across the full width of the screen. Warning: cannot be use together with 'container:maxWidth' or 'container:position'.
                        },
                        backgroundId: null,
                    }
                },
                {
                    type: CONTENT_TYPE.IMAGE,
                    content: [
                        // max 6 images per row
                        "/images/projects/pet-food-delivery-service/paper-wireframes.png",
                    ],
                    styles: {
                        container: {
                            maxWidth: null, // percentage with step of 10% | pixel value 100-1000px with step of 100px | null for default (e.g. "700px" or "60%" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            position: null, // "start" | "center" | "end" | null (e.g. "center" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            fullScreen: true, // true | false - if true, the content will be rendered across the full width of the screen. Warning: cannot be use together with 'container:maxWidth' or 'container:position'.
                        },
                        backgroundId: null,
                    }
                },
                {
                    type: CONTENT_TYPE.SUBTITLE,
                    content: "- Low-Fidelity Prototype -",
                    styles: {
                        color: null, // set to null for default or refer to the comment above for details
                        alignment: "center", // "left" | "center" | "right" | "justify" | null (e.g. "center" or null for default)
                        fontWeight: "extrabold", // "normal" | "medium" | "semibold" | "bold" | "extrabold" | null (e.g. "bold" or null for default)
                        container: {
                            maxWidth: null, // percentage with step of 10% | pixel value 100-1000px with step of 100px | null for default (e.g. "700px" or "60%" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            position: null, // "start" | "center" | "end" | null (e.g. "center" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            fullScreen: false, // true | false - if true, the content will be rendered across the full width of the screen. Warning: cannot be use together with 'container:maxWidth' or 'container:position'.
                        },
                        backgroundId: null,
                    },
                },
                {
                    type: CONTENT_TYPE.PARAGRAPH,
                    content: "The goal of creating wireframes is to establish the basic structure of a page and to highlight the intended function of each element.",
                    styles: {
                        color: null, // set to null for default or refer to the comment above for details
                        alignment: "center", // "left" | "center" | "right" | "justify" | null (e.g. "center" or null for default)
                        fontWeight: null, // "normal" | "medium" | "semibold" | "bold" | "extrabold" | null (e.g. "bold" or null for default) 
                        container: {
                            maxWidth: "800px", // percentage with step of 10% | pixel value 100-1000px with step of 100px | null for default (e.g. "700px" or "60%" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            position: "center", // "start" | "center" | "end" | null (e.g. "center" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            fullScreen: false, // true | false - if true, the content will be rendered across the full width of the screen. Warning: cannot be use together with 'container:maxWidth' or 'container:position'.
                        },
                        backgroundId: null,
                    }
                },
                {
                    type: CONTENT_TYPE.IMAGE,
                    content: [
                        // max 6 images per row
                        "/images/projects/pet-food-delivery-service/low-fidelity-prototype.png",
                    ],
                    styles: {
                        container: {
                            maxWidth: null, // percentage with step of 10% | pixel value 100-1000px with step of 100px | null for default (e.g. "700px" or "60%" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            position: null, // "start" | "center" | "end" | null (e.g. "center" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            fullScreen: true, // true | false - if true, the content will be rendered across the full width of the screen. Warning: cannot be use together with 'container:maxWidth' or 'container:position'.
                        },
                        backgroundId: null,
                    }
                },
                {
                    type: CONTENT_TYPE.SPACER,
                    content: null,
                    styles: {
                        backgroundId: null,
                    },
                },
                {
                    type: CONTENT_TYPE.SUBTITLE,
                    content: "- Visual Design -",
                    styles: {
                        color: null, // set to null for default or refer to the comment above for details
                        alignment: "center", // "left" | "center" | "right" | "justify" | null (e.g. "center" or null for default)
                        fontWeight: "extrabold", // "normal" | "medium" | "semibold" | "bold" | "extrabold" | null (e.g. "bold" or null for default)
                        container: {
                            maxWidth: null, // percentage with step of 10% | pixel value 100-1000px with step of 100px | null for default (e.g. "700px" or "60%" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            position: null, // "start" | "center" | "end" | null (e.g. "center" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            fullScreen: false, // true | false - if true, the content will be rendered across the full width of the screen. Warning: cannot be use together with 'container:maxWidth' or 'container:position'.
                        },
                        backgroundId: null,
                    },
                },
                {
                    type: CONTENT_TYPE.IMAGE,
                    content: [
                        // max 6 images per row
                        "/images/projects/pet-food-delivery-service/color-blocks.png",
                    ],
                    styles: {
                        container: {
                            maxWidth: null, // percentage with step of 10% | pixel value 100-1000px with step of 100px | null for default (e.g. "700px" or "60%" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            position: null, // "start" | "center" | "end" | null (e.g. "center" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            fullScreen: true, // true | false - if true, the content will be rendered across the full width of the screen. Warning: cannot be use together with 'container:maxWidth' or 'container:position'.
                        },
                        backgroundId: null,
                    }
                },
                {
                    type: CONTENT_TYPE.IMAGE,
                    content: [
                        // max 6 images per row
                        "/images/projects/pet-food-delivery-service/Mockups.png",
                    ],
                    styles: {
                        container: {
                            maxWidth: null, // percentage with step of 10% | pixel value 100-1000px with step of 100px | null for default (e.g. "700px" or "60%" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            position: null, // "start" | "center" | "end" | null (e.g. "center" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            fullScreen: true, // true | false - if true, the content will be rendered across the full width of the screen. Warning: cannot be use together with 'container:maxWidth' or 'container:position'.
                        },
                        backgroundId: null,
                    }
                },
                {
                    type: CONTENT_TYPE.SUBTITLE,
                    content: "- Thank You For Attention! -",
                    styles: {
                        color: null, // set to null for default or refer to the comment above for details
                        alignment: "center", // "left" | "center" | "right" | "justify" | null (e.g. "center" or null for default)
                        fontWeight: "extrabold", // "normal" | "medium" | "semibold" | "bold" | "extrabold" | null (e.g. "bold" or null for default) 
                        container: {
                            maxWidth: "800px", // percentage with step of 10% | pixel value 100-1000px with step of 100px | null for default (e.g. "700px" or "60%" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            position: "center", // "start" | "center" | "end" | null (e.g. "center" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            fullScreen: false, // true | false - if true, the content will be rendered across the full width of the screen. Warning: cannot be use together with 'container:maxWidth' or 'container:position'.
                        },
                        backgroundId: null,
                    }
                }
            ],
            backgrounds: [
                {
                    // unique id of the background
                    id: 1,
                    // relative path to the background image or null
                    image: "/images/projects/pet-food-delivery-service/bg-welcome-ribbons.png",
                    // true | false - if true, the background image will be hidden on smaller screens
                    hideImageOnSmallerScreens: true,
                    // any combination of the next values: "top" | "center" | "bottom" | "left" | "right" (e.g. "right bottom", "center, top", "center" etc.)
                    // or percentage or pixels value (e.g. "50%", "50% 80%", "100px 200px")
                    // or null for default
                    position: "right bottom",
                    // percentage or pixels value (e.g. "50%", "100px")
                    // "contain" for image to scale down to fit the content area
                    // "cover" for image to scale up to cover the content area
                    size: "60%",
                    // true | false - if true, the background image will be repeated, otherwise it will be shown only once
                    repeat: false,
                    // background color in hex format (e.g. "#000000") 
                    // or one of the predefined colors from tailwind.config.js (e.g. "indigo") 
                    // or null for default
                    color: null,
                },
            ]
        },
    },
    {
        id: 3,
        isShown: true,
        type: "Website",
        title: "Bike Rental Website",
        shortDescription: "The project aims to develop a user-friendly and efficient bike rental website to cater to the growing demand for sustainable transportation options.",
        image: "/images/projects/project-sample-3/hero-image.jpg",

        detailsPage: {
            sections: [
                // start with adding a new section
            ],
            backgrounds: [
                // define backgrounds for sections if needed
            ]
        }
    },
     {
                    type: CONTENT_TYPE.IMAGE,
                    content: [
                        // max 6 images per row
                        "/images/projects/pet-food-delivery-service/phone-screen.png",
                        "/images/projects/pet-food-delivery-service/phone-screen.png",
                        "/images/projects/pet-food-delivery-service/phone-screen.png",
                        "/images/projects/pet-food-delivery-service/phone-screen.png",
                    ],
                    styles: {
                        container: {
                            maxWidth: null, // percentage with step of 10% | pixel value 100-1000px with step of 100px | null for default (e.g. "700px" or "60%" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            position: null, // "start" | "center" | "end" | null (e.g. "center" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            fullScreen: false, // true | false - if true, the content will be rendered across the full width of the screen. Warning: cannot be use together with 'container:maxWidth' or 'container:position'.
                        },
                        backgroundId: null,
                    }
                },
     {
                    type: CONTENT_TYPE.IMAGE,
                    content: [
                        // max 6 images per row
                        "/images/projects/pet-food-delivery-service/phone-screen.png",
                        "/images/projects/pet-food-delivery-service/phone-screen.png",
                        "/images/projects/pet-food-delivery-service/phone-screen.png",
                        "/images/projects/pet-food-delivery-service/phone-screen.png",
                    ],
                    styles: {
                        container: {
                            maxWidth: null, // percentage with step of 10% | pixel value 100-1000px with step of 100px | null for default (e.g. "700px" or "60%" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            position: null, // "start" | "center" | "end" | null (e.g. "center" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                            fullScreen: false, // true | false - if true, the content will be rendered across the full width of the screen. Warning: cannot be use together with 'container:maxWidth' or 'container:position'.
                        },
                        backgroundId: null,
                    }
                },
               
                {
                    type: CONTENT_TYPE.SPACER,
                    content: null,
                    styles: {
                        backgroundId: null,
                    },
                },
];

export function getProjects() {
    return projectsData
        .filter((project) => project.isShown)
        .sort((a, b) => a.id - b.id);
}

export function getProject(id) {
    return projectsData.find((project) => project.isShown && project.id === Number(id));
}

export function getProjectIds() {
    return projectsData
        .filter((project) => project.isShown)
        .sort((a, b) => a.id - b.id)
        .map((project) => project.id);
}
