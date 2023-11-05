const contacts = {
    ownerFullName: "My Name",
    ownerInitials: "MN",
    ownerEmail: "mailto:myemail@gmail.com",
    linkedInProfile: "https://www.linkedin.com",
    pinterestProfile: "https://pinterest.com",
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
};

const config = {
    isUnderConstruction: true,
    contacts: contacts,
    pages: pages
};

export default config;