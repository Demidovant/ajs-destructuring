export default function getSpecials(character) {
  const result = [];
  for (let i = 0; i < character.special.length; i += 1) {
    const {
      id, name, description = 'Описание недоступно', icon,
    } = character.special[i];
    const obj = {
      id, name, description, icon,
    };
    result.push(obj);
  }
  return result;
}
