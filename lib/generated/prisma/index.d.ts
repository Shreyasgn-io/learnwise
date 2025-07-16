
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model QuizCard
 * 
 */
export type QuizCard = $Result.DefaultSelection<Prisma.$QuizCardPayload>
/**
 * Model ReviewSchedule
 * 
 */
export type ReviewSchedule = $Result.DefaultSelection<Prisma.$ReviewSchedulePayload>
/**
 * Model Note
 * 
 */
export type Note = $Result.DefaultSelection<Prisma.$NotePayload>
/**
 * Model ExportHistory
 * 
 */
export type ExportHistory = $Result.DefaultSelection<Prisma.$ExportHistoryPayload>
/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model Invoice
 * 
 */
export type Invoice = $Result.DefaultSelection<Prisma.$InvoicePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Playlist
 * 
 */
export type Playlist = $Result.DefaultSelection<Prisma.$PlaylistPayload>
/**
 * Model Video
 * 
 */
export type Video = $Result.DefaultSelection<Prisma.$VideoPayload>
/**
 * Model LearningProgress
 * 
 */
export type LearningProgress = $Result.DefaultSelection<Prisma.$LearningProgressPayload>
/**
 * Model ReviewQueue
 * 
 */
export type ReviewQueue = $Result.DefaultSelection<Prisma.$ReviewQueuePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const QuizType: {
  MULTIPLE_CHOICE: 'MULTIPLE_CHOICE',
  OPEN_ENDED: 'OPEN_ENDED',
  FILL_IN_BLANK: 'FILL_IN_BLANK',
  TIMESTAMP_RECALL: 'TIMESTAMP_RECALL',
  CODING: 'CODING'
};

export type QuizType = (typeof QuizType)[keyof typeof QuizType]

}

export type QuizType = $Enums.QuizType

