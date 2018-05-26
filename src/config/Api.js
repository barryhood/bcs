import { TOP_STORIES, STORY_BY_ID } from './constants';

const getJson = (url) => fetch(url)
  .then(response => response.json())
  .then(response => response);

const getStoryLink = (url, storyId) => url.replace(':storyId', storyId);

export const Api = async () => {
  const storyIds = getJson(TOP_STORIES);
  const storiesArray = await storyIds;
  const stories = await Promise
    .all(storiesArray.slice(0,20).map(storyId => getJson(getStoryLink(STORY_BY_ID, storyId))))
    .then((values) => {
      return values.map(v => ({ 
        title: v.title, 
        url: v.url,
        score: v.score,
        time: v.time 
      }))
    })
    return stories;
}
