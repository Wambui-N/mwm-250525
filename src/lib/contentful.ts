import * as contentful from 'contentful';
import { Document } from '@contentful/rich-text-types';

if (!process.env.CONTENTFUL_SPACE_ID) {
  throw new Error('CONTENTFUL_SPACE_ID is not defined');
}

if (!process.env.CONTENTFUL_ACCESS_TOKEN) {
  throw new Error('CONTENTFUL_ACCESS_TOKEN is not defined');
}

console.log('Contentful Space ID:', process.env.CONTENTFUL_SPACE_ID);
console.log('Contentful Access Token:', process.env.CONTENTFUL_ACCESS_TOKEN ? '***' : 'not set');

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  environment: 'master',
});

export interface BlogPost {
  contentTypeId: string;
  sys: {
    id: string;
  };
  fields: {
    title: string;
    body: Document;
    image: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    tags?: string[];
    recommendedPosts?: contentful.Entry<BlogPost & { contentTypeId: string }>[];
  };
}

let contentTypeIdCache: string | null = null;

async function getContentTypeId(): Promise<string> {
  if (contentTypeIdCache) {
    return contentTypeIdCache;
  }
  try {
    const contentTypes = await client.getContentTypes();
    const blogType = contentTypes.items.find(
      (type) =>
        type.name.toLowerCase().includes('blog') ||
        type.name.toLowerCase().includes('post') ||
        type.name.toLowerCase().includes('article')
    );

    if (blogType) {
      contentTypeIdCache = blogType.sys.id;
      return contentTypeIdCache;
    }

    // Fallback if no specific blog type found
    if (contentTypes.items.length > 0) {
        console.warn("No 'blog', 'post', or 'article' content type found. Using the first available type. Please check your Contentful setup.");
        contentTypeIdCache = contentTypes.items[0].sys.id;
        return contentTypeIdCache;
    }
    throw new Error('No content types found in Contentful space.');

  } catch (error) {
    console.error('Error fetching content types from Contentful:', error);
    throw new Error('Failed to fetch content types from Contentful. Check Contentful client setup and credentials.');
  }
}

export async function getAllPosts(): Promise<contentful.Entry<BlogPost>[]> {
  try {
    const contentTypeId = await getContentTypeId();
    const response = await client.getEntries<BlogPost>({
      content_type: contentTypeId,
      order: ['-sys.createdAt'],
      include: 2, // To include linked entries like images and recommended posts
    });
    return response.items;
  } catch (error) {
    console.error('Error fetching all posts:', error);
    return []; // Return empty array on error to prevent breaking the page
  }
}

export async function getPostsByTag(tag: string): Promise<contentful.Entry<BlogPost>[]> {
  try {
    const contentTypeId = await getContentTypeId();
    const response = await client.getEntries<BlogPost>({
      content_type: contentTypeId,
      order: ['-sys.createdAt'],
      include: 2,
      'fields.tags[in]': tag,
    } as any);
    return response.items;
  } catch (error) {
    console.error(`Error fetching posts by tag '${tag}':`, error);
    return [];
  }
}

export async function getPostById(id: string): Promise<contentful.Entry<BlogPost> | null> {
  try {
    const response = await client.getEntry<BlogPost>(id, { include: 2 });
    return response;
  } catch (error) {
    console.error(`Error fetching post by ID '${id}':`, error);
    return null;
  }
} 