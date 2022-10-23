export default {
  limit(text: string, chars: number) {
    if (text.length <= chars) return text;

    return text.slice(0, chars) + '...';
  },
};
