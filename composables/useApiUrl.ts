export const useApiUrl = (): string => {
  const config = useRuntimeConfig();

  return config.public.apiBaseUrl;
};
