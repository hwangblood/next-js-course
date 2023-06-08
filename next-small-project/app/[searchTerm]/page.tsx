import getWikiResults from "@/lib/getWikiResults";

type Props = {
  params: { searchTerm: string };
};

export async function generateMetadata({ params: { searchTerm } }: Props) {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
  const data = await wikiData;
  // "%20" is space is search URL, just make it readable
  const displayTerm = searchTerm.replaceAll("%20", " ");

  if (!data?.query?.pages) {
    return { title: `${displayTerm} Not Found` };
  }

  return {
    title: displayTerm,
    desccription: `Search results for ${displayTerm}`,
  };
}

export default async function SearchResults({ params: { searchTerm } }: Props) {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
  const data = await wikiData;

  const results: Result[] | undefined = data?.query?.pages;
  const content = (
    <main className="bg-slate-200 mx-auto max-w-lg py-1 min-h-screen">
      {results ? (
        Object.values(results).map((result, index) => {
          return <p key={index}>{JSON.stringify(result)}</p>;
        })
      ) : (
        <h2 className="p-2 text-xl">{`${searchTerm} Not Found!`}</h2>
      )}
    </main>
  );
  return content;
}
