import { createCitySituationRoute } from '@/lib/citySituationRoute';

const route = createCitySituationRoute('inherited');

export const dynamicParams = false;
export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;

export default route.CitySituationRoutePage;
