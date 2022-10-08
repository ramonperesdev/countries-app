import { useRouter } from 'next/router';

export default function CountryDetails() {
  const {
    query: { name },
  } = useRouter();
  return <h1>Country Details {name}</h1>;
}
