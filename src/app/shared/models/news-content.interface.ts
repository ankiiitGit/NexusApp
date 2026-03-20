export interface INewsContent {
    title: string
    link: string
    snippet: string
    photo_url: string
    thumbnail_url: string
    published_datetime_utc: string
    authors: string[]
    source_url: string
    source_name: string
    source_logo_url: any
    source_favicon_url: string
    source_publication_id: string
    related_topics: RelatedTopic[]
  }
  
  export interface RelatedTopic {
    topic_id: string
    topic_name: string
  }
