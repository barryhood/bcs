import { TOP_STORIES, STORY_BY_ID, API_LINK_FETCH_ERROR } from './constants';

const getJson = (url) => fetch(url)
  .then(response => response.json())
  .then(response => response);

const getStoryLink = (url, storyId) => url.replace(':storyId', storyId);

export const Api = async () => {
  const storyIds = getJson(TOP_STORIES);
  const storiesArray = await storyIds;

  if(storiesArray.error) return storiesArray;

  const stories = await Promise
    .all(storiesArray.slice(0,20).map(storyId => getJson(getStoryLink(STORY_BY_ID, storyId))))
    .then((values) => {
      return values.reduce((items, item) => {
        return !item.error ? [...items, {
          title: item.title, 
          url: item.url,
          score: item.score,
          time: item.time 
        }] : items;
      })
    })
    return !stories.length ? { error: API_LINK_FETCH_ERROR } : stories;
}
