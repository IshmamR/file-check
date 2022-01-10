const file_map = {
  png: "89504E470D0A1A0A",
  jpg: "FFD8FF",
  jpeg: "FFD8FF",
  gif: "47494638",
  psd: "38425053",
  webm: "1A45DFA3",
  pdf: "255044462D",
  // mp4: "6674797069736F6D",
  // mkv: "1A45DFA3",

  /**
   * TODO:
   * 1. multiple signature types for a file (e.g.: mp3)
   * 2. unknown bytes in signatures (e.g.: webp)
   * 3. video files support (research more into mpeg file signatures)
   */
};

export type TFileTypes = keyof typeof file_map;

export default file_map;
