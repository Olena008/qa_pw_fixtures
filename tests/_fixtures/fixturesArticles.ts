import { test as base } from '@playwright/test';
import { generateNewArticleData } from '../../src/common/testData/generateNewArticleData';
import { CreateArticlePage } from '../../src/ui/pages/article/CreateArticlePage';
import { ViewArticlePage } from '../../src/ui/pages/article/ViewArticlePage';
import { EditArticlePage } from '../../src/ui/pages/article/EditArticlePage';

export const test = base.extend<{
  createArticlePage: CreateArticlePage;
  viewArticlePage: ViewArticlePage;
  editArticlePage: EditArticlePage;
  articleWithoutTags: any;
  articleWithOneTag: any;
  articleWithTwoTags: any;
}>({
  createArticlePage: async ({ page }, use) => {
    const createArticlePage = new CreateArticlePage(page);

    await use(createArticlePage);
  },

  viewArticlePage: async ({ page }, use) => {
    const viewArticlePage = new ViewArticlePage(page);

    await use(viewArticlePage);
  },

  editArticlePage: async ({ page }, use) => {
    const editArticlePage = new EditArticlePage(page);

    await use(editArticlePage);
  },

  articleWithoutTags: async ({}, use) => {
    const articleWithoutTags = generateNewArticleData();

    await use(articleWithoutTags);
  },

  articleWithOneTag: async ({}, use) => {
    const articleWithOneTag = generateNewArticleData(1);

    await use(articleWithOneTag);
  },

  articleWithTwoTags: async ({}, use) => {
    const articleWithTwoTags = generateNewArticleData(2);

    await use(articleWithTwoTags);
  },
});
