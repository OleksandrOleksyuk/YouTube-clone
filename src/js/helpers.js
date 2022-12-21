export const getJSON = async function (url) {
  try {
    const resolve = await fetch(url);
    const data = await resolve.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};
