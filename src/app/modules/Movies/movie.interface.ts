export interface IReview {
  email: string;
  rating: number;
  comment: string;
}

export interface IMovie {
  title: string;
  description: string;
  releaseDate: string;
  genre: string;
  isDeleted: boolean;
  viewCount: number;
  reviews: IReview[];
}
