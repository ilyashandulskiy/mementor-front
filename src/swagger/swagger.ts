/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface BasicResponse {
  /** @example "some string here" */
  message?: string;
}

export interface GetMentorResponse {
  /** @example "634afbd6c7cc8190a74feb35" */
  _id?: string;
  /** @example ["Your mother"," Your sister"] */
  canHelpWith?: string[];
  /** @example 21 */
  classesDone?: number;
  /** @example "Im the best from the best" */
  description?: string;
  education?: Education[];
  /** @example "mrmarkeld@gmail.com" */
  email: string;
  /** @example 2019 */
  experienceSince: number;
  /** @example "junior" */
  grade: "junior" | "middle" | "senior";
  /** @example ["ru"," en"] */
  language?: string[];
  /** @example "Test" */
  name: string;
  /** @example ["cpp"," go"," scala"] */
  programmingLanguage: string[];
  /** @example "Subject" */
  surname: string;
  tariff: Tariff[];
  /** @example ["cpp"," go","scala"] */
  technology: string[];
  /** @example true */
  validProfile?: boolean;
}

export interface PostAuthRequest {
  /** @example "mrmarkeld@gmail.com" */
  email: string;
  /**
   * @minLength 6
   * @example "123456"
   */
  password: string;
}

export interface PostAuthResponse {
  /** @example "Bearer token" */
  token?: string;
}

export interface PostBookingRequest {
  customerName: string;
  customerTelegram: string;
  mentorId: string;
  /**
   * @min 0
   * @max 2
   */
  tariffIndex: number;
}

export interface PostMentorRequest {
  /** @example "634afbd6c7cc8190a74feb35" */
  _id?: string;
  /** @example ["Your mother"," Your sister"] */
  canHelpWith?: string[];
  /** @example 21 */
  classesDone?: number;
  /** @example "Im the best from the best" */
  description?: string;
  education?: Education[];
  /** @example "mrmarkeld@gmail.com" */
  email?: string;
  /** @example 2019 */
  experienceSince: number;
  /** @example "junior" */
  grade: string;
  /** @example ["ru"," en"] */
  language?: string[];
  /** @example "Test" */
  name: string;
  /** @example ["cpp"," go"," scala"] */
  programmingLanguage: string[];
  /** @example "Subject" */
  surname: string;
  tariff: Tariff[];
  /** @example ["cpp"," go","scala"] */
  technology: string[];
  /** @example true */
  validProfile?: boolean;
}

export interface PostMentorResponse {
  mentors: Mentor[];
  /** @example 1 */
  pages: number;
}

export interface PutMentorRequest {
  /** @example "634afbd6c7cc8190a74feb35" */
  _id?: string;
  /** @example ["Your mother"," Your sister"] */
  canHelpWith?: string[];
  /** @example 21 */
  classesDone?: number;
  /** @example "Im the best from the best" */
  description?: string;
  education?: Education[];
  /** @example "mrmarkeld@gmail.com" */
  email?: string;
  /** @example 2019 */
  experienceSince: number;
  /** @example "junior" */
  grade: string;
  /** @example ["ru"," en"] */
  language?: string[];
  /** @example "Test" */
  name: string;
  /** @example ["cpp"," go"," scala"] */
  programmingLanguage: string[];
  /** @example "Subject" */
  surname: string;
  tariff: Tariff[];
  /** @example ["cpp"," go","scala"] */
  technology: string[];
  /** @example true */
  validProfile?: boolean;
}

export interface Education {
  /** @example "computer science" */
  department: string;
  /** @example "MGU" */
  place: string;
}

export interface Mentor {
  /** @example "634afbd6c7cc8190a74feb35" */
  _id?: string;
  /** @example "junior" */
  grade: string;
  /** @example ["russian"," english"] */
  language?: string[];
  /** @example "Test" */
  name: string;
  /** @example ["python","js","trash"] */
  programmingLanguage: string[];
  /** @example "Subject" */
  surname: string;
  tariff: Tariff[];
}

