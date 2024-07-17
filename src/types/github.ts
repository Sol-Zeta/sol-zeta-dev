interface GistFile {
    filename: string;
    type: string;
    language: string;
    raw_url: string;
    size: number;
    truncated: boolean;
    content: string;
  }
  
export interface Owner {
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
  
  interface HistoryUser {
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
  
  interface ChangeStatus {
    total: number;
    additions: number;
    deletions: number;
  }
  
  interface History {
    user: HistoryUser;
    version: string;
    committed_at: string;
    change_status: ChangeStatus;
    url: string;
  }
  
  export interface Gist {
    url: string;
    forks_url: string;
    commits_url: string;
    id: string;
    node_id: string;
    git_pull_url: string;
    git_push_url: string;
    html_url: string;
    files: {
      [filename: string]: GistFile;
    };
    public: boolean;
    created_at: Date;
    updated_at: Date;
    description: string;
    comments: number;
    user: null | any; 
    comments_url: string;
    owner: Owner;
    forks: any[]; 
    history: History[];
    truncated: boolean;
  }
  