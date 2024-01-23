import { contactsConfig } from "./contacts";

export const CONTENT_TYPE = Object.freeze({
    PARAGRAPH: 0,
    SUBTITLE: 1,
    IMAGE: 2,
    BANNER: 3,
    HIGHLIGHTS: 4,
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
        indigo: "#4B0082",
      },
    },
*/

const projectsData = [
    {
        id: 2,
        isShown: true,
        type: "Empty Template",
        title: "Project Sample 2",
        shortDescription: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
        image: "/images/projects/project-sample-2/hero-image.jpg",

        detailsPage: [
            // start with adding a new section
        ],
    },
    {
        id: 1,
        isShown: true,
        type: "MOBILE APP",
        title: "Pet food delivery service",
        shortDescription: "The app is designed to provide a convenient and hassle-free solution for pet owners.",
        image: "/images/projects/pet-food-delivery-service/hero-image.png",

        detailsPage: [
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
                }
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
                    }
                },
            },
            {
                type: CONTENT_TYPE.IMAGE,
                content: [
                    // max 6 images per row
                    "/images/projects/pet-food-delivery-service/phone-screen-with-number.png",
                    "/images/projects/pet-food-delivery-service/phone-screen-with-number.png",
                    "/images/projects/pet-food-delivery-service/phone-screen-with-number.png",
                    "/images/projects/pet-food-delivery-service/phone-screen-with-number.png",
                ],
                styles: {
                    container: {
                        maxWidth: null, // percentage with step of 10% | pixel value 100-1000px with step of 100px | null for default (e.g. "700px" or "60%" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                        position: null, // "start" | "center" | "end" | null (e.g. "center" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                        fullScreen: false, // true | false - if true, the content will be rendered across the full width of the screen. Warning: cannot be use together with 'container:maxWidth' or 'container:position'.
                    }
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
                    }
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
                    }
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
                }
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
                    }
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
                    }
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
                    }
                },
            },
            {
                type: CONTENT_TYPE.PARAGRAPH,
                content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
                styles: {
                    color: null, // set to null for default or refer to the comment above for details
                    alignment: "center", // "left" | "center" | "right" | "justify" | null (e.g. "center" or null for default)
                    fontWeight: null, // "normal" | "medium" | "semibold" | "bold" | "extrabold" | null (e.g. "bold" or null for default)
                    container: {
                        maxWidth: "800px", // percentage with step of 10% | pixel value 100-1000px with step of 100px | null for default (e.g. "700px" or "60%" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                        position: "center", // "start" | "center" | "end" | null (e.g. "center" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                        fullScreen: false, // true | false - if true, the content will be rendered across the full width of the screen. Warning: cannot be use together with 'container:maxWidth' or 'container:position'.
                    },
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
                    }
                }
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
                    }
                },
            },
            {
                type: CONTENT_TYPE.PARAGRAPH,
                content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
                styles: {
                    color: null, // set to null for default or refer to the comment above for details
                    alignment: "center", // "left" | "center" | "right" | "justify" | null (e.g. "center" or null for default)
                    fontWeight: null, // "normal" | "medium" | "semibold" | "bold" | "extrabold" | null (e.g. "bold" or null for default)
                    container: {
                        maxWidth: "800px", // percentage with step of 10% | pixel value 100-1000px with step of 100px | null for default (e.g. "700px" or "60%" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                        position: "center", // "start" | "center" | "end" | null (e.g. "center" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                        fullScreen: false, // true | false - if true, the content will be rendered across the full width of the screen. Warning: cannot be use together with 'container:maxWidth' or 'container:position'.
                    },
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
                    }
                }
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
                    }
                },
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
                    }
                }
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
                    }
                },
            },
            {
                type: CONTENT_TYPE.PARAGRAPH,
                content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
                styles: {
                    color: null, // set to null for default or refer to the comment above for details
                    alignment: "center", // "left" | "center" | "right" | "justify" | null (e.g. "center" or null for default)
                    fontWeight: null, // "normal" | "medium" | "semibold" | "bold" | "extrabold" | null (e.g. "bold" or null for default) 
                    container: {
                        maxWidth: "800px", // percentage with step of 10% | pixel value 100-1000px with step of 100px | null for default (e.g. "700px" or "60%" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                        position: "center", // "start" | "center" | "end" | null (e.g. "center" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                        fullScreen: false, // true | false - if true, the content will be rendered across the full width of the screen. Warning: cannot be use together with 'container:maxWidth' or 'container:position'.
                    },
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
                    }
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
                    }
                },
            },
            {
                type: CONTENT_TYPE.PARAGRAPH,
                content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
                styles: {
                    color: null, // set to null for default or refer to the comment above for details
                    alignment: "center", // "left" | "center" | "right" | "justify" | null (e.g. "center" or null for default)
                    fontWeight: null, // "normal" | "medium" | "semibold" | "bold" | "extrabold" | null (e.g. "bold" or null for default) 
                    container: {
                        maxWidth: "800px", // percentage with step of 10% | pixel value 100-1000px with step of 100px | null for default (e.g. "700px" or "60%" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                        position: "center", // "start" | "center" | "end" | null (e.g. "center" or null for default). Warning: cannot be use together with 'container:fullScreen'.
                        fullScreen: false, // true | false - if true, the content will be rendered across the full width of the screen. Warning: cannot be use together with 'container:maxWidth' or 'container:position'.
                    },
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
                    }
                }
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
                    }
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
                    }
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
                    }
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
                    }
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
                }
            }
        ],
    },
    {
        id: 3,
        isShown: true,
        type: "Empty Template",
        title: "Project Sample 3",
        shortDescription: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
        image: "/images/projects/project-sample-3/hero-image.jpg",

        detailsPage: [
            // start with adding a new section
        ],
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