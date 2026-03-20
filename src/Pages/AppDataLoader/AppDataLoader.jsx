let appDataCache = null;

export const appDataLoader = async () => {
    if (appDataCache) return appDataCache;

    const res = await fetch("/AppData.json");
    const data = await res.json();
    appDataCache = data;

    return data;
};