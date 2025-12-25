import { ui, defaultLang } from "./ui";

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return (
      ui[lang.toLowerCase() as keyof typeof ui][key] || ui[defaultLang][key]
    );
  };
}
