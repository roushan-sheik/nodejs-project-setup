// =======================>|| ValidationError Object || <========================>
//! ১. Validation Error
//? উদাহরণ: যদি কোনো ডকুমেন্টে ডিফাইন্ড স্কিমার ফিল্ডের জন্য ভুল ধরনের ডেটা প্রদান করা হয়,
//? অথবা প্রয়োজনীয় ফিল্ড না থাকে, তবে এই error দেখা দেয়।

export const ValidationError = {
  errors: {
    description: {
      // নির্দিষ্ট একটা ফিল্ড এর এরর হচ্ছে ValidatorError
      name: "ValidatorError",
      message: "Path `description` is required.",
      properties: {
        message: "Path `description` is required.",
        type: "required",
        path: "description",
      },
      kind: "required",
      path: "description",
    },
    title: {
      name: "ValidatorError",
      message: "Min length should be 6 characters",
      properties: {
        message: "Min length should be 6 characters",
        type: "minlength",
        minlength: 6,
        path: "title",
        value: "Ince",
      },
      kind: "minlength",
      path: "title",
      value: "Ince",
    },
  },
  _message: "Movie validation failed",
  name: "ValidationError",
  message:
    "Movie validation failed: description: Path `description` is required., title: Min length should be 6 characters",
};

//* আবার নাম্বার  এর জায়গা যখন আমরা স্টিং দিয়ে দেই তখন আমদের ValidationError এর
//* মাঝেে আমাদের ValidatorError এর সাথে CastError ও দেয় যেমন,
//! উদাহরণ:
//? ধরি আপনি একটি মডেলের viewCount নামক ফিল্ডে Number টাইপের ভ্যালু আশা করছেন,
//? কিন্তু আপনি সেখানে ভুলবশত একটি স্ট্রিং (যেমন "Hello") পাঠালেন।
//? একই সাথে আপনার স্কিমায় title ফিল্ডের মিনিমাম লেন্থ ৬ দেওয়া আছে,
//? কিন্তু আপনি সেখানে "Ince" পাঠালেন, যা ভ্যালিডেশন ফেল করবে।

export const ValidatorAndCastError = {
  errors: {
    viewCount: {
      stringValue: '"Hello"',
      valueType: "string",
      kind: "Number",
      value: "Hello",
      path: "viewCount",
      reason: {
        generatedMessage: true,
        code: "ERR_ASSERTION",
        actual: false,
        expected: true,
        operator: "==",
      },
      name: "CastError",
      message:
        'Cast to Number failed for value "Hello" (type string) at path "viewCount"',
    },
    title: {
      name: "ValidatorError",
      message: "Min length should be 6 characters",
      properties: {
        message: "Min length should be 6 characters",
        type: "minlength",
        minlength: 6,
        path: "title",
        value: "Incep",
      },
      kind: "minlength",
      path: "title",
      value: "Incep",
    },
  },
  _message: "Movie validation failed",
  name: "ValidationError",
  message:
    'Movie validation failed: viewCount: Cast to Number failed for value "Hello" (type string) at path "viewCount", title: Min length should be 6 characters',
};
//? NOTE: একের অধিক মিলে হচ্ছে ValidationError এরর

//* ======================>|| CastError Object || <=======================>

//? ২. Cast Error
//? উদাহরণ: যখন MongoDB এর জন্য অনুপযুক্ত ধরনের ডেটা পাঠানো হয়,
//? যেমন একটি ObjectId ক্ষেত্রের জন্য ভুল ধরনের মান প্রদান করলে।

export const CastError = {
  stringValue: '"66c8106d0834e0496ca0c3"',
  valueType: "string",
  kind: "ObjectId",
  value: "66c8106d0834e0496ca0c3",
  path: "_id",
  reason: {},
  name: "CastError",
  message:
    'Cast to ObjectId failed for value "66c8106d0834e0496ca0c3" (type string) at path "_id" for model "Movie"',
};
//* =======================>|| Duplicate Key Error Object || <========================>

//? ৩. Duplicate Key Error (E11000)
//? উদাহরণ: যখন একটি ডকুমেন্টে এমন একটি ক্ষেত্র থাকে যেটি unique প্রপার্টি সহ
//? ডিফাইন করা আছে এবং সেই ক্ষেত্রে একই মান দিয়ে দ্বিতীয়বার ইনসার্ট করার চেষ্টা করা হয়।

export const DuplicateError = {
  errorResponse: {
    index: 0,
    code: 11000,
    errmsg:
      'E11000 duplicate key error collection: mongoose-ts.movies index: title_1 dup key: { title: "InceptionMovie" }',
    keyPattern: {
      title: 1,
    },
    keyValue: {
      title: "InceptionMovie",
    },
  },
  index: 0,
  code: 11000,
  keyPattern: {
    title: 1,
  },
  keyValue: {
    title: "InceptionMovie",
  },
};

//* ======================>|| CastError Object || <========================>

//?      if (err.name === "ZodError") {
//?        console.log(err);
//?        res.status(400).json({ message: err?.issues });
//?      }

export const ZodError = {
  issues: [
    {
      code: "invalid_type",
      expected: "string",
      received: "undefined",
      path: ["releaseDate"],
      message: "Required",
    },
    {
      code: "invalid_type",
      expected: "string",
      received: "undefined",
      path: ["genre"],
      message: "Required",
    },
  ],
  addIssue: [Function()],
  addIssues: [Function()],
  errors: [
    {
      code: "invalid_type",
      expected: "string",
      received: "undefined",
      path: [Array],
      message: "Required",
    },
    {
      code: "invalid_type",
      expected: "string",
      received: "undefined",
      path: [Array],
      message: "Required",
    },
  ],
};

//! ============> The End <==============
