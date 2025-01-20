import { contactsConfig } from "./contacts.js";

export const homePageConfig = {
    meta: {
        title: `${contactsConfig.ownerFullName} | Portfolio`,
        description: "UI/UX Designer Portfolio.",
        profilePicAlt: contactsConfig.ownerFullName,
    },

    mainTitle: "Hello! I’m a Product Designer. ",
    summary: "Passionate about creating designs that inspire and drive results, my journey has taken me through diverse creative fields, from crafting eye-catching marketing campaigns to building user-centered digital experiences.",
    hireMeButton: {
        title: "Let's work together!",
    }
}
