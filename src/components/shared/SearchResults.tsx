
import Loader from "./Loader";
import GridPostList from "./GridPostList";

type SearchResultProps = {
   isSearchFetching : boolean;
   searchedPosts: any;
}

const SearchResults = ({isSearchFetching, searchedPosts}: SearchResultProps) => {
   if(isSearchFetching) return <Loader />

  if(searchedPosts && searchedPosts.documents.length > 0) {
    return (
      <GridPostList posts={searchedPosts.documents} />
    )
  }
  return (
   <p className="text-light-4 text-center w-full mt-10">No results found</p>
  )
}

export default SearchResults