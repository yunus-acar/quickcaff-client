export const GRAPHQL_API = {
  url: process.env.NEXT_PUBLIC_GRAPHQL_API_URL,
  wss: process.env.NEXT_PUBLIC_GRAPHQL_API_WSS,
};

export const CDN_URL = process.env.NEXT_PUBLIC_CDN_URL;

export const queryKeys = [
  {
    key: "temperature",
    label: "Sıcaklık",
    isMultiple: false,
    title: "Kahve Sıcaklığı Seçimi",
    description:
      "Kahvenizi nasıl tercih edersiniz? Lütfen sıcaklık seçiminizi yapın.",
    translations: {
      hot: "Sıcak",
      iced: "Soğuk",
    },
  },
  {
    key: "density",
    label: "Yoğunluk",
    isMultiple: false,
    title: "Kahve Yoğunluğu Seçimi",
    description:
      "Kahvenizin yoğunluğunu nasıl tercih edersiniz? Lütfen seçiminizi yapın.",
    translations: {},
  },
  {
    key: "flavors",
    label: "Lezzet Profili",
    isMultiple: true,
    title: "Kahve Aroması Seçimi",
    description:
      "Hangi kahve aromasını tercih edersiniz? Lütfen aromayı seçin.",
    translations: {},
  },
  {
    key: "pairing_suggestions",
    label: "Eşleşme Önerileri",
    isMultiple: true,
    title: "Kahve Eşleşme Önerileri",
    description:
      "Kahvenizi hangi yiyeceklerle eşleştirmek istersiniz? Lütfen seçiminizi yapın.",
    translations: {},
  },
  {
    key: "others",
    label: "Diğer",
    isMultiple: true,
    title: "Diğer Tercihler",
    description:
      "Kahve tercihlerinizde başka hangi özellikleri önemlersiniz? Lütfen seçiminizi yapın.",
    translations: {},
  },
];
