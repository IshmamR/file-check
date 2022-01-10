import file_map, { TFileTypes } from "./file_map";

export default function validateFile(
  file: Buffer,
  types: Array<TFileTypes>
): boolean {
  let str = "";
  let length = 0;
  let no_supp = 0;

  types.every((type, i) => {
    if (!file_map[type]) {
      console.error(
        new Error(`${type} type is not supported. Will return false`)
      );
      no_supp = 1;
      return false;
    } else {
      str += i < types.length - 1 ? `${file_map[type]}|` : `${file_map[type]}`;
      length = file_map[type]?.length > length ? file_map[type].length : length;
      return true;
    }
  });

  if (no_supp) return false;

  const regex = new RegExp(`^(${str})`, "i");
  console.log(regex);
  const bool = regex.test(file.slice(0, length).toString("hex"));

  return bool;
}