export interface Tariff {
  /**
   * @maxLength 255
   * @example "Free for you my little friend"
   */
  description: string;
  /** @example "big boby" */
  name: string;
  /** @example 2000 */
  price: number;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, 'body' | 'bodyUsed'>;

export interface FullRequestParams extends Omit<RequestInit, 'body'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, 'baseUrl' | 'cancelToken' | 'signal'>;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = '';
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: 'same-origin',
    headers: {},
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === 'number' ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join('&');
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => 'undefined' !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join('&');
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : '';
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === 'object' || typeof input === 'string') ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === 'object' && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ''}${path}${queryString ? `?${queryString}` : ''}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { 'Content-Type': type } : {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal,
      body: typeof body === 'undefined' || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title Mementor back
 * @version 1.0
 * @contact @withoutasecondthought <mrmarkeld@gmail.com>
 *
 * Best backend ever.
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  book = {
    /**
     * @description book mentor of your dream
     *
     * @tags booking
     * @name BookCreate
     * @summary New Booking
     * @request POST:/book
     */
    bookCreate: (params: PostBookingRequest, requestParams: RequestParams = {}) =>
      this.request<BasicResponse, BasicResponse>({
        path: `/book`,
        method: 'POST',
        body: params,
        type: ContentType.Json,
        format: 'json',
        ...requestParams,
      }),
  };
  mentor = {
    /**
     * @description get your page
     *
     * @tags mentor
     * @name MentorList
     * @summary Show your Page
     * @request GET:/mentor
     */
    mentorList: (params: RequestParams = {}) =>
      this.request<GetMentorResponse, BasicResponse>({
        path: `/mentor`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description Send full mentor info to update your profile
     *
     * @tags mentor
     * @name MentorUpdate
     * @summary change mentor
     * @request PUT:/mentor
     */
    mentorUpdate: (user: PutMentorRequest, params: RequestParams = {}) =>
      this.request<BasicResponse, BasicResponse>({
        path: `/mentor`,
        method: 'PUT',
        body: user,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description remove mentor from bd
     *
     * @tags mentor
     * @name MentorDelete
     * @summary Delete mentor
     * @request DELETE:/mentor
     */
    mentorDelete: (params: RequestParams = {}) =>
      this.request<BasicResponse, BasicResponse>({
        path: `/mentor`,
        method: 'DELETE',
        format: 'json',
        ...params,
      }),

    /**
     * @description Give you mentor without personal fields
     *
     * @tags mentor
     * @name MentorDetail
     * @summary Show a mentor
     * @request GET:/mentor/{id}
     */
    mentorDetail: (id: string, params: RequestParams = {}) =>
      this.request<GetMentorResponse, BasicResponse>({
        path: `/mentor/${id}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description get mentors
     *
     * @tags mentor
     * @name MentorCreate
     * @summary return List of Mentors
     * @request POST:/mentor/{page}
     */
    mentorCreate: (page: number, params: PostMentorRequest, requestParams: RequestParams = {}) =>
      this.request<PostMentorResponse, BasicResponse>({
        path: `/mentor/${page}`,
        method: 'POST',
        body: params,
        type: ContentType.Json,
        format: 'json',
        ...requestParams,
      }),
  };
  signIn = {
    /**
     * @description sign in
     *
     * @tags auth
     * @name SignIn
     * @summary sign in
     * @request POST:/sign-in
     */
    signIn: (userinfo: PostAuthRequest, params: RequestParams = {}) =>
      this.request<PostAuthResponse, BasicResponse>({
        path: `/sign-in`,
        method: 'POST',
        body: userinfo,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
  signUp = {
    /**
     * @description sign up
     *
     * @tags auth
     * @name SignUp
     * @summary sign up
     * @request POST:/sign-up
     */
    signUp: (userinfo: PostAuthRequest, params: RequestParams = {}) =>
      this.request<PostAuthResponse, BasicResponse>({
        path: `/sign-up`,
        method: 'POST',
        body: userinfo,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
}
