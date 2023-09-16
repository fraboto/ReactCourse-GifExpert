import getGifs from "../../src/utils/getGifs";

describe("Tests for getGifs file  ", () => {
  const category = "Chess";

  test("should return an array of gifs", async () => {
    const gifs = await getGifs(category);

    expect(gifs.length).toBeGreaterThan(0);

    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
