type Props = {
  params: { searchTerm: string };
};

export default function SearchPage({ params: { searchTerm } }: Props) {
  return <div>{searchTerm}</div>;
}