export const QuizType: typeof $Enums.QuizType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more QuizCards
 * const quizCards = await prisma.quizCard.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more QuizCards
   * const quizCards = await prisma.quizCard.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.quizCard`: Exposes CRUD operations for the **QuizCard** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuizCards
    * const quizCards = await prisma.quizCard.findMany()
    * ```
    */
  get quizCard(): Prisma.QuizCardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reviewSchedule`: Exposes CRUD operations for the **ReviewSchedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReviewSchedules
    * const reviewSchedules = await prisma.reviewSchedule.findMany()
    * ```
    */
  get reviewSchedule(): Prisma.ReviewScheduleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.note`: Exposes CRUD operations for the **Note** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notes
    * const notes = await prisma.note.findMany()
    * ```
    */
  get note(): Prisma.NoteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exportHistory`: Exposes CRUD operations for the **ExportHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExportHistories
    * const exportHistories = await prisma.exportHistory.findMany()
    * ```
    */
  get exportHistory(): Prisma.ExportHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invoice`: Exposes CRUD operations for the **Invoice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invoices
    * const invoices = await prisma.invoice.findMany()
    * ```
    */
  get invoice(): Prisma.InvoiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.playlist`: Exposes CRUD operations for the **Playlist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Playlists
    * const playlists = await prisma.playlist.findMany()
    * ```
    */
  get playlist(): Prisma.PlaylistDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.video`: Exposes CRUD operations for the **Video** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Videos
    * const videos = await prisma.video.findMany()
    * ```
    */
  get video(): Prisma.VideoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.learningProgress`: Exposes CRUD operations for the **LearningProgress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LearningProgresses
    * const learningProgresses = await prisma.learningProgress.findMany()
    * ```
    */
  get learningProgress(): Prisma.LearningProgressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reviewQueue`: Exposes CRUD operations for the **ReviewQueue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReviewQueues
    * const reviewQueues = await prisma.reviewQueue.findMany()
    * ```
    */
  get reviewQueue(): Prisma.ReviewQueueDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    QuizCard: 'QuizCard',
    ReviewSchedule: 'ReviewSchedule',
    Note: 'Note',
    ExportHistory: 'ExportHistory',
    Customer: 'Customer',
    Invoice: 'Invoice',
    User: 'User',
    Playlist: 'Playlist',
    Video: 'Video',
    LearningProgress: 'LearningProgress',
    ReviewQueue: 'ReviewQueue'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "quizCard" | "reviewSchedule" | "note" | "exportHistory" | "customer" | "invoice" | "user" | "playlist" | "video" | "learningProgress" | "reviewQueue"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      QuizCard: {
        payload: Prisma.$QuizCardPayload<ExtArgs>
        fields: Prisma.QuizCardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuizCardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizCardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuizCardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizCardPayload>
          }
          findFirst: {
            args: Prisma.QuizCardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizCardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuizCardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizCardPayload>
          }
          findMany: {
            args: Prisma.QuizCardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizCardPayload>[]
          }
          create: {
            args: Prisma.QuizCardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizCardPayload>
          }
          createMany: {
            args: Prisma.QuizCardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuizCardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizCardPayload>[]
          }
          delete: {
            args: Prisma.QuizCardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizCardPayload>
          }
          update: {
            args: Prisma.QuizCardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizCardPayload>
          }
          deleteMany: {
            args: Prisma.QuizCardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuizCardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuizCardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizCardPayload>[]
          }
          upsert: {
            args: Prisma.QuizCardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizCardPayload>
          }
          aggregate: {
            args: Prisma.QuizCardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuizCard>
          }
          groupBy: {
            args: Prisma.QuizCardGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuizCardGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuizCardCountArgs<ExtArgs>
            result: $Utils.Optional<QuizCardCountAggregateOutputType> | number
          }
        }
      }
      ReviewSchedule: {
        payload: Prisma.$ReviewSchedulePayload<ExtArgs>
        fields: Prisma.ReviewScheduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewScheduleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewSchedulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewScheduleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewSchedulePayload>
          }
          findFirst: {
            args: Prisma.ReviewScheduleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewSchedulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewScheduleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewSchedulePayload>
          }
          findMany: {
            args: Prisma.ReviewScheduleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewSchedulePayload>[]
          }
          create: {
            args: Prisma.ReviewScheduleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewSchedulePayload>
          }
          createMany: {
            args: Prisma.ReviewScheduleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewScheduleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewSchedulePayload>[]
          }
          delete: {
            args: Prisma.ReviewScheduleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewSchedulePayload>
          }
          update: {
            args: Prisma.ReviewScheduleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewSchedulePayload>
          }
          deleteMany: {
            args: Prisma.ReviewScheduleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewScheduleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewScheduleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewSchedulePayload>[]
          }
          upsert: {
            args: Prisma.ReviewScheduleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewSchedulePayload>
          }
          aggregate: {
            args: Prisma.ReviewScheduleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReviewSchedule>
          }
          groupBy: {
            args: Prisma.ReviewScheduleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewScheduleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewScheduleCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewScheduleCountAggregateOutputType> | number
          }
        }
      }
      Note: {
        payload: Prisma.$NotePayload<ExtArgs>
        fields: Prisma.NoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          findFirst: {
            args: Prisma.NoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          findMany: {
            args: Prisma.NoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>[]
          }
          create: {
            args: Prisma.NoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          createMany: {
            args: Prisma.NoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>[]
          }
          delete: {
            args: Prisma.NoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          update: {
            args: Prisma.NoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          deleteMany: {
            args: Prisma.NoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NoteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>[]
          }
          upsert: {
            args: Prisma.NoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          aggregate: {
            args: Prisma.NoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNote>
          }
          groupBy: {
            args: Prisma.NoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<NoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.NoteCountArgs<ExtArgs>
            result: $Utils.Optional<NoteCountAggregateOutputType> | number
          }
        }
      }
      ExportHistory: {
        payload: Prisma.$ExportHistoryPayload<ExtArgs>
        fields: Prisma.ExportHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExportHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExportHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExportHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExportHistoryPayload>
          }
          findFirst: {
            args: Prisma.ExportHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExportHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExportHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExportHistoryPayload>
          }
          findMany: {
            args: Prisma.ExportHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExportHistoryPayload>[]
          }
          create: {
            args: Prisma.ExportHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExportHistoryPayload>
          }
          createMany: {
            args: Prisma.ExportHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExportHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExportHistoryPayload>[]
          }
          delete: {
            args: Prisma.ExportHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExportHistoryPayload>
          }
          update: {
            args: Prisma.ExportHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExportHistoryPayload>
          }
          deleteMany: {
            args: Prisma.ExportHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExportHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExportHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExportHistoryPayload>[]
          }
          upsert: {
            args: Prisma.ExportHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExportHistoryPayload>
          }
          aggregate: {
            args: Prisma.ExportHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExportHistory>
          }
          groupBy: {
            args: Prisma.ExportHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExportHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExportHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<ExportHistoryCountAggregateOutputType> | number
          }
        }
      }
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      Invoice: {
        payload: Prisma.$InvoicePayload<ExtArgs>
        fields: Prisma.InvoiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvoiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvoiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findFirst: {
            args: Prisma.InvoiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvoiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findMany: {
            args: Prisma.InvoiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          create: {
            args: Prisma.InvoiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          createMany: {
            args: Prisma.InvoiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvoiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          delete: {
            args: Prisma.InvoiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          update: {
            args: Prisma.InvoiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          deleteMany: {
            args: Prisma.InvoiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvoiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InvoiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          upsert: {
            args: Prisma.InvoiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          aggregate: {
            args: Prisma.InvoiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvoice>
          }
          groupBy: {
            args: Prisma.InvoiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvoiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvoiceCountArgs<ExtArgs>
            result: $Utils.Optional<InvoiceCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Playlist: {
        payload: Prisma.$PlaylistPayload<ExtArgs>
        fields: Prisma.PlaylistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlaylistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlaylistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          findFirst: {
            args: Prisma.PlaylistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlaylistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          findMany: {
            args: Prisma.PlaylistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>[]
          }
          create: {
            args: Prisma.PlaylistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          createMany: {
            args: Prisma.PlaylistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlaylistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>[]
          }
          delete: {
            args: Prisma.PlaylistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          update: {
            args: Prisma.PlaylistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          deleteMany: {
            args: Prisma.PlaylistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlaylistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlaylistUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>[]
          }
          upsert: {
            args: Prisma.PlaylistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          aggregate: {
            args: Prisma.PlaylistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlaylist>
          }
          groupBy: {
            args: Prisma.PlaylistGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlaylistGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlaylistCountArgs<ExtArgs>
            result: $Utils.Optional<PlaylistCountAggregateOutputType> | number
          }
        }
      }
      Video: {
        payload: Prisma.$VideoPayload<ExtArgs>
        fields: Prisma.VideoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VideoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VideoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          findFirst: {
            args: Prisma.VideoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VideoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          findMany: {
            args: Prisma.VideoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>[]
          }
          create: {
            args: Prisma.VideoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          createMany: {
            args: Prisma.VideoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VideoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>[]
          }
          delete: {
            args: Prisma.VideoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          update: {
            args: Prisma.VideoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          deleteMany: {
            args: Prisma.VideoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VideoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VideoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>[]
          }
          upsert: {
            args: Prisma.VideoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          aggregate: {
            args: Prisma.VideoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVideo>
          }
          groupBy: {
            args: Prisma.VideoGroupByArgs<ExtArgs>
            result: $Utils.Optional<VideoGroupByOutputType>[]
          }
          count: {
            args: Prisma.VideoCountArgs<ExtArgs>
            result: $Utils.Optional<VideoCountAggregateOutputType> | number
          }
        }
      }
      LearningProgress: {
        payload: Prisma.$LearningProgressPayload<ExtArgs>
        fields: Prisma.LearningProgressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LearningProgressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningProgressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LearningProgressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningProgressPayload>
          }
          findFirst: {
            args: Prisma.LearningProgressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningProgressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LearningProgressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningProgressPayload>
          }
          findMany: {
            args: Prisma.LearningProgressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningProgressPayload>[]
          }
          create: {
            args: Prisma.LearningProgressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningProgressPayload>
          }
          createMany: {
            args: Prisma.LearningProgressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LearningProgressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningProgressPayload>[]
          }
          delete: {
            args: Prisma.LearningProgressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningProgressPayload>
          }
          update: {
            args: Prisma.LearningProgressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningProgressPayload>
          }
          deleteMany: {
            args: Prisma.LearningProgressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LearningProgressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LearningProgressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningProgressPayload>[]
          }
          upsert: {
            args: Prisma.LearningProgressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningProgressPayload>
          }
          aggregate: {
            args: Prisma.LearningProgressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLearningProgress>
          }
          groupBy: {
            args: Prisma.LearningProgressGroupByArgs<ExtArgs>
            result: $Utils.Optional<LearningProgressGroupByOutputType>[]
          }
          count: {
            args: Prisma.LearningProgressCountArgs<ExtArgs>
            result: $Utils.Optional<LearningProgressCountAggregateOutputType> | number
          }
        }
      }
      ReviewQueue: {
        payload: Prisma.$ReviewQueuePayload<ExtArgs>
        fields: Prisma.ReviewQueueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewQueueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewQueuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewQueueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewQueuePayload>
          }
          findFirst: {
            args: Prisma.ReviewQueueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewQueuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewQueueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewQueuePayload>
          }
          findMany: {
            args: Prisma.ReviewQueueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewQueuePayload>[]
          }
          create: {
            args: Prisma.ReviewQueueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewQueuePayload>
          }
          createMany: {
            args: Prisma.ReviewQueueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewQueueCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewQueuePayload>[]
          }
          delete: {
            args: Prisma.ReviewQueueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewQueuePayload>
          }
          update: {
            args: Prisma.ReviewQueueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewQueuePayload>
          }
          deleteMany: {
            args: Prisma.ReviewQueueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewQueueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewQueueUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewQueuePayload>[]
          }
          upsert: {
            args: Prisma.ReviewQueueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewQueuePayload>
          }
          aggregate: {
            args: Prisma.ReviewQueueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReviewQueue>
          }
          groupBy: {
            args: Prisma.ReviewQueueGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewQueueGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewQueueCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewQueueCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    quizCard?: QuizCardOmit
    reviewSchedule?: ReviewScheduleOmit
    note?: NoteOmit
    exportHistory?: ExportHistoryOmit
    customer?: CustomerOmit
    invoice?: InvoiceOmit
    user?: UserOmit
    playlist?: PlaylistOmit
    video?: VideoOmit
    learningProgress?: LearningProgressOmit
    reviewQueue?: ReviewQueueOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type QuizCardCountOutputType
   */

  export type QuizCardCountOutputType = {
    reviewSchedules: number
  }

  export type QuizCardCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviewSchedules?: boolean | QuizCardCountOutputTypeCountReviewSchedulesArgs
  }

  // Custom InputTypes
  /**
   * QuizCardCountOutputType without action
   */
  export type QuizCardCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizCardCountOutputType
     */
    select?: QuizCardCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuizCardCountOutputType without action
   */
  export type QuizCardCountOutputTypeCountReviewSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewScheduleWhereInput
  }


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    invoices: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoices?: boolean | CustomerCountOutputTypeCountInvoicesArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountInvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    playlists: number
    notes: number
    progress: number
    reviews: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playlists?: boolean | UserCountOutputTypeCountPlaylistsArgs
    notes?: boolean | UserCountOutputTypeCountNotesArgs
    progress?: boolean | UserCountOutputTypeCountProgressArgs
    reviews?: boolean | UserCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPlaylistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaylistWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LearningProgressWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewQueueWhereInput
  }


  /**
   * Count Type PlaylistCountOutputType
   */

  export type PlaylistCountOutputType = {
    videos: number
  }

  export type PlaylistCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    videos?: boolean | PlaylistCountOutputTypeCountVideosArgs
  }

  // Custom InputTypes
  /**
   * PlaylistCountOutputType without action
   */
  export type PlaylistCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistCountOutputType
     */
    select?: PlaylistCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlaylistCountOutputType without action
   */
  export type PlaylistCountOutputTypeCountVideosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoWhereInput
  }


  /**
   * Count Type VideoCountOutputType
   */

  export type VideoCountOutputType = {
    quizCards: number
    notes: number
    LearningProgress: number
    ReviewQueue: number
  }

  export type VideoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quizCards?: boolean | VideoCountOutputTypeCountQuizCardsArgs
    notes?: boolean | VideoCountOutputTypeCountNotesArgs
    LearningProgress?: boolean | VideoCountOutputTypeCountLearningProgressArgs
    ReviewQueue?: boolean | VideoCountOutputTypeCountReviewQueueArgs
  }

  // Custom InputTypes
  /**
   * VideoCountOutputType without action
   */
  export type VideoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoCountOutputType
     */
    select?: VideoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VideoCountOutputType without action
   */
  export type VideoCountOutputTypeCountQuizCardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizCardWhereInput
  }

  /**
   * VideoCountOutputType without action
   */
  export type VideoCountOutputTypeCountNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteWhereInput
  }

  /**
   * VideoCountOutputType without action
   */
  export type VideoCountOutputTypeCountLearningProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LearningProgressWhereInput
  }

  /**
   * VideoCountOutputType without action
   */
  export type VideoCountOutputTypeCountReviewQueueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewQueueWhereInput
  }


  /**
   * Models
   */

  /**
   * Model QuizCard
   */

  export type AggregateQuizCard = {
    _count: QuizCardCountAggregateOutputType | null
    _avg: QuizCardAvgAggregateOutputType | null
    _sum: QuizCardSumAggregateOutputType | null
    _min: QuizCardMinAggregateOutputType | null
    _max: QuizCardMaxAggregateOutputType | null
  }

  export type QuizCardAvgAggregateOutputType = {
    difficulty: number | null
  }

  export type QuizCardSumAggregateOutputType = {
    difficulty: number | null
  }

  export type QuizCardMinAggregateOutputType = {
    id: string | null
    videoId: string | null
    userId: string | null
    question: string | null
    answer: string | null
    type: $Enums.QuizType | null
    difficulty: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuizCardMaxAggregateOutputType = {
    id: string | null
    videoId: string | null
    userId: string | null
    question: string | null
    answer: string | null
    type: $Enums.QuizType | null
    difficulty: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuizCardCountAggregateOutputType = {
    id: number
    videoId: number
    userId: number
    question: number
    answer: number
    type: number
    difficulty: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type QuizCardAvgAggregateInputType = {
    difficulty?: true
  }

  export type QuizCardSumAggregateInputType = {
    difficulty?: true
  }

  export type QuizCardMinAggregateInputType = {
    id?: true
    videoId?: true
    userId?: true
    question?: true
    answer?: true
    type?: true
    difficulty?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuizCardMaxAggregateInputType = {
    id?: true
    videoId?: true
    userId?: true
    question?: true
    answer?: true
    type?: true
    difficulty?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuizCardCountAggregateInputType = {
    id?: true
    videoId?: true
    userId?: true
    question?: true
    answer?: true
    type?: true
    difficulty?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type QuizCardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizCard to aggregate.
     */
    where?: QuizCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizCards to fetch.
     */
    orderBy?: QuizCardOrderByWithRelationInput | QuizCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuizCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuizCards
    **/
    _count?: true | QuizCardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuizCardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuizCardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuizCardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuizCardMaxAggregateInputType
  }

  export type GetQuizCardAggregateType<T extends QuizCardAggregateArgs> = {
        [P in keyof T & keyof AggregateQuizCard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuizCard[P]>
      : GetScalarType<T[P], AggregateQuizCard[P]>
  }




  export type QuizCardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizCardWhereInput
    orderBy?: QuizCardOrderByWithAggregationInput | QuizCardOrderByWithAggregationInput[]
    by: QuizCardScalarFieldEnum[] | QuizCardScalarFieldEnum
    having?: QuizCardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuizCardCountAggregateInputType | true
    _avg?: QuizCardAvgAggregateInputType
    _sum?: QuizCardSumAggregateInputType
    _min?: QuizCardMinAggregateInputType
    _max?: QuizCardMaxAggregateInputType
  }

  export type QuizCardGroupByOutputType = {
    id: string
    videoId: string
    userId: string
    question: string
    answer: string
    type: $Enums.QuizType
    difficulty: number
    createdAt: Date
    updatedAt: Date
    _count: QuizCardCountAggregateOutputType | null
    _avg: QuizCardAvgAggregateOutputType | null
    _sum: QuizCardSumAggregateOutputType | null
    _min: QuizCardMinAggregateOutputType | null
    _max: QuizCardMaxAggregateOutputType | null
  }

  type GetQuizCardGroupByPayload<T extends QuizCardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuizCardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuizCardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuizCardGroupByOutputType[P]>
            : GetScalarType<T[P], QuizCardGroupByOutputType[P]>
        }
      >
    >


  export type QuizCardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    videoId?: boolean
    userId?: boolean
    question?: boolean
    answer?: boolean
    type?: boolean
    difficulty?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reviewSchedules?: boolean | QuizCard$reviewSchedulesArgs<ExtArgs>
    Video?: boolean | VideoDefaultArgs<ExtArgs>
    _count?: boolean | QuizCardCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizCard"]>

  export type QuizCardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    videoId?: boolean
    userId?: boolean
    question?: boolean
    answer?: boolean
    type?: boolean
    difficulty?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Video?: boolean | VideoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizCard"]>

  export type QuizCardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    videoId?: boolean
    userId?: boolean
    question?: boolean
    answer?: boolean
    type?: boolean
    difficulty?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Video?: boolean | VideoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizCard"]>

  export type QuizCardSelectScalar = {
    id?: boolean
    videoId?: boolean
    userId?: boolean
    question?: boolean
    answer?: boolean
    type?: boolean
    difficulty?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type QuizCardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "videoId" | "userId" | "question" | "answer" | "type" | "difficulty" | "createdAt" | "updatedAt", ExtArgs["result"]["quizCard"]>
  export type QuizCardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviewSchedules?: boolean | QuizCard$reviewSchedulesArgs<ExtArgs>
    Video?: boolean | VideoDefaultArgs<ExtArgs>
    _count?: boolean | QuizCardCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuizCardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Video?: boolean | VideoDefaultArgs<ExtArgs>
  }
  export type QuizCardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Video?: boolean | VideoDefaultArgs<ExtArgs>
  }

  export type $QuizCardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuizCard"
    objects: {
      reviewSchedules: Prisma.$ReviewSchedulePayload<ExtArgs>[]
      Video: Prisma.$VideoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      videoId: string
      userId: string
      question: string
      answer: string
      type: $Enums.QuizType
      difficulty: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["quizCard"]>
    composites: {}
  }

  type QuizCardGetPayload<S extends boolean | null | undefined | QuizCardDefaultArgs> = $Result.GetResult<Prisma.$QuizCardPayload, S>

  type QuizCardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuizCardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuizCardCountAggregateInputType | true
    }

  export interface QuizCardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuizCard'], meta: { name: 'QuizCard' } }
    /**
     * Find zero or one QuizCard that matches the filter.
     * @param {QuizCardFindUniqueArgs} args - Arguments to find a QuizCard
     * @example
     * // Get one QuizCard
     * const quizCard = await prisma.quizCard.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuizCardFindUniqueArgs>(args: SelectSubset<T, QuizCardFindUniqueArgs<ExtArgs>>): Prisma__QuizCardClient<$Result.GetResult<Prisma.$QuizCardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuizCard that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuizCardFindUniqueOrThrowArgs} args - Arguments to find a QuizCard
     * @example
     * // Get one QuizCard
     * const quizCard = await prisma.quizCard.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuizCardFindUniqueOrThrowArgs>(args: SelectSubset<T, QuizCardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuizCardClient<$Result.GetResult<Prisma.$QuizCardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizCard that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizCardFindFirstArgs} args - Arguments to find a QuizCard
     * @example
     * // Get one QuizCard
     * const quizCard = await prisma.quizCard.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuizCardFindFirstArgs>(args?: SelectSubset<T, QuizCardFindFirstArgs<ExtArgs>>): Prisma__QuizCardClient<$Result.GetResult<Prisma.$QuizCardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizCard that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizCardFindFirstOrThrowArgs} args - Arguments to find a QuizCard
     * @example
     * // Get one QuizCard
     * const quizCard = await prisma.quizCard.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuizCardFindFirstOrThrowArgs>(args?: SelectSubset<T, QuizCardFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuizCardClient<$Result.GetResult<Prisma.$QuizCardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuizCards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizCardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuizCards
     * const quizCards = await prisma.quizCard.findMany()
     * 
     * // Get first 10 QuizCards
     * const quizCards = await prisma.quizCard.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quizCardWithIdOnly = await prisma.quizCard.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuizCardFindManyArgs>(args?: SelectSubset<T, QuizCardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizCardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuizCard.
     * @param {QuizCardCreateArgs} args - Arguments to create a QuizCard.
     * @example
     * // Create one QuizCard
     * const QuizCard = await prisma.quizCard.create({
     *   data: {
     *     // ... data to create a QuizCard
     *   }
     * })
     * 
     */
    create<T extends QuizCardCreateArgs>(args: SelectSubset<T, QuizCardCreateArgs<ExtArgs>>): Prisma__QuizCardClient<$Result.GetResult<Prisma.$QuizCardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuizCards.
     * @param {QuizCardCreateManyArgs} args - Arguments to create many QuizCards.
     * @example
     * // Create many QuizCards
     * const quizCard = await prisma.quizCard.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuizCardCreateManyArgs>(args?: SelectSubset<T, QuizCardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuizCards and returns the data saved in the database.
     * @param {QuizCardCreateManyAndReturnArgs} args - Arguments to create many QuizCards.
     * @example
     * // Create many QuizCards
     * const quizCard = await prisma.quizCard.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuizCards and only return the `id`
     * const quizCardWithIdOnly = await prisma.quizCard.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuizCardCreateManyAndReturnArgs>(args?: SelectSubset<T, QuizCardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizCardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QuizCard.
     * @param {QuizCardDeleteArgs} args - Arguments to delete one QuizCard.
     * @example
     * // Delete one QuizCard
     * const QuizCard = await prisma.quizCard.delete({
     *   where: {
     *     // ... filter to delete one QuizCard
     *   }
     * })
     * 
     */
    delete<T extends QuizCardDeleteArgs>(args: SelectSubset<T, QuizCardDeleteArgs<ExtArgs>>): Prisma__QuizCardClient<$Result.GetResult<Prisma.$QuizCardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuizCard.
     * @param {QuizCardUpdateArgs} args - Arguments to update one QuizCard.
     * @example
     * // Update one QuizCard
     * const quizCard = await prisma.quizCard.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuizCardUpdateArgs>(args: SelectSubset<T, QuizCardUpdateArgs<ExtArgs>>): Prisma__QuizCardClient<$Result.GetResult<Prisma.$QuizCardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuizCards.
     * @param {QuizCardDeleteManyArgs} args - Arguments to filter QuizCards to delete.
     * @example
     * // Delete a few QuizCards
     * const { count } = await prisma.quizCard.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuizCardDeleteManyArgs>(args?: SelectSubset<T, QuizCardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizCards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizCardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuizCards
     * const quizCard = await prisma.quizCard.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuizCardUpdateManyArgs>(args: SelectSubset<T, QuizCardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizCards and returns the data updated in the database.
     * @param {QuizCardUpdateManyAndReturnArgs} args - Arguments to update many QuizCards.
     * @example
     * // Update many QuizCards
     * const quizCard = await prisma.quizCard.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QuizCards and only return the `id`
     * const quizCardWithIdOnly = await prisma.quizCard.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QuizCardUpdateManyAndReturnArgs>(args: SelectSubset<T, QuizCardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizCardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QuizCard.
     * @param {QuizCardUpsertArgs} args - Arguments to update or create a QuizCard.
     * @example
     * // Update or create a QuizCard
     * const quizCard = await prisma.quizCard.upsert({
     *   create: {
     *     // ... data to create a QuizCard
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuizCard we want to update
     *   }
     * })
     */
    upsert<T extends QuizCardUpsertArgs>(args: SelectSubset<T, QuizCardUpsertArgs<ExtArgs>>): Prisma__QuizCardClient<$Result.GetResult<Prisma.$QuizCardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuizCards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizCardCountArgs} args - Arguments to filter QuizCards to count.
     * @example
     * // Count the number of QuizCards
     * const count = await prisma.quizCard.count({
     *   where: {
     *     // ... the filter for the QuizCards we want to count
     *   }
     * })
    **/
    count<T extends QuizCardCountArgs>(
      args?: Subset<T, QuizCardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuizCardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuizCard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizCardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuizCardAggregateArgs>(args: Subset<T, QuizCardAggregateArgs>): Prisma.PrismaPromise<GetQuizCardAggregateType<T>>

    /**
     * Group by QuizCard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizCardGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuizCardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuizCardGroupByArgs['orderBy'] }
        : { orderBy?: QuizCardGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuizCardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizCardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuizCard model
   */
  readonly fields: QuizCardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuizCard.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuizCardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reviewSchedules<T extends QuizCard$reviewSchedulesArgs<ExtArgs> = {}>(args?: Subset<T, QuizCard$reviewSchedulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Video<T extends VideoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VideoDefaultArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the QuizCard model
   */
  interface QuizCardFieldRefs {
    readonly id: FieldRef<"QuizCard", 'String'>
    readonly videoId: FieldRef<"QuizCard", 'String'>
    readonly userId: FieldRef<"QuizCard", 'String'>
    readonly question: FieldRef<"QuizCard", 'String'>
    readonly answer: FieldRef<"QuizCard", 'String'>
    readonly type: FieldRef<"QuizCard", 'QuizType'>
    readonly difficulty: FieldRef<"QuizCard", 'Int'>
    readonly createdAt: FieldRef<"QuizCard", 'DateTime'>
    readonly updatedAt: FieldRef<"QuizCard", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * QuizCard findUnique
   */
  export type QuizCardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizCard
     */
    select?: QuizCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizCard
     */
    omit?: QuizCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizCardInclude<ExtArgs> | null
    /**
     * Filter, which QuizCard to fetch.
     */
    where: QuizCardWhereUniqueInput
  }

  /**
   * QuizCard findUniqueOrThrow
   */
  export type QuizCardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizCard
     */
    select?: QuizCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizCard
     */
    omit?: QuizCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizCardInclude<ExtArgs> | null
    /**
     * Filter, which QuizCard to fetch.
     */
    where: QuizCardWhereUniqueInput
  }

  /**
   * QuizCard findFirst
   */
  export type QuizCardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizCard
     */
    select?: QuizCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizCard
     */
    omit?: QuizCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizCardInclude<ExtArgs> | null
    /**
     * Filter, which QuizCard to fetch.
     */
    where?: QuizCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizCards to fetch.
     */
    orderBy?: QuizCardOrderByWithRelationInput | QuizCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizCards.
     */
    cursor?: QuizCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizCards.
     */
    distinct?: QuizCardScalarFieldEnum | QuizCardScalarFieldEnum[]
  }

  /**
   * QuizCard findFirstOrThrow
   */
  export type QuizCardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizCard
     */
    select?: QuizCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizCard
     */
    omit?: QuizCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizCardInclude<ExtArgs> | null
    /**
     * Filter, which QuizCard to fetch.
     */
    where?: QuizCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizCards to fetch.
     */
    orderBy?: QuizCardOrderByWithRelationInput | QuizCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizCards.
     */
    cursor?: QuizCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizCards.
     */
    distinct?: QuizCardScalarFieldEnum | QuizCardScalarFieldEnum[]
  }

  /**
   * QuizCard findMany
   */
  export type QuizCardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizCard
     */
    select?: QuizCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizCard
     */
    omit?: QuizCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizCardInclude<ExtArgs> | null
    /**
     * Filter, which QuizCards to fetch.
     */
    where?: QuizCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizCards to fetch.
     */
    orderBy?: QuizCardOrderByWithRelationInput | QuizCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuizCards.
     */
    cursor?: QuizCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizCards.
     */
    skip?: number
    distinct?: QuizCardScalarFieldEnum | QuizCardScalarFieldEnum[]
  }

  /**
   * QuizCard create
   */
  export type QuizCardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizCard
     */
    select?: QuizCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizCard
     */
    omit?: QuizCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizCardInclude<ExtArgs> | null
    /**
     * The data needed to create a QuizCard.
     */
    data: XOR<QuizCardCreateInput, QuizCardUncheckedCreateInput>
  }

  /**
   * QuizCard createMany
   */
  export type QuizCardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuizCards.
     */
    data: QuizCardCreateManyInput | QuizCardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuizCard createManyAndReturn
   */
  export type QuizCardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizCard
     */
    select?: QuizCardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuizCard
     */
    omit?: QuizCardOmit<ExtArgs> | null
    /**
     * The data used to create many QuizCards.
     */
    data: QuizCardCreateManyInput | QuizCardCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizCardIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuizCard update
   */
  export type QuizCardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizCard
     */
    select?: QuizCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizCard
     */
    omit?: QuizCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizCardInclude<ExtArgs> | null
    /**
     * The data needed to update a QuizCard.
     */
    data: XOR<QuizCardUpdateInput, QuizCardUncheckedUpdateInput>
    /**
     * Choose, which QuizCard to update.
     */
    where: QuizCardWhereUniqueInput
  }

  /**
   * QuizCard updateMany
   */
  export type QuizCardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuizCards.
     */
    data: XOR<QuizCardUpdateManyMutationInput, QuizCardUncheckedUpdateManyInput>
    /**
     * Filter which QuizCards to update
     */
    where?: QuizCardWhereInput
    /**
     * Limit how many QuizCards to update.
     */
    limit?: number
  }

  /**
   * QuizCard updateManyAndReturn
   */
  export type QuizCardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizCard
     */
    select?: QuizCardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuizCard
     */
    omit?: QuizCardOmit<ExtArgs> | null
    /**
     * The data used to update QuizCards.
     */
    data: XOR<QuizCardUpdateManyMutationInput, QuizCardUncheckedUpdateManyInput>
    /**
     * Filter which QuizCards to update
     */
    where?: QuizCardWhereInput
    /**
     * Limit how many QuizCards to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizCardIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuizCard upsert
   */
  export type QuizCardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizCard
     */
    select?: QuizCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizCard
     */
    omit?: QuizCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizCardInclude<ExtArgs> | null
    /**
     * The filter to search for the QuizCard to update in case it exists.
     */
    where: QuizCardWhereUniqueInput
    /**
     * In case the QuizCard found by the `where` argument doesn't exist, create a new QuizCard with this data.
     */
    create: XOR<QuizCardCreateInput, QuizCardUncheckedCreateInput>
    /**
     * In case the QuizCard was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuizCardUpdateInput, QuizCardUncheckedUpdateInput>
  }

  /**
   * QuizCard delete
   */
  export type QuizCardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizCard
     */
    select?: QuizCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizCard
     */
    omit?: QuizCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizCardInclude<ExtArgs> | null
    /**
     * Filter which QuizCard to delete.
     */
    where: QuizCardWhereUniqueInput
  }

  /**
   * QuizCard deleteMany
   */
  export type QuizCardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizCards to delete
     */
    where?: QuizCardWhereInput
    /**
     * Limit how many QuizCards to delete.
     */
    limit?: number
  }

  /**
   * QuizCard.reviewSchedules
   */
  export type QuizCard$reviewSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewSchedule
     */
    select?: ReviewScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewSchedule
     */
    omit?: ReviewScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewScheduleInclude<ExtArgs> | null
    where?: ReviewScheduleWhereInput
    orderBy?: ReviewScheduleOrderByWithRelationInput | ReviewScheduleOrderByWithRelationInput[]
    cursor?: ReviewScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScheduleScalarFieldEnum | ReviewScheduleScalarFieldEnum[]
  }

  /**
   * QuizCard without action
   */
  export type QuizCardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizCard
     */
    select?: QuizCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizCard
     */
    omit?: QuizCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizCardInclude<ExtArgs> | null
  }


  /**
   * Model ReviewSchedule
   */

  export type AggregateReviewSchedule = {
    _count: ReviewScheduleCountAggregateOutputType | null
    _avg: ReviewScheduleAvgAggregateOutputType | null
    _sum: ReviewScheduleSumAggregateOutputType | null
    _min: ReviewScheduleMinAggregateOutputType | null
    _max: ReviewScheduleMaxAggregateOutputType | null
  }

  export type ReviewScheduleAvgAggregateOutputType = {
    easeFactor: number | null
    interval: number | null
    repetitions: number | null
    confidence: number | null
  }

  export type ReviewScheduleSumAggregateOutputType = {
    easeFactor: number | null
    interval: number | null
    repetitions: number | null
    confidence: number | null
  }

  export type ReviewScheduleMinAggregateOutputType = {
    id: string | null
    quizCardId: string | null
    userId: string | null
    nextReview: Date | null
    easeFactor: number | null
    interval: number | null
    repetitions: number | null
    lastReview: Date | null
    confidence: number | null
  }

  export type ReviewScheduleMaxAggregateOutputType = {
    id: string | null
    quizCardId: string | null
    userId: string | null
    nextReview: Date | null
    easeFactor: number | null
    interval: number | null
    repetitions: number | null
    lastReview: Date | null
    confidence: number | null
  }

  export type ReviewScheduleCountAggregateOutputType = {
    id: number
    quizCardId: number
    userId: number
    nextReview: number
    easeFactor: number
    interval: number
    repetitions: number
    lastReview: number
    confidence: number
    _all: number
  }


  export type ReviewScheduleAvgAggregateInputType = {
    easeFactor?: true
    interval?: true
    repetitions?: true
    confidence?: true
  }

  export type ReviewScheduleSumAggregateInputType = {
    easeFactor?: true
    interval?: true
    repetitions?: true
    confidence?: true
  }

  export type ReviewScheduleMinAggregateInputType = {
    id?: true
    quizCardId?: true
    userId?: true
    nextReview?: true
    easeFactor?: true
    interval?: true
    repetitions?: true
    lastReview?: true
    confidence?: true
  }

  export type ReviewScheduleMaxAggregateInputType = {
    id?: true
    quizCardId?: true
    userId?: true
    nextReview?: true
    easeFactor?: true
    interval?: true
    repetitions?: true
    lastReview?: true
    confidence?: true
  }

  export type ReviewScheduleCountAggregateInputType = {
    id?: true
    quizCardId?: true
    userId?: true
    nextReview?: true
    easeFactor?: true
    interval?: true
    repetitions?: true
    lastReview?: true
    confidence?: true
    _all?: true
  }

  export type ReviewScheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReviewSchedule to aggregate.
     */
    where?: ReviewScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewSchedules to fetch.
     */
    orderBy?: ReviewScheduleOrderByWithRelationInput | ReviewScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReviewSchedules
    **/
    _count?: true | ReviewScheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewScheduleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewScheduleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewScheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewScheduleMaxAggregateInputType
  }

  export type GetReviewScheduleAggregateType<T extends ReviewScheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateReviewSchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReviewSchedule[P]>
      : GetScalarType<T[P], AggregateReviewSchedule[P]>
  }




  export type ReviewScheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewScheduleWhereInput
    orderBy?: ReviewScheduleOrderByWithAggregationInput | ReviewScheduleOrderByWithAggregationInput[]
    by: ReviewScheduleScalarFieldEnum[] | ReviewScheduleScalarFieldEnum
    having?: ReviewScheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewScheduleCountAggregateInputType | true
    _avg?: ReviewScheduleAvgAggregateInputType
    _sum?: ReviewScheduleSumAggregateInputType
    _min?: ReviewScheduleMinAggregateInputType
    _max?: ReviewScheduleMaxAggregateInputType
  }

  export type ReviewScheduleGroupByOutputType = {
    id: string
    quizCardId: string
    userId: string
    nextReview: Date
    easeFactor: number
    interval: number
    repetitions: number
    lastReview: Date
    confidence: number
    _count: ReviewScheduleCountAggregateOutputType | null
    _avg: ReviewScheduleAvgAggregateOutputType | null
    _sum: ReviewScheduleSumAggregateOutputType | null
    _min: ReviewScheduleMinAggregateOutputType | null
    _max: ReviewScheduleMaxAggregateOutputType | null
  }

  type GetReviewScheduleGroupByPayload<T extends ReviewScheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewScheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewScheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewScheduleGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewScheduleGroupByOutputType[P]>
        }
      >
    >


  export type ReviewScheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quizCardId?: boolean
    userId?: boolean
    nextReview?: boolean
    easeFactor?: boolean
    interval?: boolean
    repetitions?: boolean
    lastReview?: boolean
    confidence?: boolean
    quizCard?: boolean | QuizCardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviewSchedule"]>

  export type ReviewScheduleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quizCardId?: boolean
    userId?: boolean
    nextReview?: boolean
    easeFactor?: boolean
    interval?: boolean
    repetitions?: boolean
    lastReview?: boolean
    confidence?: boolean
    quizCard?: boolean | QuizCardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviewSchedule"]>

  export type ReviewScheduleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quizCardId?: boolean
    userId?: boolean
    nextReview?: boolean
    easeFactor?: boolean
    interval?: boolean
    repetitions?: boolean
    lastReview?: boolean
    confidence?: boolean
    quizCard?: boolean | QuizCardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviewSchedule"]>

  export type ReviewScheduleSelectScalar = {
    id?: boolean
    quizCardId?: boolean
    userId?: boolean
    nextReview?: boolean
    easeFactor?: boolean
    interval?: boolean
    repetitions?: boolean
    lastReview?: boolean
    confidence?: boolean
  }

  export type ReviewScheduleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "quizCardId" | "userId" | "nextReview" | "easeFactor" | "interval" | "repetitions" | "lastReview" | "confidence", ExtArgs["result"]["reviewSchedule"]>
  export type ReviewScheduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quizCard?: boolean | QuizCardDefaultArgs<ExtArgs>
  }
  export type ReviewScheduleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quizCard?: boolean | QuizCardDefaultArgs<ExtArgs>
  }
  export type ReviewScheduleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quizCard?: boolean | QuizCardDefaultArgs<ExtArgs>
  }

  export type $ReviewSchedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReviewSchedule"
    objects: {
      quizCard: Prisma.$QuizCardPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      quizCardId: string
      userId: string
      nextReview: Date
      easeFactor: number
      interval: number
      repetitions: number
      lastReview: Date
      confidence: number
    }, ExtArgs["result"]["reviewSchedule"]>
    composites: {}
  }

  type ReviewScheduleGetPayload<S extends boolean | null | undefined | ReviewScheduleDefaultArgs> = $Result.GetResult<Prisma.$ReviewSchedulePayload, S>

  type ReviewScheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewScheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewScheduleCountAggregateInputType | true
    }

  export interface ReviewScheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReviewSchedule'], meta: { name: 'ReviewSchedule' } }
    /**
     * Find zero or one ReviewSchedule that matches the filter.
     * @param {ReviewScheduleFindUniqueArgs} args - Arguments to find a ReviewSchedule
     * @example
     * // Get one ReviewSchedule
     * const reviewSchedule = await prisma.reviewSchedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewScheduleFindUniqueArgs>(args: SelectSubset<T, ReviewScheduleFindUniqueArgs<ExtArgs>>): Prisma__ReviewScheduleClient<$Result.GetResult<Prisma.$ReviewSchedulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReviewSchedule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewScheduleFindUniqueOrThrowArgs} args - Arguments to find a ReviewSchedule
     * @example
     * // Get one ReviewSchedule
     * const reviewSchedule = await prisma.reviewSchedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewScheduleFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewScheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewScheduleClient<$Result.GetResult<Prisma.$ReviewSchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReviewSchedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewScheduleFindFirstArgs} args - Arguments to find a ReviewSchedule
     * @example
     * // Get one ReviewSchedule
     * const reviewSchedule = await prisma.reviewSchedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewScheduleFindFirstArgs>(args?: SelectSubset<T, ReviewScheduleFindFirstArgs<ExtArgs>>): Prisma__ReviewScheduleClient<$Result.GetResult<Prisma.$ReviewSchedulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReviewSchedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewScheduleFindFirstOrThrowArgs} args - Arguments to find a ReviewSchedule
     * @example
     * // Get one ReviewSchedule
     * const reviewSchedule = await prisma.reviewSchedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewScheduleFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewScheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewScheduleClient<$Result.GetResult<Prisma.$ReviewSchedulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReviewSchedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewScheduleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReviewSchedules
     * const reviewSchedules = await prisma.reviewSchedule.findMany()
     * 
     * // Get first 10 ReviewSchedules
     * const reviewSchedules = await prisma.reviewSchedule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewScheduleWithIdOnly = await prisma.reviewSchedule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewScheduleFindManyArgs>(args?: SelectSubset<T, ReviewScheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReviewSchedule.
     * @param {ReviewScheduleCreateArgs} args - Arguments to create a ReviewSchedule.
     * @example
     * // Create one ReviewSchedule
     * const ReviewSchedule = await prisma.reviewSchedule.create({
     *   data: {
     *     // ... data to create a ReviewSchedule
     *   }
     * })
     * 
     */
    create<T extends ReviewScheduleCreateArgs>(args: SelectSubset<T, ReviewScheduleCreateArgs<ExtArgs>>): Prisma__ReviewScheduleClient<$Result.GetResult<Prisma.$ReviewSchedulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReviewSchedules.
     * @param {ReviewScheduleCreateManyArgs} args - Arguments to create many ReviewSchedules.
     * @example
     * // Create many ReviewSchedules
     * const reviewSchedule = await prisma.reviewSchedule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewScheduleCreateManyArgs>(args?: SelectSubset<T, ReviewScheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReviewSchedules and returns the data saved in the database.
     * @param {ReviewScheduleCreateManyAndReturnArgs} args - Arguments to create many ReviewSchedules.
     * @example
     * // Create many ReviewSchedules
     * const reviewSchedule = await prisma.reviewSchedule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReviewSchedules and only return the `id`
     * const reviewScheduleWithIdOnly = await prisma.reviewSchedule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewScheduleCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewScheduleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewSchedulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ReviewSchedule.
     * @param {ReviewScheduleDeleteArgs} args - Arguments to delete one ReviewSchedule.
     * @example
     * // Delete one ReviewSchedule
     * const ReviewSchedule = await prisma.reviewSchedule.delete({
     *   where: {
     *     // ... filter to delete one ReviewSchedule
     *   }
     * })
     * 
     */
    delete<T extends ReviewScheduleDeleteArgs>(args: SelectSubset<T, ReviewScheduleDeleteArgs<ExtArgs>>): Prisma__ReviewScheduleClient<$Result.GetResult<Prisma.$ReviewSchedulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReviewSchedule.
     * @param {ReviewScheduleUpdateArgs} args - Arguments to update one ReviewSchedule.
     * @example
     * // Update one ReviewSchedule
     * const reviewSchedule = await prisma.reviewSchedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewScheduleUpdateArgs>(args: SelectSubset<T, ReviewScheduleUpdateArgs<ExtArgs>>): Prisma__ReviewScheduleClient<$Result.GetResult<Prisma.$ReviewSchedulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReviewSchedules.
     * @param {ReviewScheduleDeleteManyArgs} args - Arguments to filter ReviewSchedules to delete.
     * @example
     * // Delete a few ReviewSchedules
     * const { count } = await prisma.reviewSchedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewScheduleDeleteManyArgs>(args?: SelectSubset<T, ReviewScheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReviewSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewScheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReviewSchedules
     * const reviewSchedule = await prisma.reviewSchedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewScheduleUpdateManyArgs>(args: SelectSubset<T, ReviewScheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReviewSchedules and returns the data updated in the database.
     * @param {ReviewScheduleUpdateManyAndReturnArgs} args - Arguments to update many ReviewSchedules.
     * @example
     * // Update many ReviewSchedules
     * const reviewSchedule = await prisma.reviewSchedule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ReviewSchedules and only return the `id`
     * const reviewScheduleWithIdOnly = await prisma.reviewSchedule.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReviewScheduleUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewScheduleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewSchedulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ReviewSchedule.
     * @param {ReviewScheduleUpsertArgs} args - Arguments to update or create a ReviewSchedule.
     * @example
     * // Update or create a ReviewSchedule
     * const reviewSchedule = await prisma.reviewSchedule.upsert({
     *   create: {
     *     // ... data to create a ReviewSchedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReviewSchedule we want to update
     *   }
     * })
     */
    upsert<T extends ReviewScheduleUpsertArgs>(args: SelectSubset<T, ReviewScheduleUpsertArgs<ExtArgs>>): Prisma__ReviewScheduleClient<$Result.GetResult<Prisma.$ReviewSchedulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReviewSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewScheduleCountArgs} args - Arguments to filter ReviewSchedules to count.
     * @example
     * // Count the number of ReviewSchedules
     * const count = await prisma.reviewSchedule.count({
     *   where: {
     *     // ... the filter for the ReviewSchedules we want to count
     *   }
     * })
    **/
    count<T extends ReviewScheduleCountArgs>(
      args?: Subset<T, ReviewScheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewScheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReviewSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewScheduleAggregateArgs>(args: Subset<T, ReviewScheduleAggregateArgs>): Prisma.PrismaPromise<GetReviewScheduleAggregateType<T>>

    /**
     * Group by ReviewSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewScheduleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewScheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewScheduleGroupByArgs['orderBy'] }
        : { orderBy?: ReviewScheduleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReviewSchedule model
   */
  readonly fields: ReviewScheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReviewSchedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewScheduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    quizCard<T extends QuizCardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuizCardDefaultArgs<ExtArgs>>): Prisma__QuizCardClient<$Result.GetResult<Prisma.$QuizCardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ReviewSchedule model
   */
  interface ReviewScheduleFieldRefs {
    readonly id: FieldRef<"ReviewSchedule", 'String'>
    readonly quizCardId: FieldRef<"ReviewSchedule", 'String'>
    readonly userId: FieldRef<"ReviewSchedule", 'String'>
    readonly nextReview: FieldRef<"ReviewSchedule", 'DateTime'>
    readonly easeFactor: FieldRef<"ReviewSchedule", 'Float'>
    readonly interval: FieldRef<"ReviewSchedule", 'Int'>
    readonly repetitions: FieldRef<"ReviewSchedule", 'Int'>
    readonly lastReview: FieldRef<"ReviewSchedule", 'DateTime'>
    readonly confidence: FieldRef<"ReviewSchedule", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ReviewSchedule findUnique
   */
  export type ReviewScheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewSchedule
     */
    select?: ReviewScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewSchedule
     */
    omit?: ReviewScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewScheduleInclude<ExtArgs> | null
    /**
     * Filter, which ReviewSchedule to fetch.
     */
    where: ReviewScheduleWhereUniqueInput
  }

  /**
   * ReviewSchedule findUniqueOrThrow
   */
  export type ReviewScheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewSchedule
     */
    select?: ReviewScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewSchedule
     */
    omit?: ReviewScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewScheduleInclude<ExtArgs> | null
    /**
     * Filter, which ReviewSchedule to fetch.
     */
    where: ReviewScheduleWhereUniqueInput
  }

  /**
   * ReviewSchedule findFirst
   */
  export type ReviewScheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewSchedule
     */
    select?: ReviewScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewSchedule
     */
    omit?: ReviewScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewScheduleInclude<ExtArgs> | null
    /**
     * Filter, which ReviewSchedule to fetch.
     */
    where?: ReviewScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewSchedules to fetch.
     */
    orderBy?: ReviewScheduleOrderByWithRelationInput | ReviewScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReviewSchedules.
     */
    cursor?: ReviewScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReviewSchedules.
     */
    distinct?: ReviewScheduleScalarFieldEnum | ReviewScheduleScalarFieldEnum[]
  }

  /**
   * ReviewSchedule findFirstOrThrow
   */
  export type ReviewScheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewSchedule
     */
    select?: ReviewScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewSchedule
     */
    omit?: ReviewScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewScheduleInclude<ExtArgs> | null
    /**
     * Filter, which ReviewSchedule to fetch.
     */
    where?: ReviewScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewSchedules to fetch.
     */
    orderBy?: ReviewScheduleOrderByWithRelationInput | ReviewScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReviewSchedules.
     */
    cursor?: ReviewScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReviewSchedules.
     */
    distinct?: ReviewScheduleScalarFieldEnum | ReviewScheduleScalarFieldEnum[]
  }

  /**
   * ReviewSchedule findMany
   */
  export type ReviewScheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewSchedule
     */
    select?: ReviewScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewSchedule
     */
    omit?: ReviewScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewScheduleInclude<ExtArgs> | null
    /**
     * Filter, which ReviewSchedules to fetch.
     */
    where?: ReviewScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewSchedules to fetch.
     */
    orderBy?: ReviewScheduleOrderByWithRelationInput | ReviewScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReviewSchedules.
     */
    cursor?: ReviewScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewSchedules.
     */
    skip?: number
    distinct?: ReviewScheduleScalarFieldEnum | ReviewScheduleScalarFieldEnum[]
  }

  /**
   * ReviewSchedule create
   */
  export type ReviewScheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewSchedule
     */
    select?: ReviewScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewSchedule
     */
    omit?: ReviewScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewScheduleInclude<ExtArgs> | null
    /**
     * The data needed to create a ReviewSchedule.
     */
    data: XOR<ReviewScheduleCreateInput, ReviewScheduleUncheckedCreateInput>
  }

  /**
   * ReviewSchedule createMany
   */
  export type ReviewScheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReviewSchedules.
     */
    data: ReviewScheduleCreateManyInput | ReviewScheduleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReviewSchedule createManyAndReturn
   */
  export type ReviewScheduleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewSchedule
     */
    select?: ReviewScheduleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewSchedule
     */
    omit?: ReviewScheduleOmit<ExtArgs> | null
    /**
     * The data used to create many ReviewSchedules.
     */
    data: ReviewScheduleCreateManyInput | ReviewScheduleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewScheduleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReviewSchedule update
   */
  export type ReviewScheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewSchedule
     */
    select?: ReviewScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewSchedule
     */
    omit?: ReviewScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewScheduleInclude<ExtArgs> | null
    /**
     * The data needed to update a ReviewSchedule.
     */
    data: XOR<ReviewScheduleUpdateInput, ReviewScheduleUncheckedUpdateInput>
    /**
     * Choose, which ReviewSchedule to update.
     */
    where: ReviewScheduleWhereUniqueInput
  }

  /**
   * ReviewSchedule updateMany
   */
  export type ReviewScheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReviewSchedules.
     */
    data: XOR<ReviewScheduleUpdateManyMutationInput, ReviewScheduleUncheckedUpdateManyInput>
    /**
     * Filter which ReviewSchedules to update
     */
    where?: ReviewScheduleWhereInput
    /**
     * Limit how many ReviewSchedules to update.
     */
    limit?: number
  }

  /**
   * ReviewSchedule updateManyAndReturn
   */
  export type ReviewScheduleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewSchedule
     */
    select?: ReviewScheduleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewSchedule
     */
    omit?: ReviewScheduleOmit<ExtArgs> | null
    /**
     * The data used to update ReviewSchedules.
     */
    data: XOR<ReviewScheduleUpdateManyMutationInput, ReviewScheduleUncheckedUpdateManyInput>
    /**
     * Filter which ReviewSchedules to update
     */
    where?: ReviewScheduleWhereInput
    /**
     * Limit how many ReviewSchedules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewScheduleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReviewSchedule upsert
   */
  export type ReviewScheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewSchedule
     */
    select?: ReviewScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewSchedule
     */
    omit?: ReviewScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewScheduleInclude<ExtArgs> | null
    /**
     * The filter to search for the ReviewSchedule to update in case it exists.
     */
    where: ReviewScheduleWhereUniqueInput
    /**
     * In case the ReviewSchedule found by the `where` argument doesn't exist, create a new ReviewSchedule with this data.
     */
    create: XOR<ReviewScheduleCreateInput, ReviewScheduleUncheckedCreateInput>
    /**
     * In case the ReviewSchedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewScheduleUpdateInput, ReviewScheduleUncheckedUpdateInput>
  }

  /**
   * ReviewSchedule delete
   */
  export type ReviewScheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewSchedule
     */
    select?: ReviewScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewSchedule
     */
    omit?: ReviewScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewScheduleInclude<ExtArgs> | null
    /**
     * Filter which ReviewSchedule to delete.
     */
    where: ReviewScheduleWhereUniqueInput
  }

  /**
   * ReviewSchedule deleteMany
   */
  export type ReviewScheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReviewSchedules to delete
     */
    where?: ReviewScheduleWhereInput
    /**
     * Limit how many ReviewSchedules to delete.
     */
    limit?: number
  }

  /**
   * ReviewSchedule without action
   */
  export type ReviewScheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewSchedule
     */
    select?: ReviewScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewSchedule
     */
    omit?: ReviewScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewScheduleInclude<ExtArgs> | null
  }


  /**
   * Model Note
   */

  export type AggregateNote = {
    _count: NoteCountAggregateOutputType | null
    _avg: NoteAvgAggregateOutputType | null
    _sum: NoteSumAggregateOutputType | null
    _min: NoteMinAggregateOutputType | null
    _max: NoteMaxAggregateOutputType | null
  }

  export type NoteAvgAggregateOutputType = {
    timestamp: number | null
  }

  export type NoteSumAggregateOutputType = {
    timestamp: number | null
  }

  export type NoteMinAggregateOutputType = {
    id: string | null
    videoId: string | null
    userId: string | null
    content: string | null
    timestamp: number | null
    createdAt: Date | null
  }

  export type NoteMaxAggregateOutputType = {
    id: string | null
    videoId: string | null
    userId: string | null
    content: string | null
    timestamp: number | null
    createdAt: Date | null
  }

  export type NoteCountAggregateOutputType = {
    id: number
    videoId: number
    userId: number
    content: number
    timestamp: number
    createdAt: number
    _all: number
  }


  export type NoteAvgAggregateInputType = {
    timestamp?: true
  }

  export type NoteSumAggregateInputType = {
    timestamp?: true
  }

  export type NoteMinAggregateInputType = {
    id?: true
    videoId?: true
    userId?: true
    content?: true
    timestamp?: true
    createdAt?: true
  }

  export type NoteMaxAggregateInputType = {
    id?: true
    videoId?: true
    userId?: true
    content?: true
    timestamp?: true
    createdAt?: true
  }

  export type NoteCountAggregateInputType = {
    id?: true
    videoId?: true
    userId?: true
    content?: true
    timestamp?: true
    createdAt?: true
    _all?: true
  }

  export type NoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Note to aggregate.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notes
    **/
    _count?: true | NoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NoteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NoteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NoteMaxAggregateInputType
  }

  export type GetNoteAggregateType<T extends NoteAggregateArgs> = {
        [P in keyof T & keyof AggregateNote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNote[P]>
      : GetScalarType<T[P], AggregateNote[P]>
  }




  export type NoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteWhereInput
    orderBy?: NoteOrderByWithAggregationInput | NoteOrderByWithAggregationInput[]
    by: NoteScalarFieldEnum[] | NoteScalarFieldEnum
    having?: NoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NoteCountAggregateInputType | true
    _avg?: NoteAvgAggregateInputType
    _sum?: NoteSumAggregateInputType
    _min?: NoteMinAggregateInputType
    _max?: NoteMaxAggregateInputType
  }

  export type NoteGroupByOutputType = {
    id: string
    videoId: string
    userId: string
    content: string
    timestamp: number
    createdAt: Date
    _count: NoteCountAggregateOutputType | null
    _avg: NoteAvgAggregateOutputType | null
    _sum: NoteSumAggregateOutputType | null
    _min: NoteMinAggregateOutputType | null
    _max: NoteMaxAggregateOutputType | null
  }

  type GetNoteGroupByPayload<T extends NoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NoteGroupByOutputType[P]>
            : GetScalarType<T[P], NoteGroupByOutputType[P]>
        }
      >
    >


  export type NoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    videoId?: boolean
    userId?: boolean
    content?: boolean
    timestamp?: boolean
    createdAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    Video?: boolean | VideoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["note"]>

  export type NoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    videoId?: boolean
    userId?: boolean
    content?: boolean
    timestamp?: boolean
    createdAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    Video?: boolean | VideoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["note"]>

  export type NoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    videoId?: boolean
    userId?: boolean
    content?: boolean
    timestamp?: boolean
    createdAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    Video?: boolean | VideoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["note"]>

  export type NoteSelectScalar = {
    id?: boolean
    videoId?: boolean
    userId?: boolean
    content?: boolean
    timestamp?: boolean
    createdAt?: boolean
  }

  export type NoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "videoId" | "userId" | "content" | "timestamp" | "createdAt", ExtArgs["result"]["note"]>
  export type NoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    Video?: boolean | VideoDefaultArgs<ExtArgs>
  }
  export type NoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    Video?: boolean | VideoDefaultArgs<ExtArgs>
  }
  export type NoteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    Video?: boolean | VideoDefaultArgs<ExtArgs>
  }

  export type $NotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Note"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
      Video: Prisma.$VideoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      videoId: string
      userId: string
      content: string
      timestamp: number
      createdAt: Date
    }, ExtArgs["result"]["note"]>
    composites: {}
  }

  type NoteGetPayload<S extends boolean | null | undefined | NoteDefaultArgs> = $Result.GetResult<Prisma.$NotePayload, S>

  type NoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NoteCountAggregateInputType | true
    }

  export interface NoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Note'], meta: { name: 'Note' } }
    /**
     * Find zero or one Note that matches the filter.
     * @param {NoteFindUniqueArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NoteFindUniqueArgs>(args: SelectSubset<T, NoteFindUniqueArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Note that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NoteFindUniqueOrThrowArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NoteFindUniqueOrThrowArgs>(args: SelectSubset<T, NoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Note that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteFindFirstArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NoteFindFirstArgs>(args?: SelectSubset<T, NoteFindFirstArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Note that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteFindFirstOrThrowArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NoteFindFirstOrThrowArgs>(args?: SelectSubset<T, NoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notes
     * const notes = await prisma.note.findMany()
     * 
     * // Get first 10 Notes
     * const notes = await prisma.note.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const noteWithIdOnly = await prisma.note.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NoteFindManyArgs>(args?: SelectSubset<T, NoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Note.
     * @param {NoteCreateArgs} args - Arguments to create a Note.
     * @example
     * // Create one Note
     * const Note = await prisma.note.create({
     *   data: {
     *     // ... data to create a Note
     *   }
     * })
     * 
     */
    create<T extends NoteCreateArgs>(args: SelectSubset<T, NoteCreateArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notes.
     * @param {NoteCreateManyArgs} args - Arguments to create many Notes.
     * @example
     * // Create many Notes
     * const note = await prisma.note.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NoteCreateManyArgs>(args?: SelectSubset<T, NoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notes and returns the data saved in the database.
     * @param {NoteCreateManyAndReturnArgs} args - Arguments to create many Notes.
     * @example
     * // Create many Notes
     * const note = await prisma.note.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notes and only return the `id`
     * const noteWithIdOnly = await prisma.note.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NoteCreateManyAndReturnArgs>(args?: SelectSubset<T, NoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Note.
     * @param {NoteDeleteArgs} args - Arguments to delete one Note.
     * @example
     * // Delete one Note
     * const Note = await prisma.note.delete({
     *   where: {
     *     // ... filter to delete one Note
     *   }
     * })
     * 
     */
    delete<T extends NoteDeleteArgs>(args: SelectSubset<T, NoteDeleteArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Note.
     * @param {NoteUpdateArgs} args - Arguments to update one Note.
     * @example
     * // Update one Note
     * const note = await prisma.note.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NoteUpdateArgs>(args: SelectSubset<T, NoteUpdateArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notes.
     * @param {NoteDeleteManyArgs} args - Arguments to filter Notes to delete.
     * @example
     * // Delete a few Notes
     * const { count } = await prisma.note.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NoteDeleteManyArgs>(args?: SelectSubset<T, NoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notes
     * const note = await prisma.note.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NoteUpdateManyArgs>(args: SelectSubset<T, NoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notes and returns the data updated in the database.
     * @param {NoteUpdateManyAndReturnArgs} args - Arguments to update many Notes.
     * @example
     * // Update many Notes
     * const note = await prisma.note.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notes and only return the `id`
     * const noteWithIdOnly = await prisma.note.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NoteUpdateManyAndReturnArgs>(args: SelectSubset<T, NoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Note.
     * @param {NoteUpsertArgs} args - Arguments to update or create a Note.
     * @example
     * // Update or create a Note
     * const note = await prisma.note.upsert({
     *   create: {
     *     // ... data to create a Note
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Note we want to update
     *   }
     * })
     */
    upsert<T extends NoteUpsertArgs>(args: SelectSubset<T, NoteUpsertArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteCountArgs} args - Arguments to filter Notes to count.
     * @example
     * // Count the number of Notes
     * const count = await prisma.note.count({
     *   where: {
     *     // ... the filter for the Notes we want to count
     *   }
     * })
    **/
    count<T extends NoteCountArgs>(
      args?: Subset<T, NoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Note.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NoteAggregateArgs>(args: Subset<T, NoteAggregateArgs>): Prisma.PrismaPromise<GetNoteAggregateType<T>>

    /**
     * Group by Note.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NoteGroupByArgs['orderBy'] }
        : { orderBy?: NoteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Note model
   */
  readonly fields: NoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Note.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Video<T extends VideoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VideoDefaultArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Note model
   */
  interface NoteFieldRefs {
    readonly id: FieldRef<"Note", 'String'>
    readonly videoId: FieldRef<"Note", 'String'>
    readonly userId: FieldRef<"Note", 'String'>
    readonly content: FieldRef<"Note", 'String'>
    readonly timestamp: FieldRef<"Note", 'Float'>
    readonly createdAt: FieldRef<"Note", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Note findUnique
   */
  export type NoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note findUniqueOrThrow
   */
  export type NoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note findFirst
   */
  export type NoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notes.
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notes.
     */
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * Note findFirstOrThrow
   */
  export type NoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notes.
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notes.
     */
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * Note findMany
   */
  export type NoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Notes to fetch.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notes.
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * Note create
   */
  export type NoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * The data needed to create a Note.
     */
    data: XOR<NoteCreateInput, NoteUncheckedCreateInput>
  }

  /**
   * Note createMany
   */
  export type NoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notes.
     */
    data: NoteCreateManyInput | NoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Note createManyAndReturn
   */
  export type NoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * The data used to create many Notes.
     */
    data: NoteCreateManyInput | NoteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Note update
   */
  export type NoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * The data needed to update a Note.
     */
    data: XOR<NoteUpdateInput, NoteUncheckedUpdateInput>
    /**
     * Choose, which Note to update.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note updateMany
   */
  export type NoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notes.
     */
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyInput>
    /**
     * Filter which Notes to update
     */
    where?: NoteWhereInput
    /**
     * Limit how many Notes to update.
     */
    limit?: number
  }

  /**
   * Note updateManyAndReturn
   */
  export type NoteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * The data used to update Notes.
     */
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyInput>
    /**
     * Filter which Notes to update
     */
    where?: NoteWhereInput
    /**
     * Limit how many Notes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Note upsert
   */
  export type NoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * The filter to search for the Note to update in case it exists.
     */
    where: NoteWhereUniqueInput
    /**
     * In case the Note found by the `where` argument doesn't exist, create a new Note with this data.
     */
    create: XOR<NoteCreateInput, NoteUncheckedCreateInput>
    /**
     * In case the Note was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NoteUpdateInput, NoteUncheckedUpdateInput>
  }

  /**
   * Note delete
   */
  export type NoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter which Note to delete.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note deleteMany
   */
  export type NoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notes to delete
     */
    where?: NoteWhereInput
    /**
     * Limit how many Notes to delete.
     */
    limit?: number
  }

  /**
   * Note without action
   */
  export type NoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
  }


  /**
   * Model ExportHistory
   */

  export type AggregateExportHistory = {
    _count: ExportHistoryCountAggregateOutputType | null
    _min: ExportHistoryMinAggregateOutputType | null
    _max: ExportHistoryMaxAggregateOutputType | null
  }

  export type ExportHistoryMinAggregateOutputType = {
    id: string | null
    userId: string | null
    exportedAt: Date | null
  }

  export type ExportHistoryMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    exportedAt: Date | null
  }

  export type ExportHistoryCountAggregateOutputType = {
    id: number
    userId: number
    exportedAt: number
    _all: number
  }


  export type ExportHistoryMinAggregateInputType = {
    id?: true
    userId?: true
    exportedAt?: true
  }

  export type ExportHistoryMaxAggregateInputType = {
    id?: true
    userId?: true
    exportedAt?: true
  }

  export type ExportHistoryCountAggregateInputType = {
    id?: true
    userId?: true
    exportedAt?: true
    _all?: true
  }

  export type ExportHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExportHistory to aggregate.
     */
    where?: ExportHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExportHistories to fetch.
     */
    orderBy?: ExportHistoryOrderByWithRelationInput | ExportHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExportHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExportHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExportHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExportHistories
    **/
    _count?: true | ExportHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExportHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExportHistoryMaxAggregateInputType
  }

  export type GetExportHistoryAggregateType<T extends ExportHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateExportHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExportHistory[P]>
      : GetScalarType<T[P], AggregateExportHistory[P]>
  }




  export type ExportHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExportHistoryWhereInput
    orderBy?: ExportHistoryOrderByWithAggregationInput | ExportHistoryOrderByWithAggregationInput[]
    by: ExportHistoryScalarFieldEnum[] | ExportHistoryScalarFieldEnum
    having?: ExportHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExportHistoryCountAggregateInputType | true
    _min?: ExportHistoryMinAggregateInputType
    _max?: ExportHistoryMaxAggregateInputType
  }

  export type ExportHistoryGroupByOutputType = {
    id: string
    userId: string
    exportedAt: Date
    _count: ExportHistoryCountAggregateOutputType | null
    _min: ExportHistoryMinAggregateOutputType | null
    _max: ExportHistoryMaxAggregateOutputType | null
  }

  type GetExportHistoryGroupByPayload<T extends ExportHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExportHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExportHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExportHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], ExportHistoryGroupByOutputType[P]>
        }
      >
    >


  export type ExportHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    exportedAt?: boolean
  }, ExtArgs["result"]["exportHistory"]>

  export type ExportHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    exportedAt?: boolean
  }, ExtArgs["result"]["exportHistory"]>

  export type ExportHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    exportedAt?: boolean
  }, ExtArgs["result"]["exportHistory"]>

  export type ExportHistorySelectScalar = {
    id?: boolean
    userId?: boolean
    exportedAt?: boolean
  }

  export type ExportHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "exportedAt", ExtArgs["result"]["exportHistory"]>

  export type $ExportHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExportHistory"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      exportedAt: Date
    }, ExtArgs["result"]["exportHistory"]>
    composites: {}
  }

  type ExportHistoryGetPayload<S extends boolean | null | undefined | ExportHistoryDefaultArgs> = $Result.GetResult<Prisma.$ExportHistoryPayload, S>

  type ExportHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExportHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExportHistoryCountAggregateInputType | true
    }

  export interface ExportHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExportHistory'], meta: { name: 'ExportHistory' } }
    /**
     * Find zero or one ExportHistory that matches the filter.
     * @param {ExportHistoryFindUniqueArgs} args - Arguments to find a ExportHistory
     * @example
     * // Get one ExportHistory
     * const exportHistory = await prisma.exportHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExportHistoryFindUniqueArgs>(args: SelectSubset<T, ExportHistoryFindUniqueArgs<ExtArgs>>): Prisma__ExportHistoryClient<$Result.GetResult<Prisma.$ExportHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExportHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExportHistoryFindUniqueOrThrowArgs} args - Arguments to find a ExportHistory
     * @example
     * // Get one ExportHistory
     * const exportHistory = await prisma.exportHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExportHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ExportHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExportHistoryClient<$Result.GetResult<Prisma.$ExportHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExportHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExportHistoryFindFirstArgs} args - Arguments to find a ExportHistory
     * @example
     * // Get one ExportHistory
     * const exportHistory = await prisma.exportHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExportHistoryFindFirstArgs>(args?: SelectSubset<T, ExportHistoryFindFirstArgs<ExtArgs>>): Prisma__ExportHistoryClient<$Result.GetResult<Prisma.$ExportHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExportHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExportHistoryFindFirstOrThrowArgs} args - Arguments to find a ExportHistory
     * @example
     * // Get one ExportHistory
     * const exportHistory = await prisma.exportHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExportHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ExportHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExportHistoryClient<$Result.GetResult<Prisma.$ExportHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExportHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExportHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExportHistories
     * const exportHistories = await prisma.exportHistory.findMany()
     * 
     * // Get first 10 ExportHistories
     * const exportHistories = await prisma.exportHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exportHistoryWithIdOnly = await prisma.exportHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExportHistoryFindManyArgs>(args?: SelectSubset<T, ExportHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExportHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExportHistory.
     * @param {ExportHistoryCreateArgs} args - Arguments to create a ExportHistory.
     * @example
     * // Create one ExportHistory
     * const ExportHistory = await prisma.exportHistory.create({
     *   data: {
     *     // ... data to create a ExportHistory
     *   }
     * })
     * 
     */
    create<T extends ExportHistoryCreateArgs>(args: SelectSubset<T, ExportHistoryCreateArgs<ExtArgs>>): Prisma__ExportHistoryClient<$Result.GetResult<Prisma.$ExportHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExportHistories.
     * @param {ExportHistoryCreateManyArgs} args - Arguments to create many ExportHistories.
     * @example
     * // Create many ExportHistories
     * const exportHistory = await prisma.exportHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExportHistoryCreateManyArgs>(args?: SelectSubset<T, ExportHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExportHistories and returns the data saved in the database.
     * @param {ExportHistoryCreateManyAndReturnArgs} args - Arguments to create many ExportHistories.
     * @example
     * // Create many ExportHistories
     * const exportHistory = await prisma.exportHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExportHistories and only return the `id`
     * const exportHistoryWithIdOnly = await prisma.exportHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExportHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, ExportHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExportHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExportHistory.
     * @param {ExportHistoryDeleteArgs} args - Arguments to delete one ExportHistory.
     * @example
     * // Delete one ExportHistory
     * const ExportHistory = await prisma.exportHistory.delete({
     *   where: {
     *     // ... filter to delete one ExportHistory
     *   }
     * })
     * 
     */
    delete<T extends ExportHistoryDeleteArgs>(args: SelectSubset<T, ExportHistoryDeleteArgs<ExtArgs>>): Prisma__ExportHistoryClient<$Result.GetResult<Prisma.$ExportHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExportHistory.
     * @param {ExportHistoryUpdateArgs} args - Arguments to update one ExportHistory.
     * @example
     * // Update one ExportHistory
     * const exportHistory = await prisma.exportHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExportHistoryUpdateArgs>(args: SelectSubset<T, ExportHistoryUpdateArgs<ExtArgs>>): Prisma__ExportHistoryClient<$Result.GetResult<Prisma.$ExportHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExportHistories.
     * @param {ExportHistoryDeleteManyArgs} args - Arguments to filter ExportHistories to delete.
     * @example
     * // Delete a few ExportHistories
     * const { count } = await prisma.exportHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExportHistoryDeleteManyArgs>(args?: SelectSubset<T, ExportHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExportHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExportHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExportHistories
     * const exportHistory = await prisma.exportHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExportHistoryUpdateManyArgs>(args: SelectSubset<T, ExportHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExportHistories and returns the data updated in the database.
     * @param {ExportHistoryUpdateManyAndReturnArgs} args - Arguments to update many ExportHistories.
     * @example
     * // Update many ExportHistories
     * const exportHistory = await prisma.exportHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExportHistories and only return the `id`
     * const exportHistoryWithIdOnly = await prisma.exportHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExportHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, ExportHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExportHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExportHistory.
     * @param {ExportHistoryUpsertArgs} args - Arguments to update or create a ExportHistory.
     * @example
     * // Update or create a ExportHistory
     * const exportHistory = await prisma.exportHistory.upsert({
     *   create: {
     *     // ... data to create a ExportHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExportHistory we want to update
     *   }
     * })
     */
    upsert<T extends ExportHistoryUpsertArgs>(args: SelectSubset<T, ExportHistoryUpsertArgs<ExtArgs>>): Prisma__ExportHistoryClient<$Result.GetResult<Prisma.$ExportHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExportHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExportHistoryCountArgs} args - Arguments to filter ExportHistories to count.
     * @example
     * // Count the number of ExportHistories
     * const count = await prisma.exportHistory.count({
     *   where: {
     *     // ... the filter for the ExportHistories we want to count
     *   }
     * })
    **/
    count<T extends ExportHistoryCountArgs>(
      args?: Subset<T, ExportHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExportHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExportHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExportHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExportHistoryAggregateArgs>(args: Subset<T, ExportHistoryAggregateArgs>): Prisma.PrismaPromise<GetExportHistoryAggregateType<T>>

    /**
     * Group by ExportHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExportHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExportHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExportHistoryGroupByArgs['orderBy'] }
        : { orderBy?: ExportHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExportHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExportHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExportHistory model
   */
  readonly fields: ExportHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExportHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExportHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ExportHistory model
   */
  interface ExportHistoryFieldRefs {
    readonly id: FieldRef<"ExportHistory", 'String'>
    readonly userId: FieldRef<"ExportHistory", 'String'>
    readonly exportedAt: FieldRef<"ExportHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ExportHistory findUnique
   */
  export type ExportHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExportHistory
     */
    select?: ExportHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExportHistory
     */
    omit?: ExportHistoryOmit<ExtArgs> | null
    /**
     * Filter, which ExportHistory to fetch.
     */
    where: ExportHistoryWhereUniqueInput
  }

  /**
   * ExportHistory findUniqueOrThrow
   */
  export type ExportHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExportHistory
     */
    select?: ExportHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExportHistory
     */
    omit?: ExportHistoryOmit<ExtArgs> | null
    /**
     * Filter, which ExportHistory to fetch.
     */
    where: ExportHistoryWhereUniqueInput
  }

  /**
   * ExportHistory findFirst
   */
  export type ExportHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExportHistory
     */
    select?: ExportHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExportHistory
     */
    omit?: ExportHistoryOmit<ExtArgs> | null
    /**
     * Filter, which ExportHistory to fetch.
     */
    where?: ExportHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExportHistories to fetch.
     */
    orderBy?: ExportHistoryOrderByWithRelationInput | ExportHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExportHistories.
     */
    cursor?: ExportHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExportHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExportHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExportHistories.
     */
    distinct?: ExportHistoryScalarFieldEnum | ExportHistoryScalarFieldEnum[]
  }

  /**
   * ExportHistory findFirstOrThrow
   */
  export type ExportHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExportHistory
     */
    select?: ExportHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExportHistory
     */
    omit?: ExportHistoryOmit<ExtArgs> | null
    /**
     * Filter, which ExportHistory to fetch.
     */
    where?: ExportHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExportHistories to fetch.
     */
    orderBy?: ExportHistoryOrderByWithRelationInput | ExportHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExportHistories.
     */
    cursor?: ExportHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExportHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExportHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExportHistories.
     */
    distinct?: ExportHistoryScalarFieldEnum | ExportHistoryScalarFieldEnum[]
  }

  /**
   * ExportHistory findMany
   */
  export type ExportHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExportHistory
     */
    select?: ExportHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExportHistory
     */
    omit?: ExportHistoryOmit<ExtArgs> | null
    /**
     * Filter, which ExportHistories to fetch.
     */
    where?: ExportHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExportHistories to fetch.
     */
    orderBy?: ExportHistoryOrderByWithRelationInput | ExportHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExportHistories.
     */
    cursor?: ExportHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExportHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExportHistories.
     */
    skip?: number
    distinct?: ExportHistoryScalarFieldEnum | ExportHistoryScalarFieldEnum[]
  }

  /**
   * ExportHistory create
   */
  export type ExportHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExportHistory
     */
    select?: ExportHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExportHistory
     */
    omit?: ExportHistoryOmit<ExtArgs> | null
    /**
     * The data needed to create a ExportHistory.
     */
    data: XOR<ExportHistoryCreateInput, ExportHistoryUncheckedCreateInput>
  }

  /**
   * ExportHistory createMany
   */
  export type ExportHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExportHistories.
     */
    data: ExportHistoryCreateManyInput | ExportHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExportHistory createManyAndReturn
   */
  export type ExportHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExportHistory
     */
    select?: ExportHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExportHistory
     */
    omit?: ExportHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many ExportHistories.
     */
    data: ExportHistoryCreateManyInput | ExportHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExportHistory update
   */
  export type ExportHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExportHistory
     */
    select?: ExportHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExportHistory
     */
    omit?: ExportHistoryOmit<ExtArgs> | null
    /**
     * The data needed to update a ExportHistory.
     */
    data: XOR<ExportHistoryUpdateInput, ExportHistoryUncheckedUpdateInput>
    /**
     * Choose, which ExportHistory to update.
     */
    where: ExportHistoryWhereUniqueInput
  }

  /**
   * ExportHistory updateMany
   */
  export type ExportHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExportHistories.
     */
    data: XOR<ExportHistoryUpdateManyMutationInput, ExportHistoryUncheckedUpdateManyInput>
    /**
     * Filter which ExportHistories to update
     */
    where?: ExportHistoryWhereInput
    /**
     * Limit how many ExportHistories to update.
     */
    limit?: number
  }

  /**
   * ExportHistory updateManyAndReturn
   */
  export type ExportHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExportHistory
     */
    select?: ExportHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExportHistory
     */
    omit?: ExportHistoryOmit<ExtArgs> | null
    /**
     * The data used to update ExportHistories.
     */
    data: XOR<ExportHistoryUpdateManyMutationInput, ExportHistoryUncheckedUpdateManyInput>
    /**
     * Filter which ExportHistories to update
     */
    where?: ExportHistoryWhereInput
    /**
     * Limit how many ExportHistories to update.
     */
    limit?: number
  }

  /**
   * ExportHistory upsert
   */
  export type ExportHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExportHistory
     */
    select?: ExportHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExportHistory
     */
    omit?: ExportHistoryOmit<ExtArgs> | null
    /**
     * The filter to search for the ExportHistory to update in case it exists.
     */
    where: ExportHistoryWhereUniqueInput
    /**
     * In case the ExportHistory found by the `where` argument doesn't exist, create a new ExportHistory with this data.
     */
    create: XOR<ExportHistoryCreateInput, ExportHistoryUncheckedCreateInput>
    /**
     * In case the ExportHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExportHistoryUpdateInput, ExportHistoryUncheckedUpdateInput>
  }

  /**
   * ExportHistory delete
   */
  export type ExportHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExportHistory
     */
    select?: ExportHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExportHistory
     */
    omit?: ExportHistoryOmit<ExtArgs> | null
    /**
     * Filter which ExportHistory to delete.
     */
    where: ExportHistoryWhereUniqueInput
  }

  /**
   * ExportHistory deleteMany
   */
  export type ExportHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExportHistories to delete
     */
    where?: ExportHistoryWhereInput
    /**
     * Limit how many ExportHistories to delete.
     */
    limit?: number
  }

  /**
   * ExportHistory without action
   */
  export type ExportHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExportHistory
     */
    select?: ExportHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExportHistory
     */
    omit?: ExportHistoryOmit<ExtArgs> | null
  }


  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    name: number
    email: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CustomerMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: string
    name: string
    email: string
    createdAt: Date
    updatedAt: Date
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    invoices?: boolean | Customer$invoicesArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "createdAt" | "updatedAt", ExtArgs["result"]["customer"]>
  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoices?: boolean | Customer$invoicesArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CustomerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      invoices: Prisma.$InvoicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {CustomerUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CustomerUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    invoices<T extends Customer$invoicesArgs<ExtArgs> = {}>(args?: Subset<T, Customer$invoicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Customer model
   */
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'String'>
    readonly name: FieldRef<"Customer", 'String'>
    readonly email: FieldRef<"Customer", 'String'>
    readonly createdAt: FieldRef<"Customer", 'DateTime'>
    readonly updatedAt: FieldRef<"Customer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer updateManyAndReturn
   */
  export type CustomerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to delete.
     */
    limit?: number
  }

  /**
   * Customer.invoices
   */
  export type Customer$invoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    cursor?: InvoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model Invoice
   */

  export type AggregateInvoice = {
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  export type InvoiceAvgAggregateOutputType = {
    amount: number | null
  }

  export type InvoiceSumAggregateOutputType = {
    amount: number | null
  }

  export type InvoiceMinAggregateOutputType = {
    id: string | null
    customerId: string | null
    amount: number | null
    status: string | null
    dueDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvoiceMaxAggregateOutputType = {
    id: string | null
    customerId: string | null
    amount: number | null
    status: string | null
    dueDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvoiceCountAggregateOutputType = {
    id: number
    customerId: number
    amount: number
    status: number
    dueDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InvoiceAvgAggregateInputType = {
    amount?: true
  }

  export type InvoiceSumAggregateInputType = {
    amount?: true
  }

  export type InvoiceMinAggregateInputType = {
    id?: true
    customerId?: true
    amount?: true
    status?: true
    dueDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvoiceMaxAggregateInputType = {
    id?: true
    customerId?: true
    amount?: true
    status?: true
    dueDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvoiceCountAggregateInputType = {
    id?: true
    customerId?: true
    amount?: true
    status?: true
    dueDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InvoiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoice to aggregate.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Invoices
    **/
    _count?: true | InvoiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvoiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvoiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvoiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvoiceMaxAggregateInputType
  }

  export type GetInvoiceAggregateType<T extends InvoiceAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoice[P]>
      : GetScalarType<T[P], AggregateInvoice[P]>
  }




  export type InvoiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithAggregationInput | InvoiceOrderByWithAggregationInput[]
    by: InvoiceScalarFieldEnum[] | InvoiceScalarFieldEnum
    having?: InvoiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvoiceCountAggregateInputType | true
    _avg?: InvoiceAvgAggregateInputType
    _sum?: InvoiceSumAggregateInputType
    _min?: InvoiceMinAggregateInputType
    _max?: InvoiceMaxAggregateInputType
  }

  export type InvoiceGroupByOutputType = {
    id: string
    customerId: string
    amount: number
    status: string
    dueDate: Date
    createdAt: Date
    updatedAt: Date
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  type GetInvoiceGroupByPayload<T extends InvoiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvoiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvoiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
            : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
        }
      >
    >


  export type InvoiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    amount?: boolean
    status?: boolean
    dueDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    amount?: boolean
    status?: boolean
    dueDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    amount?: boolean
    status?: boolean
    dueDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectScalar = {
    id?: boolean
    customerId?: boolean
    amount?: boolean
    status?: boolean
    dueDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InvoiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customerId" | "amount" | "status" | "dueDate" | "createdAt" | "updatedAt", ExtArgs["result"]["invoice"]>
  export type InvoiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type InvoiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type InvoiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }

  export type $InvoicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Invoice"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      customerId: string
      amount: number
      status: string
      dueDate: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["invoice"]>
    composites: {}
  }

  type InvoiceGetPayload<S extends boolean | null | undefined | InvoiceDefaultArgs> = $Result.GetResult<Prisma.$InvoicePayload, S>

  type InvoiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvoiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvoiceCountAggregateInputType | true
    }

  export interface InvoiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Invoice'], meta: { name: 'Invoice' } }
    /**
     * Find zero or one Invoice that matches the filter.
     * @param {InvoiceFindUniqueArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvoiceFindUniqueArgs>(args: SelectSubset<T, InvoiceFindUniqueArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Invoice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvoiceFindUniqueOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvoiceFindUniqueOrThrowArgs>(args: SelectSubset<T, InvoiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvoiceFindFirstArgs>(args?: SelectSubset<T, InvoiceFindFirstArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvoiceFindFirstOrThrowArgs>(args?: SelectSubset<T, InvoiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Invoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invoices
     * const invoices = await prisma.invoice.findMany()
     * 
     * // Get first 10 Invoices
     * const invoices = await prisma.invoice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invoiceWithIdOnly = await prisma.invoice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvoiceFindManyArgs>(args?: SelectSubset<T, InvoiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Invoice.
     * @param {InvoiceCreateArgs} args - Arguments to create a Invoice.
     * @example
     * // Create one Invoice
     * const Invoice = await prisma.invoice.create({
     *   data: {
     *     // ... data to create a Invoice
     *   }
     * })
     * 
     */
    create<T extends InvoiceCreateArgs>(args: SelectSubset<T, InvoiceCreateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Invoices.
     * @param {InvoiceCreateManyArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvoiceCreateManyArgs>(args?: SelectSubset<T, InvoiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invoices and returns the data saved in the database.
     * @param {InvoiceCreateManyAndReturnArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Invoices and only return the `id`
     * const invoiceWithIdOnly = await prisma.invoice.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvoiceCreateManyAndReturnArgs>(args?: SelectSubset<T, InvoiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Invoice.
     * @param {InvoiceDeleteArgs} args - Arguments to delete one Invoice.
     * @example
     * // Delete one Invoice
     * const Invoice = await prisma.invoice.delete({
     *   where: {
     *     // ... filter to delete one Invoice
     *   }
     * })
     * 
     */
    delete<T extends InvoiceDeleteArgs>(args: SelectSubset<T, InvoiceDeleteArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Invoice.
     * @param {InvoiceUpdateArgs} args - Arguments to update one Invoice.
     * @example
     * // Update one Invoice
     * const invoice = await prisma.invoice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvoiceUpdateArgs>(args: SelectSubset<T, InvoiceUpdateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Invoices.
     * @param {InvoiceDeleteManyArgs} args - Arguments to filter Invoices to delete.
     * @example
     * // Delete a few Invoices
     * const { count } = await prisma.invoice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvoiceDeleteManyArgs>(args?: SelectSubset<T, InvoiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invoices
     * const invoice = await prisma.invoice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvoiceUpdateManyArgs>(args: SelectSubset<T, InvoiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices and returns the data updated in the database.
     * @param {InvoiceUpdateManyAndReturnArgs} args - Arguments to update many Invoices.
     * @example
     * // Update many Invoices
     * const invoice = await prisma.invoice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Invoices and only return the `id`
     * const invoiceWithIdOnly = await prisma.invoice.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InvoiceUpdateManyAndReturnArgs>(args: SelectSubset<T, InvoiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Invoice.
     * @param {InvoiceUpsertArgs} args - Arguments to update or create a Invoice.
     * @example
     * // Update or create a Invoice
     * const invoice = await prisma.invoice.upsert({
     *   create: {
     *     // ... data to create a Invoice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invoice we want to update
     *   }
     * })
     */
    upsert<T extends InvoiceUpsertArgs>(args: SelectSubset<T, InvoiceUpsertArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceCountArgs} args - Arguments to filter Invoices to count.
     * @example
     * // Count the number of Invoices
     * const count = await prisma.invoice.count({
     *   where: {
     *     // ... the filter for the Invoices we want to count
     *   }
     * })
    **/
    count<T extends InvoiceCountArgs>(
      args?: Subset<T, InvoiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InvoiceAggregateArgs>(args: Subset<T, InvoiceAggregateArgs>): Prisma.PrismaPromise<GetInvoiceAggregateType<T>>

    /**
     * Group by Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InvoiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvoiceGroupByArgs['orderBy'] }
        : { orderBy?: InvoiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InvoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Invoice model
   */
  readonly fields: InvoiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Invoice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvoiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Invoice model
   */
  interface InvoiceFieldRefs {
    readonly id: FieldRef<"Invoice", 'String'>
    readonly customerId: FieldRef<"Invoice", 'String'>
    readonly amount: FieldRef<"Invoice", 'Float'>
    readonly status: FieldRef<"Invoice", 'String'>
    readonly dueDate: FieldRef<"Invoice", 'DateTime'>
    readonly createdAt: FieldRef<"Invoice", 'DateTime'>
    readonly updatedAt: FieldRef<"Invoice", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Invoice findUnique
   */
  export type InvoiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findUniqueOrThrow
   */
  export type InvoiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findFirst
   */
  export type InvoiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice findFirstOrThrow
   */
  export type InvoiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice findMany
   */
  export type InvoiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoices to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice create
   */
  export type InvoiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Invoice.
     */
    data: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
  }

  /**
   * Invoice createMany
   */
  export type InvoiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Invoices.
     */
    data: InvoiceCreateManyInput | InvoiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Invoice createManyAndReturn
   */
  export type InvoiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * The data used to create many Invoices.
     */
    data: InvoiceCreateManyInput | InvoiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invoice update
   */
  export type InvoiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Invoice.
     */
    data: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
    /**
     * Choose, which Invoice to update.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice updateMany
   */
  export type InvoiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Invoices.
     */
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyInput>
    /**
     * Filter which Invoices to update
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to update.
     */
    limit?: number
  }

  /**
   * Invoice updateManyAndReturn
   */
  export type InvoiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * The data used to update Invoices.
     */
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyInput>
    /**
     * Filter which Invoices to update
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invoice upsert
   */
  export type InvoiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Invoice to update in case it exists.
     */
    where: InvoiceWhereUniqueInput
    /**
     * In case the Invoice found by the `where` argument doesn't exist, create a new Invoice with this data.
     */
    create: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
    /**
     * In case the Invoice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
  }

  /**
   * Invoice delete
   */
  export type InvoiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter which Invoice to delete.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice deleteMany
   */
  export type InvoiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoices to delete
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to delete.
     */
    limit?: number
  }

  /**
   * Invoice without action
   */
  export type InvoiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    xp: number | null
    streak: number | null
  }

  export type UserSumAggregateOutputType = {
    xp: number | null
    streak: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    xp: number | null
    streak: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    xp: number | null
    streak: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    preferences: number
    xp: number
    streak: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    xp?: true
    streak?: true
  }

  export type UserSumAggregateInputType = {
    xp?: true
    streak?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    xp?: true
    streak?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    xp?: true
    streak?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    preferences?: true
    xp?: true
    streak?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    preferences: JsonValue | null
    xp: number
    streak: number
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    preferences?: boolean
    xp?: boolean
    streak?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    playlists?: boolean | User$playlistsArgs<ExtArgs>
    notes?: boolean | User$notesArgs<ExtArgs>
    progress?: boolean | User$progressArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    preferences?: boolean
    xp?: boolean
    streak?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    preferences?: boolean
    xp?: boolean
    streak?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    preferences?: boolean
    xp?: boolean
    streak?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "preferences" | "xp" | "streak" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playlists?: boolean | User$playlistsArgs<ExtArgs>
    notes?: boolean | User$notesArgs<ExtArgs>
    progress?: boolean | User$progressArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      playlists: Prisma.$PlaylistPayload<ExtArgs>[]
      notes: Prisma.$NotePayload<ExtArgs>[]
      progress: Prisma.$LearningProgressPayload<ExtArgs>[]
      reviews: Prisma.$ReviewQueuePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      preferences: Prisma.JsonValue | null
      xp: number
      streak: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    playlists<T extends User$playlistsArgs<ExtArgs> = {}>(args?: Subset<T, User$playlistsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notes<T extends User$notesArgs<ExtArgs> = {}>(args?: Subset<T, User$notesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    progress<T extends User$progressArgs<ExtArgs> = {}>(args?: Subset<T, User$progressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LearningProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends User$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewQueuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly preferences: FieldRef<"User", 'Json'>
    readonly xp: FieldRef<"User", 'Int'>
    readonly streak: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.playlists
   */
  export type User$playlistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    where?: PlaylistWhereInput
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    cursor?: PlaylistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }

  /**
   * User.notes
   */
  export type User$notesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    where?: NoteWhereInput
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    cursor?: NoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * User.progress
   */
  export type User$progressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningProgress
     */
    select?: LearningProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningProgress
     */
    omit?: LearningProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningProgressInclude<ExtArgs> | null
    where?: LearningProgressWhereInput
    orderBy?: LearningProgressOrderByWithRelationInput | LearningProgressOrderByWithRelationInput[]
    cursor?: LearningProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LearningProgressScalarFieldEnum | LearningProgressScalarFieldEnum[]
  }

  /**
   * User.reviews
   */
  export type User$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewQueue
     */
    select?: ReviewQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewQueue
     */
    omit?: ReviewQueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewQueueInclude<ExtArgs> | null
    where?: ReviewQueueWhereInput
    orderBy?: ReviewQueueOrderByWithRelationInput | ReviewQueueOrderByWithRelationInput[]
    cursor?: ReviewQueueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewQueueScalarFieldEnum | ReviewQueueScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Playlist
   */

  export type AggregatePlaylist = {
    _count: PlaylistCountAggregateOutputType | null
    _min: PlaylistMinAggregateOutputType | null
    _max: PlaylistMaxAggregateOutputType | null
  }

  export type PlaylistMinAggregateOutputType = {
    id: string | null
    url: string | null
    title: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type PlaylistMaxAggregateOutputType = {
    id: string | null
    url: string | null
    title: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type PlaylistCountAggregateOutputType = {
    id: number
    url: number
    title: number
    tags: number
    userId: number
    createdAt: number
    _all: number
  }


  export type PlaylistMinAggregateInputType = {
    id?: true
    url?: true
    title?: true
    userId?: true
    createdAt?: true
  }

  export type PlaylistMaxAggregateInputType = {
    id?: true
    url?: true
    title?: true
    userId?: true
    createdAt?: true
  }

  export type PlaylistCountAggregateInputType = {
    id?: true
    url?: true
    title?: true
    tags?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type PlaylistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Playlist to aggregate.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Playlists
    **/
    _count?: true | PlaylistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlaylistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlaylistMaxAggregateInputType
  }

  export type GetPlaylistAggregateType<T extends PlaylistAggregateArgs> = {
        [P in keyof T & keyof AggregatePlaylist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlaylist[P]>
      : GetScalarType<T[P], AggregatePlaylist[P]>
  }




  export type PlaylistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaylistWhereInput
    orderBy?: PlaylistOrderByWithAggregationInput | PlaylistOrderByWithAggregationInput[]
    by: PlaylistScalarFieldEnum[] | PlaylistScalarFieldEnum
    having?: PlaylistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlaylistCountAggregateInputType | true
    _min?: PlaylistMinAggregateInputType
    _max?: PlaylistMaxAggregateInputType
  }

  export type PlaylistGroupByOutputType = {
    id: string
    url: string
    title: string
    tags: JsonValue
    userId: string
    createdAt: Date
    _count: PlaylistCountAggregateOutputType | null
    _min: PlaylistMinAggregateOutputType | null
    _max: PlaylistMaxAggregateOutputType | null
  }

  type GetPlaylistGroupByPayload<T extends PlaylistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlaylistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlaylistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlaylistGroupByOutputType[P]>
            : GetScalarType<T[P], PlaylistGroupByOutputType[P]>
        }
      >
    >


  export type PlaylistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    title?: boolean
    tags?: boolean
    userId?: boolean
    createdAt?: boolean
    videos?: boolean | Playlist$videosArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | PlaylistCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlist"]>

  export type PlaylistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    title?: boolean
    tags?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlist"]>

  export type PlaylistSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    title?: boolean
    tags?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlist"]>

  export type PlaylistSelectScalar = {
    id?: boolean
    url?: boolean
    title?: boolean
    tags?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type PlaylistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "title" | "tags" | "userId" | "createdAt", ExtArgs["result"]["playlist"]>
  export type PlaylistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    videos?: boolean | Playlist$videosArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | PlaylistCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlaylistIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PlaylistIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PlaylistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Playlist"
    objects: {
      videos: Prisma.$VideoPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      title: string
      tags: Prisma.JsonValue
      userId: string
      createdAt: Date
    }, ExtArgs["result"]["playlist"]>
    composites: {}
  }

  type PlaylistGetPayload<S extends boolean | null | undefined | PlaylistDefaultArgs> = $Result.GetResult<Prisma.$PlaylistPayload, S>

  type PlaylistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlaylistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlaylistCountAggregateInputType | true
    }

  export interface PlaylistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Playlist'], meta: { name: 'Playlist' } }
    /**
     * Find zero or one Playlist that matches the filter.
     * @param {PlaylistFindUniqueArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlaylistFindUniqueArgs>(args: SelectSubset<T, PlaylistFindUniqueArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Playlist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlaylistFindUniqueOrThrowArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlaylistFindUniqueOrThrowArgs>(args: SelectSubset<T, PlaylistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Playlist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistFindFirstArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlaylistFindFirstArgs>(args?: SelectSubset<T, PlaylistFindFirstArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Playlist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistFindFirstOrThrowArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlaylistFindFirstOrThrowArgs>(args?: SelectSubset<T, PlaylistFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Playlists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Playlists
     * const playlists = await prisma.playlist.findMany()
     * 
     * // Get first 10 Playlists
     * const playlists = await prisma.playlist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playlistWithIdOnly = await prisma.playlist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlaylistFindManyArgs>(args?: SelectSubset<T, PlaylistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Playlist.
     * @param {PlaylistCreateArgs} args - Arguments to create a Playlist.
     * @example
     * // Create one Playlist
     * const Playlist = await prisma.playlist.create({
     *   data: {
     *     // ... data to create a Playlist
     *   }
     * })
     * 
     */
    create<T extends PlaylistCreateArgs>(args: SelectSubset<T, PlaylistCreateArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Playlists.
     * @param {PlaylistCreateManyArgs} args - Arguments to create many Playlists.
     * @example
     * // Create many Playlists
     * const playlist = await prisma.playlist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlaylistCreateManyArgs>(args?: SelectSubset<T, PlaylistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Playlists and returns the data saved in the database.
     * @param {PlaylistCreateManyAndReturnArgs} args - Arguments to create many Playlists.
     * @example
     * // Create many Playlists
     * const playlist = await prisma.playlist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Playlists and only return the `id`
     * const playlistWithIdOnly = await prisma.playlist.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlaylistCreateManyAndReturnArgs>(args?: SelectSubset<T, PlaylistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Playlist.
     * @param {PlaylistDeleteArgs} args - Arguments to delete one Playlist.
     * @example
     * // Delete one Playlist
     * const Playlist = await prisma.playlist.delete({
     *   where: {
     *     // ... filter to delete one Playlist
     *   }
     * })
     * 
     */
    delete<T extends PlaylistDeleteArgs>(args: SelectSubset<T, PlaylistDeleteArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Playlist.
     * @param {PlaylistUpdateArgs} args - Arguments to update one Playlist.
     * @example
     * // Update one Playlist
     * const playlist = await prisma.playlist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlaylistUpdateArgs>(args: SelectSubset<T, PlaylistUpdateArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Playlists.
     * @param {PlaylistDeleteManyArgs} args - Arguments to filter Playlists to delete.
     * @example
     * // Delete a few Playlists
     * const { count } = await prisma.playlist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlaylistDeleteManyArgs>(args?: SelectSubset<T, PlaylistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Playlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Playlists
     * const playlist = await prisma.playlist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlaylistUpdateManyArgs>(args: SelectSubset<T, PlaylistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Playlists and returns the data updated in the database.
     * @param {PlaylistUpdateManyAndReturnArgs} args - Arguments to update many Playlists.
     * @example
     * // Update many Playlists
     * const playlist = await prisma.playlist.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Playlists and only return the `id`
     * const playlistWithIdOnly = await prisma.playlist.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlaylistUpdateManyAndReturnArgs>(args: SelectSubset<T, PlaylistUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Playlist.
     * @param {PlaylistUpsertArgs} args - Arguments to update or create a Playlist.
     * @example
     * // Update or create a Playlist
     * const playlist = await prisma.playlist.upsert({
     *   create: {
     *     // ... data to create a Playlist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Playlist we want to update
     *   }
     * })
     */
    upsert<T extends PlaylistUpsertArgs>(args: SelectSubset<T, PlaylistUpsertArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Playlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistCountArgs} args - Arguments to filter Playlists to count.
     * @example
     * // Count the number of Playlists
     * const count = await prisma.playlist.count({
     *   where: {
     *     // ... the filter for the Playlists we want to count
     *   }
     * })
    **/
    count<T extends PlaylistCountArgs>(
      args?: Subset<T, PlaylistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlaylistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Playlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlaylistAggregateArgs>(args: Subset<T, PlaylistAggregateArgs>): Prisma.PrismaPromise<GetPlaylistAggregateType<T>>

    /**
     * Group by Playlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlaylistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlaylistGroupByArgs['orderBy'] }
        : { orderBy?: PlaylistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlaylistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlaylistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Playlist model
   */
  readonly fields: PlaylistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Playlist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlaylistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    videos<T extends Playlist$videosArgs<ExtArgs> = {}>(args?: Subset<T, Playlist$videosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Playlist model
   */
  interface PlaylistFieldRefs {
    readonly id: FieldRef<"Playlist", 'String'>
    readonly url: FieldRef<"Playlist", 'String'>
    readonly title: FieldRef<"Playlist", 'String'>
    readonly tags: FieldRef<"Playlist", 'Json'>
    readonly userId: FieldRef<"Playlist", 'String'>
    readonly createdAt: FieldRef<"Playlist", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Playlist findUnique
   */
  export type PlaylistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlist to fetch.
     */
    where: PlaylistWhereUniqueInput
  }

  /**
   * Playlist findUniqueOrThrow
   */
  export type PlaylistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlist to fetch.
     */
    where: PlaylistWhereUniqueInput
  }

  /**
   * Playlist findFirst
   */
  export type PlaylistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlist to fetch.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Playlists.
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Playlists.
     */
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }

  /**
   * Playlist findFirstOrThrow
   */
  export type PlaylistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlist to fetch.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Playlists.
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Playlists.
     */
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }

  /**
   * Playlist findMany
   */
  export type PlaylistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlists to fetch.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Playlists.
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }

  /**
   * Playlist create
   */
  export type PlaylistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * The data needed to create a Playlist.
     */
    data: XOR<PlaylistCreateInput, PlaylistUncheckedCreateInput>
  }

  /**
   * Playlist createMany
   */
  export type PlaylistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Playlists.
     */
    data: PlaylistCreateManyInput | PlaylistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Playlist createManyAndReturn
   */
  export type PlaylistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * The data used to create many Playlists.
     */
    data: PlaylistCreateManyInput | PlaylistCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Playlist update
   */
  export type PlaylistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * The data needed to update a Playlist.
     */
    data: XOR<PlaylistUpdateInput, PlaylistUncheckedUpdateInput>
    /**
     * Choose, which Playlist to update.
     */
    where: PlaylistWhereUniqueInput
  }

  /**
   * Playlist updateMany
   */
  export type PlaylistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Playlists.
     */
    data: XOR<PlaylistUpdateManyMutationInput, PlaylistUncheckedUpdateManyInput>
    /**
     * Filter which Playlists to update
     */
    where?: PlaylistWhereInput
    /**
     * Limit how many Playlists to update.
     */
    limit?: number
  }

  /**
   * Playlist updateManyAndReturn
   */
  export type PlaylistUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * The data used to update Playlists.
     */
    data: XOR<PlaylistUpdateManyMutationInput, PlaylistUncheckedUpdateManyInput>
    /**
     * Filter which Playlists to update
     */
    where?: PlaylistWhereInput
    /**
     * Limit how many Playlists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Playlist upsert
   */
  export type PlaylistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * The filter to search for the Playlist to update in case it exists.
     */
    where: PlaylistWhereUniqueInput
    /**
     * In case the Playlist found by the `where` argument doesn't exist, create a new Playlist with this data.
     */
    create: XOR<PlaylistCreateInput, PlaylistUncheckedCreateInput>
    /**
     * In case the Playlist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlaylistUpdateInput, PlaylistUncheckedUpdateInput>
  }

  /**
   * Playlist delete
   */
  export type PlaylistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter which Playlist to delete.
     */
    where: PlaylistWhereUniqueInput
  }

  /**
   * Playlist deleteMany
   */
  export type PlaylistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Playlists to delete
     */
    where?: PlaylistWhereInput
    /**
     * Limit how many Playlists to delete.
     */
    limit?: number
  }

  /**
   * Playlist.videos
   */
  export type Playlist$videosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    where?: VideoWhereInput
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    cursor?: VideoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Playlist without action
   */
  export type PlaylistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
  }


  /**
   * Model Video
   */

  export type AggregateVideo = {
    _count: VideoCountAggregateOutputType | null
    _min: VideoMinAggregateOutputType | null
    _max: VideoMaxAggregateOutputType | null
  }

  export type VideoMinAggregateOutputType = {
    id: string | null
    title: string | null
    youtubeId: string | null
    transcript: string | null
    summary: string | null
    playlistId: string | null
    createdAt: Date | null
  }

  export type VideoMaxAggregateOutputType = {
    id: string | null
    title: string | null
    youtubeId: string | null
    transcript: string | null
    summary: string | null
    playlistId: string | null
    createdAt: Date | null
  }

  export type VideoCountAggregateOutputType = {
    id: number
    title: number
    youtubeId: number
    transcript: number
    summary: number
    playlistId: number
    createdAt: number
    _all: number
  }


  export type VideoMinAggregateInputType = {
    id?: true
    title?: true
    youtubeId?: true
    transcript?: true
    summary?: true
    playlistId?: true
    createdAt?: true
  }

  export type VideoMaxAggregateInputType = {
    id?: true
    title?: true
    youtubeId?: true
    transcript?: true
    summary?: true
    playlistId?: true
    createdAt?: true
  }

  export type VideoCountAggregateInputType = {
    id?: true
    title?: true
    youtubeId?: true
    transcript?: true
    summary?: true
    playlistId?: true
    createdAt?: true
    _all?: true
  }

  export type VideoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Video to aggregate.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Videos
    **/
    _count?: true | VideoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VideoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VideoMaxAggregateInputType
  }

  export type GetVideoAggregateType<T extends VideoAggregateArgs> = {
        [P in keyof T & keyof AggregateVideo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideo[P]>
      : GetScalarType<T[P], AggregateVideo[P]>
  }




  export type VideoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoWhereInput
    orderBy?: VideoOrderByWithAggregationInput | VideoOrderByWithAggregationInput[]
    by: VideoScalarFieldEnum[] | VideoScalarFieldEnum
    having?: VideoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VideoCountAggregateInputType | true
    _min?: VideoMinAggregateInputType
    _max?: VideoMaxAggregateInputType
  }

  export type VideoGroupByOutputType = {
    id: string
    title: string
    youtubeId: string
    transcript: string | null
    summary: string | null
    playlistId: string | null
    createdAt: Date
    _count: VideoCountAggregateOutputType | null
    _min: VideoMinAggregateOutputType | null
    _max: VideoMaxAggregateOutputType | null
  }

  type GetVideoGroupByPayload<T extends VideoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VideoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VideoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VideoGroupByOutputType[P]>
            : GetScalarType<T[P], VideoGroupByOutputType[P]>
        }
      >
    >


  export type VideoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    youtubeId?: boolean
    transcript?: boolean
    summary?: boolean
    playlistId?: boolean
    createdAt?: boolean
    playlist?: boolean | Video$playlistArgs<ExtArgs>
    quizCards?: boolean | Video$quizCardsArgs<ExtArgs>
    notes?: boolean | Video$notesArgs<ExtArgs>
    LearningProgress?: boolean | Video$LearningProgressArgs<ExtArgs>
    ReviewQueue?: boolean | Video$ReviewQueueArgs<ExtArgs>
    _count?: boolean | VideoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["video"]>

  export type VideoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    youtubeId?: boolean
    transcript?: boolean
    summary?: boolean
    playlistId?: boolean
    createdAt?: boolean
    playlist?: boolean | Video$playlistArgs<ExtArgs>
  }, ExtArgs["result"]["video"]>

  export type VideoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    youtubeId?: boolean
    transcript?: boolean
    summary?: boolean
    playlistId?: boolean
    createdAt?: boolean
    playlist?: boolean | Video$playlistArgs<ExtArgs>
  }, ExtArgs["result"]["video"]>

  export type VideoSelectScalar = {
    id?: boolean
    title?: boolean
    youtubeId?: boolean
    transcript?: boolean
    summary?: boolean
    playlistId?: boolean
    createdAt?: boolean
  }

  export type VideoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "youtubeId" | "transcript" | "summary" | "playlistId" | "createdAt", ExtArgs["result"]["video"]>
  export type VideoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playlist?: boolean | Video$playlistArgs<ExtArgs>
    quizCards?: boolean | Video$quizCardsArgs<ExtArgs>
    notes?: boolean | Video$notesArgs<ExtArgs>
    LearningProgress?: boolean | Video$LearningProgressArgs<ExtArgs>
    ReviewQueue?: boolean | Video$ReviewQueueArgs<ExtArgs>
    _count?: boolean | VideoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VideoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playlist?: boolean | Video$playlistArgs<ExtArgs>
  }
  export type VideoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playlist?: boolean | Video$playlistArgs<ExtArgs>
  }

  export type $VideoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Video"
    objects: {
      playlist: Prisma.$PlaylistPayload<ExtArgs> | null
      quizCards: Prisma.$QuizCardPayload<ExtArgs>[]
      notes: Prisma.$NotePayload<ExtArgs>[]
      LearningProgress: Prisma.$LearningProgressPayload<ExtArgs>[]
      ReviewQueue: Prisma.$ReviewQueuePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      youtubeId: string
      transcript: string | null
      summary: string | null
      playlistId: string | null
      createdAt: Date
    }, ExtArgs["result"]["video"]>
    composites: {}
  }

  type VideoGetPayload<S extends boolean | null | undefined | VideoDefaultArgs> = $Result.GetResult<Prisma.$VideoPayload, S>

  type VideoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VideoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VideoCountAggregateInputType | true
    }

  export interface VideoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Video'], meta: { name: 'Video' } }
    /**
     * Find zero or one Video that matches the filter.
     * @param {VideoFindUniqueArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VideoFindUniqueArgs>(args: SelectSubset<T, VideoFindUniqueArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Video that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VideoFindUniqueOrThrowArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VideoFindUniqueOrThrowArgs>(args: SelectSubset<T, VideoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Video that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindFirstArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VideoFindFirstArgs>(args?: SelectSubset<T, VideoFindFirstArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Video that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindFirstOrThrowArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VideoFindFirstOrThrowArgs>(args?: SelectSubset<T, VideoFindFirstOrThrowArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Videos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Videos
     * const videos = await prisma.video.findMany()
     * 
     * // Get first 10 Videos
     * const videos = await prisma.video.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const videoWithIdOnly = await prisma.video.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VideoFindManyArgs>(args?: SelectSubset<T, VideoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Video.
     * @param {VideoCreateArgs} args - Arguments to create a Video.
     * @example
     * // Create one Video
     * const Video = await prisma.video.create({
     *   data: {
     *     // ... data to create a Video
     *   }
     * })
     * 
     */
    create<T extends VideoCreateArgs>(args: SelectSubset<T, VideoCreateArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Videos.
     * @param {VideoCreateManyArgs} args - Arguments to create many Videos.
     * @example
     * // Create many Videos
     * const video = await prisma.video.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VideoCreateManyArgs>(args?: SelectSubset<T, VideoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Videos and returns the data saved in the database.
     * @param {VideoCreateManyAndReturnArgs} args - Arguments to create many Videos.
     * @example
     * // Create many Videos
     * const video = await prisma.video.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Videos and only return the `id`
     * const videoWithIdOnly = await prisma.video.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VideoCreateManyAndReturnArgs>(args?: SelectSubset<T, VideoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Video.
     * @param {VideoDeleteArgs} args - Arguments to delete one Video.
     * @example
     * // Delete one Video
     * const Video = await prisma.video.delete({
     *   where: {
     *     // ... filter to delete one Video
     *   }
     * })
     * 
     */
    delete<T extends VideoDeleteArgs>(args: SelectSubset<T, VideoDeleteArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Video.
     * @param {VideoUpdateArgs} args - Arguments to update one Video.
     * @example
     * // Update one Video
     * const video = await prisma.video.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VideoUpdateArgs>(args: SelectSubset<T, VideoUpdateArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Videos.
     * @param {VideoDeleteManyArgs} args - Arguments to filter Videos to delete.
     * @example
     * // Delete a few Videos
     * const { count } = await prisma.video.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VideoDeleteManyArgs>(args?: SelectSubset<T, VideoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Videos
     * const video = await prisma.video.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VideoUpdateManyArgs>(args: SelectSubset<T, VideoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Videos and returns the data updated in the database.
     * @param {VideoUpdateManyAndReturnArgs} args - Arguments to update many Videos.
     * @example
     * // Update many Videos
     * const video = await prisma.video.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Videos and only return the `id`
     * const videoWithIdOnly = await prisma.video.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VideoUpdateManyAndReturnArgs>(args: SelectSubset<T, VideoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Video.
     * @param {VideoUpsertArgs} args - Arguments to update or create a Video.
     * @example
     * // Update or create a Video
     * const video = await prisma.video.upsert({
     *   create: {
     *     // ... data to create a Video
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Video we want to update
     *   }
     * })
     */
    upsert<T extends VideoUpsertArgs>(args: SelectSubset<T, VideoUpsertArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoCountArgs} args - Arguments to filter Videos to count.
     * @example
     * // Count the number of Videos
     * const count = await prisma.video.count({
     *   where: {
     *     // ... the filter for the Videos we want to count
     *   }
     * })
    **/
    count<T extends VideoCountArgs>(
      args?: Subset<T, VideoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VideoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Video.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VideoAggregateArgs>(args: Subset<T, VideoAggregateArgs>): Prisma.PrismaPromise<GetVideoAggregateType<T>>

    /**
     * Group by Video.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VideoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VideoGroupByArgs['orderBy'] }
        : { orderBy?: VideoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VideoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Video model
   */
  readonly fields: VideoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Video.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VideoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    playlist<T extends Video$playlistArgs<ExtArgs> = {}>(args?: Subset<T, Video$playlistArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    quizCards<T extends Video$quizCardsArgs<ExtArgs> = {}>(args?: Subset<T, Video$quizCardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizCardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notes<T extends Video$notesArgs<ExtArgs> = {}>(args?: Subset<T, Video$notesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    LearningProgress<T extends Video$LearningProgressArgs<ExtArgs> = {}>(args?: Subset<T, Video$LearningProgressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LearningProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ReviewQueue<T extends Video$ReviewQueueArgs<ExtArgs> = {}>(args?: Subset<T, Video$ReviewQueueArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewQueuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Video model
   */
  interface VideoFieldRefs {
    readonly id: FieldRef<"Video", 'String'>
    readonly title: FieldRef<"Video", 'String'>
    readonly youtubeId: FieldRef<"Video", 'String'>
    readonly transcript: FieldRef<"Video", 'String'>
    readonly summary: FieldRef<"Video", 'String'>
    readonly playlistId: FieldRef<"Video", 'String'>
    readonly createdAt: FieldRef<"Video", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Video findUnique
   */
  export type VideoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video findUniqueOrThrow
   */
  export type VideoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video findFirst
   */
  export type VideoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Videos.
     */
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video findFirstOrThrow
   */
  export type VideoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Videos.
     */
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video findMany
   */
  export type VideoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Videos to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video create
   */
  export type VideoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * The data needed to create a Video.
     */
    data: XOR<VideoCreateInput, VideoUncheckedCreateInput>
  }

  /**
   * Video createMany
   */
  export type VideoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Videos.
     */
    data: VideoCreateManyInput | VideoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Video createManyAndReturn
   */
  export type VideoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * The data used to create many Videos.
     */
    data: VideoCreateManyInput | VideoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Video update
   */
  export type VideoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * The data needed to update a Video.
     */
    data: XOR<VideoUpdateInput, VideoUncheckedUpdateInput>
    /**
     * Choose, which Video to update.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video updateMany
   */
  export type VideoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Videos.
     */
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyInput>
    /**
     * Filter which Videos to update
     */
    where?: VideoWhereInput
    /**
     * Limit how many Videos to update.
     */
    limit?: number
  }

  /**
   * Video updateManyAndReturn
   */
  export type VideoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * The data used to update Videos.
     */
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyInput>
    /**
     * Filter which Videos to update
     */
    where?: VideoWhereInput
    /**
     * Limit how many Videos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Video upsert
   */
  export type VideoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * The filter to search for the Video to update in case it exists.
     */
    where: VideoWhereUniqueInput
    /**
     * In case the Video found by the `where` argument doesn't exist, create a new Video with this data.
     */
    create: XOR<VideoCreateInput, VideoUncheckedCreateInput>
    /**
     * In case the Video was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VideoUpdateInput, VideoUncheckedUpdateInput>
  }

  /**
   * Video delete
   */
  export type VideoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter which Video to delete.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video deleteMany
   */
  export type VideoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Videos to delete
     */
    where?: VideoWhereInput
    /**
     * Limit how many Videos to delete.
     */
    limit?: number
  }

  /**
   * Video.playlist
   */
  export type Video$playlistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    where?: PlaylistWhereInput
  }

  /**
   * Video.quizCards
   */
  export type Video$quizCardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizCard
     */
    select?: QuizCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizCard
     */
    omit?: QuizCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizCardInclude<ExtArgs> | null
    where?: QuizCardWhereInput
    orderBy?: QuizCardOrderByWithRelationInput | QuizCardOrderByWithRelationInput[]
    cursor?: QuizCardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizCardScalarFieldEnum | QuizCardScalarFieldEnum[]
  }

  /**
   * Video.notes
   */
  export type Video$notesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    where?: NoteWhereInput
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    cursor?: NoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * Video.LearningProgress
   */
  export type Video$LearningProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningProgress
     */
    select?: LearningProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningProgress
     */
    omit?: LearningProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningProgressInclude<ExtArgs> | null
    where?: LearningProgressWhereInput
    orderBy?: LearningProgressOrderByWithRelationInput | LearningProgressOrderByWithRelationInput[]
    cursor?: LearningProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LearningProgressScalarFieldEnum | LearningProgressScalarFieldEnum[]
  }

  /**
   * Video.ReviewQueue
   */
  export type Video$ReviewQueueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewQueue
     */
    select?: ReviewQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewQueue
     */
    omit?: ReviewQueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewQueueInclude<ExtArgs> | null
    where?: ReviewQueueWhereInput
    orderBy?: ReviewQueueOrderByWithRelationInput | ReviewQueueOrderByWithRelationInput[]
    cursor?: ReviewQueueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewQueueScalarFieldEnum | ReviewQueueScalarFieldEnum[]
  }

  /**
   * Video without action
   */
  export type VideoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
  }


  /**
   * Model LearningProgress
   */

  export type AggregateLearningProgress = {
    _count: LearningProgressCountAggregateOutputType | null
    _min: LearningProgressMinAggregateOutputType | null
    _max: LearningProgressMaxAggregateOutputType | null
  }

  export type LearningProgressMinAggregateOutputType = {
    id: string | null
    userId: string | null
    videoId: string | null
    completed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LearningProgressMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    videoId: string | null
    completed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LearningProgressCountAggregateOutputType = {
    id: number
    userId: number
    videoId: number
    completed: number
    quizScores: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LearningProgressMinAggregateInputType = {
    id?: true
    userId?: true
    videoId?: true
    completed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LearningProgressMaxAggregateInputType = {
    id?: true
    userId?: true
    videoId?: true
    completed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LearningProgressCountAggregateInputType = {
    id?: true
    userId?: true
    videoId?: true
    completed?: true
    quizScores?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LearningProgressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LearningProgress to aggregate.
     */
    where?: LearningProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningProgresses to fetch.
     */
    orderBy?: LearningProgressOrderByWithRelationInput | LearningProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LearningProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LearningProgresses
    **/
    _count?: true | LearningProgressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LearningProgressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LearningProgressMaxAggregateInputType
  }

  export type GetLearningProgressAggregateType<T extends LearningProgressAggregateArgs> = {
        [P in keyof T & keyof AggregateLearningProgress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLearningProgress[P]>
      : GetScalarType<T[P], AggregateLearningProgress[P]>
  }




  export type LearningProgressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LearningProgressWhereInput
    orderBy?: LearningProgressOrderByWithAggregationInput | LearningProgressOrderByWithAggregationInput[]
    by: LearningProgressScalarFieldEnum[] | LearningProgressScalarFieldEnum
    having?: LearningProgressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LearningProgressCountAggregateInputType | true
    _min?: LearningProgressMinAggregateInputType
    _max?: LearningProgressMaxAggregateInputType
  }

  export type LearningProgressGroupByOutputType = {
    id: string
    userId: string
    videoId: string
    completed: boolean
    quizScores: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: LearningProgressCountAggregateOutputType | null
    _min: LearningProgressMinAggregateOutputType | null
    _max: LearningProgressMaxAggregateOutputType | null
  }

  type GetLearningProgressGroupByPayload<T extends LearningProgressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LearningProgressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LearningProgressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LearningProgressGroupByOutputType[P]>
            : GetScalarType<T[P], LearningProgressGroupByOutputType[P]>
        }
      >
    >


  export type LearningProgressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    videoId?: boolean
    completed?: boolean
    quizScores?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["learningProgress"]>

  export type LearningProgressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    videoId?: boolean
    completed?: boolean
    quizScores?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["learningProgress"]>

  export type LearningProgressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    videoId?: boolean
    completed?: boolean
    quizScores?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["learningProgress"]>

  export type LearningProgressSelectScalar = {
    id?: boolean
    userId?: boolean
    videoId?: boolean
    completed?: boolean
    quizScores?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LearningProgressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "videoId" | "completed" | "quizScores" | "createdAt" | "updatedAt", ExtArgs["result"]["learningProgress"]>
  export type LearningProgressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }
  export type LearningProgressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }
  export type LearningProgressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }

  export type $LearningProgressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LearningProgress"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      video: Prisma.$VideoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      videoId: string
      completed: boolean
      quizScores: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["learningProgress"]>
    composites: {}
  }

  type LearningProgressGetPayload<S extends boolean | null | undefined | LearningProgressDefaultArgs> = $Result.GetResult<Prisma.$LearningProgressPayload, S>

  type LearningProgressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LearningProgressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LearningProgressCountAggregateInputType | true
    }

  export interface LearningProgressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LearningProgress'], meta: { name: 'LearningProgress' } }
    /**
     * Find zero or one LearningProgress that matches the filter.
     * @param {LearningProgressFindUniqueArgs} args - Arguments to find a LearningProgress
     * @example
     * // Get one LearningProgress
     * const learningProgress = await prisma.learningProgress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LearningProgressFindUniqueArgs>(args: SelectSubset<T, LearningProgressFindUniqueArgs<ExtArgs>>): Prisma__LearningProgressClient<$Result.GetResult<Prisma.$LearningProgressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LearningProgress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LearningProgressFindUniqueOrThrowArgs} args - Arguments to find a LearningProgress
     * @example
     * // Get one LearningProgress
     * const learningProgress = await prisma.learningProgress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LearningProgressFindUniqueOrThrowArgs>(args: SelectSubset<T, LearningProgressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LearningProgressClient<$Result.GetResult<Prisma.$LearningProgressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LearningProgress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningProgressFindFirstArgs} args - Arguments to find a LearningProgress
     * @example
     * // Get one LearningProgress
     * const learningProgress = await prisma.learningProgress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LearningProgressFindFirstArgs>(args?: SelectSubset<T, LearningProgressFindFirstArgs<ExtArgs>>): Prisma__LearningProgressClient<$Result.GetResult<Prisma.$LearningProgressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LearningProgress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningProgressFindFirstOrThrowArgs} args - Arguments to find a LearningProgress
     * @example
     * // Get one LearningProgress
     * const learningProgress = await prisma.learningProgress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LearningProgressFindFirstOrThrowArgs>(args?: SelectSubset<T, LearningProgressFindFirstOrThrowArgs<ExtArgs>>): Prisma__LearningProgressClient<$Result.GetResult<Prisma.$LearningProgressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LearningProgresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningProgressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LearningProgresses
     * const learningProgresses = await prisma.learningProgress.findMany()
     * 
     * // Get first 10 LearningProgresses
     * const learningProgresses = await prisma.learningProgress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const learningProgressWithIdOnly = await prisma.learningProgress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LearningProgressFindManyArgs>(args?: SelectSubset<T, LearningProgressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LearningProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LearningProgress.
     * @param {LearningProgressCreateArgs} args - Arguments to create a LearningProgress.
     * @example
     * // Create one LearningProgress
     * const LearningProgress = await prisma.learningProgress.create({
     *   data: {
     *     // ... data to create a LearningProgress
     *   }
     * })
     * 
     */
    create<T extends LearningProgressCreateArgs>(args: SelectSubset<T, LearningProgressCreateArgs<ExtArgs>>): Prisma__LearningProgressClient<$Result.GetResult<Prisma.$LearningProgressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LearningProgresses.
     * @param {LearningProgressCreateManyArgs} args - Arguments to create many LearningProgresses.
     * @example
     * // Create many LearningProgresses
     * const learningProgress = await prisma.learningProgress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LearningProgressCreateManyArgs>(args?: SelectSubset<T, LearningProgressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LearningProgresses and returns the data saved in the database.
     * @param {LearningProgressCreateManyAndReturnArgs} args - Arguments to create many LearningProgresses.
     * @example
     * // Create many LearningProgresses
     * const learningProgress = await prisma.learningProgress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LearningProgresses and only return the `id`
     * const learningProgressWithIdOnly = await prisma.learningProgress.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LearningProgressCreateManyAndReturnArgs>(args?: SelectSubset<T, LearningProgressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LearningProgressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LearningProgress.
     * @param {LearningProgressDeleteArgs} args - Arguments to delete one LearningProgress.
     * @example
     * // Delete one LearningProgress
     * const LearningProgress = await prisma.learningProgress.delete({
     *   where: {
     *     // ... filter to delete one LearningProgress
     *   }
     * })
     * 
     */
    delete<T extends LearningProgressDeleteArgs>(args: SelectSubset<T, LearningProgressDeleteArgs<ExtArgs>>): Prisma__LearningProgressClient<$Result.GetResult<Prisma.$LearningProgressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LearningProgress.
     * @param {LearningProgressUpdateArgs} args - Arguments to update one LearningProgress.
     * @example
     * // Update one LearningProgress
     * const learningProgress = await prisma.learningProgress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LearningProgressUpdateArgs>(args: SelectSubset<T, LearningProgressUpdateArgs<ExtArgs>>): Prisma__LearningProgressClient<$Result.GetResult<Prisma.$LearningProgressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LearningProgresses.
     * @param {LearningProgressDeleteManyArgs} args - Arguments to filter LearningProgresses to delete.
     * @example
     * // Delete a few LearningProgresses
     * const { count } = await prisma.learningProgress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LearningProgressDeleteManyArgs>(args?: SelectSubset<T, LearningProgressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LearningProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningProgressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LearningProgresses
     * const learningProgress = await prisma.learningProgress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LearningProgressUpdateManyArgs>(args: SelectSubset<T, LearningProgressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LearningProgresses and returns the data updated in the database.
     * @param {LearningProgressUpdateManyAndReturnArgs} args - Arguments to update many LearningProgresses.
     * @example
     * // Update many LearningProgresses
     * const learningProgress = await prisma.learningProgress.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LearningProgresses and only return the `id`
     * const learningProgressWithIdOnly = await prisma.learningProgress.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LearningProgressUpdateManyAndReturnArgs>(args: SelectSubset<T, LearningProgressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LearningProgressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LearningProgress.
     * @param {LearningProgressUpsertArgs} args - Arguments to update or create a LearningProgress.
     * @example
     * // Update or create a LearningProgress
     * const learningProgress = await prisma.learningProgress.upsert({
     *   create: {
     *     // ... data to create a LearningProgress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LearningProgress we want to update
     *   }
     * })
     */
    upsert<T extends LearningProgressUpsertArgs>(args: SelectSubset<T, LearningProgressUpsertArgs<ExtArgs>>): Prisma__LearningProgressClient<$Result.GetResult<Prisma.$LearningProgressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LearningProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningProgressCountArgs} args - Arguments to filter LearningProgresses to count.
     * @example
     * // Count the number of LearningProgresses
     * const count = await prisma.learningProgress.count({
     *   where: {
     *     // ... the filter for the LearningProgresses we want to count
     *   }
     * })
    **/
    count<T extends LearningProgressCountArgs>(
      args?: Subset<T, LearningProgressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LearningProgressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LearningProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningProgressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LearningProgressAggregateArgs>(args: Subset<T, LearningProgressAggregateArgs>): Prisma.PrismaPromise<GetLearningProgressAggregateType<T>>

    /**
     * Group by LearningProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningProgressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LearningProgressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LearningProgressGroupByArgs['orderBy'] }
        : { orderBy?: LearningProgressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LearningProgressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLearningProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LearningProgress model
   */
  readonly fields: LearningProgressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LearningProgress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LearningProgressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    video<T extends VideoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VideoDefaultArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LearningProgress model
   */
  interface LearningProgressFieldRefs {
    readonly id: FieldRef<"LearningProgress", 'String'>
    readonly userId: FieldRef<"LearningProgress", 'String'>
    readonly videoId: FieldRef<"LearningProgress", 'String'>
    readonly completed: FieldRef<"LearningProgress", 'Boolean'>
    readonly quizScores: FieldRef<"LearningProgress", 'Json'>
    readonly createdAt: FieldRef<"LearningProgress", 'DateTime'>
    readonly updatedAt: FieldRef<"LearningProgress", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LearningProgress findUnique
   */
  export type LearningProgressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningProgress
     */
    select?: LearningProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningProgress
     */
    omit?: LearningProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningProgressInclude<ExtArgs> | null
    /**
     * Filter, which LearningProgress to fetch.
     */
    where: LearningProgressWhereUniqueInput
  }

  /**
   * LearningProgress findUniqueOrThrow
   */
  export type LearningProgressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningProgress
     */
    select?: LearningProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningProgress
     */
    omit?: LearningProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningProgressInclude<ExtArgs> | null
    /**
     * Filter, which LearningProgress to fetch.
     */
    where: LearningProgressWhereUniqueInput
  }

  /**
   * LearningProgress findFirst
   */
  export type LearningProgressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningProgress
     */
    select?: LearningProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningProgress
     */
    omit?: LearningProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningProgressInclude<ExtArgs> | null
    /**
     * Filter, which LearningProgress to fetch.
     */
    where?: LearningProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningProgresses to fetch.
     */
    orderBy?: LearningProgressOrderByWithRelationInput | LearningProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LearningProgresses.
     */
    cursor?: LearningProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LearningProgresses.
     */
    distinct?: LearningProgressScalarFieldEnum | LearningProgressScalarFieldEnum[]
  }

  /**
   * LearningProgress findFirstOrThrow
   */
  export type LearningProgressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningProgress
     */
    select?: LearningProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningProgress
     */
    omit?: LearningProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningProgressInclude<ExtArgs> | null
    /**
     * Filter, which LearningProgress to fetch.
     */
    where?: LearningProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningProgresses to fetch.
     */
    orderBy?: LearningProgressOrderByWithRelationInput | LearningProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LearningProgresses.
     */
    cursor?: LearningProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LearningProgresses.
     */
    distinct?: LearningProgressScalarFieldEnum | LearningProgressScalarFieldEnum[]
  }

  /**
   * LearningProgress findMany
   */
  export type LearningProgressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningProgress
     */
    select?: LearningProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningProgress
     */
    omit?: LearningProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningProgressInclude<ExtArgs> | null
    /**
     * Filter, which LearningProgresses to fetch.
     */
    where?: LearningProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningProgresses to fetch.
     */
    orderBy?: LearningProgressOrderByWithRelationInput | LearningProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LearningProgresses.
     */
    cursor?: LearningProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningProgresses.
     */
    skip?: number
    distinct?: LearningProgressScalarFieldEnum | LearningProgressScalarFieldEnum[]
  }

  /**
   * LearningProgress create
   */
  export type LearningProgressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningProgress
     */
    select?: LearningProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningProgress
     */
    omit?: LearningProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningProgressInclude<ExtArgs> | null
    /**
     * The data needed to create a LearningProgress.
     */
    data: XOR<LearningProgressCreateInput, LearningProgressUncheckedCreateInput>
  }

  /**
   * LearningProgress createMany
   */
  export type LearningProgressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LearningProgresses.
     */
    data: LearningProgressCreateManyInput | LearningProgressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LearningProgress createManyAndReturn
   */
  export type LearningProgressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningProgress
     */
    select?: LearningProgressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LearningProgress
     */
    omit?: LearningProgressOmit<ExtArgs> | null
    /**
     * The data used to create many LearningProgresses.
     */
    data: LearningProgressCreateManyInput | LearningProgressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningProgressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LearningProgress update
   */
  export type LearningProgressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningProgress
     */
    select?: LearningProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningProgress
     */
    omit?: LearningProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningProgressInclude<ExtArgs> | null
    /**
     * The data needed to update a LearningProgress.
     */
    data: XOR<LearningProgressUpdateInput, LearningProgressUncheckedUpdateInput>
    /**
     * Choose, which LearningProgress to update.
     */
    where: LearningProgressWhereUniqueInput
  }

  /**
   * LearningProgress updateMany
   */
  export type LearningProgressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LearningProgresses.
     */
    data: XOR<LearningProgressUpdateManyMutationInput, LearningProgressUncheckedUpdateManyInput>
    /**
     * Filter which LearningProgresses to update
     */
    where?: LearningProgressWhereInput
    /**
     * Limit how many LearningProgresses to update.
     */
    limit?: number
  }

  /**
   * LearningProgress updateManyAndReturn
   */
  export type LearningProgressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningProgress
     */
    select?: LearningProgressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LearningProgress
     */
    omit?: LearningProgressOmit<ExtArgs> | null
    /**
     * The data used to update LearningProgresses.
     */
    data: XOR<LearningProgressUpdateManyMutationInput, LearningProgressUncheckedUpdateManyInput>
    /**
     * Filter which LearningProgresses to update
     */
    where?: LearningProgressWhereInput
    /**
     * Limit how many LearningProgresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningProgressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LearningProgress upsert
   */
  export type LearningProgressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningProgress
     */
    select?: LearningProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningProgress
     */
    omit?: LearningProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningProgressInclude<ExtArgs> | null
    /**
     * The filter to search for the LearningProgress to update in case it exists.
     */
    where: LearningProgressWhereUniqueInput
    /**
     * In case the LearningProgress found by the `where` argument doesn't exist, create a new LearningProgress with this data.
     */
    create: XOR<LearningProgressCreateInput, LearningProgressUncheckedCreateInput>
    /**
     * In case the LearningProgress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LearningProgressUpdateInput, LearningProgressUncheckedUpdateInput>
  }

  /**
   * LearningProgress delete
   */
  export type LearningProgressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningProgress
     */
    select?: LearningProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningProgress
     */
    omit?: LearningProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningProgressInclude<ExtArgs> | null
    /**
     * Filter which LearningProgress to delete.
     */
    where: LearningProgressWhereUniqueInput
  }

  /**
   * LearningProgress deleteMany
   */
  export type LearningProgressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LearningProgresses to delete
     */
    where?: LearningProgressWhereInput
    /**
     * Limit how many LearningProgresses to delete.
     */
    limit?: number
  }

  /**
   * LearningProgress without action
   */
  export type LearningProgressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningProgress
     */
    select?: LearningProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningProgress
     */
    omit?: LearningProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningProgressInclude<ExtArgs> | null
  }


  /**
   * Model ReviewQueue
   */

  export type AggregateReviewQueue = {
    _count: ReviewQueueCountAggregateOutputType | null
    _min: ReviewQueueMinAggregateOutputType | null
    _max: ReviewQueueMaxAggregateOutputType | null
  }

  export type ReviewQueueMinAggregateOutputType = {
    id: string | null
    userId: string | null
    videoId: string | null
    dueDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewQueueMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    videoId: string | null
    dueDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewQueueCountAggregateOutputType = {
    id: number
    userId: number
    videoId: number
    dueDate: number
    history: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReviewQueueMinAggregateInputType = {
    id?: true
    userId?: true
    videoId?: true
    dueDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewQueueMaxAggregateInputType = {
    id?: true
    userId?: true
    videoId?: true
    dueDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewQueueCountAggregateInputType = {
    id?: true
    userId?: true
    videoId?: true
    dueDate?: true
    history?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReviewQueueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReviewQueue to aggregate.
     */
    where?: ReviewQueueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewQueues to fetch.
     */
    orderBy?: ReviewQueueOrderByWithRelationInput | ReviewQueueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewQueueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewQueues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewQueues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReviewQueues
    **/
    _count?: true | ReviewQueueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewQueueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewQueueMaxAggregateInputType
  }

  export type GetReviewQueueAggregateType<T extends ReviewQueueAggregateArgs> = {
        [P in keyof T & keyof AggregateReviewQueue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReviewQueue[P]>
      : GetScalarType<T[P], AggregateReviewQueue[P]>
  }




  export type ReviewQueueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewQueueWhereInput
    orderBy?: ReviewQueueOrderByWithAggregationInput | ReviewQueueOrderByWithAggregationInput[]
    by: ReviewQueueScalarFieldEnum[] | ReviewQueueScalarFieldEnum
    having?: ReviewQueueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewQueueCountAggregateInputType | true
    _min?: ReviewQueueMinAggregateInputType
    _max?: ReviewQueueMaxAggregateInputType
  }

  export type ReviewQueueGroupByOutputType = {
    id: string
    userId: string
    videoId: string
    dueDate: Date
    history: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: ReviewQueueCountAggregateOutputType | null
    _min: ReviewQueueMinAggregateOutputType | null
    _max: ReviewQueueMaxAggregateOutputType | null
  }

  type GetReviewQueueGroupByPayload<T extends ReviewQueueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewQueueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewQueueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewQueueGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewQueueGroupByOutputType[P]>
        }
      >
    >


  export type ReviewQueueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    videoId?: boolean
    dueDate?: boolean
    history?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviewQueue"]>

  export type ReviewQueueSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    videoId?: boolean
    dueDate?: boolean
    history?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviewQueue"]>

  export type ReviewQueueSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    videoId?: boolean
    dueDate?: boolean
    history?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviewQueue"]>

  export type ReviewQueueSelectScalar = {
    id?: boolean
    userId?: boolean
    videoId?: boolean
    dueDate?: boolean
    history?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReviewQueueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "videoId" | "dueDate" | "history" | "createdAt" | "updatedAt", ExtArgs["result"]["reviewQueue"]>
  export type ReviewQueueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }
  export type ReviewQueueIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }
  export type ReviewQueueIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }

  export type $ReviewQueuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReviewQueue"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      video: Prisma.$VideoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      videoId: string
      dueDate: Date
      history: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["reviewQueue"]>
    composites: {}
  }

  type ReviewQueueGetPayload<S extends boolean | null | undefined | ReviewQueueDefaultArgs> = $Result.GetResult<Prisma.$ReviewQueuePayload, S>

  type ReviewQueueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewQueueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewQueueCountAggregateInputType | true
    }

  export interface ReviewQueueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReviewQueue'], meta: { name: 'ReviewQueue' } }
    /**
     * Find zero or one ReviewQueue that matches the filter.
     * @param {ReviewQueueFindUniqueArgs} args - Arguments to find a ReviewQueue
     * @example
     * // Get one ReviewQueue
     * const reviewQueue = await prisma.reviewQueue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewQueueFindUniqueArgs>(args: SelectSubset<T, ReviewQueueFindUniqueArgs<ExtArgs>>): Prisma__ReviewQueueClient<$Result.GetResult<Prisma.$ReviewQueuePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReviewQueue that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewQueueFindUniqueOrThrowArgs} args - Arguments to find a ReviewQueue
     * @example
     * // Get one ReviewQueue
     * const reviewQueue = await prisma.reviewQueue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewQueueFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewQueueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewQueueClient<$Result.GetResult<Prisma.$ReviewQueuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReviewQueue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewQueueFindFirstArgs} args - Arguments to find a ReviewQueue
     * @example
     * // Get one ReviewQueue
     * const reviewQueue = await prisma.reviewQueue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewQueueFindFirstArgs>(args?: SelectSubset<T, ReviewQueueFindFirstArgs<ExtArgs>>): Prisma__ReviewQueueClient<$Result.GetResult<Prisma.$ReviewQueuePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReviewQueue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewQueueFindFirstOrThrowArgs} args - Arguments to find a ReviewQueue
     * @example
     * // Get one ReviewQueue
     * const reviewQueue = await prisma.reviewQueue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewQueueFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewQueueFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewQueueClient<$Result.GetResult<Prisma.$ReviewQueuePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReviewQueues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewQueueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReviewQueues
     * const reviewQueues = await prisma.reviewQueue.findMany()
     * 
     * // Get first 10 ReviewQueues
     * const reviewQueues = await prisma.reviewQueue.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewQueueWithIdOnly = await prisma.reviewQueue.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewQueueFindManyArgs>(args?: SelectSubset<T, ReviewQueueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewQueuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReviewQueue.
     * @param {ReviewQueueCreateArgs} args - Arguments to create a ReviewQueue.
     * @example
     * // Create one ReviewQueue
     * const ReviewQueue = await prisma.reviewQueue.create({
     *   data: {
     *     // ... data to create a ReviewQueue
     *   }
     * })
     * 
     */
    create<T extends ReviewQueueCreateArgs>(args: SelectSubset<T, ReviewQueueCreateArgs<ExtArgs>>): Prisma__ReviewQueueClient<$Result.GetResult<Prisma.$ReviewQueuePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReviewQueues.
     * @param {ReviewQueueCreateManyArgs} args - Arguments to create many ReviewQueues.
     * @example
     * // Create many ReviewQueues
     * const reviewQueue = await prisma.reviewQueue.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewQueueCreateManyArgs>(args?: SelectSubset<T, ReviewQueueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReviewQueues and returns the data saved in the database.
     * @param {ReviewQueueCreateManyAndReturnArgs} args - Arguments to create many ReviewQueues.
     * @example
     * // Create many ReviewQueues
     * const reviewQueue = await prisma.reviewQueue.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReviewQueues and only return the `id`
     * const reviewQueueWithIdOnly = await prisma.reviewQueue.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewQueueCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewQueueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewQueuePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ReviewQueue.
     * @param {ReviewQueueDeleteArgs} args - Arguments to delete one ReviewQueue.
     * @example
     * // Delete one ReviewQueue
     * const ReviewQueue = await prisma.reviewQueue.delete({
     *   where: {
     *     // ... filter to delete one ReviewQueue
     *   }
     * })
     * 
     */
    delete<T extends ReviewQueueDeleteArgs>(args: SelectSubset<T, ReviewQueueDeleteArgs<ExtArgs>>): Prisma__ReviewQueueClient<$Result.GetResult<Prisma.$ReviewQueuePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReviewQueue.
     * @param {ReviewQueueUpdateArgs} args - Arguments to update one ReviewQueue.
     * @example
     * // Update one ReviewQueue
     * const reviewQueue = await prisma.reviewQueue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewQueueUpdateArgs>(args: SelectSubset<T, ReviewQueueUpdateArgs<ExtArgs>>): Prisma__ReviewQueueClient<$Result.GetResult<Prisma.$ReviewQueuePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReviewQueues.
     * @param {ReviewQueueDeleteManyArgs} args - Arguments to filter ReviewQueues to delete.
     * @example
     * // Delete a few ReviewQueues
     * const { count } = await prisma.reviewQueue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewQueueDeleteManyArgs>(args?: SelectSubset<T, ReviewQueueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReviewQueues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewQueueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReviewQueues
     * const reviewQueue = await prisma.reviewQueue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewQueueUpdateManyArgs>(args: SelectSubset<T, ReviewQueueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReviewQueues and returns the data updated in the database.
     * @param {ReviewQueueUpdateManyAndReturnArgs} args - Arguments to update many ReviewQueues.
     * @example
     * // Update many ReviewQueues
     * const reviewQueue = await prisma.reviewQueue.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ReviewQueues and only return the `id`
     * const reviewQueueWithIdOnly = await prisma.reviewQueue.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReviewQueueUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewQueueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewQueuePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ReviewQueue.
     * @param {ReviewQueueUpsertArgs} args - Arguments to update or create a ReviewQueue.
     * @example
     * // Update or create a ReviewQueue
     * const reviewQueue = await prisma.reviewQueue.upsert({
     *   create: {
     *     // ... data to create a ReviewQueue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReviewQueue we want to update
     *   }
     * })
     */
    upsert<T extends ReviewQueueUpsertArgs>(args: SelectSubset<T, ReviewQueueUpsertArgs<ExtArgs>>): Prisma__ReviewQueueClient<$Result.GetResult<Prisma.$ReviewQueuePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReviewQueues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewQueueCountArgs} args - Arguments to filter ReviewQueues to count.
     * @example
     * // Count the number of ReviewQueues
     * const count = await prisma.reviewQueue.count({
     *   where: {
     *     // ... the filter for the ReviewQueues we want to count
     *   }
     * })
    **/
    count<T extends ReviewQueueCountArgs>(
      args?: Subset<T, ReviewQueueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewQueueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReviewQueue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewQueueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewQueueAggregateArgs>(args: Subset<T, ReviewQueueAggregateArgs>): Prisma.PrismaPromise<GetReviewQueueAggregateType<T>>

    /**
     * Group by ReviewQueue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewQueueGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewQueueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewQueueGroupByArgs['orderBy'] }
        : { orderBy?: ReviewQueueGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewQueueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewQueueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReviewQueue model
   */
  readonly fields: ReviewQueueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReviewQueue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewQueueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    video<T extends VideoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VideoDefaultArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ReviewQueue model
   */
  interface ReviewQueueFieldRefs {
    readonly id: FieldRef<"ReviewQueue", 'String'>
    readonly userId: FieldRef<"ReviewQueue", 'String'>
    readonly videoId: FieldRef<"ReviewQueue", 'String'>
    readonly dueDate: FieldRef<"ReviewQueue", 'DateTime'>
    readonly history: FieldRef<"ReviewQueue", 'Json'>
    readonly createdAt: FieldRef<"ReviewQueue", 'DateTime'>
    readonly updatedAt: FieldRef<"ReviewQueue", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ReviewQueue findUnique
   */
  export type ReviewQueueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewQueue
     */
    select?: ReviewQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewQueue
     */
    omit?: ReviewQueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewQueueInclude<ExtArgs> | null
    /**
     * Filter, which ReviewQueue to fetch.
     */
    where: ReviewQueueWhereUniqueInput
  }

  /**
   * ReviewQueue findUniqueOrThrow
   */
  export type ReviewQueueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewQueue
     */
    select?: ReviewQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewQueue
     */
    omit?: ReviewQueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewQueueInclude<ExtArgs> | null
    /**
     * Filter, which ReviewQueue to fetch.
     */
    where: ReviewQueueWhereUniqueInput
  }

  /**
   * ReviewQueue findFirst
   */
  export type ReviewQueueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewQueue
     */
    select?: ReviewQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewQueue
     */
    omit?: ReviewQueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewQueueInclude<ExtArgs> | null
    /**
     * Filter, which ReviewQueue to fetch.
     */
    where?: ReviewQueueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewQueues to fetch.
     */
    orderBy?: ReviewQueueOrderByWithRelationInput | ReviewQueueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReviewQueues.
     */
    cursor?: ReviewQueueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewQueues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewQueues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReviewQueues.
     */
    distinct?: ReviewQueueScalarFieldEnum | ReviewQueueScalarFieldEnum[]
  }

  /**
   * ReviewQueue findFirstOrThrow
   */
  export type ReviewQueueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewQueue
     */
    select?: ReviewQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewQueue
     */
    omit?: ReviewQueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewQueueInclude<ExtArgs> | null
    /**
     * Filter, which ReviewQueue to fetch.
     */
    where?: ReviewQueueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewQueues to fetch.
     */
    orderBy?: ReviewQueueOrderByWithRelationInput | ReviewQueueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReviewQueues.
     */
    cursor?: ReviewQueueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewQueues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewQueues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReviewQueues.
     */
    distinct?: ReviewQueueScalarFieldEnum | ReviewQueueScalarFieldEnum[]
  }

  /**
   * ReviewQueue findMany
   */
  export type ReviewQueueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewQueue
     */
    select?: ReviewQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewQueue
     */
    omit?: ReviewQueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewQueueInclude<ExtArgs> | null
    /**
     * Filter, which ReviewQueues to fetch.
     */
    where?: ReviewQueueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewQueues to fetch.
     */
    orderBy?: ReviewQueueOrderByWithRelationInput | ReviewQueueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReviewQueues.
     */
    cursor?: ReviewQueueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewQueues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewQueues.
     */
    skip?: number
    distinct?: ReviewQueueScalarFieldEnum | ReviewQueueScalarFieldEnum[]
  }

  /**
   * ReviewQueue create
   */
  export type ReviewQueueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewQueue
     */
    select?: ReviewQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewQueue
     */
    omit?: ReviewQueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewQueueInclude<ExtArgs> | null
    /**
     * The data needed to create a ReviewQueue.
     */
    data: XOR<ReviewQueueCreateInput, ReviewQueueUncheckedCreateInput>
  }

  /**
   * ReviewQueue createMany
   */
  export type ReviewQueueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReviewQueues.
     */
    data: ReviewQueueCreateManyInput | ReviewQueueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReviewQueue createManyAndReturn
   */
  export type ReviewQueueCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewQueue
     */
    select?: ReviewQueueSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewQueue
     */
    omit?: ReviewQueueOmit<ExtArgs> | null
    /**
     * The data used to create many ReviewQueues.
     */
    data: ReviewQueueCreateManyInput | ReviewQueueCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewQueueIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReviewQueue update
   */
  export type ReviewQueueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewQueue
     */
    select?: ReviewQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewQueue
     */
    omit?: ReviewQueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewQueueInclude<ExtArgs> | null
    /**
     * The data needed to update a ReviewQueue.
     */
    data: XOR<ReviewQueueUpdateInput, ReviewQueueUncheckedUpdateInput>
    /**
     * Choose, which ReviewQueue to update.
     */
    where: ReviewQueueWhereUniqueInput
  }

  /**
   * ReviewQueue updateMany
   */
  export type ReviewQueueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReviewQueues.
     */
    data: XOR<ReviewQueueUpdateManyMutationInput, ReviewQueueUncheckedUpdateManyInput>
    /**
     * Filter which ReviewQueues to update
     */
    where?: ReviewQueueWhereInput
    /**
     * Limit how many ReviewQueues to update.
     */
    limit?: number
  }

  /**
   * ReviewQueue updateManyAndReturn
   */
  export type ReviewQueueUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewQueue
     */
    select?: ReviewQueueSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewQueue
     */
    omit?: ReviewQueueOmit<ExtArgs> | null
    /**
     * The data used to update ReviewQueues.
     */
    data: XOR<ReviewQueueUpdateManyMutationInput, ReviewQueueUncheckedUpdateManyInput>
    /**
     * Filter which ReviewQueues to update
     */
    where?: ReviewQueueWhereInput
    /**
     * Limit how many ReviewQueues to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewQueueIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReviewQueue upsert
   */
  export type ReviewQueueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewQueue
     */
    select?: ReviewQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewQueue
     */
    omit?: ReviewQueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewQueueInclude<ExtArgs> | null
    /**
     * The filter to search for the ReviewQueue to update in case it exists.
     */
    where: ReviewQueueWhereUniqueInput
    /**
     * In case the ReviewQueue found by the `where` argument doesn't exist, create a new ReviewQueue with this data.
     */
    create: XOR<ReviewQueueCreateInput, ReviewQueueUncheckedCreateInput>
    /**
     * In case the ReviewQueue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewQueueUpdateInput, ReviewQueueUncheckedUpdateInput>
  }

  /**
   * ReviewQueue delete
   */
  export type ReviewQueueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewQueue
     */
    select?: ReviewQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewQueue
     */
    omit?: ReviewQueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewQueueInclude<ExtArgs> | null
    /**
     * Filter which ReviewQueue to delete.
     */
    where: ReviewQueueWhereUniqueInput
  }

  /**
   * ReviewQueue deleteMany
   */
  export type ReviewQueueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReviewQueues to delete
     */
    where?: ReviewQueueWhereInput
    /**
     * Limit how many ReviewQueues to delete.
     */
    limit?: number
  }

  /**
   * ReviewQueue without action
   */
  export type ReviewQueueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewQueue
     */
    select?: ReviewQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewQueue
     */
    omit?: ReviewQueueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewQueueInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const QuizCardScalarFieldEnum: {
    id: 'id',
    videoId: 'videoId',
    userId: 'userId',
    question: 'question',
    answer: 'answer',
    type: 'type',
    difficulty: 'difficulty',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type QuizCardScalarFieldEnum = (typeof QuizCardScalarFieldEnum)[keyof typeof QuizCardScalarFieldEnum]


  export const ReviewScheduleScalarFieldEnum: {
    id: 'id',
    quizCardId: 'quizCardId',
    userId: 'userId',
    nextReview: 'nextReview',
    easeFactor: 'easeFactor',
    interval: 'interval',
    repetitions: 'repetitions',
    lastReview: 'lastReview',
    confidence: 'confidence'
  };

  export type ReviewScheduleScalarFieldEnum = (typeof ReviewScheduleScalarFieldEnum)[keyof typeof ReviewScheduleScalarFieldEnum]


  export const NoteScalarFieldEnum: {
    id: 'id',
    videoId: 'videoId',
    userId: 'userId',
    content: 'content',
    timestamp: 'timestamp',
    createdAt: 'createdAt'
  };

  export type NoteScalarFieldEnum = (typeof NoteScalarFieldEnum)[keyof typeof NoteScalarFieldEnum]


  export const ExportHistoryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    exportedAt: 'exportedAt'
  };

  export type ExportHistoryScalarFieldEnum = (typeof ExportHistoryScalarFieldEnum)[keyof typeof ExportHistoryScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const InvoiceScalarFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    amount: 'amount',
    status: 'status',
    dueDate: 'dueDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InvoiceScalarFieldEnum = (typeof InvoiceScalarFieldEnum)[keyof typeof InvoiceScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    preferences: 'preferences',
    xp: 'xp',
    streak: 'streak',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PlaylistScalarFieldEnum: {
    id: 'id',
    url: 'url',
    title: 'title',
    tags: 'tags',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type PlaylistScalarFieldEnum = (typeof PlaylistScalarFieldEnum)[keyof typeof PlaylistScalarFieldEnum]


  export const VideoScalarFieldEnum: {
    id: 'id',
    title: 'title',
    youtubeId: 'youtubeId',
    transcript: 'transcript',
    summary: 'summary',
    playlistId: 'playlistId',
    createdAt: 'createdAt'
  };

  export type VideoScalarFieldEnum = (typeof VideoScalarFieldEnum)[keyof typeof VideoScalarFieldEnum]


  export const LearningProgressScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    videoId: 'videoId',
    completed: 'completed',
    quizScores: 'quizScores',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LearningProgressScalarFieldEnum = (typeof LearningProgressScalarFieldEnum)[keyof typeof LearningProgressScalarFieldEnum]


  export const ReviewQueueScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    videoId: 'videoId',
    dueDate: 'dueDate',
    history: 'history',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReviewQueueScalarFieldEnum = (typeof ReviewQueueScalarFieldEnum)[keyof typeof ReviewQueueScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'QuizType'
   */
  export type EnumQuizTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuizType'>
    


  /**
   * Reference to a field of type 'QuizType[]'
   */
  export type ListEnumQuizTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuizType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type QuizCardWhereInput = {
    AND?: QuizCardWhereInput | QuizCardWhereInput[]
    OR?: QuizCardWhereInput[]
    NOT?: QuizCardWhereInput | QuizCardWhereInput[]
    id?: StringFilter<"QuizCard"> | string
    videoId?: StringFilter<"QuizCard"> | string
    userId?: StringFilter<"QuizCard"> | string
    question?: StringFilter<"QuizCard"> | string
    answer?: StringFilter<"QuizCard"> | string
    type?: EnumQuizTypeFilter<"QuizCard"> | $Enums.QuizType
    difficulty?: IntFilter<"QuizCard"> | number
    createdAt?: DateTimeFilter<"QuizCard"> | Date | string
    updatedAt?: DateTimeFilter<"QuizCard"> | Date | string
    reviewSchedules?: ReviewScheduleListRelationFilter
    Video?: XOR<VideoScalarRelationFilter, VideoWhereInput>
  }

  export type QuizCardOrderByWithRelationInput = {
    id?: SortOrder
    videoId?: SortOrder
    userId?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    type?: SortOrder
    difficulty?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reviewSchedules?: ReviewScheduleOrderByRelationAggregateInput
    Video?: VideoOrderByWithRelationInput
  }

  export type QuizCardWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuizCardWhereInput | QuizCardWhereInput[]
    OR?: QuizCardWhereInput[]
    NOT?: QuizCardWhereInput | QuizCardWhereInput[]
    videoId?: StringFilter<"QuizCard"> | string
    userId?: StringFilter<"QuizCard"> | string
    question?: StringFilter<"QuizCard"> | string
    answer?: StringFilter<"QuizCard"> | string
    type?: EnumQuizTypeFilter<"QuizCard"> | $Enums.QuizType
    difficulty?: IntFilter<"QuizCard"> | number
    createdAt?: DateTimeFilter<"QuizCard"> | Date | string
    updatedAt?: DateTimeFilter<"QuizCard"> | Date | string
    reviewSchedules?: ReviewScheduleListRelationFilter
    Video?: XOR<VideoScalarRelationFilter, VideoWhereInput>
  }, "id">

  export type QuizCardOrderByWithAggregationInput = {
    id?: SortOrder
    videoId?: SortOrder
    userId?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    type?: SortOrder
    difficulty?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: QuizCardCountOrderByAggregateInput
    _avg?: QuizCardAvgOrderByAggregateInput
    _max?: QuizCardMaxOrderByAggregateInput
    _min?: QuizCardMinOrderByAggregateInput
    _sum?: QuizCardSumOrderByAggregateInput
  }

  export type QuizCardScalarWhereWithAggregatesInput = {
    AND?: QuizCardScalarWhereWithAggregatesInput | QuizCardScalarWhereWithAggregatesInput[]
    OR?: QuizCardScalarWhereWithAggregatesInput[]
    NOT?: QuizCardScalarWhereWithAggregatesInput | QuizCardScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QuizCard"> | string
    videoId?: StringWithAggregatesFilter<"QuizCard"> | string
    userId?: StringWithAggregatesFilter<"QuizCard"> | string
    question?: StringWithAggregatesFilter<"QuizCard"> | string
    answer?: StringWithAggregatesFilter<"QuizCard"> | string
    type?: EnumQuizTypeWithAggregatesFilter<"QuizCard"> | $Enums.QuizType
    difficulty?: IntWithAggregatesFilter<"QuizCard"> | number
    createdAt?: DateTimeWithAggregatesFilter<"QuizCard"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"QuizCard"> | Date | string
  }

  export type ReviewScheduleWhereInput = {
    AND?: ReviewScheduleWhereInput | ReviewScheduleWhereInput[]
    OR?: ReviewScheduleWhereInput[]
    NOT?: ReviewScheduleWhereInput | ReviewScheduleWhereInput[]
    id?: StringFilter<"ReviewSchedule"> | string
    quizCardId?: StringFilter<"ReviewSchedule"> | string
    userId?: StringFilter<"ReviewSchedule"> | string
    nextReview?: DateTimeFilter<"ReviewSchedule"> | Date | string
    easeFactor?: FloatFilter<"ReviewSchedule"> | number
    interval?: IntFilter<"ReviewSchedule"> | number
    repetitions?: IntFilter<"ReviewSchedule"> | number
    lastReview?: DateTimeFilter<"ReviewSchedule"> | Date | string
    confidence?: IntFilter<"ReviewSchedule"> | number
    quizCard?: XOR<QuizCardScalarRelationFilter, QuizCardWhereInput>
  }

  export type ReviewScheduleOrderByWithRelationInput = {
    id?: SortOrder
    quizCardId?: SortOrder
    userId?: SortOrder
    nextReview?: SortOrder
    easeFactor?: SortOrder
    interval?: SortOrder
    repetitions?: SortOrder
    lastReview?: SortOrder
    confidence?: SortOrder
    quizCard?: QuizCardOrderByWithRelationInput
  }

  export type ReviewScheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReviewScheduleWhereInput | ReviewScheduleWhereInput[]
    OR?: ReviewScheduleWhereInput[]
    NOT?: ReviewScheduleWhereInput | ReviewScheduleWhereInput[]
    quizCardId?: StringFilter<"ReviewSchedule"> | string
    userId?: StringFilter<"ReviewSchedule"> | string
    nextReview?: DateTimeFilter<"ReviewSchedule"> | Date | string
    easeFactor?: FloatFilter<"ReviewSchedule"> | number
    interval?: IntFilter<"ReviewSchedule"> | number
    repetitions?: IntFilter<"ReviewSchedule"> | number
    lastReview?: DateTimeFilter<"ReviewSchedule"> | Date | string
    confidence?: IntFilter<"ReviewSchedule"> | number
    quizCard?: XOR<QuizCardScalarRelationFilter, QuizCardWhereInput>
  }, "id">

  export type ReviewScheduleOrderByWithAggregationInput = {
    id?: SortOrder
    quizCardId?: SortOrder
    userId?: SortOrder
    nextReview?: SortOrder
    easeFactor?: SortOrder
    interval?: SortOrder
    repetitions?: SortOrder
    lastReview?: SortOrder
    confidence?: SortOrder
    _count?: ReviewScheduleCountOrderByAggregateInput
    _avg?: ReviewScheduleAvgOrderByAggregateInput
    _max?: ReviewScheduleMaxOrderByAggregateInput
    _min?: ReviewScheduleMinOrderByAggregateInput
    _sum?: ReviewScheduleSumOrderByAggregateInput
  }

  export type ReviewScheduleScalarWhereWithAggregatesInput = {
    AND?: ReviewScheduleScalarWhereWithAggregatesInput | ReviewScheduleScalarWhereWithAggregatesInput[]
    OR?: ReviewScheduleScalarWhereWithAggregatesInput[]
    NOT?: ReviewScheduleScalarWhereWithAggregatesInput | ReviewScheduleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ReviewSchedule"> | string
    quizCardId?: StringWithAggregatesFilter<"ReviewSchedule"> | string
    userId?: StringWithAggregatesFilter<"ReviewSchedule"> | string
    nextReview?: DateTimeWithAggregatesFilter<"ReviewSchedule"> | Date | string
    easeFactor?: FloatWithAggregatesFilter<"ReviewSchedule"> | number
    interval?: IntWithAggregatesFilter<"ReviewSchedule"> | number
    repetitions?: IntWithAggregatesFilter<"ReviewSchedule"> | number
    lastReview?: DateTimeWithAggregatesFilter<"ReviewSchedule"> | Date | string
    confidence?: IntWithAggregatesFilter<"ReviewSchedule"> | number
  }

  export type NoteWhereInput = {
    AND?: NoteWhereInput | NoteWhereInput[]
    OR?: NoteWhereInput[]
    NOT?: NoteWhereInput | NoteWhereInput[]
    id?: StringFilter<"Note"> | string
    videoId?: StringFilter<"Note"> | string
    userId?: StringFilter<"Note"> | string
    content?: StringFilter<"Note"> | string
    timestamp?: FloatFilter<"Note"> | number
    createdAt?: DateTimeFilter<"Note"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    Video?: XOR<VideoScalarRelationFilter, VideoWhereInput>
  }

  export type NoteOrderByWithRelationInput = {
    id?: SortOrder
    videoId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
    User?: UserOrderByWithRelationInput
    Video?: VideoOrderByWithRelationInput
  }

  export type NoteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NoteWhereInput | NoteWhereInput[]
    OR?: NoteWhereInput[]
    NOT?: NoteWhereInput | NoteWhereInput[]
    videoId?: StringFilter<"Note"> | string
    userId?: StringFilter<"Note"> | string
    content?: StringFilter<"Note"> | string
    timestamp?: FloatFilter<"Note"> | number
    createdAt?: DateTimeFilter<"Note"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    Video?: XOR<VideoScalarRelationFilter, VideoWhereInput>
  }, "id">

  export type NoteOrderByWithAggregationInput = {
    id?: SortOrder
    videoId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
    _count?: NoteCountOrderByAggregateInput
    _avg?: NoteAvgOrderByAggregateInput
    _max?: NoteMaxOrderByAggregateInput
    _min?: NoteMinOrderByAggregateInput
    _sum?: NoteSumOrderByAggregateInput
  }

  export type NoteScalarWhereWithAggregatesInput = {
    AND?: NoteScalarWhereWithAggregatesInput | NoteScalarWhereWithAggregatesInput[]
    OR?: NoteScalarWhereWithAggregatesInput[]
    NOT?: NoteScalarWhereWithAggregatesInput | NoteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Note"> | string
    videoId?: StringWithAggregatesFilter<"Note"> | string
    userId?: StringWithAggregatesFilter<"Note"> | string
    content?: StringWithAggregatesFilter<"Note"> | string
    timestamp?: FloatWithAggregatesFilter<"Note"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Note"> | Date | string
  }

  export type ExportHistoryWhereInput = {
    AND?: ExportHistoryWhereInput | ExportHistoryWhereInput[]
    OR?: ExportHistoryWhereInput[]
    NOT?: ExportHistoryWhereInput | ExportHistoryWhereInput[]
    id?: StringFilter<"ExportHistory"> | string
    userId?: StringFilter<"ExportHistory"> | string
    exportedAt?: DateTimeFilter<"ExportHistory"> | Date | string
  }

  export type ExportHistoryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    exportedAt?: SortOrder
  }

  export type ExportHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExportHistoryWhereInput | ExportHistoryWhereInput[]
    OR?: ExportHistoryWhereInput[]
    NOT?: ExportHistoryWhereInput | ExportHistoryWhereInput[]
    userId?: StringFilter<"ExportHistory"> | string
    exportedAt?: DateTimeFilter<"ExportHistory"> | Date | string
  }, "id">

  export type ExportHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    exportedAt?: SortOrder
    _count?: ExportHistoryCountOrderByAggregateInput
    _max?: ExportHistoryMaxOrderByAggregateInput
    _min?: ExportHistoryMinOrderByAggregateInput
  }

  export type ExportHistoryScalarWhereWithAggregatesInput = {
    AND?: ExportHistoryScalarWhereWithAggregatesInput | ExportHistoryScalarWhereWithAggregatesInput[]
    OR?: ExportHistoryScalarWhereWithAggregatesInput[]
    NOT?: ExportHistoryScalarWhereWithAggregatesInput | ExportHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ExportHistory"> | string
    userId?: StringWithAggregatesFilter<"ExportHistory"> | string
    exportedAt?: DateTimeWithAggregatesFilter<"ExportHistory"> | Date | string
  }

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: StringFilter<"Customer"> | string
    name?: StringFilter<"Customer"> | string
    email?: StringFilter<"Customer"> | string
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    invoices?: InvoiceListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invoices?: InvoiceOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    name?: StringFilter<"Customer"> | string
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    invoices?: InvoiceListRelationFilter
  }, "id" | "email">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Customer"> | string
    name?: StringWithAggregatesFilter<"Customer"> | string
    email?: StringWithAggregatesFilter<"Customer"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
  }

  export type InvoiceWhereInput = {
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    id?: StringFilter<"Invoice"> | string
    customerId?: StringFilter<"Invoice"> | string
    amount?: FloatFilter<"Invoice"> | number
    status?: StringFilter<"Invoice"> | string
    dueDate?: DateTimeFilter<"Invoice"> | Date | string
    createdAt?: DateTimeFilter<"Invoice"> | Date | string
    updatedAt?: DateTimeFilter<"Invoice"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
  }

  export type InvoiceOrderByWithRelationInput = {
    id?: SortOrder
    customerId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customer?: CustomerOrderByWithRelationInput
  }

  export type InvoiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    customerId?: StringFilter<"Invoice"> | string
    amount?: FloatFilter<"Invoice"> | number
    status?: StringFilter<"Invoice"> | string
    dueDate?: DateTimeFilter<"Invoice"> | Date | string
    createdAt?: DateTimeFilter<"Invoice"> | Date | string
    updatedAt?: DateTimeFilter<"Invoice"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
  }, "id">

  export type InvoiceOrderByWithAggregationInput = {
    id?: SortOrder
    customerId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InvoiceCountOrderByAggregateInput
    _avg?: InvoiceAvgOrderByAggregateInput
    _max?: InvoiceMaxOrderByAggregateInput
    _min?: InvoiceMinOrderByAggregateInput
    _sum?: InvoiceSumOrderByAggregateInput
  }

  export type InvoiceScalarWhereWithAggregatesInput = {
    AND?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
    OR?: InvoiceScalarWhereWithAggregatesInput[]
    NOT?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Invoice"> | string
    customerId?: StringWithAggregatesFilter<"Invoice"> | string
    amount?: FloatWithAggregatesFilter<"Invoice"> | number
    status?: StringWithAggregatesFilter<"Invoice"> | string
    dueDate?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    preferences?: JsonNullableFilter<"User">
    xp?: IntFilter<"User"> | number
    streak?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    playlists?: PlaylistListRelationFilter
    notes?: NoteListRelationFilter
    progress?: LearningProgressListRelationFilter
    reviews?: ReviewQueueListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    preferences?: SortOrderInput | SortOrder
    xp?: SortOrder
    streak?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    playlists?: PlaylistOrderByRelationAggregateInput
    notes?: NoteOrderByRelationAggregateInput
    progress?: LearningProgressOrderByRelationAggregateInput
    reviews?: ReviewQueueOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    preferences?: JsonNullableFilter<"User">
    xp?: IntFilter<"User"> | number
    streak?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    playlists?: PlaylistListRelationFilter
    notes?: NoteListRelationFilter
    progress?: LearningProgressListRelationFilter
    reviews?: ReviewQueueListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    preferences?: SortOrderInput | SortOrder
    xp?: SortOrder
    streak?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    preferences?: JsonNullableWithAggregatesFilter<"User">
    xp?: IntWithAggregatesFilter<"User"> | number
    streak?: IntWithAggregatesFilter<"User"> | number
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PlaylistWhereInput = {
    AND?: PlaylistWhereInput | PlaylistWhereInput[]
    OR?: PlaylistWhereInput[]
    NOT?: PlaylistWhereInput | PlaylistWhereInput[]
    id?: StringFilter<"Playlist"> | string
    url?: StringFilter<"Playlist"> | string
    title?: StringFilter<"Playlist"> | string
    tags?: JsonFilter<"Playlist">
    userId?: StringFilter<"Playlist"> | string
    createdAt?: DateTimeFilter<"Playlist"> | Date | string
    videos?: VideoListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PlaylistOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrder
    tags?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    videos?: VideoOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type PlaylistWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PlaylistWhereInput | PlaylistWhereInput[]
    OR?: PlaylistWhereInput[]
    NOT?: PlaylistWhereInput | PlaylistWhereInput[]
    url?: StringFilter<"Playlist"> | string
    title?: StringFilter<"Playlist"> | string
    tags?: JsonFilter<"Playlist">
    userId?: StringFilter<"Playlist"> | string
    createdAt?: DateTimeFilter<"Playlist"> | Date | string
    videos?: VideoListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PlaylistOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrder
    tags?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: PlaylistCountOrderByAggregateInput
    _max?: PlaylistMaxOrderByAggregateInput
    _min?: PlaylistMinOrderByAggregateInput
  }

  export type PlaylistScalarWhereWithAggregatesInput = {
    AND?: PlaylistScalarWhereWithAggregatesInput | PlaylistScalarWhereWithAggregatesInput[]
    OR?: PlaylistScalarWhereWithAggregatesInput[]
    NOT?: PlaylistScalarWhereWithAggregatesInput | PlaylistScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Playlist"> | string
    url?: StringWithAggregatesFilter<"Playlist"> | string
    title?: StringWithAggregatesFilter<"Playlist"> | string
    tags?: JsonWithAggregatesFilter<"Playlist">
    userId?: StringWithAggregatesFilter<"Playlist"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Playlist"> | Date | string
  }

  export type VideoWhereInput = {
    AND?: VideoWhereInput | VideoWhereInput[]
    OR?: VideoWhereInput[]
    NOT?: VideoWhereInput | VideoWhereInput[]
    id?: StringFilter<"Video"> | string
    title?: StringFilter<"Video"> | string
    youtubeId?: StringFilter<"Video"> | string
    transcript?: StringNullableFilter<"Video"> | string | null
    summary?: StringNullableFilter<"Video"> | string | null
    playlistId?: StringNullableFilter<"Video"> | string | null
    createdAt?: DateTimeFilter<"Video"> | Date | string
    playlist?: XOR<PlaylistNullableScalarRelationFilter, PlaylistWhereInput> | null
    quizCards?: QuizCardListRelationFilter
    notes?: NoteListRelationFilter
    LearningProgress?: LearningProgressListRelationFilter
    ReviewQueue?: ReviewQueueListRelationFilter
  }

  export type VideoOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    youtubeId?: SortOrder
    transcript?: SortOrderInput | SortOrder
    summary?: SortOrderInput | SortOrder
    playlistId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    playlist?: PlaylistOrderByWithRelationInput
    quizCards?: QuizCardOrderByRelationAggregateInput
    notes?: NoteOrderByRelationAggregateInput
    LearningProgress?: LearningProgressOrderByRelationAggregateInput
    ReviewQueue?: ReviewQueueOrderByRelationAggregateInput
  }

  export type VideoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    youtubeId?: string
    AND?: VideoWhereInput | VideoWhereInput[]
    OR?: VideoWhereInput[]
    NOT?: VideoWhereInput | VideoWhereInput[]
    title?: StringFilter<"Video"> | string
    transcript?: StringNullableFilter<"Video"> | string | null
    summary?: StringNullableFilter<"Video"> | string | null
    playlistId?: StringNullableFilter<"Video"> | string | null
    createdAt?: DateTimeFilter<"Video"> | Date | string
    playlist?: XOR<PlaylistNullableScalarRelationFilter, PlaylistWhereInput> | null
    quizCards?: QuizCardListRelationFilter
    notes?: NoteListRelationFilter
    LearningProgress?: LearningProgressListRelationFilter
    ReviewQueue?: ReviewQueueListRelationFilter
  }, "id" | "youtubeId">

  export type VideoOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    youtubeId?: SortOrder
    transcript?: SortOrderInput | SortOrder
    summary?: SortOrderInput | SortOrder
    playlistId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: VideoCountOrderByAggregateInput
    _max?: VideoMaxOrderByAggregateInput
    _min?: VideoMinOrderByAggregateInput
  }

  export type VideoScalarWhereWithAggregatesInput = {
    AND?: VideoScalarWhereWithAggregatesInput | VideoScalarWhereWithAggregatesInput[]
    OR?: VideoScalarWhereWithAggregatesInput[]
    NOT?: VideoScalarWhereWithAggregatesInput | VideoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Video"> | string
    title?: StringWithAggregatesFilter<"Video"> | string
    youtubeId?: StringWithAggregatesFilter<"Video"> | string
    transcript?: StringNullableWithAggregatesFilter<"Video"> | string | null
    summary?: StringNullableWithAggregatesFilter<"Video"> | string | null
    playlistId?: StringNullableWithAggregatesFilter<"Video"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Video"> | Date | string
  }

  export type LearningProgressWhereInput = {
    AND?: LearningProgressWhereInput | LearningProgressWhereInput[]
    OR?: LearningProgressWhereInput[]
    NOT?: LearningProgressWhereInput | LearningProgressWhereInput[]
    id?: StringFilter<"LearningProgress"> | string
    userId?: StringFilter<"LearningProgress"> | string
    videoId?: StringFilter<"LearningProgress"> | string
    completed?: BoolFilter<"LearningProgress"> | boolean
    quizScores?: JsonFilter<"LearningProgress">
    createdAt?: DateTimeFilter<"LearningProgress"> | Date | string
    updatedAt?: DateTimeFilter<"LearningProgress"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    video?: XOR<VideoScalarRelationFilter, VideoWhereInput>
  }

  export type LearningProgressOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    videoId?: SortOrder
    completed?: SortOrder
    quizScores?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    video?: VideoOrderByWithRelationInput
  }

  export type LearningProgressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LearningProgressWhereInput | LearningProgressWhereInput[]
    OR?: LearningProgressWhereInput[]
    NOT?: LearningProgressWhereInput | LearningProgressWhereInput[]
    userId?: StringFilter<"LearningProgress"> | string
    videoId?: StringFilter<"LearningProgress"> | string
    completed?: BoolFilter<"LearningProgress"> | boolean
    quizScores?: JsonFilter<"LearningProgress">
    createdAt?: DateTimeFilter<"LearningProgress"> | Date | string
    updatedAt?: DateTimeFilter<"LearningProgress"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    video?: XOR<VideoScalarRelationFilter, VideoWhereInput>
  }, "id">

  export type LearningProgressOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    videoId?: SortOrder
    completed?: SortOrder
    quizScores?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LearningProgressCountOrderByAggregateInput
    _max?: LearningProgressMaxOrderByAggregateInput
    _min?: LearningProgressMinOrderByAggregateInput
  }

  export type LearningProgressScalarWhereWithAggregatesInput = {
    AND?: LearningProgressScalarWhereWithAggregatesInput | LearningProgressScalarWhereWithAggregatesInput[]
    OR?: LearningProgressScalarWhereWithAggregatesInput[]
    NOT?: LearningProgressScalarWhereWithAggregatesInput | LearningProgressScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LearningProgress"> | string
    userId?: StringWithAggregatesFilter<"LearningProgress"> | string
    videoId?: StringWithAggregatesFilter<"LearningProgress"> | string
    completed?: BoolWithAggregatesFilter<"LearningProgress"> | boolean
    quizScores?: JsonWithAggregatesFilter<"LearningProgress">
    createdAt?: DateTimeWithAggregatesFilter<"LearningProgress"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LearningProgress"> | Date | string
  }

  export type ReviewQueueWhereInput = {
    AND?: ReviewQueueWhereInput | ReviewQueueWhereInput[]
    OR?: ReviewQueueWhereInput[]
    NOT?: ReviewQueueWhereInput | ReviewQueueWhereInput[]
    id?: StringFilter<"ReviewQueue"> | string
    userId?: StringFilter<"ReviewQueue"> | string
    videoId?: StringFilter<"ReviewQueue"> | string
    dueDate?: DateTimeFilter<"ReviewQueue"> | Date | string
    history?: JsonFilter<"ReviewQueue">
    createdAt?: DateTimeFilter<"ReviewQueue"> | Date | string
    updatedAt?: DateTimeFilter<"ReviewQueue"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    video?: XOR<VideoScalarRelationFilter, VideoWhereInput>
  }

  export type ReviewQueueOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    videoId?: SortOrder
    dueDate?: SortOrder
    history?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    video?: VideoOrderByWithRelationInput
  }

  export type ReviewQueueWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReviewQueueWhereInput | ReviewQueueWhereInput[]
    OR?: ReviewQueueWhereInput[]
    NOT?: ReviewQueueWhereInput | ReviewQueueWhereInput[]
    userId?: StringFilter<"ReviewQueue"> | string
    videoId?: StringFilter<"ReviewQueue"> | string
    dueDate?: DateTimeFilter<"ReviewQueue"> | Date | string
    history?: JsonFilter<"ReviewQueue">
    createdAt?: DateTimeFilter<"ReviewQueue"> | Date | string
    updatedAt?: DateTimeFilter<"ReviewQueue"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    video?: XOR<VideoScalarRelationFilter, VideoWhereInput>
  }, "id">

  export type ReviewQueueOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    videoId?: SortOrder
    dueDate?: SortOrder
    history?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReviewQueueCountOrderByAggregateInput
    _max?: ReviewQueueMaxOrderByAggregateInput
    _min?: ReviewQueueMinOrderByAggregateInput
  }

  export type ReviewQueueScalarWhereWithAggregatesInput = {
    AND?: ReviewQueueScalarWhereWithAggregatesInput | ReviewQueueScalarWhereWithAggregatesInput[]
    OR?: ReviewQueueScalarWhereWithAggregatesInput[]
    NOT?: ReviewQueueScalarWhereWithAggregatesInput | ReviewQueueScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ReviewQueue"> | string
    userId?: StringWithAggregatesFilter<"ReviewQueue"> | string
    videoId?: StringWithAggregatesFilter<"ReviewQueue"> | string
    dueDate?: DateTimeWithAggregatesFilter<"ReviewQueue"> | Date | string
    history?: JsonWithAggregatesFilter<"ReviewQueue">
    createdAt?: DateTimeWithAggregatesFilter<"ReviewQueue"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ReviewQueue"> | Date | string
  }

  export type QuizCardCreateInput = {
    id?: string
    userId: string
    question: string
    answer: string
    type: $Enums.QuizType
    difficulty?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewSchedules?: ReviewScheduleCreateNestedManyWithoutQuizCardInput
    Video: VideoCreateNestedOneWithoutQuizCardsInput
  }

  export type QuizCardUncheckedCreateInput = {
    id?: string
    videoId: string
    userId: string
    question: string
    answer: string
    type: $Enums.QuizType
    difficulty?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewSchedules?: ReviewScheduleUncheckedCreateNestedManyWithoutQuizCardInput
  }

  export type QuizCardUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    type?: EnumQuizTypeFieldUpdateOperationsInput | $Enums.QuizType
    difficulty?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewSchedules?: ReviewScheduleUpdateManyWithoutQuizCardNestedInput
    Video?: VideoUpdateOneRequiredWithoutQuizCardsNestedInput
  }

  export type QuizCardUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    type?: EnumQuizTypeFieldUpdateOperationsInput | $Enums.QuizType
    difficulty?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewSchedules?: ReviewScheduleUncheckedUpdateManyWithoutQuizCardNestedInput
  }

  export type QuizCardCreateManyInput = {
    id?: string
    videoId: string
    userId: string
    question: string
    answer: string
    type: $Enums.QuizType
    difficulty?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuizCardUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    type?: EnumQuizTypeFieldUpdateOperationsInput | $Enums.QuizType
    difficulty?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizCardUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    type?: EnumQuizTypeFieldUpdateOperationsInput | $Enums.QuizType
    difficulty?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewScheduleCreateInput = {
    id?: string
    userId: string
    nextReview: Date | string
    easeFactor?: number
    interval?: number
    repetitions?: number
    lastReview?: Date | string
    confidence?: number
    quizCard: QuizCardCreateNestedOneWithoutReviewSchedulesInput
  }

  export type ReviewScheduleUncheckedCreateInput = {
    id?: string
    quizCardId: string
    userId: string
    nextReview: Date | string
    easeFactor?: number
    interval?: number
    repetitions?: number
    lastReview?: Date | string
    confidence?: number
  }

  export type ReviewScheduleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    nextReview?: DateTimeFieldUpdateOperationsInput | Date | string
    easeFactor?: FloatFieldUpdateOperationsInput | number
    interval?: IntFieldUpdateOperationsInput | number
    repetitions?: IntFieldUpdateOperationsInput | number
    lastReview?: DateTimeFieldUpdateOperationsInput | Date | string
    confidence?: IntFieldUpdateOperationsInput | number
    quizCard?: QuizCardUpdateOneRequiredWithoutReviewSchedulesNestedInput
  }

  export type ReviewScheduleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quizCardId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    nextReview?: DateTimeFieldUpdateOperationsInput | Date | string
    easeFactor?: FloatFieldUpdateOperationsInput | number
    interval?: IntFieldUpdateOperationsInput | number
    repetitions?: IntFieldUpdateOperationsInput | number
    lastReview?: DateTimeFieldUpdateOperationsInput | Date | string
    confidence?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewScheduleCreateManyInput = {
    id?: string
    quizCardId: string
    userId: string
    nextReview: Date | string
    easeFactor?: number
    interval?: number
    repetitions?: number
    lastReview?: Date | string
    confidence?: number
  }

  export type ReviewScheduleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    nextReview?: DateTimeFieldUpdateOperationsInput | Date | string
    easeFactor?: FloatFieldUpdateOperationsInput | number
    interval?: IntFieldUpdateOperationsInput | number
    repetitions?: IntFieldUpdateOperationsInput | number
    lastReview?: DateTimeFieldUpdateOperationsInput | Date | string
    confidence?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewScheduleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    quizCardId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    nextReview?: DateTimeFieldUpdateOperationsInput | Date | string
    easeFactor?: FloatFieldUpdateOperationsInput | number
    interval?: IntFieldUpdateOperationsInput | number
    repetitions?: IntFieldUpdateOperationsInput | number
    lastReview?: DateTimeFieldUpdateOperationsInput | Date | string
    confidence?: IntFieldUpdateOperationsInput | number
  }

  export type NoteCreateInput = {
    id?: string
    content: string
    timestamp?: number
    createdAt?: Date | string
    User: UserCreateNestedOneWithoutNotesInput
    Video: VideoCreateNestedOneWithoutNotesInput
  }

  export type NoteUncheckedCreateInput = {
    id?: string
    videoId: string
    userId: string
    content: string
    timestamp?: number
    createdAt?: Date | string
  }

  export type NoteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutNotesNestedInput
    Video?: VideoUpdateOneRequiredWithoutNotesNestedInput
  }

  export type NoteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteCreateManyInput = {
    id?: string
    videoId: string
    userId: string
    content: string
    timestamp?: number
    createdAt?: Date | string
  }

  export type NoteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExportHistoryCreateInput = {
    id?: string
    userId: string
    exportedAt?: Date | string
  }

  export type ExportHistoryUncheckedCreateInput = {
    id?: string
    userId: string
    exportedAt?: Date | string
  }

  export type ExportHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    exportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExportHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    exportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExportHistoryCreateManyInput = {
    id?: string
    userId: string
    exportedAt?: Date | string
  }

  export type ExportHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    exportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExportHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    exportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerCreateInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    invoices?: InvoiceCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    invoices?: InvoiceUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: InvoiceUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: InvoiceUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceCreateInput = {
    id?: string
    amount: number
    status: string
    dueDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutInvoicesInput
  }

  export type InvoiceUncheckedCreateInput = {
    id?: string
    customerId: string
    amount: number
    status: string
    dueDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutInvoicesNestedInput
  }

  export type InvoiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceCreateManyInput = {
    id?: string
    customerId: string
    amount: number
    status: string
    dueDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    preferences?: NullableJsonNullValueInput | InputJsonValue
    xp?: number
    streak?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    playlists?: PlaylistCreateNestedManyWithoutUserInput
    notes?: NoteCreateNestedManyWithoutUserInput
    progress?: LearningProgressCreateNestedManyWithoutUserInput
    reviews?: ReviewQueueCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    preferences?: NullableJsonNullValueInput | InputJsonValue
    xp?: number
    streak?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    playlists?: PlaylistUncheckedCreateNestedManyWithoutUserInput
    notes?: NoteUncheckedCreateNestedManyWithoutUserInput
    progress?: LearningProgressUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewQueueUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    preferences?: NullableJsonNullValueInput | InputJsonValue
    xp?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlists?: PlaylistUpdateManyWithoutUserNestedInput
    notes?: NoteUpdateManyWithoutUserNestedInput
    progress?: LearningProgressUpdateManyWithoutUserNestedInput
    reviews?: ReviewQueueUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    preferences?: NullableJsonNullValueInput | InputJsonValue
    xp?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlists?: PlaylistUncheckedUpdateManyWithoutUserNestedInput
    notes?: NoteUncheckedUpdateManyWithoutUserNestedInput
    progress?: LearningProgressUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewQueueUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    preferences?: NullableJsonNullValueInput | InputJsonValue
    xp?: number
    streak?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    preferences?: NullableJsonNullValueInput | InputJsonValue
    xp?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    preferences?: NullableJsonNullValueInput | InputJsonValue
    xp?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistCreateInput = {
    id?: string
    url: string
    title: string
    tags?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    videos?: VideoCreateNestedManyWithoutPlaylistInput
    user: UserCreateNestedOneWithoutPlaylistsInput
  }

  export type PlaylistUncheckedCreateInput = {
    id?: string
    url: string
    title: string
    tags?: JsonNullValueInput | InputJsonValue
    userId: string
    createdAt?: Date | string
    videos?: VideoUncheckedCreateNestedManyWithoutPlaylistInput
  }

  export type PlaylistUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    tags?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videos?: VideoUpdateManyWithoutPlaylistNestedInput
    user?: UserUpdateOneRequiredWithoutPlaylistsNestedInput
  }

  export type PlaylistUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    tags?: JsonNullValueInput | InputJsonValue
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videos?: VideoUncheckedUpdateManyWithoutPlaylistNestedInput
  }

  export type PlaylistCreateManyInput = {
    id?: string
    url: string
    title: string
    tags?: JsonNullValueInput | InputJsonValue
    userId: string
    createdAt?: Date | string
  }

  export type PlaylistUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    tags?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    tags?: JsonNullValueInput | InputJsonValue
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoCreateInput = {
    id?: string
    title: string
    youtubeId: string
    transcript?: string | null
    summary?: string | null
    createdAt?: Date | string
    playlist?: PlaylistCreateNestedOneWithoutVideosInput
    quizCards?: QuizCardCreateNestedManyWithoutVideoInput
    notes?: NoteCreateNestedManyWithoutVideoInput
    LearningProgress?: LearningProgressCreateNestedManyWithoutVideoInput
    ReviewQueue?: ReviewQueueCreateNestedManyWithoutVideoInput
  }

  export type VideoUncheckedCreateInput = {
    id?: string
    title: string
    youtubeId: string
    transcript?: string | null
    summary?: string | null
    playlistId?: string | null
    createdAt?: Date | string
    quizCards?: QuizCardUncheckedCreateNestedManyWithoutVideoInput
    notes?: NoteUncheckedCreateNestedManyWithoutVideoInput
    LearningProgress?: LearningProgressUncheckedCreateNestedManyWithoutVideoInput
    ReviewQueue?: ReviewQueueUncheckedCreateNestedManyWithoutVideoInput
  }

  export type VideoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    youtubeId?: StringFieldUpdateOperationsInput | string
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlist?: PlaylistUpdateOneWithoutVideosNestedInput
    quizCards?: QuizCardUpdateManyWithoutVideoNestedInput
    notes?: NoteUpdateManyWithoutVideoNestedInput
    LearningProgress?: LearningProgressUpdateManyWithoutVideoNestedInput
    ReviewQueue?: ReviewQueueUpdateManyWithoutVideoNestedInput
  }

  export type VideoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    youtubeId?: StringFieldUpdateOperationsInput | string
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    playlistId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quizCards?: QuizCardUncheckedUpdateManyWithoutVideoNestedInput
    notes?: NoteUncheckedUpdateManyWithoutVideoNestedInput
    LearningProgress?: LearningProgressUncheckedUpdateManyWithoutVideoNestedInput
    ReviewQueue?: ReviewQueueUncheckedUpdateManyWithoutVideoNestedInput
  }

  export type VideoCreateManyInput = {
    id?: string
    title: string
    youtubeId: string
    transcript?: string | null
    summary?: string | null
    playlistId?: string | null
    createdAt?: Date | string
  }

  export type VideoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    youtubeId?: StringFieldUpdateOperationsInput | string
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    youtubeId?: StringFieldUpdateOperationsInput | string
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    playlistId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningProgressCreateInput = {
    id?: string
    completed?: boolean
    quizScores?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProgressInput
    video: VideoCreateNestedOneWithoutLearningProgressInput
  }

  export type LearningProgressUncheckedCreateInput = {
    id?: string
    userId: string
    videoId: string
    completed?: boolean
    quizScores?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LearningProgressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    quizScores?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProgressNestedInput
    video?: VideoUpdateOneRequiredWithoutLearningProgressNestedInput
  }

  export type LearningProgressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    quizScores?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningProgressCreateManyInput = {
    id?: string
    userId: string
    videoId: string
    completed?: boolean
    quizScores?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LearningProgressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    quizScores?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningProgressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    quizScores?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewQueueCreateInput = {
    id?: string
    dueDate: Date | string
    history?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutReviewsInput
    video: VideoCreateNestedOneWithoutReviewQueueInput
  }

  export type ReviewQueueUncheckedCreateInput = {
    id?: string
    userId: string
    videoId: string
    dueDate: Date | string
    history?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewQueueUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    history?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
    video?: VideoUpdateOneRequiredWithoutReviewQueueNestedInput
  }

  export type ReviewQueueUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    history?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewQueueCreateManyInput = {
    id?: string
    userId: string
    videoId: string
    dueDate: Date | string
    history?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewQueueUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    history?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewQueueUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    history?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumQuizTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.QuizType | EnumQuizTypeFieldRefInput<$PrismaModel>
    in?: $Enums.QuizType[] | ListEnumQuizTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuizType[] | ListEnumQuizTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumQuizTypeFilter<$PrismaModel> | $Enums.QuizType
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ReviewScheduleListRelationFilter = {
    every?: ReviewScheduleWhereInput
    some?: ReviewScheduleWhereInput
    none?: ReviewScheduleWhereInput
  }

  export type VideoScalarRelationFilter = {
    is?: VideoWhereInput
    isNot?: VideoWhereInput
  }

  export type ReviewScheduleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuizCardCountOrderByAggregateInput = {
    id?: SortOrder
    videoId?: SortOrder
    userId?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    type?: SortOrder
    difficulty?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuizCardAvgOrderByAggregateInput = {
    difficulty?: SortOrder
  }

  export type QuizCardMaxOrderByAggregateInput = {
    id?: SortOrder
    videoId?: SortOrder
    userId?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    type?: SortOrder
    difficulty?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuizCardMinOrderByAggregateInput = {
    id?: SortOrder
    videoId?: SortOrder
    userId?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    type?: SortOrder
    difficulty?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuizCardSumOrderByAggregateInput = {
    difficulty?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumQuizTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuizType | EnumQuizTypeFieldRefInput<$PrismaModel>
    in?: $Enums.QuizType[] | ListEnumQuizTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuizType[] | ListEnumQuizTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumQuizTypeWithAggregatesFilter<$PrismaModel> | $Enums.QuizType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQuizTypeFilter<$PrismaModel>
    _max?: NestedEnumQuizTypeFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type QuizCardScalarRelationFilter = {
    is?: QuizCardWhereInput
    isNot?: QuizCardWhereInput
  }

  export type ReviewScheduleCountOrderByAggregateInput = {
    id?: SortOrder
    quizCardId?: SortOrder
    userId?: SortOrder
    nextReview?: SortOrder
    easeFactor?: SortOrder
    interval?: SortOrder
    repetitions?: SortOrder
    lastReview?: SortOrder
    confidence?: SortOrder
  }

  export type ReviewScheduleAvgOrderByAggregateInput = {
    easeFactor?: SortOrder
    interval?: SortOrder
    repetitions?: SortOrder
    confidence?: SortOrder
  }

  export type ReviewScheduleMaxOrderByAggregateInput = {
    id?: SortOrder
    quizCardId?: SortOrder
    userId?: SortOrder
    nextReview?: SortOrder
    easeFactor?: SortOrder
    interval?: SortOrder
    repetitions?: SortOrder
    lastReview?: SortOrder
    confidence?: SortOrder
  }

  export type ReviewScheduleMinOrderByAggregateInput = {
    id?: SortOrder
    quizCardId?: SortOrder
    userId?: SortOrder
    nextReview?: SortOrder
    easeFactor?: SortOrder
    interval?: SortOrder
    repetitions?: SortOrder
    lastReview?: SortOrder
    confidence?: SortOrder
  }

  export type ReviewScheduleSumOrderByAggregateInput = {
    easeFactor?: SortOrder
    interval?: SortOrder
    repetitions?: SortOrder
    confidence?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type NoteCountOrderByAggregateInput = {
    id?: SortOrder
    videoId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
  }

  export type NoteAvgOrderByAggregateInput = {
    timestamp?: SortOrder
  }

  export type NoteMaxOrderByAggregateInput = {
    id?: SortOrder
    videoId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
  }

  export type NoteMinOrderByAggregateInput = {
    id?: SortOrder
    videoId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
  }

  export type NoteSumOrderByAggregateInput = {
    timestamp?: SortOrder
  }

  export type ExportHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    exportedAt?: SortOrder
  }

  export type ExportHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    exportedAt?: SortOrder
  }

  export type ExportHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    exportedAt?: SortOrder
  }

  export type InvoiceListRelationFilter = {
    every?: InvoiceWhereInput
    some?: InvoiceWhereInput
    none?: InvoiceWhereInput
  }

  export type InvoiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerScalarRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type InvoiceCountOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvoiceAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type InvoiceMaxOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvoiceMinOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvoiceSumOrderByAggregateInput = {
    amount?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type PlaylistListRelationFilter = {
    every?: PlaylistWhereInput
    some?: PlaylistWhereInput
    none?: PlaylistWhereInput
  }

  export type NoteListRelationFilter = {
    every?: NoteWhereInput
    some?: NoteWhereInput
    none?: NoteWhereInput
  }

  export type LearningProgressListRelationFilter = {
    every?: LearningProgressWhereInput
    some?: LearningProgressWhereInput
    none?: LearningProgressWhereInput
  }

  export type ReviewQueueListRelationFilter = {
    every?: ReviewQueueWhereInput
    some?: ReviewQueueWhereInput
    none?: ReviewQueueWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PlaylistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LearningProgressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewQueueOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    preferences?: SortOrder
    xp?: SortOrder
    streak?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    xp?: SortOrder
    streak?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    xp?: SortOrder
    streak?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    xp?: SortOrder
    streak?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    xp?: SortOrder
    streak?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type VideoListRelationFilter = {
    every?: VideoWhereInput
    some?: VideoWhereInput
    none?: VideoWhereInput
  }

  export type VideoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlaylistCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrder
    tags?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type PlaylistMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type PlaylistMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type PlaylistNullableScalarRelationFilter = {
    is?: PlaylistWhereInput | null
    isNot?: PlaylistWhereInput | null
  }

  export type QuizCardListRelationFilter = {
    every?: QuizCardWhereInput
    some?: QuizCardWhereInput
    none?: QuizCardWhereInput
  }

  export type QuizCardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VideoCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    youtubeId?: SortOrder
    transcript?: SortOrder
    summary?: SortOrder
    playlistId?: SortOrder
    createdAt?: SortOrder
  }

  export type VideoMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    youtubeId?: SortOrder
    transcript?: SortOrder
    summary?: SortOrder
    playlistId?: SortOrder
    createdAt?: SortOrder
  }

  export type VideoMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    youtubeId?: SortOrder
    transcript?: SortOrder
    summary?: SortOrder
    playlistId?: SortOrder
    createdAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type LearningProgressCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    videoId?: SortOrder
    completed?: SortOrder
    quizScores?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LearningProgressMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    videoId?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LearningProgressMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    videoId?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ReviewQueueCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    videoId?: SortOrder
    dueDate?: SortOrder
    history?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewQueueMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    videoId?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewQueueMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    videoId?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewScheduleCreateNestedManyWithoutQuizCardInput = {
    create?: XOR<ReviewScheduleCreateWithoutQuizCardInput, ReviewScheduleUncheckedCreateWithoutQuizCardInput> | ReviewScheduleCreateWithoutQuizCardInput[] | ReviewScheduleUncheckedCreateWithoutQuizCardInput[]
    connectOrCreate?: ReviewScheduleCreateOrConnectWithoutQuizCardInput | ReviewScheduleCreateOrConnectWithoutQuizCardInput[]
    createMany?: ReviewScheduleCreateManyQuizCardInputEnvelope
    connect?: ReviewScheduleWhereUniqueInput | ReviewScheduleWhereUniqueInput[]
  }

  export type VideoCreateNestedOneWithoutQuizCardsInput = {
    create?: XOR<VideoCreateWithoutQuizCardsInput, VideoUncheckedCreateWithoutQuizCardsInput>
    connectOrCreate?: VideoCreateOrConnectWithoutQuizCardsInput
    connect?: VideoWhereUniqueInput
  }

  export type ReviewScheduleUncheckedCreateNestedManyWithoutQuizCardInput = {
    create?: XOR<ReviewScheduleCreateWithoutQuizCardInput, ReviewScheduleUncheckedCreateWithoutQuizCardInput> | ReviewScheduleCreateWithoutQuizCardInput[] | ReviewScheduleUncheckedCreateWithoutQuizCardInput[]
    connectOrCreate?: ReviewScheduleCreateOrConnectWithoutQuizCardInput | ReviewScheduleCreateOrConnectWithoutQuizCardInput[]
    createMany?: ReviewScheduleCreateManyQuizCardInputEnvelope
    connect?: ReviewScheduleWhereUniqueInput | ReviewScheduleWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumQuizTypeFieldUpdateOperationsInput = {
    set?: $Enums.QuizType
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ReviewScheduleUpdateManyWithoutQuizCardNestedInput = {
    create?: XOR<ReviewScheduleCreateWithoutQuizCardInput, ReviewScheduleUncheckedCreateWithoutQuizCardInput> | ReviewScheduleCreateWithoutQuizCardInput[] | ReviewScheduleUncheckedCreateWithoutQuizCardInput[]
    connectOrCreate?: ReviewScheduleCreateOrConnectWithoutQuizCardInput | ReviewScheduleCreateOrConnectWithoutQuizCardInput[]
    upsert?: ReviewScheduleUpsertWithWhereUniqueWithoutQuizCardInput | ReviewScheduleUpsertWithWhereUniqueWithoutQuizCardInput[]
    createMany?: ReviewScheduleCreateManyQuizCardInputEnvelope
    set?: ReviewScheduleWhereUniqueInput | ReviewScheduleWhereUniqueInput[]
    disconnect?: ReviewScheduleWhereUniqueInput | ReviewScheduleWhereUniqueInput[]
    delete?: ReviewScheduleWhereUniqueInput | ReviewScheduleWhereUniqueInput[]
    connect?: ReviewScheduleWhereUniqueInput | ReviewScheduleWhereUniqueInput[]
    update?: ReviewScheduleUpdateWithWhereUniqueWithoutQuizCardInput | ReviewScheduleUpdateWithWhereUniqueWithoutQuizCardInput[]
    updateMany?: ReviewScheduleUpdateManyWithWhereWithoutQuizCardInput | ReviewScheduleUpdateManyWithWhereWithoutQuizCardInput[]
    deleteMany?: ReviewScheduleScalarWhereInput | ReviewScheduleScalarWhereInput[]
  }

  export type VideoUpdateOneRequiredWithoutQuizCardsNestedInput = {
    create?: XOR<VideoCreateWithoutQuizCardsInput, VideoUncheckedCreateWithoutQuizCardsInput>
    connectOrCreate?: VideoCreateOrConnectWithoutQuizCardsInput
    upsert?: VideoUpsertWithoutQuizCardsInput
    connect?: VideoWhereUniqueInput
    update?: XOR<XOR<VideoUpdateToOneWithWhereWithoutQuizCardsInput, VideoUpdateWithoutQuizCardsInput>, VideoUncheckedUpdateWithoutQuizCardsInput>
  }

  export type ReviewScheduleUncheckedUpdateManyWithoutQuizCardNestedInput = {
    create?: XOR<ReviewScheduleCreateWithoutQuizCardInput, ReviewScheduleUncheckedCreateWithoutQuizCardInput> | ReviewScheduleCreateWithoutQuizCardInput[] | ReviewScheduleUncheckedCreateWithoutQuizCardInput[]
    connectOrCreate?: ReviewScheduleCreateOrConnectWithoutQuizCardInput | ReviewScheduleCreateOrConnectWithoutQuizCardInput[]
    upsert?: ReviewScheduleUpsertWithWhereUniqueWithoutQuizCardInput | ReviewScheduleUpsertWithWhereUniqueWithoutQuizCardInput[]
    createMany?: ReviewScheduleCreateManyQuizCardInputEnvelope
    set?: ReviewScheduleWhereUniqueInput | ReviewScheduleWhereUniqueInput[]
    disconnect?: ReviewScheduleWhereUniqueInput | ReviewScheduleWhereUniqueInput[]
    delete?: ReviewScheduleWhereUniqueInput | ReviewScheduleWhereUniqueInput[]
    connect?: ReviewScheduleWhereUniqueInput | ReviewScheduleWhereUniqueInput[]
    update?: ReviewScheduleUpdateWithWhereUniqueWithoutQuizCardInput | ReviewScheduleUpdateWithWhereUniqueWithoutQuizCardInput[]
    updateMany?: ReviewScheduleUpdateManyWithWhereWithoutQuizCardInput | ReviewScheduleUpdateManyWithWhereWithoutQuizCardInput[]
    deleteMany?: ReviewScheduleScalarWhereInput | ReviewScheduleScalarWhereInput[]
  }

  export type QuizCardCreateNestedOneWithoutReviewSchedulesInput = {
    create?: XOR<QuizCardCreateWithoutReviewSchedulesInput, QuizCardUncheckedCreateWithoutReviewSchedulesInput>
    connectOrCreate?: QuizCardCreateOrConnectWithoutReviewSchedulesInput
    connect?: QuizCardWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type QuizCardUpdateOneRequiredWithoutReviewSchedulesNestedInput = {
    create?: XOR<QuizCardCreateWithoutReviewSchedulesInput, QuizCardUncheckedCreateWithoutReviewSchedulesInput>
    connectOrCreate?: QuizCardCreateOrConnectWithoutReviewSchedulesInput
    upsert?: QuizCardUpsertWithoutReviewSchedulesInput
    connect?: QuizCardWhereUniqueInput
    update?: XOR<XOR<QuizCardUpdateToOneWithWhereWithoutReviewSchedulesInput, QuizCardUpdateWithoutReviewSchedulesInput>, QuizCardUncheckedUpdateWithoutReviewSchedulesInput>
  }

  export type UserCreateNestedOneWithoutNotesInput = {
    create?: XOR<UserCreateWithoutNotesInput, UserUncheckedCreateWithoutNotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotesInput
    connect?: UserWhereUniqueInput
  }

  export type VideoCreateNestedOneWithoutNotesInput = {
    create?: XOR<VideoCreateWithoutNotesInput, VideoUncheckedCreateWithoutNotesInput>
    connectOrCreate?: VideoCreateOrConnectWithoutNotesInput
    connect?: VideoWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutNotesNestedInput = {
    create?: XOR<UserCreateWithoutNotesInput, UserUncheckedCreateWithoutNotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotesInput
    upsert?: UserUpsertWithoutNotesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotesInput, UserUpdateWithoutNotesInput>, UserUncheckedUpdateWithoutNotesInput>
  }

  export type VideoUpdateOneRequiredWithoutNotesNestedInput = {
    create?: XOR<VideoCreateWithoutNotesInput, VideoUncheckedCreateWithoutNotesInput>
    connectOrCreate?: VideoCreateOrConnectWithoutNotesInput
    upsert?: VideoUpsertWithoutNotesInput
    connect?: VideoWhereUniqueInput
    update?: XOR<XOR<VideoUpdateToOneWithWhereWithoutNotesInput, VideoUpdateWithoutNotesInput>, VideoUncheckedUpdateWithoutNotesInput>
  }

  export type InvoiceCreateNestedManyWithoutCustomerInput = {
    create?: XOR<InvoiceCreateWithoutCustomerInput, InvoiceUncheckedCreateWithoutCustomerInput> | InvoiceCreateWithoutCustomerInput[] | InvoiceUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutCustomerInput | InvoiceCreateOrConnectWithoutCustomerInput[]
    createMany?: InvoiceCreateManyCustomerInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type InvoiceUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<InvoiceCreateWithoutCustomerInput, InvoiceUncheckedCreateWithoutCustomerInput> | InvoiceCreateWithoutCustomerInput[] | InvoiceUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutCustomerInput | InvoiceCreateOrConnectWithoutCustomerInput[]
    createMany?: InvoiceCreateManyCustomerInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type InvoiceUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<InvoiceCreateWithoutCustomerInput, InvoiceUncheckedCreateWithoutCustomerInput> | InvoiceCreateWithoutCustomerInput[] | InvoiceUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutCustomerInput | InvoiceCreateOrConnectWithoutCustomerInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutCustomerInput | InvoiceUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: InvoiceCreateManyCustomerInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutCustomerInput | InvoiceUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutCustomerInput | InvoiceUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type InvoiceUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<InvoiceCreateWithoutCustomerInput, InvoiceUncheckedCreateWithoutCustomerInput> | InvoiceCreateWithoutCustomerInput[] | InvoiceUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutCustomerInput | InvoiceCreateOrConnectWithoutCustomerInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutCustomerInput | InvoiceUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: InvoiceCreateManyCustomerInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutCustomerInput | InvoiceUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutCustomerInput | InvoiceUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type CustomerCreateNestedOneWithoutInvoicesInput = {
    create?: XOR<CustomerCreateWithoutInvoicesInput, CustomerUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutInvoicesInput
    connect?: CustomerWhereUniqueInput
  }

  export type CustomerUpdateOneRequiredWithoutInvoicesNestedInput = {
    create?: XOR<CustomerCreateWithoutInvoicesInput, CustomerUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutInvoicesInput
    upsert?: CustomerUpsertWithoutInvoicesInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutInvoicesInput, CustomerUpdateWithoutInvoicesInput>, CustomerUncheckedUpdateWithoutInvoicesInput>
  }

  export type PlaylistCreateNestedManyWithoutUserInput = {
    create?: XOR<PlaylistCreateWithoutUserInput, PlaylistUncheckedCreateWithoutUserInput> | PlaylistCreateWithoutUserInput[] | PlaylistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutUserInput | PlaylistCreateOrConnectWithoutUserInput[]
    createMany?: PlaylistCreateManyUserInputEnvelope
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
  }

  export type NoteCreateNestedManyWithoutUserInput = {
    create?: XOR<NoteCreateWithoutUserInput, NoteUncheckedCreateWithoutUserInput> | NoteCreateWithoutUserInput[] | NoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutUserInput | NoteCreateOrConnectWithoutUserInput[]
    createMany?: NoteCreateManyUserInputEnvelope
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
  }

  export type LearningProgressCreateNestedManyWithoutUserInput = {
    create?: XOR<LearningProgressCreateWithoutUserInput, LearningProgressUncheckedCreateWithoutUserInput> | LearningProgressCreateWithoutUserInput[] | LearningProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LearningProgressCreateOrConnectWithoutUserInput | LearningProgressCreateOrConnectWithoutUserInput[]
    createMany?: LearningProgressCreateManyUserInputEnvelope
    connect?: LearningProgressWhereUniqueInput | LearningProgressWhereUniqueInput[]
  }

  export type ReviewQueueCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewQueueCreateWithoutUserInput, ReviewQueueUncheckedCreateWithoutUserInput> | ReviewQueueCreateWithoutUserInput[] | ReviewQueueUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewQueueCreateOrConnectWithoutUserInput | ReviewQueueCreateOrConnectWithoutUserInput[]
    createMany?: ReviewQueueCreateManyUserInputEnvelope
    connect?: ReviewQueueWhereUniqueInput | ReviewQueueWhereUniqueInput[]
  }

  export type PlaylistUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PlaylistCreateWithoutUserInput, PlaylistUncheckedCreateWithoutUserInput> | PlaylistCreateWithoutUserInput[] | PlaylistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutUserInput | PlaylistCreateOrConnectWithoutUserInput[]
    createMany?: PlaylistCreateManyUserInputEnvelope
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
  }

  export type NoteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NoteCreateWithoutUserInput, NoteUncheckedCreateWithoutUserInput> | NoteCreateWithoutUserInput[] | NoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutUserInput | NoteCreateOrConnectWithoutUserInput[]
    createMany?: NoteCreateManyUserInputEnvelope
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
  }

  export type LearningProgressUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LearningProgressCreateWithoutUserInput, LearningProgressUncheckedCreateWithoutUserInput> | LearningProgressCreateWithoutUserInput[] | LearningProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LearningProgressCreateOrConnectWithoutUserInput | LearningProgressCreateOrConnectWithoutUserInput[]
    createMany?: LearningProgressCreateManyUserInputEnvelope
    connect?: LearningProgressWhereUniqueInput | LearningProgressWhereUniqueInput[]
  }

  export type ReviewQueueUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewQueueCreateWithoutUserInput, ReviewQueueUncheckedCreateWithoutUserInput> | ReviewQueueCreateWithoutUserInput[] | ReviewQueueUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewQueueCreateOrConnectWithoutUserInput | ReviewQueueCreateOrConnectWithoutUserInput[]
    createMany?: ReviewQueueCreateManyUserInputEnvelope
    connect?: ReviewQueueWhereUniqueInput | ReviewQueueWhereUniqueInput[]
  }

  export type PlaylistUpdateManyWithoutUserNestedInput = {
    create?: XOR<PlaylistCreateWithoutUserInput, PlaylistUncheckedCreateWithoutUserInput> | PlaylistCreateWithoutUserInput[] | PlaylistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutUserInput | PlaylistCreateOrConnectWithoutUserInput[]
    upsert?: PlaylistUpsertWithWhereUniqueWithoutUserInput | PlaylistUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PlaylistCreateManyUserInputEnvelope
    set?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    disconnect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    delete?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    update?: PlaylistUpdateWithWhereUniqueWithoutUserInput | PlaylistUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PlaylistUpdateManyWithWhereWithoutUserInput | PlaylistUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PlaylistScalarWhereInput | PlaylistScalarWhereInput[]
  }

  export type NoteUpdateManyWithoutUserNestedInput = {
    create?: XOR<NoteCreateWithoutUserInput, NoteUncheckedCreateWithoutUserInput> | NoteCreateWithoutUserInput[] | NoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutUserInput | NoteCreateOrConnectWithoutUserInput[]
    upsert?: NoteUpsertWithWhereUniqueWithoutUserInput | NoteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NoteCreateManyUserInputEnvelope
    set?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    disconnect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    delete?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    update?: NoteUpdateWithWhereUniqueWithoutUserInput | NoteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NoteUpdateManyWithWhereWithoutUserInput | NoteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NoteScalarWhereInput | NoteScalarWhereInput[]
  }

  export type LearningProgressUpdateManyWithoutUserNestedInput = {
    create?: XOR<LearningProgressCreateWithoutUserInput, LearningProgressUncheckedCreateWithoutUserInput> | LearningProgressCreateWithoutUserInput[] | LearningProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LearningProgressCreateOrConnectWithoutUserInput | LearningProgressCreateOrConnectWithoutUserInput[]
    upsert?: LearningProgressUpsertWithWhereUniqueWithoutUserInput | LearningProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LearningProgressCreateManyUserInputEnvelope
    set?: LearningProgressWhereUniqueInput | LearningProgressWhereUniqueInput[]
    disconnect?: LearningProgressWhereUniqueInput | LearningProgressWhereUniqueInput[]
    delete?: LearningProgressWhereUniqueInput | LearningProgressWhereUniqueInput[]
    connect?: LearningProgressWhereUniqueInput | LearningProgressWhereUniqueInput[]
    update?: LearningProgressUpdateWithWhereUniqueWithoutUserInput | LearningProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LearningProgressUpdateManyWithWhereWithoutUserInput | LearningProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LearningProgressScalarWhereInput | LearningProgressScalarWhereInput[]
  }

  export type ReviewQueueUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewQueueCreateWithoutUserInput, ReviewQueueUncheckedCreateWithoutUserInput> | ReviewQueueCreateWithoutUserInput[] | ReviewQueueUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewQueueCreateOrConnectWithoutUserInput | ReviewQueueCreateOrConnectWithoutUserInput[]
    upsert?: ReviewQueueUpsertWithWhereUniqueWithoutUserInput | ReviewQueueUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewQueueCreateManyUserInputEnvelope
    set?: ReviewQueueWhereUniqueInput | ReviewQueueWhereUniqueInput[]
    disconnect?: ReviewQueueWhereUniqueInput | ReviewQueueWhereUniqueInput[]
    delete?: ReviewQueueWhereUniqueInput | ReviewQueueWhereUniqueInput[]
    connect?: ReviewQueueWhereUniqueInput | ReviewQueueWhereUniqueInput[]
    update?: ReviewQueueUpdateWithWhereUniqueWithoutUserInput | ReviewQueueUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewQueueUpdateManyWithWhereWithoutUserInput | ReviewQueueUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewQueueScalarWhereInput | ReviewQueueScalarWhereInput[]
  }

  export type PlaylistUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PlaylistCreateWithoutUserInput, PlaylistUncheckedCreateWithoutUserInput> | PlaylistCreateWithoutUserInput[] | PlaylistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutUserInput | PlaylistCreateOrConnectWithoutUserInput[]
    upsert?: PlaylistUpsertWithWhereUniqueWithoutUserInput | PlaylistUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PlaylistCreateManyUserInputEnvelope
    set?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    disconnect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    delete?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    update?: PlaylistUpdateWithWhereUniqueWithoutUserInput | PlaylistUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PlaylistUpdateManyWithWhereWithoutUserInput | PlaylistUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PlaylistScalarWhereInput | PlaylistScalarWhereInput[]
  }

  export type NoteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NoteCreateWithoutUserInput, NoteUncheckedCreateWithoutUserInput> | NoteCreateWithoutUserInput[] | NoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutUserInput | NoteCreateOrConnectWithoutUserInput[]
    upsert?: NoteUpsertWithWhereUniqueWithoutUserInput | NoteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NoteCreateManyUserInputEnvelope
    set?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    disconnect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    delete?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    update?: NoteUpdateWithWhereUniqueWithoutUserInput | NoteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NoteUpdateManyWithWhereWithoutUserInput | NoteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NoteScalarWhereInput | NoteScalarWhereInput[]
  }

  export type LearningProgressUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LearningProgressCreateWithoutUserInput, LearningProgressUncheckedCreateWithoutUserInput> | LearningProgressCreateWithoutUserInput[] | LearningProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LearningProgressCreateOrConnectWithoutUserInput | LearningProgressCreateOrConnectWithoutUserInput[]
    upsert?: LearningProgressUpsertWithWhereUniqueWithoutUserInput | LearningProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LearningProgressCreateManyUserInputEnvelope
    set?: LearningProgressWhereUniqueInput | LearningProgressWhereUniqueInput[]
    disconnect?: LearningProgressWhereUniqueInput | LearningProgressWhereUniqueInput[]
    delete?: LearningProgressWhereUniqueInput | LearningProgressWhereUniqueInput[]
    connect?: LearningProgressWhereUniqueInput | LearningProgressWhereUniqueInput[]
    update?: LearningProgressUpdateWithWhereUniqueWithoutUserInput | LearningProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LearningProgressUpdateManyWithWhereWithoutUserInput | LearningProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LearningProgressScalarWhereInput | LearningProgressScalarWhereInput[]
  }

  export type ReviewQueueUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewQueueCreateWithoutUserInput, ReviewQueueUncheckedCreateWithoutUserInput> | ReviewQueueCreateWithoutUserInput[] | ReviewQueueUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewQueueCreateOrConnectWithoutUserInput | ReviewQueueCreateOrConnectWithoutUserInput[]
    upsert?: ReviewQueueUpsertWithWhereUniqueWithoutUserInput | ReviewQueueUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewQueueCreateManyUserInputEnvelope
    set?: ReviewQueueWhereUniqueInput | ReviewQueueWhereUniqueInput[]
    disconnect?: ReviewQueueWhereUniqueInput | ReviewQueueWhereUniqueInput[]
    delete?: ReviewQueueWhereUniqueInput | ReviewQueueWhereUniqueInput[]
    connect?: ReviewQueueWhereUniqueInput | ReviewQueueWhereUniqueInput[]
    update?: ReviewQueueUpdateWithWhereUniqueWithoutUserInput | ReviewQueueUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewQueueUpdateManyWithWhereWithoutUserInput | ReviewQueueUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewQueueScalarWhereInput | ReviewQueueScalarWhereInput[]
  }

  export type VideoCreateNestedManyWithoutPlaylistInput = {
    create?: XOR<VideoCreateWithoutPlaylistInput, VideoUncheckedCreateWithoutPlaylistInput> | VideoCreateWithoutPlaylistInput[] | VideoUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutPlaylistInput | VideoCreateOrConnectWithoutPlaylistInput[]
    createMany?: VideoCreateManyPlaylistInputEnvelope
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutPlaylistsInput = {
    create?: XOR<UserCreateWithoutPlaylistsInput, UserUncheckedCreateWithoutPlaylistsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlaylistsInput
    connect?: UserWhereUniqueInput
  }

  export type VideoUncheckedCreateNestedManyWithoutPlaylistInput = {
    create?: XOR<VideoCreateWithoutPlaylistInput, VideoUncheckedCreateWithoutPlaylistInput> | VideoCreateWithoutPlaylistInput[] | VideoUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutPlaylistInput | VideoCreateOrConnectWithoutPlaylistInput[]
    createMany?: VideoCreateManyPlaylistInputEnvelope
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
  }

  export type VideoUpdateManyWithoutPlaylistNestedInput = {
    create?: XOR<VideoCreateWithoutPlaylistInput, VideoUncheckedCreateWithoutPlaylistInput> | VideoCreateWithoutPlaylistInput[] | VideoUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutPlaylistInput | VideoCreateOrConnectWithoutPlaylistInput[]
    upsert?: VideoUpsertWithWhereUniqueWithoutPlaylistInput | VideoUpsertWithWhereUniqueWithoutPlaylistInput[]
    createMany?: VideoCreateManyPlaylistInputEnvelope
    set?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    disconnect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    delete?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    update?: VideoUpdateWithWhereUniqueWithoutPlaylistInput | VideoUpdateWithWhereUniqueWithoutPlaylistInput[]
    updateMany?: VideoUpdateManyWithWhereWithoutPlaylistInput | VideoUpdateManyWithWhereWithoutPlaylistInput[]
    deleteMany?: VideoScalarWhereInput | VideoScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutPlaylistsNestedInput = {
    create?: XOR<UserCreateWithoutPlaylistsInput, UserUncheckedCreateWithoutPlaylistsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlaylistsInput
    upsert?: UserUpsertWithoutPlaylistsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPlaylistsInput, UserUpdateWithoutPlaylistsInput>, UserUncheckedUpdateWithoutPlaylistsInput>
  }

  export type VideoUncheckedUpdateManyWithoutPlaylistNestedInput = {
    create?: XOR<VideoCreateWithoutPlaylistInput, VideoUncheckedCreateWithoutPlaylistInput> | VideoCreateWithoutPlaylistInput[] | VideoUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutPlaylistInput | VideoCreateOrConnectWithoutPlaylistInput[]
    upsert?: VideoUpsertWithWhereUniqueWithoutPlaylistInput | VideoUpsertWithWhereUniqueWithoutPlaylistInput[]
    createMany?: VideoCreateManyPlaylistInputEnvelope
    set?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    disconnect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    delete?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    update?: VideoUpdateWithWhereUniqueWithoutPlaylistInput | VideoUpdateWithWhereUniqueWithoutPlaylistInput[]
    updateMany?: VideoUpdateManyWithWhereWithoutPlaylistInput | VideoUpdateManyWithWhereWithoutPlaylistInput[]
    deleteMany?: VideoScalarWhereInput | VideoScalarWhereInput[]
  }

  export type PlaylistCreateNestedOneWithoutVideosInput = {
    create?: XOR<PlaylistCreateWithoutVideosInput, PlaylistUncheckedCreateWithoutVideosInput>
    connectOrCreate?: PlaylistCreateOrConnectWithoutVideosInput
    connect?: PlaylistWhereUniqueInput
  }

  export type QuizCardCreateNestedManyWithoutVideoInput = {
    create?: XOR<QuizCardCreateWithoutVideoInput, QuizCardUncheckedCreateWithoutVideoInput> | QuizCardCreateWithoutVideoInput[] | QuizCardUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: QuizCardCreateOrConnectWithoutVideoInput | QuizCardCreateOrConnectWithoutVideoInput[]
    createMany?: QuizCardCreateManyVideoInputEnvelope
    connect?: QuizCardWhereUniqueInput | QuizCardWhereUniqueInput[]
  }

  export type NoteCreateNestedManyWithoutVideoInput = {
    create?: XOR<NoteCreateWithoutVideoInput, NoteUncheckedCreateWithoutVideoInput> | NoteCreateWithoutVideoInput[] | NoteUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutVideoInput | NoteCreateOrConnectWithoutVideoInput[]
    createMany?: NoteCreateManyVideoInputEnvelope
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
  }

  export type LearningProgressCreateNestedManyWithoutVideoInput = {
    create?: XOR<LearningProgressCreateWithoutVideoInput, LearningProgressUncheckedCreateWithoutVideoInput> | LearningProgressCreateWithoutVideoInput[] | LearningProgressUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: LearningProgressCreateOrConnectWithoutVideoInput | LearningProgressCreateOrConnectWithoutVideoInput[]
    createMany?: LearningProgressCreateManyVideoInputEnvelope
    connect?: LearningProgressWhereUniqueInput | LearningProgressWhereUniqueInput[]
  }

  export type ReviewQueueCreateNestedManyWithoutVideoInput = {
    create?: XOR<ReviewQueueCreateWithoutVideoInput, ReviewQueueUncheckedCreateWithoutVideoInput> | ReviewQueueCreateWithoutVideoInput[] | ReviewQueueUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: ReviewQueueCreateOrConnectWithoutVideoInput | ReviewQueueCreateOrConnectWithoutVideoInput[]
    createMany?: ReviewQueueCreateManyVideoInputEnvelope
    connect?: ReviewQueueWhereUniqueInput | ReviewQueueWhereUniqueInput[]
  }

  export type QuizCardUncheckedCreateNestedManyWithoutVideoInput = {
    create?: XOR<QuizCardCreateWithoutVideoInput, QuizCardUncheckedCreateWithoutVideoInput> | QuizCardCreateWithoutVideoInput[] | QuizCardUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: QuizCardCreateOrConnectWithoutVideoInput | QuizCardCreateOrConnectWithoutVideoInput[]
    createMany?: QuizCardCreateManyVideoInputEnvelope
    connect?: QuizCardWhereUniqueInput | QuizCardWhereUniqueInput[]
  }

  export type NoteUncheckedCreateNestedManyWithoutVideoInput = {
    create?: XOR<NoteCreateWithoutVideoInput, NoteUncheckedCreateWithoutVideoInput> | NoteCreateWithoutVideoInput[] | NoteUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutVideoInput | NoteCreateOrConnectWithoutVideoInput[]
    createMany?: NoteCreateManyVideoInputEnvelope
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
  }

  export type LearningProgressUncheckedCreateNestedManyWithoutVideoInput = {
    create?: XOR<LearningProgressCreateWithoutVideoInput, LearningProgressUncheckedCreateWithoutVideoInput> | LearningProgressCreateWithoutVideoInput[] | LearningProgressUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: LearningProgressCreateOrConnectWithoutVideoInput | LearningProgressCreateOrConnectWithoutVideoInput[]
    createMany?: LearningProgressCreateManyVideoInputEnvelope
    connect?: LearningProgressWhereUniqueInput | LearningProgressWhereUniqueInput[]
  }

  export type ReviewQueueUncheckedCreateNestedManyWithoutVideoInput = {
    create?: XOR<ReviewQueueCreateWithoutVideoInput, ReviewQueueUncheckedCreateWithoutVideoInput> | ReviewQueueCreateWithoutVideoInput[] | ReviewQueueUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: ReviewQueueCreateOrConnectWithoutVideoInput | ReviewQueueCreateOrConnectWithoutVideoInput[]
    createMany?: ReviewQueueCreateManyVideoInputEnvelope
    connect?: ReviewQueueWhereUniqueInput | ReviewQueueWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type PlaylistUpdateOneWithoutVideosNestedInput = {
    create?: XOR<PlaylistCreateWithoutVideosInput, PlaylistUncheckedCreateWithoutVideosInput>
    connectOrCreate?: PlaylistCreateOrConnectWithoutVideosInput
    upsert?: PlaylistUpsertWithoutVideosInput
    disconnect?: PlaylistWhereInput | boolean
    delete?: PlaylistWhereInput | boolean
    connect?: PlaylistWhereUniqueInput
    update?: XOR<XOR<PlaylistUpdateToOneWithWhereWithoutVideosInput, PlaylistUpdateWithoutVideosInput>, PlaylistUncheckedUpdateWithoutVideosInput>
  }

  export type QuizCardUpdateManyWithoutVideoNestedInput = {
    create?: XOR<QuizCardCreateWithoutVideoInput, QuizCardUncheckedCreateWithoutVideoInput> | QuizCardCreateWithoutVideoInput[] | QuizCardUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: QuizCardCreateOrConnectWithoutVideoInput | QuizCardCreateOrConnectWithoutVideoInput[]
    upsert?: QuizCardUpsertWithWhereUniqueWithoutVideoInput | QuizCardUpsertWithWhereUniqueWithoutVideoInput[]
    createMany?: QuizCardCreateManyVideoInputEnvelope
    set?: QuizCardWhereUniqueInput | QuizCardWhereUniqueInput[]
    disconnect?: QuizCardWhereUniqueInput | QuizCardWhereUniqueInput[]
    delete?: QuizCardWhereUniqueInput | QuizCardWhereUniqueInput[]
    connect?: QuizCardWhereUniqueInput | QuizCardWhereUniqueInput[]
    update?: QuizCardUpdateWithWhereUniqueWithoutVideoInput | QuizCardUpdateWithWhereUniqueWithoutVideoInput[]
    updateMany?: QuizCardUpdateManyWithWhereWithoutVideoInput | QuizCardUpdateManyWithWhereWithoutVideoInput[]
    deleteMany?: QuizCardScalarWhereInput | QuizCardScalarWhereInput[]
  }

  export type NoteUpdateManyWithoutVideoNestedInput = {
    create?: XOR<NoteCreateWithoutVideoInput, NoteUncheckedCreateWithoutVideoInput> | NoteCreateWithoutVideoInput[] | NoteUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutVideoInput | NoteCreateOrConnectWithoutVideoInput[]
    upsert?: NoteUpsertWithWhereUniqueWithoutVideoInput | NoteUpsertWithWhereUniqueWithoutVideoInput[]
    createMany?: NoteCreateManyVideoInputEnvelope
    set?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    disconnect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    delete?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    update?: NoteUpdateWithWhereUniqueWithoutVideoInput | NoteUpdateWithWhereUniqueWithoutVideoInput[]
    updateMany?: NoteUpdateManyWithWhereWithoutVideoInput | NoteUpdateManyWithWhereWithoutVideoInput[]
    deleteMany?: NoteScalarWhereInput | NoteScalarWhereInput[]
  }

  export type LearningProgressUpdateManyWithoutVideoNestedInput = {
    create?: XOR<LearningProgressCreateWithoutVideoInput, LearningProgressUncheckedCreateWithoutVideoInput> | LearningProgressCreateWithoutVideoInput[] | LearningProgressUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: LearningProgressCreateOrConnectWithoutVideoInput | LearningProgressCreateOrConnectWithoutVideoInput[]
    upsert?: LearningProgressUpsertWithWhereUniqueWithoutVideoInput | LearningProgressUpsertWithWhereUniqueWithoutVideoInput[]
    createMany?: LearningProgressCreateManyVideoInputEnvelope
    set?: LearningProgressWhereUniqueInput | LearningProgressWhereUniqueInput[]
    disconnect?: LearningProgressWhereUniqueInput | LearningProgressWhereUniqueInput[]
    delete?: LearningProgressWhereUniqueInput | LearningProgressWhereUniqueInput[]
    connect?: LearningProgressWhereUniqueInput | LearningProgressWhereUniqueInput[]
    update?: LearningProgressUpdateWithWhereUniqueWithoutVideoInput | LearningProgressUpdateWithWhereUniqueWithoutVideoInput[]
    updateMany?: LearningProgressUpdateManyWithWhereWithoutVideoInput | LearningProgressUpdateManyWithWhereWithoutVideoInput[]
    deleteMany?: LearningProgressScalarWhereInput | LearningProgressScalarWhereInput[]
  }

  export type ReviewQueueUpdateManyWithoutVideoNestedInput = {
    create?: XOR<ReviewQueueCreateWithoutVideoInput, ReviewQueueUncheckedCreateWithoutVideoInput> | ReviewQueueCreateWithoutVideoInput[] | ReviewQueueUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: ReviewQueueCreateOrConnectWithoutVideoInput | ReviewQueueCreateOrConnectWithoutVideoInput[]
    upsert?: ReviewQueueUpsertWithWhereUniqueWithoutVideoInput | ReviewQueueUpsertWithWhereUniqueWithoutVideoInput[]
    createMany?: ReviewQueueCreateManyVideoInputEnvelope
    set?: ReviewQueueWhereUniqueInput | ReviewQueueWhereUniqueInput[]
    disconnect?: ReviewQueueWhereUniqueInput | ReviewQueueWhereUniqueInput[]
    delete?: ReviewQueueWhereUniqueInput | ReviewQueueWhereUniqueInput[]
    connect?: ReviewQueueWhereUniqueInput | ReviewQueueWhereUniqueInput[]
    update?: ReviewQueueUpdateWithWhereUniqueWithoutVideoInput | ReviewQueueUpdateWithWhereUniqueWithoutVideoInput[]
    updateMany?: ReviewQueueUpdateManyWithWhereWithoutVideoInput | ReviewQueueUpdateManyWithWhereWithoutVideoInput[]
    deleteMany?: ReviewQueueScalarWhereInput | ReviewQueueScalarWhereInput[]
  }

  export type QuizCardUncheckedUpdateManyWithoutVideoNestedInput = {
    create?: XOR<QuizCardCreateWithoutVideoInput, QuizCardUncheckedCreateWithoutVideoInput> | QuizCardCreateWithoutVideoInput[] | QuizCardUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: QuizCardCreateOrConnectWithoutVideoInput | QuizCardCreateOrConnectWithoutVideoInput[]
    upsert?: QuizCardUpsertWithWhereUniqueWithoutVideoInput | QuizCardUpsertWithWhereUniqueWithoutVideoInput[]
    createMany?: QuizCardCreateManyVideoInputEnvelope
    set?: QuizCardWhereUniqueInput | QuizCardWhereUniqueInput[]
    disconnect?: QuizCardWhereUniqueInput | QuizCardWhereUniqueInput[]
    delete?: QuizCardWhereUniqueInput | QuizCardWhereUniqueInput[]
    connect?: QuizCardWhereUniqueInput | QuizCardWhereUniqueInput[]
    update?: QuizCardUpdateWithWhereUniqueWithoutVideoInput | QuizCardUpdateWithWhereUniqueWithoutVideoInput[]
    updateMany?: QuizCardUpdateManyWithWhereWithoutVideoInput | QuizCardUpdateManyWithWhereWithoutVideoInput[]
    deleteMany?: QuizCardScalarWhereInput | QuizCardScalarWhereInput[]
  }

  export type NoteUncheckedUpdateManyWithoutVideoNestedInput = {
    create?: XOR<NoteCreateWithoutVideoInput, NoteUncheckedCreateWithoutVideoInput> | NoteCreateWithoutVideoInput[] | NoteUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutVideoInput | NoteCreateOrConnectWithoutVideoInput[]
    upsert?: NoteUpsertWithWhereUniqueWithoutVideoInput | NoteUpsertWithWhereUniqueWithoutVideoInput[]
    createMany?: NoteCreateManyVideoInputEnvelope
    set?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    disconnect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    delete?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    update?: NoteUpdateWithWhereUniqueWithoutVideoInput | NoteUpdateWithWhereUniqueWithoutVideoInput[]
    updateMany?: NoteUpdateManyWithWhereWithoutVideoInput | NoteUpdateManyWithWhereWithoutVideoInput[]
    deleteMany?: NoteScalarWhereInput | NoteScalarWhereInput[]
  }

  export type LearningProgressUncheckedUpdateManyWithoutVideoNestedInput = {
    create?: XOR<LearningProgressCreateWithoutVideoInput, LearningProgressUncheckedCreateWithoutVideoInput> | LearningProgressCreateWithoutVideoInput[] | LearningProgressUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: LearningProgressCreateOrConnectWithoutVideoInput | LearningProgressCreateOrConnectWithoutVideoInput[]
    upsert?: LearningProgressUpsertWithWhereUniqueWithoutVideoInput | LearningProgressUpsertWithWhereUniqueWithoutVideoInput[]
    createMany?: LearningProgressCreateManyVideoInputEnvelope
    set?: LearningProgressWhereUniqueInput | LearningProgressWhereUniqueInput[]
    disconnect?: LearningProgressWhereUniqueInput | LearningProgressWhereUniqueInput[]
    delete?: LearningProgressWhereUniqueInput | LearningProgressWhereUniqueInput[]
    connect?: LearningProgressWhereUniqueInput | LearningProgressWhereUniqueInput[]
    update?: LearningProgressUpdateWithWhereUniqueWithoutVideoInput | LearningProgressUpdateWithWhereUniqueWithoutVideoInput[]
    updateMany?: LearningProgressUpdateManyWithWhereWithoutVideoInput | LearningProgressUpdateManyWithWhereWithoutVideoInput[]
    deleteMany?: LearningProgressScalarWhereInput | LearningProgressScalarWhereInput[]
  }

  export type ReviewQueueUncheckedUpdateManyWithoutVideoNestedInput = {
    create?: XOR<ReviewQueueCreateWithoutVideoInput, ReviewQueueUncheckedCreateWithoutVideoInput> | ReviewQueueCreateWithoutVideoInput[] | ReviewQueueUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: ReviewQueueCreateOrConnectWithoutVideoInput | ReviewQueueCreateOrConnectWithoutVideoInput[]
    upsert?: ReviewQueueUpsertWithWhereUniqueWithoutVideoInput | ReviewQueueUpsertWithWhereUniqueWithoutVideoInput[]
    createMany?: ReviewQueueCreateManyVideoInputEnvelope
    set?: ReviewQueueWhereUniqueInput | ReviewQueueWhereUniqueInput[]
    disconnect?: ReviewQueueWhereUniqueInput | ReviewQueueWhereUniqueInput[]
    delete?: ReviewQueueWhereUniqueInput | ReviewQueueWhereUniqueInput[]
    connect?: ReviewQueueWhereUniqueInput | ReviewQueueWhereUniqueInput[]
    update?: ReviewQueueUpdateWithWhereUniqueWithoutVideoInput | ReviewQueueUpdateWithWhereUniqueWithoutVideoInput[]
    updateMany?: ReviewQueueUpdateManyWithWhereWithoutVideoInput | ReviewQueueUpdateManyWithWhereWithoutVideoInput[]
    deleteMany?: ReviewQueueScalarWhereInput | ReviewQueueScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProgressInput = {
    create?: XOR<UserCreateWithoutProgressInput, UserUncheckedCreateWithoutProgressInput>
    connectOrCreate?: UserCreateOrConnectWithoutProgressInput
    connect?: UserWhereUniqueInput
  }

  export type VideoCreateNestedOneWithoutLearningProgressInput = {
    create?: XOR<VideoCreateWithoutLearningProgressInput, VideoUncheckedCreateWithoutLearningProgressInput>
    connectOrCreate?: VideoCreateOrConnectWithoutLearningProgressInput
    connect?: VideoWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutProgressNestedInput = {
    create?: XOR<UserCreateWithoutProgressInput, UserUncheckedCreateWithoutProgressInput>
    connectOrCreate?: UserCreateOrConnectWithoutProgressInput
    upsert?: UserUpsertWithoutProgressInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProgressInput, UserUpdateWithoutProgressInput>, UserUncheckedUpdateWithoutProgressInput>
  }

  export type VideoUpdateOneRequiredWithoutLearningProgressNestedInput = {
    create?: XOR<VideoCreateWithoutLearningProgressInput, VideoUncheckedCreateWithoutLearningProgressInput>
    connectOrCreate?: VideoCreateOrConnectWithoutLearningProgressInput
    upsert?: VideoUpsertWithoutLearningProgressInput
    connect?: VideoWhereUniqueInput
    update?: XOR<XOR<VideoUpdateToOneWithWhereWithoutLearningProgressInput, VideoUpdateWithoutLearningProgressInput>, VideoUncheckedUpdateWithoutLearningProgressInput>
  }

  export type UserCreateNestedOneWithoutReviewsInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    connect?: UserWhereUniqueInput
  }

  export type VideoCreateNestedOneWithoutReviewQueueInput = {
    create?: XOR<VideoCreateWithoutReviewQueueInput, VideoUncheckedCreateWithoutReviewQueueInput>
    connectOrCreate?: VideoCreateOrConnectWithoutReviewQueueInput
    connect?: VideoWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    upsert?: UserUpsertWithoutReviewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsInput, UserUpdateWithoutReviewsInput>, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type VideoUpdateOneRequiredWithoutReviewQueueNestedInput = {
    create?: XOR<VideoCreateWithoutReviewQueueInput, VideoUncheckedCreateWithoutReviewQueueInput>
    connectOrCreate?: VideoCreateOrConnectWithoutReviewQueueInput
    upsert?: VideoUpsertWithoutReviewQueueInput
    connect?: VideoWhereUniqueInput
    update?: XOR<XOR<VideoUpdateToOneWithWhereWithoutReviewQueueInput, VideoUpdateWithoutReviewQueueInput>, VideoUncheckedUpdateWithoutReviewQueueInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumQuizTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.QuizType | EnumQuizTypeFieldRefInput<$PrismaModel>
    in?: $Enums.QuizType[] | ListEnumQuizTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuizType[] | ListEnumQuizTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumQuizTypeFilter<$PrismaModel> | $Enums.QuizType
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumQuizTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuizType | EnumQuizTypeFieldRefInput<$PrismaModel>
    in?: $Enums.QuizType[] | ListEnumQuizTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuizType[] | ListEnumQuizTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumQuizTypeWithAggregatesFilter<$PrismaModel> | $Enums.QuizType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQuizTypeFilter<$PrismaModel>
    _max?: NestedEnumQuizTypeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ReviewScheduleCreateWithoutQuizCardInput = {
    id?: string
    userId: string
    nextReview: Date | string
    easeFactor?: number
    interval?: number
    repetitions?: number
    lastReview?: Date | string
    confidence?: number
  }

  export type ReviewScheduleUncheckedCreateWithoutQuizCardInput = {
    id?: string
    userId: string
    nextReview: Date | string
    easeFactor?: number
    interval?: number
    repetitions?: number
    lastReview?: Date | string
    confidence?: number
  }

  export type ReviewScheduleCreateOrConnectWithoutQuizCardInput = {
    where: ReviewScheduleWhereUniqueInput
    create: XOR<ReviewScheduleCreateWithoutQuizCardInput, ReviewScheduleUncheckedCreateWithoutQuizCardInput>
  }

  export type ReviewScheduleCreateManyQuizCardInputEnvelope = {
    data: ReviewScheduleCreateManyQuizCardInput | ReviewScheduleCreateManyQuizCardInput[]
    skipDuplicates?: boolean
  }

  export type VideoCreateWithoutQuizCardsInput = {
    id?: string
    title: string
    youtubeId: string
    transcript?: string | null
    summary?: string | null
    createdAt?: Date | string
    playlist?: PlaylistCreateNestedOneWithoutVideosInput
    notes?: NoteCreateNestedManyWithoutVideoInput
    LearningProgress?: LearningProgressCreateNestedManyWithoutVideoInput
    ReviewQueue?: ReviewQueueCreateNestedManyWithoutVideoInput
  }

  export type VideoUncheckedCreateWithoutQuizCardsInput = {
    id?: string
    title: string
    youtubeId: string
    transcript?: string | null
    summary?: string | null
    playlistId?: string | null
    createdAt?: Date | string
    notes?: NoteUncheckedCreateNestedManyWithoutVideoInput
    LearningProgress?: LearningProgressUncheckedCreateNestedManyWithoutVideoInput
    ReviewQueue?: ReviewQueueUncheckedCreateNestedManyWithoutVideoInput
  }

  export type VideoCreateOrConnectWithoutQuizCardsInput = {
    where: VideoWhereUniqueInput
    create: XOR<VideoCreateWithoutQuizCardsInput, VideoUncheckedCreateWithoutQuizCardsInput>
  }

  export type ReviewScheduleUpsertWithWhereUniqueWithoutQuizCardInput = {
    where: ReviewScheduleWhereUniqueInput
    update: XOR<ReviewScheduleUpdateWithoutQuizCardInput, ReviewScheduleUncheckedUpdateWithoutQuizCardInput>
    create: XOR<ReviewScheduleCreateWithoutQuizCardInput, ReviewScheduleUncheckedCreateWithoutQuizCardInput>
  }

  export type ReviewScheduleUpdateWithWhereUniqueWithoutQuizCardInput = {
    where: ReviewScheduleWhereUniqueInput
    data: XOR<ReviewScheduleUpdateWithoutQuizCardInput, ReviewScheduleUncheckedUpdateWithoutQuizCardInput>
  }

  export type ReviewScheduleUpdateManyWithWhereWithoutQuizCardInput = {
    where: ReviewScheduleScalarWhereInput
    data: XOR<ReviewScheduleUpdateManyMutationInput, ReviewScheduleUncheckedUpdateManyWithoutQuizCardInput>
  }

  export type ReviewScheduleScalarWhereInput = {
    AND?: ReviewScheduleScalarWhereInput | ReviewScheduleScalarWhereInput[]
    OR?: ReviewScheduleScalarWhereInput[]
    NOT?: ReviewScheduleScalarWhereInput | ReviewScheduleScalarWhereInput[]
    id?: StringFilter<"ReviewSchedule"> | string
    quizCardId?: StringFilter<"ReviewSchedule"> | string
    userId?: StringFilter<"ReviewSchedule"> | string
    nextReview?: DateTimeFilter<"ReviewSchedule"> | Date | string
    easeFactor?: FloatFilter<"ReviewSchedule"> | number
    interval?: IntFilter<"ReviewSchedule"> | number
    repetitions?: IntFilter<"ReviewSchedule"> | number
    lastReview?: DateTimeFilter<"ReviewSchedule"> | Date | string
    confidence?: IntFilter<"ReviewSchedule"> | number
  }

  export type VideoUpsertWithoutQuizCardsInput = {
    update: XOR<VideoUpdateWithoutQuizCardsInput, VideoUncheckedUpdateWithoutQuizCardsInput>
    create: XOR<VideoCreateWithoutQuizCardsInput, VideoUncheckedCreateWithoutQuizCardsInput>
    where?: VideoWhereInput
  }

  export type VideoUpdateToOneWithWhereWithoutQuizCardsInput = {
    where?: VideoWhereInput
    data: XOR<VideoUpdateWithoutQuizCardsInput, VideoUncheckedUpdateWithoutQuizCardsInput>
  }

  export type VideoUpdateWithoutQuizCardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    youtubeId?: StringFieldUpdateOperationsInput | string
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlist?: PlaylistUpdateOneWithoutVideosNestedInput
    notes?: NoteUpdateManyWithoutVideoNestedInput
    LearningProgress?: LearningProgressUpdateManyWithoutVideoNestedInput
    ReviewQueue?: ReviewQueueUpdateManyWithoutVideoNestedInput
  }

  export type VideoUncheckedUpdateWithoutQuizCardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    youtubeId?: StringFieldUpdateOperationsInput | string
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    playlistId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NoteUncheckedUpdateManyWithoutVideoNestedInput
    LearningProgress?: LearningProgressUncheckedUpdateManyWithoutVideoNestedInput
    ReviewQueue?: ReviewQueueUncheckedUpdateManyWithoutVideoNestedInput
  }

  export type QuizCardCreateWithoutReviewSchedulesInput = {
    id?: string
    userId: string
    question: string
    answer: string
    type: $Enums.QuizType
    difficulty?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Video: VideoCreateNestedOneWithoutQuizCardsInput
  }

  export type QuizCardUncheckedCreateWithoutReviewSchedulesInput = {
    id?: string
    videoId: string
    userId: string
    question: string
    answer: string
    type: $Enums.QuizType
    difficulty?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuizCardCreateOrConnectWithoutReviewSchedulesInput = {
    where: QuizCardWhereUniqueInput
    create: XOR<QuizCardCreateWithoutReviewSchedulesInput, QuizCardUncheckedCreateWithoutReviewSchedulesInput>
  }

  export type QuizCardUpsertWithoutReviewSchedulesInput = {
    update: XOR<QuizCardUpdateWithoutReviewSchedulesInput, QuizCardUncheckedUpdateWithoutReviewSchedulesInput>
    create: XOR<QuizCardCreateWithoutReviewSchedulesInput, QuizCardUncheckedCreateWithoutReviewSchedulesInput>
    where?: QuizCardWhereInput
  }

  export type QuizCardUpdateToOneWithWhereWithoutReviewSchedulesInput = {
    where?: QuizCardWhereInput
    data: XOR<QuizCardUpdateWithoutReviewSchedulesInput, QuizCardUncheckedUpdateWithoutReviewSchedulesInput>
  }

  export type QuizCardUpdateWithoutReviewSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    type?: EnumQuizTypeFieldUpdateOperationsInput | $Enums.QuizType
    difficulty?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Video?: VideoUpdateOneRequiredWithoutQuizCardsNestedInput
  }

  export type QuizCardUncheckedUpdateWithoutReviewSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    type?: EnumQuizTypeFieldUpdateOperationsInput | $Enums.QuizType
    difficulty?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutNotesInput = {
    id?: string
    email: string
    preferences?: NullableJsonNullValueInput | InputJsonValue
    xp?: number
    streak?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    playlists?: PlaylistCreateNestedManyWithoutUserInput
    progress?: LearningProgressCreateNestedManyWithoutUserInput
    reviews?: ReviewQueueCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotesInput = {
    id?: string
    email: string
    preferences?: NullableJsonNullValueInput | InputJsonValue
    xp?: number
    streak?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    playlists?: PlaylistUncheckedCreateNestedManyWithoutUserInput
    progress?: LearningProgressUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewQueueUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotesInput, UserUncheckedCreateWithoutNotesInput>
  }

  export type VideoCreateWithoutNotesInput = {
    id?: string
    title: string
    youtubeId: string
    transcript?: string | null
    summary?: string | null
    createdAt?: Date | string
    playlist?: PlaylistCreateNestedOneWithoutVideosInput
    quizCards?: QuizCardCreateNestedManyWithoutVideoInput
    LearningProgress?: LearningProgressCreateNestedManyWithoutVideoInput
    ReviewQueue?: ReviewQueueCreateNestedManyWithoutVideoInput
  }

  export type VideoUncheckedCreateWithoutNotesInput = {
    id?: string
    title: string
    youtubeId: string
    transcript?: string | null
    summary?: string | null
    playlistId?: string | null
    createdAt?: Date | string
    quizCards?: QuizCardUncheckedCreateNestedManyWithoutVideoInput
    LearningProgress?: LearningProgressUncheckedCreateNestedManyWithoutVideoInput
    ReviewQueue?: ReviewQueueUncheckedCreateNestedManyWithoutVideoInput
  }

  export type VideoCreateOrConnectWithoutNotesInput = {
    where: VideoWhereUniqueInput
    create: XOR<VideoCreateWithoutNotesInput, VideoUncheckedCreateWithoutNotesInput>
  }

  export type UserUpsertWithoutNotesInput = {
    update: XOR<UserUpdateWithoutNotesInput, UserUncheckedUpdateWithoutNotesInput>
    create: XOR<UserCreateWithoutNotesInput, UserUncheckedCreateWithoutNotesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotesInput, UserUncheckedUpdateWithoutNotesInput>
  }

  export type UserUpdateWithoutNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    preferences?: NullableJsonNullValueInput | InputJsonValue
    xp?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlists?: PlaylistUpdateManyWithoutUserNestedInput
    progress?: LearningProgressUpdateManyWithoutUserNestedInput
    reviews?: ReviewQueueUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    preferences?: NullableJsonNullValueInput | InputJsonValue
    xp?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlists?: PlaylistUncheckedUpdateManyWithoutUserNestedInput
    progress?: LearningProgressUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewQueueUncheckedUpdateManyWithoutUserNestedInput
  }

  export type VideoUpsertWithoutNotesInput = {
    update: XOR<VideoUpdateWithoutNotesInput, VideoUncheckedUpdateWithoutNotesInput>
    create: XOR<VideoCreateWithoutNotesInput, VideoUncheckedCreateWithoutNotesInput>
    where?: VideoWhereInput
  }

  export type VideoUpdateToOneWithWhereWithoutNotesInput = {
    where?: VideoWhereInput
    data: XOR<VideoUpdateWithoutNotesInput, VideoUncheckedUpdateWithoutNotesInput>
  }

  export type VideoUpdateWithoutNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    youtubeId?: StringFieldUpdateOperationsInput | string
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlist?: PlaylistUpdateOneWithoutVideosNestedInput
    quizCards?: QuizCardUpdateManyWithoutVideoNestedInput
    LearningProgress?: LearningProgressUpdateManyWithoutVideoNestedInput
    ReviewQueue?: ReviewQueueUpdateManyWithoutVideoNestedInput
  }

  export type VideoUncheckedUpdateWithoutNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    youtubeId?: StringFieldUpdateOperationsInput | string
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    playlistId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quizCards?: QuizCardUncheckedUpdateManyWithoutVideoNestedInput
    LearningProgress?: LearningProgressUncheckedUpdateManyWithoutVideoNestedInput
    ReviewQueue?: ReviewQueueUncheckedUpdateManyWithoutVideoNestedInput
  }

  export type InvoiceCreateWithoutCustomerInput = {
    id?: string
    amount: number
    status: string
    dueDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceUncheckedCreateWithoutCustomerInput = {
    id?: string
    amount: number
    status: string
    dueDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceCreateOrConnectWithoutCustomerInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutCustomerInput, InvoiceUncheckedCreateWithoutCustomerInput>
  }

  export type InvoiceCreateManyCustomerInputEnvelope = {
    data: InvoiceCreateManyCustomerInput | InvoiceCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type InvoiceUpsertWithWhereUniqueWithoutCustomerInput = {
    where: InvoiceWhereUniqueInput
    update: XOR<InvoiceUpdateWithoutCustomerInput, InvoiceUncheckedUpdateWithoutCustomerInput>
    create: XOR<InvoiceCreateWithoutCustomerInput, InvoiceUncheckedCreateWithoutCustomerInput>
  }

  export type InvoiceUpdateWithWhereUniqueWithoutCustomerInput = {
    where: InvoiceWhereUniqueInput
    data: XOR<InvoiceUpdateWithoutCustomerInput, InvoiceUncheckedUpdateWithoutCustomerInput>
  }

  export type InvoiceUpdateManyWithWhereWithoutCustomerInput = {
    where: InvoiceScalarWhereInput
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyWithoutCustomerInput>
  }

  export type InvoiceScalarWhereInput = {
    AND?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
    OR?: InvoiceScalarWhereInput[]
    NOT?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
    id?: StringFilter<"Invoice"> | string
    customerId?: StringFilter<"Invoice"> | string
    amount?: FloatFilter<"Invoice"> | number
    status?: StringFilter<"Invoice"> | string
    dueDate?: DateTimeFilter<"Invoice"> | Date | string
    createdAt?: DateTimeFilter<"Invoice"> | Date | string
    updatedAt?: DateTimeFilter<"Invoice"> | Date | string
  }

  export type CustomerCreateWithoutInvoicesInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerUncheckedCreateWithoutInvoicesInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerCreateOrConnectWithoutInvoicesInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutInvoicesInput, CustomerUncheckedCreateWithoutInvoicesInput>
  }

  export type CustomerUpsertWithoutInvoicesInput = {
    update: XOR<CustomerUpdateWithoutInvoicesInput, CustomerUncheckedUpdateWithoutInvoicesInput>
    create: XOR<CustomerCreateWithoutInvoicesInput, CustomerUncheckedCreateWithoutInvoicesInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutInvoicesInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutInvoicesInput, CustomerUncheckedUpdateWithoutInvoicesInput>
  }

  export type CustomerUpdateWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistCreateWithoutUserInput = {
    id?: string
    url: string
    title: string
    tags?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    videos?: VideoCreateNestedManyWithoutPlaylistInput
  }

  export type PlaylistUncheckedCreateWithoutUserInput = {
    id?: string
    url: string
    title: string
    tags?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    videos?: VideoUncheckedCreateNestedManyWithoutPlaylistInput
  }

  export type PlaylistCreateOrConnectWithoutUserInput = {
    where: PlaylistWhereUniqueInput
    create: XOR<PlaylistCreateWithoutUserInput, PlaylistUncheckedCreateWithoutUserInput>
  }

  export type PlaylistCreateManyUserInputEnvelope = {
    data: PlaylistCreateManyUserInput | PlaylistCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NoteCreateWithoutUserInput = {
    id?: string
    content: string
    timestamp?: number
    createdAt?: Date | string
    Video: VideoCreateNestedOneWithoutNotesInput
  }

  export type NoteUncheckedCreateWithoutUserInput = {
    id?: string
    videoId: string
    content: string
    timestamp?: number
    createdAt?: Date | string
  }

  export type NoteCreateOrConnectWithoutUserInput = {
    where: NoteWhereUniqueInput
    create: XOR<NoteCreateWithoutUserInput, NoteUncheckedCreateWithoutUserInput>
  }

  export type NoteCreateManyUserInputEnvelope = {
    data: NoteCreateManyUserInput | NoteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LearningProgressCreateWithoutUserInput = {
    id?: string
    completed?: boolean
    quizScores?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    video: VideoCreateNestedOneWithoutLearningProgressInput
  }

  export type LearningProgressUncheckedCreateWithoutUserInput = {
    id?: string
    videoId: string
    completed?: boolean
    quizScores?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LearningProgressCreateOrConnectWithoutUserInput = {
    where: LearningProgressWhereUniqueInput
    create: XOR<LearningProgressCreateWithoutUserInput, LearningProgressUncheckedCreateWithoutUserInput>
  }

  export type LearningProgressCreateManyUserInputEnvelope = {
    data: LearningProgressCreateManyUserInput | LearningProgressCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReviewQueueCreateWithoutUserInput = {
    id?: string
    dueDate: Date | string
    history?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    video: VideoCreateNestedOneWithoutReviewQueueInput
  }

  export type ReviewQueueUncheckedCreateWithoutUserInput = {
    id?: string
    videoId: string
    dueDate: Date | string
    history?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewQueueCreateOrConnectWithoutUserInput = {
    where: ReviewQueueWhereUniqueInput
    create: XOR<ReviewQueueCreateWithoutUserInput, ReviewQueueUncheckedCreateWithoutUserInput>
  }

  export type ReviewQueueCreateManyUserInputEnvelope = {
    data: ReviewQueueCreateManyUserInput | ReviewQueueCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PlaylistUpsertWithWhereUniqueWithoutUserInput = {
    where: PlaylistWhereUniqueInput
    update: XOR<PlaylistUpdateWithoutUserInput, PlaylistUncheckedUpdateWithoutUserInput>
    create: XOR<PlaylistCreateWithoutUserInput, PlaylistUncheckedCreateWithoutUserInput>
  }

  export type PlaylistUpdateWithWhereUniqueWithoutUserInput = {
    where: PlaylistWhereUniqueInput
    data: XOR<PlaylistUpdateWithoutUserInput, PlaylistUncheckedUpdateWithoutUserInput>
  }

  export type PlaylistUpdateManyWithWhereWithoutUserInput = {
    where: PlaylistScalarWhereInput
    data: XOR<PlaylistUpdateManyMutationInput, PlaylistUncheckedUpdateManyWithoutUserInput>
  }

  export type PlaylistScalarWhereInput = {
    AND?: PlaylistScalarWhereInput | PlaylistScalarWhereInput[]
    OR?: PlaylistScalarWhereInput[]
    NOT?: PlaylistScalarWhereInput | PlaylistScalarWhereInput[]
    id?: StringFilter<"Playlist"> | string
    url?: StringFilter<"Playlist"> | string
    title?: StringFilter<"Playlist"> | string
    tags?: JsonFilter<"Playlist">
    userId?: StringFilter<"Playlist"> | string
    createdAt?: DateTimeFilter<"Playlist"> | Date | string
  }

  export type NoteUpsertWithWhereUniqueWithoutUserInput = {
    where: NoteWhereUniqueInput
    update: XOR<NoteUpdateWithoutUserInput, NoteUncheckedUpdateWithoutUserInput>
    create: XOR<NoteCreateWithoutUserInput, NoteUncheckedCreateWithoutUserInput>
  }

  export type NoteUpdateWithWhereUniqueWithoutUserInput = {
    where: NoteWhereUniqueInput
    data: XOR<NoteUpdateWithoutUserInput, NoteUncheckedUpdateWithoutUserInput>
  }

  export type NoteUpdateManyWithWhereWithoutUserInput = {
    where: NoteScalarWhereInput
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyWithoutUserInput>
  }

  export type NoteScalarWhereInput = {
    AND?: NoteScalarWhereInput | NoteScalarWhereInput[]
    OR?: NoteScalarWhereInput[]
    NOT?: NoteScalarWhereInput | NoteScalarWhereInput[]
    id?: StringFilter<"Note"> | string
    videoId?: StringFilter<"Note"> | string
    userId?: StringFilter<"Note"> | string
    content?: StringFilter<"Note"> | string
    timestamp?: FloatFilter<"Note"> | number
    createdAt?: DateTimeFilter<"Note"> | Date | string
  }

  export type LearningProgressUpsertWithWhereUniqueWithoutUserInput = {
    where: LearningProgressWhereUniqueInput
    update: XOR<LearningProgressUpdateWithoutUserInput, LearningProgressUncheckedUpdateWithoutUserInput>
    create: XOR<LearningProgressCreateWithoutUserInput, LearningProgressUncheckedCreateWithoutUserInput>
  }

  export type LearningProgressUpdateWithWhereUniqueWithoutUserInput = {
    where: LearningProgressWhereUniqueInput
    data: XOR<LearningProgressUpdateWithoutUserInput, LearningProgressUncheckedUpdateWithoutUserInput>
  }

  export type LearningProgressUpdateManyWithWhereWithoutUserInput = {
    where: LearningProgressScalarWhereInput
    data: XOR<LearningProgressUpdateManyMutationInput, LearningProgressUncheckedUpdateManyWithoutUserInput>
  }

  export type LearningProgressScalarWhereInput = {
    AND?: LearningProgressScalarWhereInput | LearningProgressScalarWhereInput[]
    OR?: LearningProgressScalarWhereInput[]
    NOT?: LearningProgressScalarWhereInput | LearningProgressScalarWhereInput[]
    id?: StringFilter<"LearningProgress"> | string
    userId?: StringFilter<"LearningProgress"> | string
    videoId?: StringFilter<"LearningProgress"> | string
    completed?: BoolFilter<"LearningProgress"> | boolean
    quizScores?: JsonFilter<"LearningProgress">
    createdAt?: DateTimeFilter<"LearningProgress"> | Date | string
    updatedAt?: DateTimeFilter<"LearningProgress"> | Date | string
  }

  export type ReviewQueueUpsertWithWhereUniqueWithoutUserInput = {
    where: ReviewQueueWhereUniqueInput
    update: XOR<ReviewQueueUpdateWithoutUserInput, ReviewQueueUncheckedUpdateWithoutUserInput>
    create: XOR<ReviewQueueCreateWithoutUserInput, ReviewQueueUncheckedCreateWithoutUserInput>
  }

  export type ReviewQueueUpdateWithWhereUniqueWithoutUserInput = {
    where: ReviewQueueWhereUniqueInput
    data: XOR<ReviewQueueUpdateWithoutUserInput, ReviewQueueUncheckedUpdateWithoutUserInput>
  }

  export type ReviewQueueUpdateManyWithWhereWithoutUserInput = {
    where: ReviewQueueScalarWhereInput
    data: XOR<ReviewQueueUpdateManyMutationInput, ReviewQueueUncheckedUpdateManyWithoutUserInput>
  }

  export type ReviewQueueScalarWhereInput = {
    AND?: ReviewQueueScalarWhereInput | ReviewQueueScalarWhereInput[]
    OR?: ReviewQueueScalarWhereInput[]
    NOT?: ReviewQueueScalarWhereInput | ReviewQueueScalarWhereInput[]
    id?: StringFilter<"ReviewQueue"> | string
    userId?: StringFilter<"ReviewQueue"> | string
    videoId?: StringFilter<"ReviewQueue"> | string
    dueDate?: DateTimeFilter<"ReviewQueue"> | Date | string
    history?: JsonFilter<"ReviewQueue">
    createdAt?: DateTimeFilter<"ReviewQueue"> | Date | string
    updatedAt?: DateTimeFilter<"ReviewQueue"> | Date | string
  }

  export type VideoCreateWithoutPlaylistInput = {
    id?: string
    title: string
    youtubeId: string
    transcript?: string | null
    summary?: string | null
    createdAt?: Date | string
    quizCards?: QuizCardCreateNestedManyWithoutVideoInput
    notes?: NoteCreateNestedManyWithoutVideoInput
    LearningProgress?: LearningProgressCreateNestedManyWithoutVideoInput
    ReviewQueue?: ReviewQueueCreateNestedManyWithoutVideoInput
  }

  export type VideoUncheckedCreateWithoutPlaylistInput = {
    id?: string
    title: string
    youtubeId: string
    transcript?: string | null
    summary?: string | null
    createdAt?: Date | string
    quizCards?: QuizCardUncheckedCreateNestedManyWithoutVideoInput
    notes?: NoteUncheckedCreateNestedManyWithoutVideoInput
    LearningProgress?: LearningProgressUncheckedCreateNestedManyWithoutVideoInput
    ReviewQueue?: ReviewQueueUncheckedCreateNestedManyWithoutVideoInput
  }

  export type VideoCreateOrConnectWithoutPlaylistInput = {
    where: VideoWhereUniqueInput
    create: XOR<VideoCreateWithoutPlaylistInput, VideoUncheckedCreateWithoutPlaylistInput>
  }

  export type VideoCreateManyPlaylistInputEnvelope = {
    data: VideoCreateManyPlaylistInput | VideoCreateManyPlaylistInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutPlaylistsInput = {
    id?: string
    email: string
    preferences?: NullableJsonNullValueInput | InputJsonValue
    xp?: number
    streak?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    notes?: NoteCreateNestedManyWithoutUserInput
    progress?: LearningProgressCreateNestedManyWithoutUserInput
    reviews?: ReviewQueueCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPlaylistsInput = {
    id?: string
    email: string
    preferences?: NullableJsonNullValueInput | InputJsonValue
    xp?: number
    streak?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    notes?: NoteUncheckedCreateNestedManyWithoutUserInput
    progress?: LearningProgressUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewQueueUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPlaylistsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPlaylistsInput, UserUncheckedCreateWithoutPlaylistsInput>
  }

  export type VideoUpsertWithWhereUniqueWithoutPlaylistInput = {
    where: VideoWhereUniqueInput
    update: XOR<VideoUpdateWithoutPlaylistInput, VideoUncheckedUpdateWithoutPlaylistInput>
    create: XOR<VideoCreateWithoutPlaylistInput, VideoUncheckedCreateWithoutPlaylistInput>
  }

  export type VideoUpdateWithWhereUniqueWithoutPlaylistInput = {
    where: VideoWhereUniqueInput
    data: XOR<VideoUpdateWithoutPlaylistInput, VideoUncheckedUpdateWithoutPlaylistInput>
  }

  export type VideoUpdateManyWithWhereWithoutPlaylistInput = {
    where: VideoScalarWhereInput
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyWithoutPlaylistInput>
  }

  export type VideoScalarWhereInput = {
    AND?: VideoScalarWhereInput | VideoScalarWhereInput[]
    OR?: VideoScalarWhereInput[]
    NOT?: VideoScalarWhereInput | VideoScalarWhereInput[]
    id?: StringFilter<"Video"> | string
    title?: StringFilter<"Video"> | string
    youtubeId?: StringFilter<"Video"> | string
    transcript?: StringNullableFilter<"Video"> | string | null
    summary?: StringNullableFilter<"Video"> | string | null
    playlistId?: StringNullableFilter<"Video"> | string | null
    createdAt?: DateTimeFilter<"Video"> | Date | string
  }

  export type UserUpsertWithoutPlaylistsInput = {
    update: XOR<UserUpdateWithoutPlaylistsInput, UserUncheckedUpdateWithoutPlaylistsInput>
    create: XOR<UserCreateWithoutPlaylistsInput, UserUncheckedCreateWithoutPlaylistsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPlaylistsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPlaylistsInput, UserUncheckedUpdateWithoutPlaylistsInput>
  }

  export type UserUpdateWithoutPlaylistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    preferences?: NullableJsonNullValueInput | InputJsonValue
    xp?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NoteUpdateManyWithoutUserNestedInput
    progress?: LearningProgressUpdateManyWithoutUserNestedInput
    reviews?: ReviewQueueUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPlaylistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    preferences?: NullableJsonNullValueInput | InputJsonValue
    xp?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NoteUncheckedUpdateManyWithoutUserNestedInput
    progress?: LearningProgressUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewQueueUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PlaylistCreateWithoutVideosInput = {
    id?: string
    url: string
    title: string
    tags?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPlaylistsInput
  }

  export type PlaylistUncheckedCreateWithoutVideosInput = {
    id?: string
    url: string
    title: string
    tags?: JsonNullValueInput | InputJsonValue
    userId: string
    createdAt?: Date | string
  }

  export type PlaylistCreateOrConnectWithoutVideosInput = {
    where: PlaylistWhereUniqueInput
    create: XOR<PlaylistCreateWithoutVideosInput, PlaylistUncheckedCreateWithoutVideosInput>
  }

  export type QuizCardCreateWithoutVideoInput = {
    id?: string
    userId: string
    question: string
    answer: string
    type: $Enums.QuizType
    difficulty?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewSchedules?: ReviewScheduleCreateNestedManyWithoutQuizCardInput
  }

  export type QuizCardUncheckedCreateWithoutVideoInput = {
    id?: string
    userId: string
    question: string
    answer: string
    type: $Enums.QuizType
    difficulty?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewSchedules?: ReviewScheduleUncheckedCreateNestedManyWithoutQuizCardInput
  }

  export type QuizCardCreateOrConnectWithoutVideoInput = {
    where: QuizCardWhereUniqueInput
    create: XOR<QuizCardCreateWithoutVideoInput, QuizCardUncheckedCreateWithoutVideoInput>
  }

  export type QuizCardCreateManyVideoInputEnvelope = {
    data: QuizCardCreateManyVideoInput | QuizCardCreateManyVideoInput[]
    skipDuplicates?: boolean
  }

  export type NoteCreateWithoutVideoInput = {
    id?: string
    content: string
    timestamp?: number
    createdAt?: Date | string
    User: UserCreateNestedOneWithoutNotesInput
  }

  export type NoteUncheckedCreateWithoutVideoInput = {
    id?: string
    userId: string
    content: string
    timestamp?: number
    createdAt?: Date | string
  }

  export type NoteCreateOrConnectWithoutVideoInput = {
    where: NoteWhereUniqueInput
    create: XOR<NoteCreateWithoutVideoInput, NoteUncheckedCreateWithoutVideoInput>
  }

  export type NoteCreateManyVideoInputEnvelope = {
    data: NoteCreateManyVideoInput | NoteCreateManyVideoInput[]
    skipDuplicates?: boolean
  }

  export type LearningProgressCreateWithoutVideoInput = {
    id?: string
    completed?: boolean
    quizScores?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProgressInput
  }

  export type LearningProgressUncheckedCreateWithoutVideoInput = {
    id?: string
    userId: string
    completed?: boolean
    quizScores?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LearningProgressCreateOrConnectWithoutVideoInput = {
    where: LearningProgressWhereUniqueInput
    create: XOR<LearningProgressCreateWithoutVideoInput, LearningProgressUncheckedCreateWithoutVideoInput>
  }

  export type LearningProgressCreateManyVideoInputEnvelope = {
    data: LearningProgressCreateManyVideoInput | LearningProgressCreateManyVideoInput[]
    skipDuplicates?: boolean
  }

  export type ReviewQueueCreateWithoutVideoInput = {
    id?: string
    dueDate: Date | string
    history?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutReviewsInput
  }

  export type ReviewQueueUncheckedCreateWithoutVideoInput = {
    id?: string
    userId: string
    dueDate: Date | string
    history?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewQueueCreateOrConnectWithoutVideoInput = {
    where: ReviewQueueWhereUniqueInput
    create: XOR<ReviewQueueCreateWithoutVideoInput, ReviewQueueUncheckedCreateWithoutVideoInput>
  }

  export type ReviewQueueCreateManyVideoInputEnvelope = {
    data: ReviewQueueCreateManyVideoInput | ReviewQueueCreateManyVideoInput[]
    skipDuplicates?: boolean
  }

  export type PlaylistUpsertWithoutVideosInput = {
    update: XOR<PlaylistUpdateWithoutVideosInput, PlaylistUncheckedUpdateWithoutVideosInput>
    create: XOR<PlaylistCreateWithoutVideosInput, PlaylistUncheckedCreateWithoutVideosInput>
    where?: PlaylistWhereInput
  }

  export type PlaylistUpdateToOneWithWhereWithoutVideosInput = {
    where?: PlaylistWhereInput
    data: XOR<PlaylistUpdateWithoutVideosInput, PlaylistUncheckedUpdateWithoutVideosInput>
  }

  export type PlaylistUpdateWithoutVideosInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    tags?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPlaylistsNestedInput
  }

  export type PlaylistUncheckedUpdateWithoutVideosInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    tags?: JsonNullValueInput | InputJsonValue
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizCardUpsertWithWhereUniqueWithoutVideoInput = {
    where: QuizCardWhereUniqueInput
    update: XOR<QuizCardUpdateWithoutVideoInput, QuizCardUncheckedUpdateWithoutVideoInput>
    create: XOR<QuizCardCreateWithoutVideoInput, QuizCardUncheckedCreateWithoutVideoInput>
  }

  export type QuizCardUpdateWithWhereUniqueWithoutVideoInput = {
    where: QuizCardWhereUniqueInput
    data: XOR<QuizCardUpdateWithoutVideoInput, QuizCardUncheckedUpdateWithoutVideoInput>
  }

  export type QuizCardUpdateManyWithWhereWithoutVideoInput = {
    where: QuizCardScalarWhereInput
    data: XOR<QuizCardUpdateManyMutationInput, QuizCardUncheckedUpdateManyWithoutVideoInput>
  }

  export type QuizCardScalarWhereInput = {
    AND?: QuizCardScalarWhereInput | QuizCardScalarWhereInput[]
    OR?: QuizCardScalarWhereInput[]
    NOT?: QuizCardScalarWhereInput | QuizCardScalarWhereInput[]
    id?: StringFilter<"QuizCard"> | string
    videoId?: StringFilter<"QuizCard"> | string
    userId?: StringFilter<"QuizCard"> | string
    question?: StringFilter<"QuizCard"> | string
    answer?: StringFilter<"QuizCard"> | string
    type?: EnumQuizTypeFilter<"QuizCard"> | $Enums.QuizType
    difficulty?: IntFilter<"QuizCard"> | number
    createdAt?: DateTimeFilter<"QuizCard"> | Date | string
    updatedAt?: DateTimeFilter<"QuizCard"> | Date | string
  }

  export type NoteUpsertWithWhereUniqueWithoutVideoInput = {
    where: NoteWhereUniqueInput
    update: XOR<NoteUpdateWithoutVideoInput, NoteUncheckedUpdateWithoutVideoInput>
    create: XOR<NoteCreateWithoutVideoInput, NoteUncheckedCreateWithoutVideoInput>
  }

  export type NoteUpdateWithWhereUniqueWithoutVideoInput = {
    where: NoteWhereUniqueInput
    data: XOR<NoteUpdateWithoutVideoInput, NoteUncheckedUpdateWithoutVideoInput>
  }

  export type NoteUpdateManyWithWhereWithoutVideoInput = {
    where: NoteScalarWhereInput
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyWithoutVideoInput>
  }

  export type LearningProgressUpsertWithWhereUniqueWithoutVideoInput = {
    where: LearningProgressWhereUniqueInput
    update: XOR<LearningProgressUpdateWithoutVideoInput, LearningProgressUncheckedUpdateWithoutVideoInput>
    create: XOR<LearningProgressCreateWithoutVideoInput, LearningProgressUncheckedCreateWithoutVideoInput>
  }

  export type LearningProgressUpdateWithWhereUniqueWithoutVideoInput = {
    where: LearningProgressWhereUniqueInput
    data: XOR<LearningProgressUpdateWithoutVideoInput, LearningProgressUncheckedUpdateWithoutVideoInput>
  }

  export type LearningProgressUpdateManyWithWhereWithoutVideoInput = {
    where: LearningProgressScalarWhereInput
    data: XOR<LearningProgressUpdateManyMutationInput, LearningProgressUncheckedUpdateManyWithoutVideoInput>
  }

  export type ReviewQueueUpsertWithWhereUniqueWithoutVideoInput = {
    where: ReviewQueueWhereUniqueInput
    update: XOR<ReviewQueueUpdateWithoutVideoInput, ReviewQueueUncheckedUpdateWithoutVideoInput>
    create: XOR<ReviewQueueCreateWithoutVideoInput, ReviewQueueUncheckedCreateWithoutVideoInput>
  }

  export type ReviewQueueUpdateWithWhereUniqueWithoutVideoInput = {
    where: ReviewQueueWhereUniqueInput
    data: XOR<ReviewQueueUpdateWithoutVideoInput, ReviewQueueUncheckedUpdateWithoutVideoInput>
  }

  export type ReviewQueueUpdateManyWithWhereWithoutVideoInput = {
    where: ReviewQueueScalarWhereInput
    data: XOR<ReviewQueueUpdateManyMutationInput, ReviewQueueUncheckedUpdateManyWithoutVideoInput>
  }

  export type UserCreateWithoutProgressInput = {
    id?: string
    email: string
    preferences?: NullableJsonNullValueInput | InputJsonValue
    xp?: number
    streak?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    playlists?: PlaylistCreateNestedManyWithoutUserInput
    notes?: NoteCreateNestedManyWithoutUserInput
    reviews?: ReviewQueueCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProgressInput = {
    id?: string
    email: string
    preferences?: NullableJsonNullValueInput | InputJsonValue
    xp?: number
    streak?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    playlists?: PlaylistUncheckedCreateNestedManyWithoutUserInput
    notes?: NoteUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewQueueUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProgressInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProgressInput, UserUncheckedCreateWithoutProgressInput>
  }

  export type VideoCreateWithoutLearningProgressInput = {
    id?: string
    title: string
    youtubeId: string
    transcript?: string | null
    summary?: string | null
    createdAt?: Date | string
    playlist?: PlaylistCreateNestedOneWithoutVideosInput
    quizCards?: QuizCardCreateNestedManyWithoutVideoInput
    notes?: NoteCreateNestedManyWithoutVideoInput
    ReviewQueue?: ReviewQueueCreateNestedManyWithoutVideoInput
  }

  export type VideoUncheckedCreateWithoutLearningProgressInput = {
    id?: string
    title: string
    youtubeId: string
    transcript?: string | null
    summary?: string | null
    playlistId?: string | null
    createdAt?: Date | string
    quizCards?: QuizCardUncheckedCreateNestedManyWithoutVideoInput
    notes?: NoteUncheckedCreateNestedManyWithoutVideoInput
    ReviewQueue?: ReviewQueueUncheckedCreateNestedManyWithoutVideoInput
  }

  export type VideoCreateOrConnectWithoutLearningProgressInput = {
    where: VideoWhereUniqueInput
    create: XOR<VideoCreateWithoutLearningProgressInput, VideoUncheckedCreateWithoutLearningProgressInput>
  }

  export type UserUpsertWithoutProgressInput = {
    update: XOR<UserUpdateWithoutProgressInput, UserUncheckedUpdateWithoutProgressInput>
    create: XOR<UserCreateWithoutProgressInput, UserUncheckedCreateWithoutProgressInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProgressInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProgressInput, UserUncheckedUpdateWithoutProgressInput>
  }

  export type UserUpdateWithoutProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    preferences?: NullableJsonNullValueInput | InputJsonValue
    xp?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlists?: PlaylistUpdateManyWithoutUserNestedInput
    notes?: NoteUpdateManyWithoutUserNestedInput
    reviews?: ReviewQueueUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    preferences?: NullableJsonNullValueInput | InputJsonValue
    xp?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlists?: PlaylistUncheckedUpdateManyWithoutUserNestedInput
    notes?: NoteUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewQueueUncheckedUpdateManyWithoutUserNestedInput
  }

  export type VideoUpsertWithoutLearningProgressInput = {
    update: XOR<VideoUpdateWithoutLearningProgressInput, VideoUncheckedUpdateWithoutLearningProgressInput>
    create: XOR<VideoCreateWithoutLearningProgressInput, VideoUncheckedCreateWithoutLearningProgressInput>
    where?: VideoWhereInput
  }

  export type VideoUpdateToOneWithWhereWithoutLearningProgressInput = {
    where?: VideoWhereInput
    data: XOR<VideoUpdateWithoutLearningProgressInput, VideoUncheckedUpdateWithoutLearningProgressInput>
  }

  export type VideoUpdateWithoutLearningProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    youtubeId?: StringFieldUpdateOperationsInput | string
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlist?: PlaylistUpdateOneWithoutVideosNestedInput
    quizCards?: QuizCardUpdateManyWithoutVideoNestedInput
    notes?: NoteUpdateManyWithoutVideoNestedInput
    ReviewQueue?: ReviewQueueUpdateManyWithoutVideoNestedInput
  }

  export type VideoUncheckedUpdateWithoutLearningProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    youtubeId?: StringFieldUpdateOperationsInput | string
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    playlistId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quizCards?: QuizCardUncheckedUpdateManyWithoutVideoNestedInput
    notes?: NoteUncheckedUpdateManyWithoutVideoNestedInput
    ReviewQueue?: ReviewQueueUncheckedUpdateManyWithoutVideoNestedInput
  }

  export type UserCreateWithoutReviewsInput = {
    id?: string
    email: string
    preferences?: NullableJsonNullValueInput | InputJsonValue
    xp?: number
    streak?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    playlists?: PlaylistCreateNestedManyWithoutUserInput
    notes?: NoteCreateNestedManyWithoutUserInput
    progress?: LearningProgressCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReviewsInput = {
    id?: string
    email: string
    preferences?: NullableJsonNullValueInput | InputJsonValue
    xp?: number
    streak?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    playlists?: PlaylistUncheckedCreateNestedManyWithoutUserInput
    notes?: NoteUncheckedCreateNestedManyWithoutUserInput
    progress?: LearningProgressUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
  }

  export type VideoCreateWithoutReviewQueueInput = {
    id?: string
    title: string
    youtubeId: string
    transcript?: string | null
    summary?: string | null
    createdAt?: Date | string
    playlist?: PlaylistCreateNestedOneWithoutVideosInput
    quizCards?: QuizCardCreateNestedManyWithoutVideoInput
    notes?: NoteCreateNestedManyWithoutVideoInput
    LearningProgress?: LearningProgressCreateNestedManyWithoutVideoInput
  }

  export type VideoUncheckedCreateWithoutReviewQueueInput = {
    id?: string
    title: string
    youtubeId: string
    transcript?: string | null
    summary?: string | null
    playlistId?: string | null
    createdAt?: Date | string
    quizCards?: QuizCardUncheckedCreateNestedManyWithoutVideoInput
    notes?: NoteUncheckedCreateNestedManyWithoutVideoInput
    LearningProgress?: LearningProgressUncheckedCreateNestedManyWithoutVideoInput
  }

  export type VideoCreateOrConnectWithoutReviewQueueInput = {
    where: VideoWhereUniqueInput
    create: XOR<VideoCreateWithoutReviewQueueInput, VideoUncheckedCreateWithoutReviewQueueInput>
  }

  export type UserUpsertWithoutReviewsInput = {
    update: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    preferences?: NullableJsonNullValueInput | InputJsonValue
    xp?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlists?: PlaylistUpdateManyWithoutUserNestedInput
    notes?: NoteUpdateManyWithoutUserNestedInput
    progress?: LearningProgressUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    preferences?: NullableJsonNullValueInput | InputJsonValue
    xp?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlists?: PlaylistUncheckedUpdateManyWithoutUserNestedInput
    notes?: NoteUncheckedUpdateManyWithoutUserNestedInput
    progress?: LearningProgressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type VideoUpsertWithoutReviewQueueInput = {
    update: XOR<VideoUpdateWithoutReviewQueueInput, VideoUncheckedUpdateWithoutReviewQueueInput>
    create: XOR<VideoCreateWithoutReviewQueueInput, VideoUncheckedCreateWithoutReviewQueueInput>
    where?: VideoWhereInput
  }

  export type VideoUpdateToOneWithWhereWithoutReviewQueueInput = {
    where?: VideoWhereInput
    data: XOR<VideoUpdateWithoutReviewQueueInput, VideoUncheckedUpdateWithoutReviewQueueInput>
  }

  export type VideoUpdateWithoutReviewQueueInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    youtubeId?: StringFieldUpdateOperationsInput | string
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlist?: PlaylistUpdateOneWithoutVideosNestedInput
    quizCards?: QuizCardUpdateManyWithoutVideoNestedInput
    notes?: NoteUpdateManyWithoutVideoNestedInput
    LearningProgress?: LearningProgressUpdateManyWithoutVideoNestedInput
  }

  export type VideoUncheckedUpdateWithoutReviewQueueInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    youtubeId?: StringFieldUpdateOperationsInput | string
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    playlistId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quizCards?: QuizCardUncheckedUpdateManyWithoutVideoNestedInput
    notes?: NoteUncheckedUpdateManyWithoutVideoNestedInput
    LearningProgress?: LearningProgressUncheckedUpdateManyWithoutVideoNestedInput
  }

  export type ReviewScheduleCreateManyQuizCardInput = {
    id?: string
    userId: string
    nextReview: Date | string
    easeFactor?: number
    interval?: number
    repetitions?: number
    lastReview?: Date | string
    confidence?: number
  }

  export type ReviewScheduleUpdateWithoutQuizCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    nextReview?: DateTimeFieldUpdateOperationsInput | Date | string
    easeFactor?: FloatFieldUpdateOperationsInput | number
    interval?: IntFieldUpdateOperationsInput | number
    repetitions?: IntFieldUpdateOperationsInput | number
    lastReview?: DateTimeFieldUpdateOperationsInput | Date | string
    confidence?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewScheduleUncheckedUpdateWithoutQuizCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    nextReview?: DateTimeFieldUpdateOperationsInput | Date | string
    easeFactor?: FloatFieldUpdateOperationsInput | number
    interval?: IntFieldUpdateOperationsInput | number
    repetitions?: IntFieldUpdateOperationsInput | number
    lastReview?: DateTimeFieldUpdateOperationsInput | Date | string
    confidence?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewScheduleUncheckedUpdateManyWithoutQuizCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    nextReview?: DateTimeFieldUpdateOperationsInput | Date | string
    easeFactor?: FloatFieldUpdateOperationsInput | number
    interval?: IntFieldUpdateOperationsInput | number
    repetitions?: IntFieldUpdateOperationsInput | number
    lastReview?: DateTimeFieldUpdateOperationsInput | Date | string
    confidence?: IntFieldUpdateOperationsInput | number
  }

  export type InvoiceCreateManyCustomerInput = {
    id?: string
    amount: number
    status: string
    dueDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistCreateManyUserInput = {
    id?: string
    url: string
    title: string
    tags?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type NoteCreateManyUserInput = {
    id?: string
    videoId: string
    content: string
    timestamp?: number
    createdAt?: Date | string
  }

  export type LearningProgressCreateManyUserInput = {
    id?: string
    videoId: string
    completed?: boolean
    quizScores?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewQueueCreateManyUserInput = {
    id?: string
    videoId: string
    dueDate: Date | string
    history?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlaylistUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    tags?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videos?: VideoUpdateManyWithoutPlaylistNestedInput
  }

  export type PlaylistUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    tags?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videos?: VideoUncheckedUpdateManyWithoutPlaylistNestedInput
  }

  export type PlaylistUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    tags?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Video?: VideoUpdateOneRequiredWithoutNotesNestedInput
  }

  export type NoteUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningProgressUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    quizScores?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    video?: VideoUpdateOneRequiredWithoutLearningProgressNestedInput
  }

  export type LearningProgressUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    quizScores?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningProgressUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    quizScores?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewQueueUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    history?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    video?: VideoUpdateOneRequiredWithoutReviewQueueNestedInput
  }

  export type ReviewQueueUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    history?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewQueueUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    history?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoCreateManyPlaylistInput = {
    id?: string
    title: string
    youtubeId: string
    transcript?: string | null
    summary?: string | null
    createdAt?: Date | string
  }

  export type VideoUpdateWithoutPlaylistInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    youtubeId?: StringFieldUpdateOperationsInput | string
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quizCards?: QuizCardUpdateManyWithoutVideoNestedInput
    notes?: NoteUpdateManyWithoutVideoNestedInput
    LearningProgress?: LearningProgressUpdateManyWithoutVideoNestedInput
    ReviewQueue?: ReviewQueueUpdateManyWithoutVideoNestedInput
  }

  export type VideoUncheckedUpdateWithoutPlaylistInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    youtubeId?: StringFieldUpdateOperationsInput | string
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quizCards?: QuizCardUncheckedUpdateManyWithoutVideoNestedInput
    notes?: NoteUncheckedUpdateManyWithoutVideoNestedInput
    LearningProgress?: LearningProgressUncheckedUpdateManyWithoutVideoNestedInput
    ReviewQueue?: ReviewQueueUncheckedUpdateManyWithoutVideoNestedInput
  }

  export type VideoUncheckedUpdateManyWithoutPlaylistInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    youtubeId?: StringFieldUpdateOperationsInput | string
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizCardCreateManyVideoInput = {
    id?: string
    userId: string
    question: string
    answer: string
    type: $Enums.QuizType
    difficulty?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NoteCreateManyVideoInput = {
    id?: string
    userId: string
    content: string
    timestamp?: number
    createdAt?: Date | string
  }

  export type LearningProgressCreateManyVideoInput = {
    id?: string
    userId: string
    completed?: boolean
    quizScores?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewQueueCreateManyVideoInput = {
    id?: string
    userId: string
    dueDate: Date | string
    history?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuizCardUpdateWithoutVideoInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    type?: EnumQuizTypeFieldUpdateOperationsInput | $Enums.QuizType
    difficulty?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewSchedules?: ReviewScheduleUpdateManyWithoutQuizCardNestedInput
  }

  export type QuizCardUncheckedUpdateWithoutVideoInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    type?: EnumQuizTypeFieldUpdateOperationsInput | $Enums.QuizType
    difficulty?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewSchedules?: ReviewScheduleUncheckedUpdateManyWithoutQuizCardNestedInput
  }

  export type QuizCardUncheckedUpdateManyWithoutVideoInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    type?: EnumQuizTypeFieldUpdateOperationsInput | $Enums.QuizType
    difficulty?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteUpdateWithoutVideoInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutNotesNestedInput
  }

  export type NoteUncheckedUpdateWithoutVideoInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteUncheckedUpdateManyWithoutVideoInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningProgressUpdateWithoutVideoInput = {
    id?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    quizScores?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProgressNestedInput
  }

  export type LearningProgressUncheckedUpdateWithoutVideoInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    quizScores?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningProgressUncheckedUpdateManyWithoutVideoInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    quizScores?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewQueueUpdateWithoutVideoInput = {
    id?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    history?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewQueueUncheckedUpdateWithoutVideoInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    history?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewQueueUncheckedUpdateManyWithoutVideoInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    history?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}