import { useRouter } from 'next/router';

export default function CountryDetails() {
  const {
    query: { id },
  } = useRouter();
  return <h1>Country Details {id}</h1>;
}
