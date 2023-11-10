import { contactsConfig } from "./contacts.js";

export const aboutPageConfig = {
    meta: {
        title: `${contactsConfig.ownerFullName} | About`,
        description: "Experienced UI/UX Designer specializing in creating user-friendly interfaces.",
        profilePicAlt: contactsConfig.ownerFullName,
    },

    mainTitle: "Igniting Passion with Purpose!",
    profilePicture: "/images/profile/profile-pic-2.png",
    summary: [
        // Use markdown syntax for formatting, e.g. **bold text**, *italic text*, etc., see https://www.markdownguide.org/basic-syntax/
        "Hello, I'm **Natalia Belei**, UI/UX designer driven by my passion to craft stunning, functional, and user-centric digital experiences. With a rich 3-year journey in this domain, I&apos;m continually exploring fresh and innovative approaches to transform my clients&apos; visions into reality.",
        "I firmly believe that design transcends mere aesthetics; it&apos;s a tool for problem-solving and creating intuitive, delightful user interactions.",
        "I bring unwavering dedication to design excellence and user-focused principles to every project I undertake. I eagerly anticipate the opportunity to channel my expertise and enthusiasm into your forthcoming venture.",
    ],
    satisfiedClients: 50,
    projectsCompleted: 25,
    yearsOfExperience: 3,
}