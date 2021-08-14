//container component so no folder as no styling
//API
import API from '../API'
//Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';
//Components
import HeroImage from './HeroImage';
import Grid from './Grid';
import Thumb from './Thumb';
import Spinner from './Spinner';
import SearchBar from './SearchBar';
import Button from './Button';
//Hook
import { useHomeFetch } from '../hooks/useHomeFetch'
//Image
import NoImage from '../images/no_image.jpg';

const Home = () => { //all react components have a capital first letter
    const { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore } = useHomeFetch()

    console.log(state)

    if(error) return <div>Something went wrong...</div>

    return (
        <>
            {!searchTerm && state.results[0] && 
            <HeroImage
                image = { `${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                title = {state.results[0].original_title}
                text={state.results[0].overview}
             />
            }
            <SearchBar setSearchTerm={setSearchTerm} />
            {/* or: {state.results[0] ? <HeroImage /> : null} */}
            <Grid header={searchTerm ? `Search Results for ${searchTerm}:` : 'Popular Movies'}>
                {state.results.map(movie => (
                    <Thumb
                        key={movie.id}
                        clickable
                        image={
                            movie.poster_path
                                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                                : NoImage
                        }
                        movieId={movie.id}
                        callBack={() => alert("Movie not found")}
                     />
                    // <div key = {movie.id}>
                    //     {movie.title}
                    // </div>
                ))}
            </Grid>
            {loading && <Spinner />}
            {state.page < state.total_pages && !loading && (
                <Button text='Load More' callback={() => setIsLoadingMore(true)} />
            )}
        </>
    )
    
}

export default Home