export const PROJECT_BLOCK_SIZE = Object.freeze({
    narrow: 0,
    wide: 1
});

const contacts = {
    ownerFullName: "Natalia Belei",
    ownerInitials: "NB",
    ownerEmail: "mailto:beley.natalija@gmail.com",
    linkedInProfile: "https://www.linkedin.com/in/natalia-belei-297077201/",
    pinterestProfile: null,
    behanceProfile: "https://www.behance.net/natalibelei",
    externalLink: null,
    resumePath: "/dummy.pdf",
};

const pages = {
    index: {
        mainTitle: "Transforming Vision Into Reality Through Design",
        meta: {
            title: `${contacts.ownerFullName} | Portfolio`,
            description: "UI/UX Designer Portfolio.",
            profilePicAlt: contacts.ownerFullName,
        }
    },
    about: {
        mainTitle: "Igniting Passion with Purpose!",
        satisfiedClients: 50,
        projectsCompleted: 25,
        yearsOfExperience: 5,
        meta: {
            title: `${contacts.ownerFullName} | About`,
            description: "Experienced UI/UX Designer specializing in creating user-friendly interfaces.",
            profilePicAlt: contacts.ownerFullName,
        }
    },
    projects: {
        mainTitle: "Imagination Triumphs over Knowledge!",

        project1: {
            isShown: true,
            blockSize: PROJECT_BLOCK_SIZE.wide,
            type: "Type of Project 1",
            title: "Project 1",
            summary: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.",
        },
        project2: {
            isShown: true,
            blockSize: PROJECT_BLOCK_SIZE.narrow,
            type: "Type of Project 2",
            title: "Project 2",
            summary: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula.",
        },
        project3: {
            isShown: true,
            blockSize: PROJECT_BLOCK_SIZE.narrow,
            type: "Type of Project 3",
            title: "Project 3",
            summary: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula.",
        },
        project4: {
            isShown: true,
            blockSize: PROJECT_BLOCK_SIZE.wide,
            type: "Type of Project 4",
            title: "Project 4",
            summary: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.",
        },
        project5: {
            isShown: true,
            blockSize: PROJECT_BLOCK_SIZE.narrow,
            type: "Type of Project 5",
            title: "Project 5",
            summary: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula.",
        },
        project6: {
            isShown: true,
            blockSize: PROJECT_BLOCK_SIZE.narrow,
            type: "Type of Project 6",
            title: "Project 6",
            summary: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula.",
        },
        project7: {
            isShown: true,
            blockSize: PROJECT_BLOCK_SIZE.wide,
            type: "Type of Project 7",
            title: "Project 7",
            summary: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.",
        },
        project8: {
            isShown: true,
            blockSize: PROJECT_BLOCK_SIZE.narrow,
            type: "Type of Project 8",
            title: "Project 8",
            summary: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula.",
        },
        project9: {
            isShown: true,
            blockSize: PROJECT_BLOCK_SIZE.narrow,
            type: "Type of Project 9",
            title: "Project 9",
            summary: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula.",
        },

        meta: {
            title: `${contacts.ownerFullName} | Projects`,
            description: "UI/UX Designer Projects.",
        }
    },
};

const config = {
    isUnderConstruction: true,
    contacts: contacts,
    pages: pages
};

export default config;