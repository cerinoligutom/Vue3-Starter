import { changeLanguage as changeAppLanguage } from '@/plugins/fluent';
import { computed } from 'vue';
import { SupportedLanguage } from '../constants/supported-language';
import { useAppStorage } from './use-app-storage';

const language = useAppStorage<SupportedLanguage>('lang', SupportedLanguage.EN, { prefix: '' });

export const useLanguage = () => {
  function changeLanguage(lang: SupportedLanguage) {
    language.value = lang;
    changeAppLanguage(lang);
  }

  const currentLanguage = computed(() => language.value);

  return {
    changeLanguage,
    currentLanguage,
  };
};
