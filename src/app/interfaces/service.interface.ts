export interface SearchResponse {
  incomplete_results: boolean;
  items: ResponseItem[];
  total_count: number;
}

export interface ResponseItem {
  owner?: GithubUser;
  description?: string;
  name?: string;
  url?: string;
  language?: string;
  topics?: string[];
  score?: number;
}

export interface GithubUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

//The git REST Url has CORS disabled so we can call this from our servers
//API: https://developer.github.com/v3/search/
export const githubSearchBaseUrl: string =
  'https://api.github.com/search/repositories';
