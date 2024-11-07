import { FilterQuery, Query } from "mongoose";

export class QueryBuilder<T> {
  public modelQuery: Query<T[], T>;
  public query: Record<string, unknown>;

  constructor(modelQuery: Query<T[], T>, query: Record<string, unknown>) {
    this.query = query;
    this.modelQuery = modelQuery;
  }
  //*   Search method =================================>
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
  public sort(sortby: string) {
    let sortBy = sortby;
    if (this.query?.sortBy) {
      sortBy = this.query.sortBy as string;
    }
    this.modelQuery = this.modelQuery.sort(sortBy);
    return this;
  }
  //*   Fields Filtering Method =================================>
  public fields() {
    let fields = "";
    if (this.query?.fields) {
      fields = (this.query?.fields as string).split(",").join(" ");
      //OutputExample: 'title releaseDate'
    }
    this.modelQuery = this.modelQuery.select(fields);
    return this;
  }
  //*   Filter Method =================================>
  public filter(excludeField?: string[]) {
    // copied from original payload object
    // and exclude query before resolve the promise
    const queryObj = { ...this.query };
    const excludeFields = excludeField || [
      "searchTerm",
      "limit",
      "page",
      "sortBy",
      "fields",
    ];
    excludeFields.forEach((field: string) => delete queryObj[field]);

    // now resolve the promise ======================>
    this.modelQuery = this.modelQuery.find(queryObj as FilterQuery<T>);
    return this;
  }
}

//  Example: new QueryBuilder(Movie.find({}), query)
