const descriptions = {
    "AITSL1.1": "Know students and how they learn",
    "real-world": "Use of real world contexts to make math interesting."
}

export function getTagDescription(tag) {
    return descriptions[tag] || null;
}