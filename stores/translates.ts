import type { LocationQueryValue } from 'vue-router';

import skillsJsonEn from '~/translate/translatesEn.json';
import skillsJsonUa from '~/translate/translatesUa.json';

export const useTranslatesStore = defineStore('translates', {
  state: () => {
    return {
      translates: {} as any,
    };
  },

  getters: {
    translatesExist: (state): boolean =>
      Object.keys(state.translates).length !== 0,
  },

  actions: {
    setTranslates(payload: string | LocationQueryValue[]) {
      if (payload === 'en') {
        this.translates = skillsJsonEn;

        return;
      }

      this.translates = skillsJsonUa;
    },
  },
});
