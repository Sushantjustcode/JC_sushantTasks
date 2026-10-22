export const REGEX = {
    name: /^[A-Za-z][A-Za-z\s.'-]{1,49}$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^\+?\d{10}$/,
    // linkedin: /^?linkedin\.com\/in\/[A-Za-z0-9-]+\/?$/i,
    twitter: /^@?[A-Za-z0-9_]{1,15}$/,
    imageType: /^image\/(jpeg|jpg|png|webp)$/i,
    profileRoute: /^\/profiles\/([0-9]+)(?:\/edit)?$/,
};

export function validateProfile(profile) {
    if (!profile) return "Profile data is missing.";

    if (!profile.name || !profile.name.trim()) {
        return "Name is required.";
    }

    if (!REGEX.name.test(profile.name.trim())) {
        return "Name should contain only letters, spaces, dots, apostrophes, or hyphens.";
    }

    if (profile.email && !REGEX.email.test(profile.email.trim())) {
        return "Please enter a valid email address.";
    }

    if (profile.phone && !REGEX.phone.test(profile.phone.trim())) {
        return "Please enter a valid 10-digit phone number (numbers only).";
    }

    // if (profile.linkedin && !REGEX.linkedin.test(profile.linkedin.trim())) {
    //     return "Please enter a valid LinkedIn profile URL.";
    // }

    if (profile.twitter && !REGEX.twitter.test(profile.twitter.trim())) {
        return "Please enter a valid Twitter handle.";
    }

    if (!profile.sections || profile.sections.length === 0) {
        return "At least one section is required.";
    }

    const hasValidSection = profile.sections.some(
        (section) => String(section.title || "").trim()
    );

    if (!hasValidSection) {
        return "Each section must have a title.";
    }

    return "";
}
