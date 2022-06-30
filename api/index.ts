const KEY = "QjMwskBJVDuuVwHxmJuI";
const SECRET = "oJQZXITXAiAYDBdzvOUgdKIoWnTLvlQn";
const USERNAME = "joelsrubin";

export async function getCollections(): Promise<Info> {
  const data = await fetch(
    `https://api.discogs.com/users/${USERNAME}/collection/folders/0/releases?&key=${KEY}&secret=${SECRET}`
  );
  const json = await data.json();
  return json;
}
