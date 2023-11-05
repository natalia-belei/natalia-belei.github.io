const contacts = {
    ownerFullName: "Natalia Belei",
    ownerInitials: "NB",
    ownerEmail: "mailto:beley.natalija@gmail.com",
    linkedInProfile: "https://www.linkedin.com/in/natalia-belei-297077201/",
    pinterestProfile: "https://pinterest.com",
    behanceProfile: "https://www.behance.net/natalibelei",
    externalLink: "https://google.com",
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