const speakers = [
  {
    name: "Parmida Beigi",
    pronouns: "they/them",
    talkTitle: "Unmask AI",
    title: "Amazon AI Tech Lead",
    portraits: [
      "/speaker-section/speaker-parmida-1.jpg",
      // "/speaker-section/speaker-parmida-2.jpg",
      // "/speaker-section/speaker-parmida-3.jpg",
    ],
    blurHash:
      "data:image/webp;base64,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",
  },
  {
    name: "Micky Papa",
    pronouns: "they/them",
    talkTitle: "Unmask Skateboarding",
    title: "Tokyo 2020 Olympian & Pro Skateboarder",
    portraits: ["/speaker-section/speaker-micky.jpg"],
    blurHash:
      "data:image/webp;base64,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",
  },
  {
    name: "Vladimir Kanic",
    pronouns: "they/them",
    talkTitle: "Unmask Breathing",
    title: "Governor General Award-winning artist",
    portraits: ["/speaker-section/speaker-vladimir.jpg"],
    blurHash:
      "data:image/webp;base64,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",
  },

  {
    name: "Chris Wilson",
    pronouns: "they/them",
    talkTitle: "Unmask Career Norms",
    title: "Former Helicopter Pilot & Career Coach",
    portraits: ["/speaker-section/speaker-chris.jpg"],
    blurHash:
      "data:image/webp;base64,UklGRsQFAABXRUJQVlA4WAoAAAAgAAAAZQIASwMASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDgg1gMAAHByAJ0BKmYCTAM+bTaZSaQjIqEgCACADYlpbuF3YRtACewD32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ychvAAD+/+mzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=",
  },
  {
    name: "Janice Bannister",
    pronouns: "they/them",
    talkTitle: "Unmask Comedy",
    title: "Psychiatric Nurse & Stand Up Comedian",
    portraits: ["/speaker-section/speaker-janice.jpg"],
    blurHash:
      "data:image/webp;base64,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",
  },
  {
    name: "Sumaiya Tufail",
    pronouns: "they/them",
    talkTitle: "Unmask Poetry",
    title: "Slam Poet & Consultant",
    portraits: ["/speaker-section/speaker-sumaiya.jpg"],
    blurHash:
      "data:image/webp;base64,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",
  },
  {
    name: "Tiara Cash",
    pronouns: "they/them",
    talkTitle: "Unmask Radical Rest",
    title: "Mindfulness Practitioner & PhD Student",
    portraits: ["/speaker-section/speaker-tiara.jpg"],
    blurHash:
      "data:image/webp;base64,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",
  },
  {
    name: "Hayley Honeyman",
    pronouns: "they/them",
    talkTitle: "Unmask ADHD",
    title: "ADHD Advocate & Internet Personality",
    portraits: ["/speaker-section/speaker-hayley.jpg"],
    blurHash:
      "data:image/webp;base64,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",
  },
];

export default speakers;
