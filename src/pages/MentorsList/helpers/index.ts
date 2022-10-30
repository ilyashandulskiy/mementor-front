import { MentorsListFilters } from 'pages/MentorsList/MentorsList';

export const normalizeFilters = ({
  search,
  grade,
  experienceSince,
  minPrice,
  maxPrice,
}: MentorsListFilters) => ({
  search: search || undefined,
  //@ts-ignore
  grade: grade?.split(','),
  experienceSince: experienceSince || undefined,
  minPrice: minPrice || undefined,
  maxPrice: maxPrice || undefined,
});
