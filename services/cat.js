export const fetchRandomCat = async () => {
  try {
    const res = await fetch('https://aws.random.cat/meow');

    if (res.status !== 200) {
      return null;
    }

    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
};
