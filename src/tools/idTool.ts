export default {
  generateInputId: (text: string | undefined) =>
    (text || '').replaceAll(' ', '_').replace(/[,.?!+]/g, ''),
};
