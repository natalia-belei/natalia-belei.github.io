import { contactsConfig } from "./contacts.js";

export const aboutPageConfig = {
    meta: {
        title: `${contactsConfig.ownerFullName} | About`,
        description: "Experienced UI/UX Designer specializing in creating user-friendly interfaces.",
        profilePicAlt: contactsConfig.ownerFullName,
    },

    mainTitle: "Exploring My Stories",
    profilePicture: "/images/profile/profile-pic-2.png",
    summary: [
        // Use markdown syntax for formatting, e.g. **bold text**, *italic text*, etc., see https://www.markdownguide.org/basic-syntax/
        "Hello, I'm Natalia Belei, a UI/UX Designer and Marketing Designer.",
        "With a design journey spanning four impactful years, I've navigated the dynamic realms of both agency and freelance work. From collaborating within a creative agency to carving my path as a freelancer, my passion for UI/UX design has been the guiding force.",
        "My journey is further enriched by my experience as a mentor, where I've guided and inspired aspiring designers in the field of UI/UX design, helping them refine their skills and navigate their careers. This mentoring experience has honed my ability to communicate ideas effectively and nurture growth in others. Coupled with a solid foundation in graphic design, my career weaves a narrative of creativity, adaptability, and leadership.",
        "Join me on this visual expedition, where every project is a testament to experience, innovation, and a love for crafting meaningful digital interactions."
    ],

    satisfiedClients: 30,
    projectsCompleted: 25,
    yearsOfExperience: 4,

    experienceSectionTitle: "Experience",
    certificationsSectionTitle: "Licenses & Certifications",
}
