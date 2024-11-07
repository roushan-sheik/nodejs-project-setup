import { FilterQuery, Query } from "mongoose";

export class QueryBuilder<T> {
  public modelQuery: Query<T[], T>;
  public query: Record<string, unknown>;

  constructor(modelQuery: Query<T[], T>, query: Record<string, unknown>) {
    this.query = query;
    this.modelQuery = modelQuery;
  }
  //*   search method =================================>
  public search(searchAbleFields: string[] = ["title"]) {
    let searchTerm = "";
    if (this.query.searchTerm) {
      searchTerm = this.query.searchTerm as string;
    }

    this.modelQuery = this.modelQuery.find({
      $or: searchAbleFields.map((field: string) => {
        return {
          [field]: { $regex: searchTerm, $options: "is" },
        } as FilterQuery<T>;
      }),
    });
    return this;
  }
  //*   Pagination Method =================================>
  public paginate() {
    const limit: number = Number(this.query?.limit || 10);
    let skip: number = 0;

    if (this.query?.page) {
      const page: number = Number(this.query?.page || 1);
      skip = Number((page - 1) * limit);
    }

    this.modelQuery = this.modelQuery.skip(skip);
    this.modelQuery = this.modelQuery.limit(limit);
    return this;
  }
  //*   Sorting Method =================================>
  public sort() {}
}

//  Example: new QueryBuilder(Movie.find({}), query)
