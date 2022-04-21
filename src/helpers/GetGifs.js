export const getGifs = async ( category ) => {
    const apiKey = "p23FozduG69Yfeq3RGDdF3vTBzBVNFn3";
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
            category
        )}&api_key=${apiKey}&limit=10`;

    const response = await fetch(url);
    const {
        data
    } = await response.json();
    const gifs = data.map(img => {
        return {
            url: img.images.downsized.url,
            title: img.title,
            id: img.id,
        }
    })
    return gifs;
};