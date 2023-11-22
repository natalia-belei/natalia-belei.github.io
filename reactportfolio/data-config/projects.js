import { contactsConfig } from "./contacts";

export const CONTENT_TYPE = Object.freeze({
    paragraph: 0,
    subTitle: 1,
    image: 2,
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
    'text-indigo',
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

export const projectsData = [
    {
        id: 1,
        isShown: true,
        type: "Type of Project 1",
        title: "Project 1",
        shortDescription: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
        image: "/images/projects/project-1.jpg",

        detailsPage: [
            {
                type: CONTENT_TYPE.paragraph,
                content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.",
            },
            {
                type: CONTENT_TYPE.subTitle,
                content: "Colorful Subtitle",
                color: "primary", // set to null or refer to the comment above for details
                alignment: null // ("left", "center", "right") or null for default
            },
            {
                type: CONTENT_TYPE.paragraph,
                content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.",
                color: "indigo", // set to null or refer to the comment above for details
                alignment: null // ("left", "center", "right", "justify") or null for default
            },
            {
                type: CONTENT_TYPE.image,
                images: [
                    // max 4 images per column
                    "/images/projects/image-placeholder.jpg",
                    "/images/projects/image-placeholder.jpg",
                ],
            },
            {
                type: CONTENT_TYPE.paragraph,
                content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.",
            },
            {
                type: CONTENT_TYPE.subTitle,
                content: "Centered Subtitle with justified text",
                color: null, // set to "null" or refer to the comment above for details
                alignment: "center" // (left, center, right) or null for default
            },
            {
                type: CONTENT_TYPE.paragraph,
                content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.",
                color: null, // set to "null" or refer to the comment above for details
                alignment: "justify" // (left, center, right, justify) or null for default
            },
            {
                type: CONTENT_TYPE.image,
                images: [
                    // max 4 images per column
                    "/images/projects/image-placeholder.jpg",
                    "/images/projects/image-placeholder.jpg",
                    "/images/projects/image-placeholder.jpg",
                    "/images/projects/image-placeholder.jpg"
                ],
            },
        ],
    },
    {
        id: 2,
        isShown: true,
        type: "MOBILE APP",
        title: "Pet food delivery service",
        shortDescription: "The app is designed to provide a convenient and hassle-free solution for pet owners.",
        image: "/images/projects/project-2.jpg",

        detailsPage: [
            {
                type: CONTENT_TYPE.subTitle,
                content: "Project Overview",
                color: "primary", // set to null or refer to the comment above for details
                alignment: null // ("left", "center", "right") or null for default
            },
            {
                type: CONTENT_TYPE.paragraph,
                content: "The pet food delivery service app is designed to provide a convenient and hassle-free solution for pet owners to meet their pets nutritional needs. The target users of the app are tech-savvy pet owners, primarily residing in urban areas, who prioritize their pets' health, seek cost-effective options, and embrace the convenience of mobile apps for their pet-related needs.",
",
                color: "primary", // set to null or refer to the comment above for details
                alignment: null // ("left", "center", "right", "justify") or null for default
            },
            {
                type: CONTENT_TYPE.image,
                images: [
                    // max 4 images per column
                    "/images/projects/image-placeholder.jpg",
                    "/images/projects/image-placeholder.jpg",
                ],
            },
            {
                type: CONTENT_TYPE.paragraph,
                content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.",
            },
            {
                type: CONTENT_TYPE.subTitle,
                content: "Centered Subtitle with justified text",
                color: null, // set to "null" or refer to the comment above for details
                alignment: "center" // (left, center, right) or null for default
            },
            {
                type: CONTENT_TYPE.paragraph,
                content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.",
                color: null, // set to "null" or refer to the comment above for details
                alignment: "justify" // (left, center, right, justify) or null for default
            },
            {
                type: CONTENT_TYPE.image,
                images: [
                    // max 4 images per column
                    "/images/projects/image-placeholder.jpg",
                    "/images/projects/image-placeholder.jpg",
                    "/images/projects/image-placeholder.jpg",
                    "/images/projects/image-placeholder.jpg"
                ],
            },
        ],
    },
    {
        id: 3,
        isShown: true,
        type: "Type of Project 3",
        title: "Project 3",
        shortDescription: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
        image: "/images/projects/project-3.jpg",

        detailsPage: [
            {
                type: CONTENT_TYPE.paragraph,
                content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.",
            },
            {
                type: CONTENT_TYPE.subTitle,
                content: "Colorful Subtitle",
                color: "primary", // set to null or refer to the comment above for details
                alignment: null // ("left", "center", "right") or null for default
            },
            {
                type: CONTENT_TYPE.paragraph,
                content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.",
                color: "indigo", // set to null or refer to the comment above for details
                alignment: null // ("left", "center", "right", "justify") or null for default
            },
            {
                type: CONTENT_TYPE.image,
                images: [
                    // max 4 images per column
                    "/images/projects/image-placeholder.jpg",
                    "/images/projects/image-placeholder.jpg",
                ],
            },
            {
                type: CONTENT_TYPE.paragraph,
                content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.",
            },
            {
                type: CONTENT_TYPE.subTitle,
                content: "Centered Subtitle with justified text",
                color: null, // set to "null" or refer to the comment above for details
                alignment: "center" // (left, center, right) or null for default
            },
            {
                type: CONTENT_TYPE.paragraph,
                content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.",
                color: null, // set to "null" or refer to the comment above for details
                alignment: "justify" // (left, center, right, justify) or null for default
            },
            {
                type: CONTENT_TYPE.image,
                images: [
                    // max 4 images per column
                    "/images/projects/image-placeholder.jpg",
                    "/images/projects/image-placeholder.jpg",
                    "/images/projects/image-placeholder.jpg",
                    "/images/projects/image-placeholder.jpg"
                ],
            },
        ],
    },
];
