import { IMovie } from "./movie.interface";
import Movie from "./movie.model";
// import { format } from "date-fns";
// import slugify from "slugify";

// create movie
const createMovie = async (payload: IMovie) => {
  // const date = format(payload.releaseDate, "dd-MM-yyyy");
  // const slug = slugify(`${payload.title}-${date}`, { lower: true, trim: true });

  const result = new Movie(payload);
  result.slug = Movie.createSlug(payload);

  await result.save();
  return result;
};

//? get all movies ========================>
const getAllMovie = async (payload: Record<string, string | unknown>) => {
  let searchTerm = "";
  if (payload.searchTerm) {
    searchTerm = payload.searchTerm as string;
  }
  const searchFields = ["title", "genre"];

  const searchedMovies = Movie.find({
    $or: searchFields.map((field: string) => {
      return {
        [field]: { $regex: searchTerm, $options: "is" },
      };
    }),
  });
  // Pagination
  const limit: number = Number(payload?.limit || 10);
  let skip: number = 0;

  if (payload?.page) {
    const page: number = Number(payload?.page || 1);
    skip = Number((page - 1) * limit);
  }

  const skipedQuery = searchedMovies.skip(skip);
  const limitQuery = skipedQuery.limit(limit);
  // Sorting ====================>
  let sortBy = "-releaseDate";
  if (payload?.sortBy) {
    sortBy = payload.sortBy as string;
  }
  const sortedItems = limitQuery.sort(sortBy);

  // field filtering  =========================>
  let fields = "";
  if (payload?.fields) {
    fields = (payload?.fields as string).split(",").join(" ");
    //OutputExample: 'title releaseDate'
  }
  const fieldQuery = sortedItems.select(fields);

  //? copied from original payload object
  // and exclude query before resolve the promise
  const queryObj = { ...payload };
  const excludeFields = ["searchTerm", "limit", "page", "sortBy", "fields"];
  excludeFields.forEach((field: string) => delete queryObj[field]);

  // now resolve the promise ======================>
  const result = await fieldQuery.find(queryObj);

  return result;
};
//? get movie by id =======================>
const getMovieById = async (id: string) => {
  return await Movie.findById(id);
};
//? get movie by slug ======================>
const getMovieBySlug = async (slug: string) => {
  return Movie.findOne({ slug });
};

export const MovieService = {
  createMovie,
  getAllMovie,
  getMovieById,
  getMovieBySlug,
};
